import mongoose from "mongoose";
import {
  DEFAULT_STRING_VALIDATION,
  DEFAULT_REQUIRED_STRING_VALIDATION,
} from "../helper/defaultStringValidation.helper.js";

const EventSchema = new mongoose.Schema({
  event: DEFAULT_REQUIRED_STRING_VALIDATION,

  user_id: DEFAULT_REQUIRED_STRING_VALIDATION,
  date: {
    type: Date,
    required: true,
  },
});

const Event = mongoose.model("Event", EventSchema, "events");

export default Event;
