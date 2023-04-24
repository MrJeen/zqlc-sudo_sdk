import { toNumber } from '../utils/helper.util';
import dotenv from 'dotenv';

// 加载 .env 文件中的环境变量
dotenv.config();

// 线性曲线地址
export const CURVE_LINEAR_ADDRESS =
  process.env.CURVE_LINEAR_ADDRESS ??
  '0x62E83F7c4ED486F22def0e0614Fb8254df64cC17';

// 指数曲线地址
export const CURVE_EXPONENTIAL_ADDRESS =
  process.env.CURVE_EXPONENTIAL_ADDRESS ??
  '0xED895091191865930E99a67fBfaD5B7Bfb14a290';

// 平台手续费比例
export const PLATFORM_FEE = 0.1;

export type BALANCE_TYPE = {
  target: string;
  weight: number;
  currentWeight?: number;
};

export type NETWORK_TYPE = {
  name: string;
  chainId: number;
  transferIncr: number;
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
  transferIncr: 8,
  swap_address: process.env.BSC_SWAP_MINING_ADDRESS ?? '',
  swap_coin: process.env.BSC_SWAP_COIN_ADDRESS ?? '',
  per_block_time: 3, // 单位:s
};

export const GOERLI_NETWORK: NETWORK_TYPE = {
  name: 'GOERLI',
  chainId: 5,
  transferIncr: 10,
  swap_address: process.env.GOERLI_SWAP_MINING_ADDRESS ?? '',
  swap_coin: process.env.GOERLI_SWAP_COIN_ADDRESS ?? '',
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
