import { StatusCodes } from "http-status-codes";
import { Content } from "../models/content.js";
import { Topic } from "../models/topic.js";

export const validateContentBody = (req, res, next) => {
  const validKeys = Object.keys(Content.schema.paths).filter((path) => path !== "_id" && path !== "__v");

  const reqKeys = Object.keys(req.body);

  const isValid = reqKeys.every((key) => validKeys.includes(key));

  if (isValid) {
    next();
  } else {
    res.status(StatusCodes.BAD_REQUEST).json({ message: 'Invalid keys in request body' });
  }
};

export const validateTopicBody = (req, res, next) => {
  const validKeys = Object.keys(Topic.schema.paths).filter((path) => path !== "_id" && path !== "__v");

  const reqKeys = Object.keys(req.body);

  const isValid = reqKeys.every((key) => validKeys.includes(key));

  if (isValid) {
    next();
  } else {
    res.status(StatusCodes.BAD_REQUEST).json({ message: 'Invalid keys in request body' });
  }
};