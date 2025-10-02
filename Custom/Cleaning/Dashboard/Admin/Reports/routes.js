import express from 'express';

var router = express.Router();

import { router as Accounts } from './Accounts/routes.js';

router.use('/Accounts', Accounts);

export { router };