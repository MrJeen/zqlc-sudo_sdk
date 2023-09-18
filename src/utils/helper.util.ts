import { createHash } from 'crypto';
import { BALANCE_TYPE } from '../config/constant';
import { Logger } from './logger.util';
import { getOssOmBase64Client } from './oss.util';

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
export function loadBalance(data: BALANCE_TYPE[]) {
  let current: any;
  let totalWeught = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].weight === undefined) {
      data[i].weight = 1;
    }
    totalWeught += data[i].weight;
    if (data[i].currentWeight === undefined) {
      data[i].currentWeight = 0;
    }
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

/**
 * 转数字
 * @param target
 * @returns
 */
export function toNumber(target: any) {
  const result = Number(target);
  return isNaN(result) ? 0 : result;
}

/**
 * md5
 * @param data
 * @returns
 */
export function md5(data: string) {
  return createHash('md5').update(data).digest('hex');
}

// 获取阿里云OSS存储的图片内容
export async function transformNftImg(url: string) {
  try {
    const host = `http://${process.env.OSS_BUCKET}.${process.env.OSS_REGION}.aliyuncs.com/`;

    if (url.startsWith(host)) {
      const name = url.replace(host, '');
      const client = getOssOmBase64Client({});
      const result = await client.get(name);
      url = Buffer.from(result.content).toString();
    }
  } catch (error) {
    Logger.error({
      title: 'transformNftImg',
      data: url,
      error: error,
    });
  }

  return url;
}

/**
 * 取表后缀
 * @param address
 * @param chunk
 * @returns
 */
export function getTableSuffix(address: string, chunk = 200) {
  // 取前6位和后四位数字
  const prefix = address.slice(0, 6);
  const suffix = address.slice(-4);

  // 拼接为十六进制数值
  const combinedHex = prefix + suffix;
  // 转换为十进制
  const decimalValue = parseInt(combinedHex);
  // 取模
  return decimalValue % chunk;
}
