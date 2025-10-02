import express from 'express';

var router = express.Router();

import { router as AllOrders } from './AllOrders/routes.js';
import { router as Payments } from './Payments/routes.js';

router.use('/AllOrders', AllOrders);
router.use('/Payments', Payments);

export { router };