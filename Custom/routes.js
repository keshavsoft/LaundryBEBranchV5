import express from 'express';

var router = express.Router();

import { router as Cleaning } from './Cleaning/routes.js';
import { router as LaundryV1 } from './LaundryV1/routes.js';

router.use('/Cleaning', Cleaning);
router.use('/LaundryV1', LaundryV1);

export { router };