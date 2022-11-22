import { Transform } from 'class-transformer';
import _ from 'lodash';
import BigNumber from 'bignumber.js';

// 移除小数点后面多余的0，小数点后面只有0时，移除小数
export function FormatNumber() {
  return Transform(({ value }) => (value ? BigNumber(value).toFixed() : value));
}

// 转为小写字母
export function ToLowerCase() {
  return Transform(({ value }) => (value ? value.toLowerCase() : value));
}

// 转为大写字母
export function ToUpperCase() {
  return Transform(({ value }) => (value ? value.toUpperCase() : value));
}

// 移除字符串两端空格或指定字符
export function Trim(char = ' ') {
  return Transform(({ value }) => (value ? _.trim(value, char) : value));
}

// 复制其他键值
export function Duplicate(key) {
  return Transform(({ value, obj }) => value ?? obj[key]);
}
