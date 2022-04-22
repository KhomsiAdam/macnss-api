import crypto from 'crypto';
import { Request, Response, NextFunction } from 'express';
import * as controller from '@services/crud.service';

import { catchErrors } from '@helpers/catchErrors';
import { ClientModel } from '@entities/client/model';
import { MedicineModel } from '@entities/medicine/model';
import { FileModel } from './model';
import { createFileSchema, updateFileSchema } from './validation';
import { ErrorMessages, SuccessMessages } from './constants';

const rate: Record<string, any> = {
  A: 1,
  B: 0.75,
  C: 0.5,
  D: 0.25,
  E: 0,
};

export const create = catchErrors(async (req: Request, res: Response, next: NextFunction) => {
  const client = await ClientModel.findOne({ ref: req.body.clientRef }, '_id');
  const medicines = await MedicineModel.find({ ref: { $in: req.body.medicineRefs } });
  let refund = 0;
  // Calculate refund depending on medicine price and type
  medicines.forEach((medicine: any) => {
    // Check if medicine is refundable
    if (medicine.refundable) {
      const amount = medicine.price * rate[medicine.type];
      refund += amount;
    }
  });
  // Remove the clientRef and medicineRefs from the body
  delete req.body.clientRef;
  delete req.body.medicineRefs;
  // Generate a random ref for the file
  req.body.ref = crypto.randomBytes(8).toString('hex');
  // Add client id and medicines ids to the body
  if (client) req.body.client = client._id;
  if (medicines) {
    const medicinesIds = medicines.map((medicine: any) => medicine._id);
    req.body.medicines = medicinesIds;
  }
  // Add refund to the body
  req.body.refund = refund;
  // Create medical file
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
