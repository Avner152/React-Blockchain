import axios from 'axios';
import { Block, Transaction } from './model/block';

const APIRootPath = 'http://localhost:5000'



export type ApiClient = {
    getBlocks: () => Promise<Block[]>;
    getBlocksCount: () => Promise<number>;
    createBlock: (id: number, nonce: number, transaction: string, prevHash: string, hash: string) => Promise<Block>;
}

export const createApiClient = (): ApiClient => {
    return {
        getBlocks: (page?: number, val?: string) => {
            return axios.get(APIRootPath + "/blocks").then((res) => res.data);
        },
        getBlocksCount: () => {
            return axios.get(APIRootPath + "/blocks/count").then((res) => res.data.count);
        },
        createBlock:  (id: number, nonce: number, transaction: string, prevHash: string, hash: string) => {
            return axios.post(APIRootPath + "/blocks/new" ,{params: {id: id, nonce:nonce, transaction:transaction, prevHash:prevHash, hash:hash}}).then((res) => res.data);
        }
    
    }
}