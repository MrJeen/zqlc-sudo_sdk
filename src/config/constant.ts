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
  swap_address: string;
  per_block_time: number;
  node: BALANCE_TYPE[];
};

export const BSC_NETWORK: NETWORK_TYPE = {
  name: 'BSC',
  chainId: 56,
  transferIncr: 8,
  swap_address:
    process.env.BSC_SWAP_MINING_ADDRESS ||
    '0x86c37A2406e2fC4FD570c3acb0af206c85ee3556',
  per_block_time: 3, // 单位:s
  node: [
    {
      target:
        'https://nd-895-567-261.p2pify.com/440738727b074fde55a96ca30074afc4',
      weight: 1,
    },
    {
      target:
        'https://bsc-mainnet.nodereal.io/v1/84a707ab278a4dafaab661acae9501cd',
      weight: 1,
    },
    {
      target:
        'https://rpc.ankr.com/bsc/4cffe63aaba4fd15a91bcd9a65a8504fea15d67a0f268a1adb08f7b3a96ca910',
      weight: 1,
    },
  ],
};

export const networks = [BSC_NETWORK];

/**
 * 获取网络
 * @param chainId
 * @returns
 */
export function selectNetwork(chainId: number): NETWORK_TYPE {
  return networks.find((network) => network.chainId == chainId);
}
