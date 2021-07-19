import  mongoose  from "mongoose";

const blockSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    nonce: {
        type: Number,
        default: 0
    }
    ,
    transactions: {
        type: String,
        default: ""
    },
    prevHash: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true,
        unique: true
    },
    timeStamp: {
        type: Date,
        default: Date.now
    }
   
})

const Block = mongoose.model('Block', blockSchema) 

export default Block;