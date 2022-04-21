import { Request, Response, NextFunction } from 'express';
import * as controller from '@services/crud.service';

import { catchErrors } from '@helpers/catchErrors';
import { ClientModel } from './model';
import { createClientSchema, updateClientSchema } from './validation';
import { ErrorMessages, SuccessMessages } from './constants';

export const create = catchErrors(async (req: Request, res: Response, next: NextFunction) => {
  controller.create(req, res, next, createClientSchema, ClientModel, SuccessMessages.CLIENT_CREATED);
});

export const getAll = catchErrors(async (_req: Request, res: Response, next: NextFunction) => {
  controller.getAll(_req, res, next, ClientModel, ErrorMessages.CLIENTS_NOT_FOUND, false);
});

export const getOne = catchErrors(async (req: Request, res: Response, next: NextFunction) => {
  controller.getOne(req, res, next, ClientModel, ErrorMessages.CLIENT_NOT_FOUND, false);
});

export const update = catchErrors(async (req: Request, res: Response, next: NextFunction) => {
  controller.update(
    req,
    res,
    next,
    updateClientSchema,
    ClientModel,
    SuccessMessages.CLIENT_UPDATED,
    ErrorMessages.CLIENT_NOT_FOUND,
  );
});

export const remove = catchErrors(async (req: Request, res: Response, next: NextFunction) => {
  controller.remove(req, res, next, ClientModel, SuccessMessages.CLIENT_DELETED, ErrorMessages.CLIENT_NOT_FOUND);
});
