import { toNumber } from '../utils/helper.util';
import dotenv from 'dotenv';

// 加载 .env 文件中的环境变量
dotenv.config();

export type BALANCE_TYPE = {
  target: string;
  weight: number;
  currentWeight?: number;
};

export type NETWORK_TYPE = {
  name: string;
  chainId: number;
  // 代币链
  coin_chainId: number;
  // 代币地址
  coin_address: string;
  transferIncr: number;
  // 线性曲线地址
  curve_linear_address: string;
  // 指数曲线地址
  curve_exponential_address: string;
  // 平台手续费
  platform_fee: number;
  // 池子合约
  swap_address: string;
  // 挖矿代币
  swap_coin: string;
  // 资金账户以及池子预算控制合约
  asset_manager_address: string;
  per_block_time: number;
  node?: BALANCE_TYPE[];
  current_node?: string;
};

export const BSC_NETWORK: NETWORK_TYPE = {
  name: 'BSC',
  chainId: 56,
  coin_chainId: 56,
  coin_address: process.env.BSC_COIN_ADDRESS ?? '',
  transferIncr: 8,
  curve_linear_address: process.env.BSC_CURVE_LINEAR_ADDRESS ?? '',
  curve_exponential_address: process.env.BSC_CURVE_EXPONENTIAL_ADDRESS ?? '',
  platform_fee: eval(process.env.BSC_PLATFORM_FEE),
  swap_address: process.env.BSC_SWAP_MINING_ADDRESS ?? '',
  swap_coin: process.env.BSC_SWAP_COIN_ADDRESS ?? '',
  per_block_time: 3, // 单位:s
  asset_manager_address: process.env.BSC_ASSET_MANAGER_ADDRESS ?? '',
};

export const GOERLI_NETWORK: NETWORK_TYPE = {
  name: 'GOERLI',
  chainId: 5,
  coin_chainId: 1,
  coin_address: process.env.GOERLI_COIN_ADDRESS ?? '',
  transferIncr: 10,
  curve_linear_address: process.env.GOERLI_CURVE_LINEAR_ADDRESS ?? '',
  curve_exponential_address: process.env.GOERLI_CURVE_EXPONENTIAL_ADDRESS ?? '',
  platform_fee: eval(process.env.GOERLI_PLATFORM_FEE),
  swap_address: process.env.GOERLI_SWAP_MINING_ADDRESS ?? '',
  swap_coin: process.env.GOERLI_SWAP_COIN_ADDRESS ?? '',
  per_block_time: 12, // 单位:s
  asset_manager_address: process.env.GOERLI_ASSET_MANAGER_ADDRESS ?? '',
};

export const SEPOLIA_NETWORK: NETWORK_TYPE = {
  name: 'SEPOLIA',
  chainId: 11155111,
  coin_chainId: 1,
  coin_address: process.env.SEPOLIA_COIN_ADDRESS ?? '',
  transferIncr: 5,
  curve_linear_address: process.env.SEPOLIA_CURVE_LINEAR_ADDRESS ?? '',
  curve_exponential_address:
    process.env.SEPOLIA_CURVE_EXPONENTIAL_ADDRESS ?? '',
  platform_fee: eval(process.env.SEPOLIA_PLATFORM_FEE),
  swap_address: process.env.SEPOLIA_SWAP_MINING_ADDRESS ?? '',
  swap_coin: process.env.SEPOLIA_SWAP_COIN_ADDRESS ?? '',
  per_block_time: 12, // 单位:s
  asset_manager_address: process.env.SEPOLIA_ASSET_MANAGER_ADDRESS ?? '',
};

export const BASE_NETWORK: NETWORK_TYPE = {
  name: 'BASE',
  chainId: 8453,
  coin_chainId: 1,
  coin_address: process.env.BASE_COIN_ADDRESS ?? '',
  transferIncr: 5,
  curve_linear_address: process.env.BASE_CURVE_LINEAR_ADDRESS ?? '',
  curve_exponential_address: process.env.BASE_CURVE_EXPONENTIAL_ADDRESS ?? '',
  platform_fee: eval(process.env.BASE_PLATFORM_FEE),
  swap_address: process.env.BASE_SWAP_MINING_ADDRESS ?? '',
  swap_coin: process.env.BASE_SWAP_COIN_ADDRESS ?? '',
  per_block_time: 2, // 单位:s
  asset_manager_address: process.env.BASE_ASSET_MANAGER_ADDRESS ?? '',
};

const networkMap = {
  [GOERLI_NETWORK.chainId]: GOERLI_NETWORK,
  [BSC_NETWORK.chainId]: BSC_NETWORK,
  [SEPOLIA_NETWORK.chainId]: SEPOLIA_NETWORK,
  [BASE_NETWORK.chainId]: BASE_NETWORK,
};

export const NETWORKS: NETWORK_TYPE[] = [];

export const CHAINS = {};

function initNetworks(chainIds: number[]) {
  if (chainIds.length) {
    for (const chainId of chainIds) {
      const network = networkMap[chainId];
      if (!network) {
        continue;
      }
      NETWORKS.push(network);
      CHAINS[chainId] = network.name;
      CHAINS[network.name] = chainId;
    }
  }
}

// 初始化chain配置
const supportChains = process.env.SUPPORT_CHAINS.split(',')
  .filter((item: string) => item != '')
  .map((item: string) => toNumber(item));
initNetworks(supportChains);

/**
 * 获取网络
 * @param chainId
 * @returns
 */
export function selectNetwork(chainId: number): NETWORK_TYPE {
  const network = networkMap[chainId];
  if (!network) {
    throw Error(`network #${chainId} not found`);
  }
  return network;
}
