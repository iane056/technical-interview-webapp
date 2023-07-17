import React, { useState, useEffect } from "react";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import styles from "./QuestionnaireForm.module.css";

const QuestionnaireForm = ({ questions }) => {
  const token = localStorage.getItem("authToken");

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [key, setKey] = useState(0); // new state to trigger unselect radio buttons
  const [shouldSubmit, setShouldSubmit] = useState(false); // add this state

  useEffect(() => {
    setKey(Math.random()); // changes key to trigger re-rendering of the Form.Check
  }, [currentQuestionIndex]);

  const handleResponseChange = (questionId, selectedResponse) => {
    setAnswers((prevAnswers) => {
      const existingAnswer = prevAnswers.find(
        (answer) => answer.questionId === questionId
      );
      if (existingAnswer) {
        return prevAnswers.map((answer) =>
          answer.questionId === questionId
            ? { ...answer, selectedResponse }
            : answer
        );
      } else {
        return [...prevAnswers, { questionId, selectedResponse }];
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if shouldSubmit is false, do nothing
    if (!shouldSubmit) return;

    console.log(answers, 26);

    const response = await fetch(
      "http://localhost:3000/question/submit-answers",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(answers),
      }
    );

    if (response.ok) {
      console.log("success!!!");
    } else {
      console.log("failure!!!");
    }
  };

  const handleNext = () => {
    setShouldSubmit(false); // set shouldSubmit to false
    setCurrentQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
  };

  const handlePrev = () => {
    setShouldSubmit(false); // set shouldSubmit to false
    setCurrentQuestionIndex((prevQuestionIndex) => prevQuestionIndex - 1);
  };

  const handleButtonClick = () => {
    setShouldSubmit(true); // set shouldSubmit to true when the 'Submit' button is clicked
  };

  const question = questions[currentQuestionIndex];

  return (
    <Container className={styles.container}>
      <Row>
        <Col className="d-flex justify-content-center">
          <div className={styles.formContainer}>
            <h2 className="text-center">
              <b>Questionnaire</b>
            </h2>
            <Form onSubmit={handleSubmit} key={key}>
              <Card className={`mb-4 ${styles.customCard}`}>
                <Card.Body className={styles.cardBody}>
                  <Card.Text className={styles.cardText}>
                    {question.questionContent}
                  </Card.Text>
                  <div className={styles.cardContent}>
                    <div className={styles.responsesContainer}>
                      {question.responses.map((response, i) => (
                        <Form.Check
                          custom
                          type="radio"
                          id={`${question._id}-${i}`}
                          label={response}
                          name={`group-${question._id}`}
                          key={i}
                          className={styles.customCheck}
                          style={{ marginBottom: "1rem" }}
                          onChange={() =>
                            handleResponseChange(question._id, response)
                          }
                        />
                      ))}
                    </div>
                    {question.image && (
                      <Card.Img
                        variant="bottom"
                        src={`http://localhost:3000/${question.image}`}
                        alt={question.questionContent}
                        className={styles.cardImage}
                      />
                    )}
                  </div>
                </Card.Body>
              </Card>
              <Button
                variant="secondary"
                onClick={handlePrev}
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </Button>
              {currentQuestionIndex < questions.length - 1 ? (
                <Button variant="primary" type="button" onClick={handleNext}>
                  Next
                </Button>
              ) : (
                <Button
                  variant="primary"
                  type="submit"
                  onClick={handleButtonClick}
                  className={styles.customButton}
                >
                  Submit
                </Button>
              )}
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default QuestionnaireForm;
