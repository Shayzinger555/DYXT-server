import mongoose from "mongoose";
import {
  DEFAULT_STRING_VALIDATION,
  DEFAULT_REQUIRED_STRING_VALIDATION,
} from "../helper/defaultStringValidation.helper.js";
const NoteSchema = new mongoose.Schema({
  note: DEFAULT_STRING_VALIDATION,
  user_id: DEFAULT_REQUIRED_STRING_VALIDATION,
  project_id: DEFAULT_STRING_VALIDATION,
});
const Note = mongoose.model("note", NoteSchema, "notes");
export default Note;
