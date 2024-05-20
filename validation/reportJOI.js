import Joi from "joi";

const reportSchema = Joi.object({
  date: Joi.date().required(),
  user_id: Joi.string().min(3).max(256).required(),
  main: Joi.number().required(),
  investments: Joi.number().required(),
  savings: Joi.number().required(),
});

const validateReport = (userInput) => {
  return reportSchema.validateAsync(userInput);
};

export default validateReport;
