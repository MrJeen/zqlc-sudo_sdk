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
  per_block_time: number;
  node?: BALANCE_TYPE[];
  current_node?: string;
};

export const BSC_NETWORK: NETWORK_TYPE = {
  name: 'BSC',
  chainId: 56,
  coin_chainId: 56,
  coin_address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  transferIncr: 8,
  curve_linear_address: process.env.BSC_CURVE_LINEAR_ADDRESS ?? '',
  curve_exponential_address: process.env.BSC_CURVE_EXPONENTIAL_ADDRESS ?? '',
  platform_fee: toNumber(process.env.BSC_PLATFORM_FEE),
  swap_address: process.env.BSC_SWAP_MINING_ADDRESS ?? '',
  swap_coin: process.env.BSC_SWAP_COIN_ADDRESS ?? '',
  per_block_time: 3, // 单位:s
};

export const GOERLI_NETWORK: NETWORK_TYPE = {
  name: 'GOERLI',
  chainId: 5,
  coin_chainId: 1,
  coin_address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  transferIncr: 10,
  curve_linear_address: process.env.GOERLI_CURVE_LINEAR_ADDRESS ?? '',
  curve_exponential_address: process.env.GOERLI_CURVE_EXPONENTIAL_ADDRESS ?? '',
  platform_fee: toNumber(process.env.GOERLI_PLATFORM_FEE),
  swap_address: process.env.GOERLI_SWAP_MINING_ADDRESS ?? '',
  swap_coin: process.env.GOERLI_SWAP_COIN_ADDRESS ?? '',
  per_block_time: 12, // 单位:s
};

export const SEPOLIA_NETWORK: NETWORK_TYPE = {
  name: 'SEPOLIA',
  chainId: 11155111,
  coin_chainId: 1,
  coin_address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  transferIncr: 5,
  curve_linear_address: process.env.SEPOLIA_CURVE_LINEAR_ADDRESS ?? '',
  curve_exponential_address:
    process.env.SEPOLIA_CURVE_EXPONENTIAL_ADDRESS ?? '',
  platform_fee: toNumber(process.env.SEPOLIA_PLATFORM_FEE),
  swap_address: process.env.SEPOLIA_SWAP_MINING_ADDRESS ?? '',
  swap_coin: process.env.SEPOLIA_SWAP_COIN_ADDRESS ?? '',
  per_block_time: 12, // 单位:s
};

export const NETWORKS: NETWORK_TYPE[] = [];

export const CHAINS = {};

function initNetworks(chainIds: number[]) {
  if (chainIds.length) {
    for (const chainId of chainIds) {
      switch (chainId) {
        case BSC_NETWORK.chainId:
          NETWORKS.push(BSC_NETWORK);
          CHAINS[chainId] = BSC_NETWORK.name;
          CHAINS[BSC_NETWORK.name] = chainId;
          break;
        case GOERLI_NETWORK.chainId:
          NETWORKS.push(GOERLI_NETWORK);
          CHAINS[chainId] = GOERLI_NETWORK.name;
          CHAINS[GOERLI_NETWORK.name] = chainId;
          break;
        case SEPOLIA_NETWORK.chainId:
          NETWORKS.push(SEPOLIA_NETWORK);
          CHAINS[chainId] = SEPOLIA_NETWORK.name;
          CHAINS[SEPOLIA_NETWORK.name] = chainId;
          break;
        default:
          break;
      }
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
  const network = NETWORKS.find((network) => network.chainId == chainId);
  if (!network) {
    throw Error(`network #${chainId} not found`);
  }
  if (!network.node || !network.node.length) {
    // 节点初始化
    network.node = JSON.parse(process.env[network.name + '_NODE'] ?? '[]');
  }
  return network;
}
