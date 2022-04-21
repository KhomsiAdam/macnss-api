import express from 'express';
import { is } from '@middlewares';
import * as medicine from './controller';

const endpoints = express.Router();

endpoints.get('/', is.Auth, medicine.getAll);
endpoints.get('/:id', is.Auth, medicine.getOne);
endpoints.post('/', is.Auth, medicine.create);
endpoints.patch('/:id', is.Auth, medicine.update);
endpoints.delete('/:id', is.Auth, medicine.remove);

export default endpoints;
