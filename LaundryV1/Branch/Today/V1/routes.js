import express from 'express';

var router = express.Router();

import { router as OnlyOrders } from './OnlyOrders/routes.js';

router.use('/OnlyOrders', OnlyOrders);

export { router };