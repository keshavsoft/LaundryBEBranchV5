import express from 'express';

const router = express.Router();

import { router as routerFromQrCodes } from "./QrCodes/routes.js";
import { router as routerFromMastersItemTypes } from "./MastersItemTypes/routes.js";
import { router as routerFromMastersItemService } from "./MastersItemService/routes.js";
import { router as routerFromMastersItems } from "./MastersItems/routes.js";
import { router as routerFromMastersItemCategory } from "./MastersItemCategory/routes.js";
import { router as routerFromMastersCustomers } from "./MastersCustomers/routes.js";
import { router as routerFromMastersAddOns } from "./MastersAddOns/routes.js";
import { router as routerFromUsersTable } from "./UsersTable/routes.js";
import { router as routerFromTokenTable } from "./TokenTable/routes.js";
import { router as routerFromBranOrdersKKD } from "./BranOrdersKKD/routes.js";

router.use("/QrCodes", routerFromQrCodes);
router.use("/MastersItemTypes", routerFromMastersItemTypes);
router.use("/MastersItemService", routerFromMastersItemService);
router.use("/MastersItems", routerFromMastersItems);
router.use("/MastersItemCategory", routerFromMastersItemCategory);
router.use("/MastersCustomers", routerFromMastersCustomers);
router.use("/MastersAddOns", routerFromMastersAddOns);
router.use("/UsersTable", routerFromUsersTable);
router.use("/TokenTable", routerFromTokenTable);
router.use("/BranOrdersKKD", routerFromBranOrdersKKD);

export { router };