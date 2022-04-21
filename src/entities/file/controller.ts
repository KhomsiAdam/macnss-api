import { Request, Response, NextFunction } from 'express';
import * as controller from '@services/crud.service';

import { catchErrors } from '@helpers/catchErrors';
import { FileModel } from './model';
import { createFileSchema, updateFileSchema } from './validation';
import { ErrorMessages, SuccessMessages } from './constants';

export const create = catchErrors(async (req: Request, res: Response, next: NextFunction) => {
  controller.create(req, res, next, createFileSchema, FileModel, SuccessMessages.FILE_CREATED);
});

export const getAll = catchErrors(async (_req: Request, res: Response, next: NextFunction) => {
  controller.getAll(_req, res, next, FileModel, ErrorMessages.FILES_NOT_FOUND, false);
});

export const getOne = catchErrors(async (req: Request, res: Response, next: NextFunction) => {
  controller.getOne(req, res, next, FileModel, ErrorMessages.FILE_NOT_FOUND, false);
});

export const update = catchErrors(async (req: Request, res: Response, next: NextFunction) => {
  controller.update(
    req,
    res,
    next,
    updateFileSchema,
    FileModel,
    SuccessMessages.FILE_UPDATED,
    ErrorMessages.FILE_NOT_FOUND,
  );
});

export const remove = catchErrors(async (req: Request, res: Response, next: NextFunction) => {
  controller.remove(req, res, next, FileModel, SuccessMessages.FILE_DELETED, ErrorMessages.FILE_NOT_FOUND);
});
