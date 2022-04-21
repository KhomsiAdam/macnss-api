import express from 'express';
import { is } from '@middlewares';
import * as client from './controller';

const endpoints = express.Router();

endpoints.get('/', is.Auth, client.getAll);
endpoints.get('/:id', is.Auth, client.getOne);
endpoints.post('/', is.Auth, client.create);
endpoints.patch('/:id', is.Auth, client.update);
endpoints.delete('/:id', is.Auth, client.remove);

export default endpoints;
