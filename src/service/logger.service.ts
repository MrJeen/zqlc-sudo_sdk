import Path from 'path';
import Log4js, { Logger } from 'log4js';
import Util from 'util';
import Moment from 'moment';
import StackTrace from 'stacktrace-js';
import Chalk from 'chalk';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { sendMessage } from '../utils/dingtalk.util';

// 内容跟踪类
export class ContextTrace {
  constructor(
    public readonly context: string,
    public readonly lineNumber?: number,
    public readonly columnNumber?: number,
  ) {}
}

@Injectable()
export class LoggerService {
  public logger: Logger;
  public errorLogger: Logger;

  constructor(private readonly configService: ConfigService) {
    this.init();
  }

  init() {
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
    Log4js.configure(this.configService.get('logger'));
    this.logger = Log4js.getLogger();
    this.errorLogger = Log4js.getLogger('error');
    // 设置level (生产环境仅打印部分日志即可，默认等级在config中已配置)
    const level = this.configService.get('logger_level');
    if (level) {
      this.logger.level = level;
    }
  }

  log(...args) {
    this.logger.log(this.getStackTrace(), JSON.stringify(args));
  }

  debug(...args) {
    this.logger.debug(this.getStackTrace(), JSON.stringify(args));
  }

  info(...args) {
    this.logger.info(this.getStackTrace(), JSON.stringify(args));
  }

  warn(...args) {
    this.logger.warn(this.getStackTrace(), JSON.stringify(args));
  }

  error(...args) {
    const msg = JSON.stringify(args);
    const trace = this.getStackTrace();
    this.errorLogger.error(trace, msg);
    this.notice(trace + msg);
  }

  fatal(...args) {
    const msg = JSON.stringify(args);
    const trace = this.getStackTrace();
    this.errorLogger.fatal(trace, msg);
    this.notice(trace + msg);
  }

  // 日志追踪，可以追溯到哪个文件、第几行第几列
  getStackTrace(deep = 2): string {
    const stackList: StackTrace.StackFrame[] = StackTrace.getSync();
    const stackInfo: StackTrace.StackFrame = stackList[deep];

    const lineNumber: number = stackInfo.lineNumber;
    const columnNumber: number = stackInfo.columnNumber;
    const fileName: string = stackInfo.fileName;
    const basename: string = Path.basename(fileName);
    const functionName: string = stackInfo.functionName;
    const appName = this.configService.get('app_name');
    const env = this.configService.get('app_env');
    return `${appName}:${env}:${basename}:${functionName}(line: ${lineNumber}, column: ${columnNumber}):`;
  }

  notice(msg) {
    sendMessage(msg).catch((error) => {
      // 此时不可调用error方法，会进入死循环
      this.warn(error);
    });
  }
}
