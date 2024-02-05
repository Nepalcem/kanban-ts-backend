import Joi from "joi";

const taskPatchSchema = Joi.object({
  title: Joi.string().required().max(16).messages({
    "any.required": "Missing required title field",
    "string.max": "Title must be no more than 16 symbols",
    "string.base": "Title must be a string",
  }),
  description: Joi.string().required().messages({
    "any.required": "Missing required Phone field",
  }),
  status: Joi.string()
    .valid("todo", "in-progress", "solved")
    .required()
    .messages({
      "any.required": "Missing required status field",
      "any.only": "Invalid status value",
    }),
});

export default taskPatchSchema;
