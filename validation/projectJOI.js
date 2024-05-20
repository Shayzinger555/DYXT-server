import Joi from "joi";

const projectSchema = Joi.object({
  title: Joi.string().min(3).max(25).required(),
  description: Joi.string().min(3).max(65).required(),
  user_id: Joi.string().min(3).max(256).required(),
  date: Joi.date(),
});

const validateProject = (userInput) => {
  return projectSchema.validateAsync(userInput);
};

export default validateProject;
