import { Transform } from 'class-transformer';
import _ from 'lodash';

// 移除小数点后面多余的0，小数点后面只有0时，移除小数
export function FormatNumber() {
  return Transform(({ value }) => value.replace(/(?<=\.\d*)0+$|\.0*$/, ''));
}

// 转为小写字母
export function ToLowerCase() {
  return Transform(({ value }) => (value ? value.toLowerCase() : value));
}

// 转为大写字母
export function ToUpperCase() {
  return Transform(({ value }) => (value ? value.toLowerCase() : value));
}

// 移除字符串两端空格或指定字符
export function Trim(char = ' ') {
  return Transform(({ value }) => (value ? _.trim(value, char) : value));
}