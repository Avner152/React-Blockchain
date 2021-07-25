
import Block from '../models/block.js';
import sha256 from 'crypto-js/sha256.js';

const DIFFICULTY = 3;
// Block.remove({}, function(err) { 
//     console.log('collection removed') //if you want to clear db use this code.
//  });

export const getAllBlocks = async (req, res) => {
    try {
        const blocks = await Block.find();

        res.json(blocks);

    } catch (error) {
        res.status(404).json({message: error.message});
        
    }
}

export const getBlocksCount = async (req, res) => {
    try {
        const count = await Block.count();
        console.log("number of blocks is: " + count);
        res.send({count});
    }catch (error) {
        res.status(404).json({message: error.message});
    }

}
export const createBlock = async (req, res) => {
    const post = req.body.params;
    const newBlock = new Block({id:post.id,
                                nonce:post.nonce,
                                transactions:post.transaction,
                                hash:post.hash,
                                prevHash:post.prevHash,
                                timeStamp:post.timeStamp});

    console.error("###SAVING###  Block No. "+ newBlock.id + "  ###SAVING###")
   try {
    newBlock =  await newBlock.save();
    res.status(200).json(newBlock);
   } catch (error) {
       res.status(500).json
   }
}

export const mineBlock =  async (req, res) => {

    const post = req.query
    try {
    var hash = post.hash
    var nonce = 0
    while( hash.substring(0, DIFFICULTY) !== Array(DIFFICULTY + 1).join("0")){
        nonce= nonce+1;
       hash = calculateHash(post.text , nonce)
        
    }
    console.log("mined hash = "+ hash + " nonce: "+nonce)
    res.send({hash: hash, nonce: nonce})
    }catch (error) {
        res.status(500).json
}
}

const calculateHash = (text, nonce) => {
    return (sha256(text + nonce  
      ).toString())
     

    }