import mongoose from "mongoose";
import { DEFAULT_REQUIRED_STRING_VALIDATION } from "../helper/defaultStringValidation.helper.js";

const exerciseSchema = new mongoose.Schema({
  title: DEFAULT_REQUIRED_STRING_VALIDATION,
  primary: DEFAULT_REQUIRED_STRING_VALIDATION,
  group: { type: Array, required: true },
  type: DEFAULT_REQUIRED_STRING_VALIDATION,
});

const workoutSchema = new mongoose.Schema({
  exercises: [exerciseSchema],
  title: DEFAULT_REQUIRED_STRING_VALIDATION,
  user_id: DEFAULT_REQUIRED_STRING_VALIDATION,
});
const Workout = mongoose.model("workout", workoutSchema, "workouts");

export default Workout;
