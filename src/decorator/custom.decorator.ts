import { Transform, TransformOptions } from 'class-transformer';
import _ from 'lodash';
import BigNumber from 'bignumber.js';

// 移除小数点后面多余的0，小数点后面只有0时，移除小数
export function FormatNumber(options?: TransformOptions) {
  return Transform(
    ({ value }) => (value ? BigNumber(value).toString() : value),
    options,
  );
}

// 转为小写字母
export function ToLowerCase(options?: TransformOptions) {
  return Transform(
    ({ value }) => (value ? value.toLowerCase() : value),
    options,
  );
}

// 转为大写字母
export function ToUpperCase(options?: TransformOptions) {
  return Transform(
    ({ value }) => (value ? value.toUpperCase() : value),
    options,
  );
}

// 移除字符串两端空格或指定字符
export function Trim(char = ' ', options?: TransformOptions) {
  return Transform(
    ({ value }) => (value ? _.trim(value, char) : value),
    options,
  );
}

// 复制其他键值
export function Duplicate(key: string, options?: TransformOptions) {
  return Transform(({ value, obj }) => value ?? obj[key], options);
}
