import express from 'express';
var router = express.Router();

import { PostFunc, PostFuncWithDataPk as PostFuncWithDataPk } from '../../controllers/postFuncs/EntryFile.js';
import { PostFunc as PostFuncMiddleWare } from "../../Middlewares/postFuncs/EntryFile.js";
import { PostFunc as PostFuncWithDataPkMiddleWare } from "../../Middlewares/postFuncs/2-EntryFile.js";

router.post('/', PostFuncMiddleWare, PostFunc);
router.post("/withDataPk", PostFuncWithDataPkMiddleWare, PostFuncWithDataPk);

export { router };