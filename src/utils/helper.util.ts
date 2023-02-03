import { BalanceData } from 'config/constant';

/**
 * pm2 0实例
 */
export const ZERO_INSTANCE = '0';

/**
 * 未使用pm2，或者为pm2指定进程
 */
export function isDirectInstance(instance: string): boolean {
  if (process.env.NODE_APP_INSTANCE === undefined) {
    return true;
  }
  return process.env.NODE_APP_INSTANCE === instance;
}

/**
 * 等待函数
 * @param milliseconds 毫秒
 */
export function sleep(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

/**
 * 加权平滑轮询(负载均衡)
 */
export function loadBalance(data: BalanceData[]) {
  let current: any;
  let totalWeught = 0;
  for (let i = 0; i < data.length; i++) {
    totalWeught += data[i].weight;
    data[i].currentWeight += data[i].weight;
    if (!current) {
      current = data[i];
    } else {
      if (current.currentWeight < data[i].currentWeight) {
        current = data[i];
      }
    }
  }

  // 当前选中权重减去总权重
  current.currentWeight -= totalWeught;

  return current.target;
}
