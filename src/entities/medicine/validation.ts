import Joi from 'joi';

export const createMedicineSchema = Joi.object({
  ref: Joi.string().required(),
  name: Joi.string().required(),
  category: Joi.string().required(),
  type: Joi.string().required(),
  price: Joi.number().required(),
  refundable: Joi.boolean().required(),
});

export const updateMedicineSchema = Joi.object({
  ref: Joi.string(),
  name: Joi.string(),
  category: Joi.string(),
  type: Joi.string(),
  price: Joi.number(),
  refundable: Joi.boolean(),
});
