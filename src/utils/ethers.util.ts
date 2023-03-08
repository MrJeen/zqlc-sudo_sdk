import { ethers, Wallet } from 'ethers';
import { JsonRpcProvider } from '@ethersproject/providers/src.ts/json-rpc-provider';
import { Interface } from '@ethersproject/abi/src.ts/interface';
import { loadBalance } from './helper.util';
import { selectNetwork } from '../config/constant';

/**
 * 获取节点
 * @param chainId
 */
export const getNode = (chainId: number): string => {
  const network = selectNetwork(chainId);
  if (!network) {
    throw Error(`network #${chainId} not found`);
  }
  return loadBalance(network.node);
};

/**
 * 获取provider
 * @param chainId
 */
export function getJsonRpcProvider(chainId: number): JsonRpcProvider {
  const node = getNode(chainId);
  const provider = new ethers.providers.JsonRpcProvider(node);
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
