import express from 'express';
import { is } from '@middlewares';
import * as file from './controller';

const endpoints = express.Router();

endpoints.get('/', is.Auth, file.getAll);
endpoints.get('/:id', is.Auth, file.getOne);
endpoints.post('/', is.Auth, file.create);
endpoints.patch('/:id', is.Auth, file.update);
endpoints.delete('/:id', is.Auth, file.remove);

export default endpoints;
