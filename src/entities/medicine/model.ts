import { Schema, model } from 'mongoose';

import { MedicineInterface } from './interface';

const MedicineSchema = new Schema<MedicineInterface>(
  {
    ref: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ['A', 'B', 'C', 'D', 'E'],
    },
    price: {
      type: Number,
      required: true,
    },
    refundable: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true },
);

export const MedicineModel = model<MedicineInterface>('Medicine', MedicineSchema);
