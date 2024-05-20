import Joi from "joi";

// Define Joi schema for exercise
const exerciseSchema = Joi.object({
  title: Joi.string().min(3).max(256).required(),
  primary: Joi.string().min(3).max(256).required(),
  group: Joi.array().items(Joi.string()).required(),
  type: Joi.string().min(3).max(256).required(),
});

// Define Joi schema for workout
const workoutSchema = Joi.object({
  exercises: Joi.array().items(exerciseSchema).required(),
  title: Joi.string().min(3).max(256).required(),
  user_id: Joi.string().min(3).max(256).required(),
});

// Validation function for workout
const validateWorkout = (userInput) => {
  return workoutSchema.validateAsync(userInput);
};

export default validateWorkout;
