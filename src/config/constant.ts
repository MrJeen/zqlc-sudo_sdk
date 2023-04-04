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
  swap_address:
    process.env.BSC_SWAP_MINING_ADDRESS ||
    '0x86c37A2406e2fC4FD570c3acb0af206c85ee3556',
  swap_coin: '0xA8befE3A797Faf16700827877F9bE9663cC01Ce9',
  per_block_time: 3, // 单位:s
};

export const networks = [BSC_NETWORK];

/**
 * 获取网络
 * @param chainId
 * @returns
 */
export function selectNetwork(chainId: number): NETWORK_TYPE {
  const network = networks.find((network) => network.chainId == chainId);
  if (!network) {
    throw Error(`network #${chainId} not found`);
  }
  if (!network.node) {
    // 节点初始化
    network.node = JSON.parse(process.env[network.name + '_NODE'] ?? '{}');
  }
  return network;
}
