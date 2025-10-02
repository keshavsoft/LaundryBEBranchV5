import express from 'express';
var router = express.Router();

import { router as NewOrderV1 } from './NewOrderV1/routes.js';

router.use('/NewOrderV1', NewOrderV1);

export { router };