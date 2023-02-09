export interface BalanceData {
  target: string;
  weight: number;
  currentWeight?: number;
}

export type RPC_NODE_TYPE = Record<string, BalanceData[]>;

export const RPC_NODE: RPC_NODE_TYPE = {
  1: [
    {
      target:
        'https://nd-673-616-845.p2pify.com/a636188bb9861ca132c7079dd1cd839c',
      weight: 1,
    },
  ],
  56: [
    {
      target:
        'https://nd-895-567-261.p2pify.com/440738727b074fde55a96ca30074afc4',
      weight: 1,
    },
  ],
  280: [
    {
      target: 'https://zksync2-testnet.zksync.dev/',
      weight: 1,
    },
  ],
  137: [{ target: 'https://polygon-rpc.com', weight: 1 }],
  5: [
    {
      target:
        'https://eth-goerli.g.alchemy.com/v2/Kf2SGWAtzqwWNR9sbO3JJwmAJ55ij_BW',
      weight: 1,
    },
  ],
  42161: [
    {
      target: 'https://endpoints.omniatech.io/v1/arbitrum/one/public',
      weight: 1,
    },
  ],
  421613: [
    {
      target: 'https://goerli-rollup.arbitrum.io/rpc',
      weight: 1,
    },
  ],
};

// 线性曲线地址
export const CURVE_LINEAR_ADDRESS =
  process.env.CURVE_LINEAR_ADDRESS ??
  '0x62E83F7c4ED486F22def0e0614Fb8254df64cC17';

// 指数曲线地址
export const CURVE_EXPONENTIAL_ADDRESS =
  process.env.CURVE_EXPONENTIAL_ADDRESS ??
  '0xED895091191865930E99a67fBfaD5B7Bfb14a290';
