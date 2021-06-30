
import Block from '../models/block.js';


export const getAllBlocks = async (req, res) => {
    try {
        const blocks = await Block.find();
        console.log();
        res.status(200).json(blocks);

    } catch (error) {
        res.status(404).json({message: error.message});
        
    }
}

export const createBlock = async (req, res) => {
    const post = req.body;
    const newBlock = new Block(post)
    const tempBlock = new Block({id: "10",  transaction: 'asdg', prevHash: 'afgasfh', hash: 'asdgag', nonce:"0"})

   try {
    tempBlock =  await tempBlock.save();
    res.status(200).json(tempBlock);
   } catch (error) {
       console.log(error);
   }
}