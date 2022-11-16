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
