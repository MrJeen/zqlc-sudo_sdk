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

// 配置
const config = configuration();

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

// 注入配置
Log4js.configure(_.get(config, 'logger'));
const logger = Log4js.getLogger();
const errorLogger = Log4js.getLogger('error');
// 设置level (生产环境仅打印部分日志即可，默认等级在config中已配置)
const level = _.get(config, 'logger_level');
if (level) {
  logger.level = level;
}

// 日志追踪，可以追溯到哪个文件、第几行第几列
function getStackTrace(deep = 2): string {
  const stackList: StackTrace.StackFrame[] = StackTrace.getSync();
  const stackInfo: StackTrace.StackFrame = stackList[deep];

  const lineNumber: number = stackInfo.lineNumber;
  const columnNumber: number = stackInfo.columnNumber;
  const fileName: string = stackInfo.fileName;
  const basename: string = Path.basename(fileName);
  const functionName: string = stackInfo.functionName;
  const appName = _.get(config, 'app_name');
  const env = _.get(config, 'app_env');
  return `${appName}:${env}:${basename}:${functionName}(line: ${lineNumber}, column: ${columnNumber}):`;
}

function notice(msg) {
  sendMessage(msg).catch();
}

export class Logger {
  static log(...args) {
    logger.log(getStackTrace(), JSON.stringify(args));
  }

  static debug(...args) {
    logger.debug(getStackTrace(), JSON.stringify(args));
  }

  static info(...args) {
    logger.info(getStackTrace(), JSON.stringify(args));
  }

  static warn(...args) {
    logger.warn(getStackTrace(), JSON.stringify(args));
  }

  static error(...args) {
    const msg = JSON.stringify(args);
    const trace = getStackTrace();
    errorLogger.error(trace, msg);
    notice(trace + msg);
  }

  static fatal(...args) {
    const msg = JSON.stringify(args);
    const trace = getStackTrace();
    errorLogger.fatal(trace, msg);
    notice(trace + msg);
  }
}
