import { Schema, model } from 'mongoose';

import { ClientInterface } from './interface';

const ClientSchema = new Schema<ClientInterface>(
  {
    ref: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    birthdate: {
      type: Date,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    CIN: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const ClientModel = model<ClientInterface>('Client', ClientSchema);
