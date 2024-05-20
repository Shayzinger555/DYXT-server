import mongoose from "mongoose";
import phoneRegex from "../../utils/phoneRegex.js";
import passwordRegex from "../../utils/passwordRegex.js";
import {
  DEFAULT_STRING_VALIDATION,
  DEFAULT_REQUIRED_STRING_VALIDATION,
} from "../helper/defaultStringValidation.helper.js";

const UserSchema = new mongoose.Schema({
  firstName: DEFAULT_REQUIRED_STRING_VALIDATION,
  lastName: DEFAULT_REQUIRED_STRING_VALIDATION,
  phone: {
    type: String,
    required: true,
    // match: RegExp(phoneRegex),
  },

  email: {
    type: String,
    required: true,
    trim: true,
    unique: [true, "Email is already taken"],
    // match: RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/),
  },
  password: {
    type: String,
    required: true,
    // minLength: 7,
    // maxLength: 20,
    // match: RegExp(passwordRegex),
  },
  country: DEFAULT_REQUIRED_STRING_VALIDATION,
  city: DEFAULT_REQUIRED_STRING_VALIDATION,
  isAdmin: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userName: {
    type: String,
    unique: true,
    required: [true, "Username is already taken."],
  },
  title: {
    type: String,
  },
});

const User = mongoose.model("user", UserSchema, "users");

export default User;
