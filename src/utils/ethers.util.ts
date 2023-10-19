import { ethers, Wallet } from 'ethers';
import { JsonRpcProvider } from '@ethersproject/providers/src.ts/json-rpc-provider';
import { Interface } from '@ethersproject/abi/src.ts/interface';
import axios from 'axios';

/**
 * 获取节点
 * @param chainId
 */
export const getNode = async (chainId: number): Promise<string> => {
  // 调接口取
  const response = await axios({
    url: process.env.NODE_API_HOST + '/api/node?chain_id=' + chainId,
    method: 'get',
    headers: {
      is_debug: 1,
    },
  });
  const node = response?.data?.result;
  if (!node) {
    throw Error(`node #${chainId} not found`);
  }
  return node;
};

/**
 * 获取provider
 * @param chainId
 * @param timeout 单位秒
 */
export async function getJsonRpcProvider(
  chainId: number,
  timeout = 30, // 默认30秒超时
): Promise<JsonRpcProvider> {
  const node = await getNode(chainId);
  let provider = undefined;
  if (timeout === -1) {
    provider = new ethers.providers.JsonRpcProvider(node);
  } else {
    provider = new ethers.providers.JsonRpcProvider({
      url: node,
      timeout: timeout * 1000,
    });
  }
  provider['node'] = node;
  return provider;
}

/**
 * 获取钱包实例
 * @param abi
 */
export function getWallet(provider: JsonRpcProvider): Wallet {
  return new ethers.Wallet(process.env.ETHER_PRIVATE_KEY, provider);
}

/**
 * 获取Interface实例
 * @param abi
 */
export function getInterface(abi: any): Interface {
  return new ethers.utils.Interface(abi);
}

/**
 * 获取合约实例
 * @param address
 * @param abi
 * @param provider
 */
export function getContract(
  address: string,
  abi: any,
  provider: JsonRpcProvider | Wallet,
) {
  return new ethers.Contract(address, abi, provider);
}
