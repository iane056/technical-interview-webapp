import express from "express";
import axios from "axios";
import { spawn } from "child_process";
import { StatusCodes } from "http-status-codes";
import { Problem } from "../models/problem.js";
import { authenticateToken } from "../middleware/authenticator.js";
import User from "../models/user.js";
import { updateProblemCompletionStatus } from "../dao/problemDAO.js";
import { feedbackPrompts } from "../util/prompts.js";
import mongoose from "mongoose";

const editorRouter = new express.Router();

const JOBE_URL = process.env.JOBE_URL;
const BASE_MODEL = process.env.MODEL;
const FINE_TUNE_MODEL_PATH = process.env.FINE_TUNE_MODEL_PATH;

editorRouter.put("/editor/similarity/:problemId", async (req, res) => {
  try {
    // Fetch problem from the database by its ID
    const problem = await Problem.findById(req.params.problemId);
    if (!problem) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Problem not found" });
    }

    const answer = req.body;
    const submittedAnswer = answer.answer;
    const modelAnswer = problem.modelDescription; // Get the model answer from the problem instance

    let python;

    if (BASE_MODEL === 1){
      python = spawn("python", [
        "./sbert/sbert.py",
        "--text1",
        submittedAnswer,
        "--text2",
        modelAnswer,
      ]);
    } else {
      python = spawn("python", [
        "./sbert/sbert-ft-exec.py",
        "--text1",
        submittedAnswer,
        "--text2",
        modelAnswer,
        "--model_path",
        FINE_TUNE_MODEL_PATH
      ]);
    }

    let dataPromise = new Promise((resolve, reject) => {
      python.stdout.on("data", (data) => {
        console.log(`Similarity Score: ${data}`);
        resolve(data.toString());
      });

      python.stderr.on("data", (data) => {
        console.error(`Error occurred: ${data}`);
        reject(new Error(data.toString()));
      });

      python.on("close", (code) => {
        console.log(`Python script finished with code ${code}`);
        if (code !== 0) {
          reject(new Error(`Python script exited with code ${code}`));
        }
      });
    });

    let similarityScoreRaw = await dataPromise;

    console.log(similarityScoreRaw, 57); 

    if (parseFloat(similarityScoreRaw)< 0){ 
      similarityScoreRaw = 0;
    }

    if (parseFloat(similarityScoreRaw) > 1){
      similarityScoreRaw = 1;
    }

    console.log(similarityScoreRaw, 67);

    const similarityScoreComparison = parseFloat(similarityScoreRaw).toFixed(2); 
    const similarityScore = (parseFloat(similarityScoreRaw) * 100).toFixed(2); 

    console.log(similarityScore, 72);
    console.log(similarityScoreComparison,73);

    // Find the corresponding feedback
    let feedback = feedbackPrompts.find(prompt => similarityScoreComparison >= prompt.min && similarityScoreComparison <= prompt.max).feedback;

    return res.status(StatusCodes.OK).json({ similarityScore, feedback, modelAnswer });
  } catch (error) {
    console.log(error.message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
  }
});


/**
 * Save solution
 */
editorRouter.post(
  "/editor/:problemId/saveSolution",
  authenticateToken,
  async (req, res, next) => {
    try {
      const sourcecode = req.body.code;
      const selectedLanguage = req.query.language_id;
      const problemId = req.params.problemId;

      if (!sourcecode) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: "Source code is required" });
      }

      if (!selectedLanguage) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: "Language ID is required" });
      }

      if (!mongoose.Types.ObjectId.isValid(problemId)) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: "Problem ID is not valid" });
      }

      const problem = await Problem.findById(problemId);
      if (!problem) {
        return res
          .status(StatusCodes.NOT_FOUND)
          .json({ message: "Problem not found" });
      }

      const user = await User.findOne({ username: req.user.username });
      if (!user) {
        return res
          .status(StatusCodes.NOT_FOUND)
          .json({ message: "User not found" });
      }

      const userSolution = user.currentSolutions.find(
        (solution) =>
          solution.problem.toString() === problemId &&
          solution.language === selectedLanguage
      );

      if (userSolution) {
        userSolution.solution = sourcecode;
      } else {
        user.currentSolutions.push({
          problem: problemId,
          language: selectedLanguage,
          solution: sourcecode,
        });
      }

      await user.save();

      return res
        .status(StatusCodes.OK)
        .send({ message: "Solution saved successfully" });
    } catch (error) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send({ message: error.message });
    }
  }
);

/**
 * Clear solution
 */
