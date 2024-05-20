import Joi from "joi";

const noteSchema = Joi.object({
  note: Joi.string().min(3).max(45).required(),
  user_id: Joi.string().min(3).max(256).required(),
});

const validateNote = (userInput) => {
  return noteSchema.validateAsync(userInput);
};

export default validateNote;
