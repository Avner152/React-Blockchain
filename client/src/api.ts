import axios from 'axios';
import { Block } from './model/block';

const APIRootPath = 'http://localhost:5000'



export type ApiClient = {
    getBlocks: () => Promise<Block[]>;
    getBlocksCount: () => Promise<number>;
    createBlock: () => Promise<Block>;
}

export const createApiClient = (): ApiClient => {
    return {
        getBlocks: (page?: number, val?: string) => {
            return axios.get(APIRootPath + "/blocks").then((res) => res.data);
        },
        getBlocksCount: () => {
            return axios.get(APIRootPath + "/blocks").then((res) => res.data.count);
        },
        createBlock:  () => {
            return axios.post(APIRootPath + "/blocks/new").then((res) => res.data);
        }
    
    }
}