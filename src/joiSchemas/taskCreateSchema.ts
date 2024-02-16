import Joi from "joi";

const taskCreateSchema = Joi.object({
  title: Joi.string().required().max(24).messages({
    "any.required": "Missing required title field",
    "string.max": "Title must be no more than 16 symbols",
    "string.base": "Title must be a string",
  }),
  description: Joi.string().required().messages({
    "any.required": "Missing required Description field",
  }),
  status: Joi.string()
    .valid("to do", "in-progress", "done")
    .required()
    .messages({
      "any.required": "Missing required status field",
      "any.only": "Invalid status value",
    }),
  columnIndex: Joi.number().required().messages({
    "any.required": "Missing required columnIndex field",
    "number.base": "Column index must be a number",
  }),
});

export default taskCreateSchema;
