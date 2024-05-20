import mongoose from "mongoose";
import {
  DEFAULT_STRING_VALIDATION,
  DEFAULT_REQUIRED_STRING_VALIDATION,
} from "../helper/defaultStringValidation.helper.js";

const ReportSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    unique: [true, "A single report per Date!"],
  },
  user_id: DEFAULT_REQUIRED_STRING_VALIDATION,
  main: Number,
  investments: Number,
  savings: Number,
});
const Report = mongoose.model("report", ReportSchema, "reports");
export default Report;
