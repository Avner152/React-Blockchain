import axios from 'axios';
import { Block } from './model/block';

const APIRootPath = 'http://localhost:5000'



export type ApiClient = {
    getBlocks: () => Promise<Block[]>;
    getBlocksCount: () => Promise<number>;
    createBlock: (id: string, nonce: string, transaction: string, prevHash: string, hash: string, timeStamp:string) => Promise<Block>;
    mineBlock: (hash: string, text:string) => Promise<Block>;
}

export const createApiClient = (): ApiClient => {
    return {
        getBlocks: (page?: number, val?: string) => {
            return axios.get(APIRootPath + "/blocks").then((res) => res.data);
        },
        getBlocksCount: () => {
            return axios.get(APIRootPath + "/blocks/count").then((res) => res.data.count);
        },
        createBlock:  (id: string, nonce: string, transaction: string, prevHash: string, hash: string, timeStamp:string) => {
            return axios.post(APIRootPath + "/blocks/new" ,{headers: {'X-Requested-With': 'XMLHttpRequest'},params: {id: id, nonce:nonce, transaction:transaction, prevHash:prevHash, hash:hash, timeStamp:timeStamp}}).then((res) => res.data);
        },
        mineBlock: (hash:string, text:string) => {
            return axios.get(APIRootPath+ "/blocks/mine", {headers: {'X-Requested-With': 'XMLHttpRequest'},params: {hash: hash, text:text}}).then(res => res.data)
        }
    
    }
}