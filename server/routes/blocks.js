import express from "express"
import { getAllBlocks, createBlock } from "../controllers/blocks.js";

const router = express.Router()

router.get('/', getAllBlocks);

router.get('/new', createBlock);

export default router;