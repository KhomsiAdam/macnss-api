/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-console */
import 'dotenv/config';
import mongoose from 'mongoose';
import crypto from 'crypto';

import { MedicineModel } from '@entities/medicine/model';

import medicines from './data/medicines.json';

const { DB_URI } = process.env;

const seedMedicines = async () => {
  mongoose.connect(DB_URI as string, async () => {
    try {
      // Get all medicines by email
      const names = medicines.map((medicine) => medicine.name);
      // Delete all seeded medicines by email
      await MedicineModel.deleteMany({ name: { $in: names } });
      // Add generated reference and CIN to each medicine
      const finalizedMedicines = medicines.map((medicine: any) => {
        medicine.ref = crypto.randomBytes(8).toString('hex');
        return medicine;
      });
      // Insert all finalized medicines in Medicine collection
      await MedicineModel.insertMany(finalizedMedicines);
      console.log('Medicines seeded!');
      mongoose.disconnect();
    } catch (error) {
      console.log(error);
      mongoose.disconnect();
    }
  });
};

seedMedicines();
