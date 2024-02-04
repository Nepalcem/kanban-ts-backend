import Joi from "joi";

const boardPatchSchema = Joi.object({
  title: Joi.string().required().max(16).messages({
    "any.required": "Missing required title field",
    "string.max": "Title must be no more than 16 symbols",
    "string.base": "Title must be a string",
  }),
  hashedID: Joi.string().required().messages({
    "string.base": "Token must be a string",
  }),
});

export default boardPatchSchema;
