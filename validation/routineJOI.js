import Joi from "joi";

// Define Joi schema for schedule
const scheduleSchema = Joi.object({
  sunday: Joi.array().items(Joi.string()),
  monday: Joi.array().items(Joi.string()),
  tuesday: Joi.array().items(Joi.string()),
  wednesday: Joi.array().items(Joi.string()),
  thursday: Joi.array().items(Joi.string()),
  friday: Joi.array().items(Joi.string()),
  saturday: Joi.array().items(Joi.string()),
});

// Define Joi schema for routine
const routineSchema = Joi.object({
  user_id: Joi.string().min(3).max(256).required(),
  schedule: scheduleSchema,
});

// Validation function for routine
const validateRoutine = (userInput) => {
  return routineSchema.validateAsync(userInput);
};

export default validateRoutine;
