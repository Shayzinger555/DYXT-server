import Joi from "joi";

const eventSchema = Joi.object({
  event: Joi.string().min(3).max(45).required(),
  user_id: Joi.string().min(3).max(256).required(),
  date: Joi.date().required(),
});

const validateEvent = (userInput) => {
  return eventSchema.validateAsync(userInput);
};

export default validateEvent;
