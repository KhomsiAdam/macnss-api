import { Types } from 'mongoose';

export interface FileInterface {
  ref: string;
  firstname: string;
  lastname: string;
  birthdate: Date;
  email: string;
  phone: string;
  CIN: string;
  client: Types.ObjectId;
  address: string;
  city: string;
  status: 'pending' | 'accepted' | 'rejected';
  medicine?: Array<Types.ObjectId>;
}
