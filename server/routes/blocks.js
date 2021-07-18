import express from "express"
import { getAllBlocks, createBlock } from "../controllers/blocks.js";

const router = express.Router()

router.get('/', getAllBlocks);

router.post('/new', createBlock);

export default router;