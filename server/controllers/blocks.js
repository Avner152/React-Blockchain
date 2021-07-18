
import Block from '../models/block.js';

// Block.remove({}, function(err) { 
//     console.log('collection removed') //if you want to clear db use this code.
//  });

export const getAllBlocks = async (req, res) => {
    try {
        const blocks = await Block.find();
        res.status(200).json(blocks);
        console.log(blocks)

    } catch (error) {
        res.status(404).json({message: error.message});
        
    }
}
export const createBlock = async (req, res) => {
    const post = req.body.block;
    const newBlock = new Block(post.id, post.nonce, post.transaction, post.hash, post.prevHash)
    const tempBlock = new Block({id: "10",  transaction: 'asdg', prevHash: 'afgasfh', hash: 'asdgag', nonce:"0"})

   try {
    newBlock =  await newBlock.save();
    res.status(200).json(newBlock);
   } catch (error) {
       console.log(error);
   }
}