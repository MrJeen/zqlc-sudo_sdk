import configuration from '../config/base.config';
import Log4js from 'log4js';
import StackTrace from 'stacktrace-js';
import Path from 'path';
import { sendMessage } from './dingtalk.util';
import _ from 'lodash';

// 注入配置(这时候还加载不了.env配置，注意不要引用.env里的参数)
const config = configuration();
Log4js.configure(_.get(config, 'logger'));
const logger = Log4js.getLogger();

export class Logger {
  // 日志追踪，可以追溯到哪个文件、第几行第几列
  static getStackTrace(deep = 2): string {
    // 重新获取一次配置
    const stackList: StackTrace.StackFrame[] = StackTrace.getSync();
    const stackInfo: StackTrace.StackFrame = stackList[deep];

    const lineNumber: number = stackInfo.lineNumber;
    const columnNumber: number = stackInfo.columnNumber;
    const fileName: string = stackInfo.fileName;
    const basename: string = Path.basename(fileName);
    const functionName: string = stackInfo.functionName;
    const appName = process.env.APP_NAME;
    const env = process.env.APP_ENV;
    return `${appName}:${env}:${basename}:${functionName}(line: ${lineNumber}, column: ${columnNumber}):`;
  }

  static log(...args) {
    logger.log(this.getStackTrace(), JSON.stringify(args));
  }

  static debug(...args) {
    logger.debug(this.getStackTrace(), JSON.stringify(args));
  }

  static info(...args) {
    logger.info(this.getStackTrace(), JSON.stringify(args));
  }

  static warn(...args) {
    logger.warn(this.getStackTrace(), JSON.stringify(args));
  }

  static error(...args) {
    const msg = JSON.stringify(args);
    const trace = this.getStackTrace();
    logger.error(trace, msg);
    sendMessage(trace + msg);
  }

  static fatal(...args) {
    const msg = JSON.stringify(args);
    const trace = this.getStackTrace();
    logger.fatal(trace, msg);
    sendMessage(trace + msg);
  }
}
