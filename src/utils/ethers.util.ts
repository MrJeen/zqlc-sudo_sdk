import { ethers } from 'ethers';
import { JsonRpcProvider } from '@ethersproject/providers/src.ts/json-rpc-provider';
import { Interface } from '@ethersproject/abi/src.ts/interface';
import { CHAIN } from '../entity/base.entity';

/**
 * 获取节点
 * @param chainId
 */
export function getNode(chainId: number): string {
  // eg: EHT_NODE
  return process.env[CHAIN[chainId] + '_NODE'];
}

/**
 * 获取provider
 * @param chainId
 */
export function getJsonRpcProvider(chainId: number): JsonRpcProvider {
  const node = getNode(chainId);
  return new ethers.providers.JsonRpcProvider(node);
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
  provider: JsonRpcProvider,
) {
  return new ethers.Contract(address, abi, provider);
}