editorRouter.delete(
  "/editor/:problemId/clearSolution",
  authenticateToken,
  async (req, res, next) => {
    try {
      const selectedLanguage = req.query.language_id;
      const problemId = req.params.problemId;

      if (!mongoose.Types.ObjectId.isValid(problemId)) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: "Problem ID is not valid" });
      }

      const user = await User.findOne({ username: req.user.username });
      if (!user) {
        return res
          .status(StatusCodes.NOT_FOUND)
          .json({ message: "User not found" });
      }

      // Get the index of the solution to delete
      const solutionIndex = user.currentSolutions.findIndex(
        (solution) =>
          solution.problem.toString() === problemId &&
          solution.language === selectedLanguage
      );

      if (solutionIndex !== -1) {
        user.currentSolutions.splice(solutionIndex, 1);
        await user.save();
        return res
          .status(StatusCodes.OK)
          .send({ message: "Solution cleared successfully" });
      } else {
        return res
          .status(StatusCodes.NOT_FOUND)
          .json({ message: "Solution not found" });
      }
    } catch (error) {
      console.log(error);

      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send({ message: error.message });
    }
  }
);

/*
  Endpoint #2: runs the code submitted by the user in the frontend on the jobe server 
  and returns the output. The endpoint takes the language id as a query param and the code 
  is submitted as part of the request body. 
*/
editorRouter.post("/editor/code", async (req, res) => {
  try {
    const sourcecode = req.body.code;
    const selectedLanguage = req.query.language_id;

    let fileName = "";

    switch (selectedLanguage) {
      case "c":
        fileName = "output.c";
        break;
      case "java":
        fileName = "Output.java";
        break;
      case "nodejs":
        fileName = "output.js";
        break;
      case "python3":
        fileName = "output.py";
        break;
      case "cpp":
        fileName = "output.cpp";
        break;
      case "php":
        fileName = "output.php";
        break;
      default:
        throw new Error("Language id is invalid");
    }

    const codeData = {
      run_spec: {
        language_id: selectedLanguage,
        sourcefilename: fileName,
        sourcecode: sourcecode,
      },
    };

    const response = await axios.post(
      `${JOBE_URL}/jobe/index.php/restapi/runs`,
      codeData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status !== 200) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send({ message: "Error with Jobe server connection" });
    }

    if (response.data.outcome !== 15) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: response.data.cmpinfo, outcome: response.data.outcome });
    }

    return res.status(StatusCodes.OK).json({ output: response.data.stdout });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ message: error.message });
  }
});

/*
  Endpoint #3: fetches the test cases for the problem and runs them against the code and returns 
  the outcome for each test case and whether the code passed each one or not.
*/
editorRouter.post("/editor/:problemId/testCase",authenticateToken, async (req, res) => {
  try {
    console.log(req.user.username, 273);
    // find the user using the token
    const user = await User.findOne({ username: req.user.username });

    if (!user) {
      console.log(279);
      return res.status(StatusCodes.NOT_FOUND).json({ message: "User not found." });
    }

    const sourcecode = req.body.code;
    const selectedLanguage = req.query.language_id;
    const problemId = req.params.problemId;
    const userId = user.id;

    const problem = await Problem.findById(problemId);
    if (!problem) {
      console.log(291);
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Problem not found" });
    }

    let fileName = "";
    let allTestsPassed = true;

    switch (selectedLanguage) {
      case "c":
        fileName = "output.c";
        break;
      case "java":
        fileName = "Output.java";
        break;
      case "nodejs":
        fileName = "output.js";
        break;
      case "python3":
        fileName = "output.py";
        break;
      case "cpp":
        fileName = "output.cpp";
        break;
      case "php":
        fileName = "output.php";
        break;
      default:
        throw new Error("Language id is invalid");
    }

    let testResults = [];

    for (let i = 0; i < problem.testCases.length; i++) {
      const testcase = problem.testCases[i];

      const codeData = {
        run_spec: {
          language_id: selectedLanguage,
          sourcefilename: fileName,
          sourcecode: sourcecode,
          input: testcase.input,
        },
      };

      const response = await axios.post(
        `${JOBE_URL}/jobe/index.php/restapi/runs`,
        codeData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status !== 200) {

        console.log(331);
        console.log(response.data.cmpinfo);
        console.log(response.data.outcome);
        console.log(response.data.stderr);

        return res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .send({ message: "Error with Jobe server connection" });
      }

      if (response.data.outcome !== 15) {
        console.log(338);
        console.log(response.data.cmpinfo);
        console.log(response.data.outcome);
        console.log(response.data.stderr);

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          error: response.data.cmpinfo,
          outcome: response.data.outcome,
        });
      }

      // Include testcase input and expected output along with the actual output in the results
      let result = {
        testcase: i + 1,
        input: testcase.input,
        expectedOutput: testcase.output,
        actualOutput: response.data.stdout.trim(),
      };

      if (result.actualOutput === result.expectedOutput) {
        result.passed = true;
      } else {
        result.passed = false;
        allTestsPassed = false;
      }

      testResults.push(result);
    }

    // if all of the test cases pass then the problem has been completed successfully

    if(allTestsPassed) {
      await updateProblemCompletionStatus(problemId, userId, true);
    }

    return res.status(StatusCodes.OK).json({ testResults });
  } catch (error) {
    console.log(367);
    console.log(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ message: error.message });
  }
});

export default editorRouter;
