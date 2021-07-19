import express from "express"
import { getAllBlocks, createBlock, getBlocksCount, mineBlock } from "../controllers/blocks.js";

const router = express.Router()

router.get('/', getAllBlocks);

router.post('/new', createBlock);

router.get('/count', getBlocksCount);

router.get("/mine", mineBlock);


export default router;