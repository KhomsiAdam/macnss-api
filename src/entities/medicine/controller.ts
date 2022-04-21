import { Request, Response, NextFunction } from 'express';
import * as controller from '@services/crud.service';

import { catchErrors } from '@helpers/catchErrors';
import { MedicineModel } from './model';
import { createMedicineSchema, updateMedicineSchema } from './validation';
import { ErrorMessages, SuccessMessages } from './constants';

export const create = catchErrors(async (req: Request, res: Response, next: NextFunction) => {
  controller.create(req, res, next, createMedicineSchema, MedicineModel, SuccessMessages.MEDICINE_CREATED);
});

export const getAll = catchErrors(async (_req: Request, res: Response, next: NextFunction) => {
  controller.getAll(_req, res, next, MedicineModel, ErrorMessages.MEDICINES_NOT_FOUND, false);
});

export const getOne = catchErrors(async (req: Request, res: Response, next: NextFunction) => {
  controller.getOne(req, res, next, MedicineModel, ErrorMessages.MEDICINE_NOT_FOUND, false);
});

export const update = catchErrors(async (req: Request, res: Response, next: NextFunction) => {
  controller.update(
    req,
    res,
    next,
    updateMedicineSchema,
    MedicineModel,
    SuccessMessages.MEDICINE_UPDATED,
    ErrorMessages.MEDICINE_NOT_FOUND,
  );
});

export const remove = catchErrors(async (req: Request, res: Response, next: NextFunction) => {
  controller.remove(req, res, next, MedicineModel, SuccessMessages.MEDICINE_DELETED, ErrorMessages.MEDICINE_NOT_FOUND);
});
