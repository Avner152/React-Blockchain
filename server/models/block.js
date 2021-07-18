import  mongoose  from "mongoose";

const blockSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
        index: {unique: true}
    },
    nonce: {
        type: String,
        default: 0
    }
    ,
    transactions: {
        type: String,
    },
    prevHash: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
    timeStamp: {
        type: Date,
        default: Date.now
    }
   
})

const Block = mongoose.model('Block', blockSchema) 

export default Block;