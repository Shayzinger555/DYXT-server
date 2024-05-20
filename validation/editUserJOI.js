import Joi from "joi";
import phoneRegex from "../utils/phoneRegex.js";

const editUserSchema = Joi.object({
  firstName: Joi.string().min(2).max(256).required(),

  lastName: Joi.string().min(2).max(256).required(),
  phone: Joi.string().pattern(phoneRegex).required(),
  _id: Joi.string(),
  userName: Joi.string().min(3).max(256).required(),
  state: Joi.string().min(2).max(256).allow(""),
  country: Joi.string().min(2).max(256).required(),
  city: Joi.string().min(2).max(256).required(),
  createdAt: Joi.date(),
  email: Joi.string(),
  password: Joi.string(),
  title: Joi.string(),
  isAdmin: Joi.boolean(),
  __v: Joi.number(),
});

const editUserSchemaValidation = (userInput) => {
  return editUserSchema.validateAsync(userInput);
};

export default editUserSchemaValidation;
/*  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(500)
    .required(),
  password: Joi.string()
    .pattern(new RegExp(passwordRegex))
    .min(7)
    .max(20)
    .required()
    .messages({
      "string.pattern.base":
        "Password must contain at least one uppercase, lowercase, special character(!@#$%^&*-), and number",
    }), */
