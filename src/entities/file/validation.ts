import Joi from 'joi';

export const createFileSchema = Joi.object({
  ref: Joi.string().required(),
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  birthdate: Joi.date().required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .trim()
    .required(),
  phone: Joi.string().required(),
  CIN: Joi.string().required(),
  client: Joi.required(),
  address: Joi.string().required(),
  city: Joi.string().required(),
  medicines: Joi.array().required(),
  refund: Joi.number().required(),
});

export const updateFileSchema = Joi.object({
  ref: Joi.string(),
  firstname: Joi.string(),
  lastname: Joi.string(),
  birthdate: Joi.date(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .trim(),
  phone: Joi.string(),
  CIN: Joi.string(),
  client: Joi.string().hex().length(24),
  address: Joi.string(),
  city: Joi.string(),
  status: Joi.string(),
  medicines: Joi.array().items(Joi.string().hex().length(24)),
});
