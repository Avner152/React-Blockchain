import axios from 'axios';
import { Block } from './model/block';

const APIRootPath = 'localhost:3000'



export type ApiClient = {
    getBlocks: () => Promise<Block[]>;
    getBlocksCount: () => Promise<number>;
}

export const createApiClient = (): ApiClient => {
    return {
        getBlocks: (page?: number, val?: string) => {
            return axios.get(APIRootPath).then((res) => res.data);
        },
        getBlocksCount: () => {
            return axios.get(APIRootPath + "/count").then((res) => res.data.count);
        }
    
    }
}