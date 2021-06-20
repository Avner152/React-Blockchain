import  mongoose  from "mongoose";

const blockSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
        index: {unique: true}
    },
    timeStamp: {
        type: Date,
        default: Date.now
    },
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
    nonce: {
        type: String,
        default: 0
    }
})

const Block = mongoose.model('Block', blockSchema) 

export default Block;