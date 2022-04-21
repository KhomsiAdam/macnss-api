/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-console */
import 'dotenv/config';
import mongoose from 'mongoose';
import crypto from 'crypto';

import { ClientModel } from '@entities/client/model';

import clients from './data/clients.json';

const { DB_URI } = process.env;

const seedClients = async () => {
  mongoose.connect(DB_URI as string, async () => {
    try {
      // Get all clients by email
      const emails = clients.map((client) => client.email);
      // Delete all seeded clients by email
      await ClientModel.deleteMany({ email: { $in: emails } });
      // Add generated reference and CIN to each client
      const finalizedClients = clients.map((client: any) => {
        client.ref = crypto.randomBytes(8).toString('hex');
        client.CIN =
          // 8 random hexadecimal characters
          String.fromCharCode(Math.floor(Math.random() * 26) + 97).toUpperCase() +
          // random 6 digit number prefixed with a random uppercase letter
          Math.floor(100000 + Math.random() * 900000);
        return client;
      });
      // Insert all finalized clients in Client collection
      await ClientModel.insertMany(finalizedClients);
      console.log('Clients seeded!');
      mongoose.disconnect();
    } catch (error) {
      console.log(error);
      mongoose.disconnect();
    }
  });
};

seedClients();
