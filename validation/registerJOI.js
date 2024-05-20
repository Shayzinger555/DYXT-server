import Joi from "joi";
import phoneRegex from "../utils/phoneRegex.js";
import passwordRegex from "../utils/passwordRegex.js";

const registerSchema = Joi.object({
  firstName: Joi.string().min(2).max(256).required(),
  middleName: Joi.string().min(0).max(256).allow(""),
  lastName: Joi.string().min(2).max(256).required(),
  phone: Joi.string().pattern(phoneRegex).required(),
  userName: Joi.string().min(4).max(256).required(),
  country: Joi.string().min(2).max(256).required(),
  city: Joi.string().min(2).max(256).required(),
  title: Joi.string(),
  email: Joi.string()
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
    }),
});

const registerSchemaValidation = (userInput) => {
  return registerSchema.validateAsync(userInput);
};

export default registerSchemaValidation;
