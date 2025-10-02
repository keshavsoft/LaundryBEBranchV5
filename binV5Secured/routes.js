import express from 'express';

var router = express.Router();

import { router as RouterForBranOrdersKKD } from './BranOrdersKKD/routes.js';

import { router as RouterForMastersAddOns } from './MastersAddOns/routes.js';
import { router as RouterForMastersCustomers } from './MastersCustomers/routes.js';
import { router as RouterForMastersItemCategory } from './MastersItemCategory/routes.js';
import { router as RouterForMastersItems } from './MastersItems/routes.js';
import { router as RouterForMastersItemService } from './MastersItemService/routes.js';
import { router as RouterForMastersItemTypes } from './MastersItemTypes/routes.js';

import { router as RouterForQrCodes } from './QrCodes/routes.js';

router.use('/BranOrdersKKD', RouterForBranOrdersKKD);

router.use('/MastersAddOns', RouterForMastersAddOns);
router.use('/MastersCustomers', RouterForMastersCustomers);
router.use('/MastersItemCategory', RouterForMastersItemCategory);
router.use('/MastersItems', RouterForMastersItems);
router.use('/MastersItemService', RouterForMastersItemService);
router.use('/MastersItemTypes', RouterForMastersItemTypes);

router.use('/QrCodes', RouterForQrCodes);


export { router };