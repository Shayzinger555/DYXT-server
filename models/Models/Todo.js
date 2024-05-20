import mongoose from "mongoose";
import {
  DEFAULT_STRING_VALIDATION,
  DEFAULT_REQUIRED_STRING_VALIDATION,
} from "../helper/defaultStringValidation.helper.js";
const TodoSchema = new mongoose.Schema({
  todo: DEFAULT_REQUIRED_STRING_VALIDATION,
  completed: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
  },
  user_id: DEFAULT_REQUIRED_STRING_VALIDATION,
  project_id: DEFAULT_STRING_VALIDATION,
});
const Todo = mongoose.model("todo", TodoSchema, "todos");

export default Todo;
