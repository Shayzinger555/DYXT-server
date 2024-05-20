import mongoose from "mongoose";
import {
  DEFAULT_STRING_VALIDATION,
  DEFAULT_REQUIRED_STRING_VALIDATION,
} from "../helper/defaultStringValidation.helper.js";

const ScheduleSchema = new mongoose.Schema({
  sunday: { type: [], default: [] },
  monday: { type: [], default: [] },
  tuesday: { type: [], default: [] },
  wednesday: { type: [], default: [] },
  thursday: { type: [], default: [] },
  friday: { type: [], default: [] },
  saturday: { type: [], default: [] },
});

const RoutineSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  schedule: {
    type: ScheduleSchema,
    default: {
      sunday: [],
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
    },
  },
});

const Routine = mongoose.model("Routine", RoutineSchema, "routines");

export default Routine;
