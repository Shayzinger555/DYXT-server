import mongoose from "mongoose";

import {
  DEFAULT_STRING_VALIDATION,
  DEFAULT_REQUIRED_STRING_VALIDATION,
} from "../helper/defaultStringValidation.helper.js";

const ProjectSchema = new mongoose.Schema({
  title: DEFAULT_REQUIRED_STRING_VALIDATION,
  description: DEFAULT_STRING_VALIDATION,
  user_id: DEFAULT_STRING_VALIDATION,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: "Launched",
    required: true,
  },
  date: {
    type: Date,
  },
});

const Project = mongoose.model("project", ProjectSchema, "projects");
export default Project;
