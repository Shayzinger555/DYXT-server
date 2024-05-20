import Joi from "joi";

const todoSchema = Joi.object({
  todo: Joi.string().min(3).max(45).required(),
  user_id: Joi.string().min(3).max(256).required(),
  project_id: Joi.string().min(3).max(256),
  status: Joi.boolean(),
  date: Joi.date().optional(),
});

const validateTodo = (userInput) => {
  return todoSchema.validateAsync(userInput);
};

export default validateTodo;
