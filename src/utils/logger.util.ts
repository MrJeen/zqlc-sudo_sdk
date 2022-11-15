import configuration from '../config/base.config';
import Log4js from 'log4js';
import Util from 'util';
import Moment from 'moment';
import StackTrace from 'stacktrace-js';
import Path from 'path';
import { sendMessage } from './dingtalk.util';
import Chalk from 'chalk';
import _ from 'lodash';

// 内容跟踪类
export class ContextTrace {
  constructor(
    public readonly context: string,
    public readonly lineNumber?: number,
    public readonly columnNumber?: number,
  ) {}
}

// 添加自定义布局，需要在 log4js.configure() 之前调用
Log4js.addLayout('Awesome-nest', (logConfig: any) => {
  return (logEvent: Log4js.LoggingEvent): string => {
    let moduleName = '';
    let position = '';

    //日志组装
    const messageList: string[] = [];
    logEvent.data.forEach((value: any) => {
      if (value instanceof ContextTrace) {
        moduleName = value.context;
        //显示触发日志的坐标（行/列）
        if (value.lineNumber && value.columnNumber) {
          position = `${value.lineNumber},${value.columnNumber}`;
        }
        return;
      }
      if (typeof value !== 'string') {
        value = Util.inspect(value, false, 3, true);
      }
      messageList.push(value);
    });
    //日志组成部分
    const messageOutput: string = messageList.join(' ');
    const positionOutput: string = position ? `[${position}]` : '';
    const typeOutput = `[${logConfig.type}]${logEvent.pid.toString()} - `;
    const dateOutput = `${Moment(logEvent.startTime).format(
      'YYYY-MM-DD HH:mm:ss',
    )}`;
    const moduleOutput: string = moduleName
      ? `[${moduleName}]`
      : '[LoggerService]';
    let levelOutput = `[${logEvent.level}]${messageOutput}`;
    //根据日志级别，用不同颜色区分
    switch (logEvent.level.toString()) {
      case Log4js.levels.DEBUG.levelStr:
        levelOutput = Chalk.green(levelOutput);
        break;

      case Log4js.levels.INFO.levelStr:
        levelOutput = Chalk.cyan(levelOutput);
        break;

      case Log4js.levels.WARN.levelStr:
        levelOutput = Chalk.yellow(levelOutput);
        break;

      case Log4js.levels.ERROR.levelStr:
        levelOutput = Chalk.red(levelOutput);
        break;

      case Log4js.levels.FATAL.levelStr:
        levelOutput = Chalk.hex('#DD4C35')(levelOutput);
        break;

      default:
        levelOutput = Chalk.grey(levelOutput);
        break;
    }
    return `${levelOutput} ${positionOutput} ${Chalk.green(
      typeOutput,
    )} ${dateOutput} ${Chalk.yellow(moduleOutput)}`;
  };
});

// 注入配置(这时候还加载不了.env配置，注意不要引用.env里的参数)
const config = configuration();
Log4js.configure(_.get(config, 'logger'));
const logger = Log4js.getLogger();
const errorLogger = Log4js.getLogger('error');

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

  static checkLevel() {
    const level = process.env.LOGGER_LEVEL;
    if (level) {
      logger.level = level;
    }
    return logger;
  }

  static log(...args) {
    this.checkLevel().log(this.getStackTrace(), JSON.stringify(args));
  }

  static debug(...args) {
    this.checkLevel().debug(this.getStackTrace(), JSON.stringify(args));
  }

  static info(...args) {
    this.checkLevel().info(this.getStackTrace(), JSON.stringify(args));
  }

  static warn(...args) {
    this.checkLevel().warn(this.getStackTrace(), JSON.stringify(args));
  }

  static error(...args) {
    const msg = JSON.stringify(args);
    const trace = this.getStackTrace();
    errorLogger.error(trace, msg);
    sendMessage(trace + msg);
  }

  static fatal(...args) {
    const msg = JSON.stringify(args);
    const trace = this.getStackTrace();
    errorLogger.fatal(trace, msg);
    sendMessage(trace + msg);
  }
}
