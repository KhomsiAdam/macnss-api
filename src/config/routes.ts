import express from 'express';

import authEndpoints from '@entities/auth/endpoints';
import adminEndpoints from '@entities/admin/endpoints';
import userEndpoints from '@entities/user/endpoints';
import clientEndpoints from '@entities/client/endpoints';
import fileEndpoints from '@entities/file/endpoints';
import medicineEndpoints from '@entities/medicine/endpoints';

export const router = express.Router();

router.use('/', authEndpoints);
router.use('/admins', adminEndpoints);
router.use('/users', userEndpoints);
router.use('/clients', clientEndpoints);
router.use('/files', fileEndpoints);
router.use('/medicines', medicineEndpoints);

export default router;
