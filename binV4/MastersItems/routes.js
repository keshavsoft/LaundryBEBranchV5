import express from 'express';

var router = express.Router();

import { router as Create } from './Create/routes.js';

router.use('/Create', Create);

export { router };