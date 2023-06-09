import path from 'path';
import dotenv from 'dotenv';

// 加载 .env 文件中的环境变量
dotenv.config();

const baseLogPath = path.join(process.cwd(), 'logs');
export default () => ({
  /******************************** 基础配置 ***********************************/
  app_name: process.env.APP_NAME || 'app_name',
  app_env: process.env.APP_ENV || 'local',

  /******************************** 日志配置 ***********************************/
  logger: {
    appenders: {
      console: {
        //打印到控制台
        type: 'console',
      },
      access: {
        type: 'dateFile',
        filename: `${baseLogPath}/access.log`,
        alwaysIncludePattern: true,
        layout: {
          type: 'pattern',
          pattern:
            '{"date":"%d{yyyy-MM-dd hh:mm:ss.SSS}","level":"%p","category":"%c","host":"%h","pid":"%z","data":\'%m\'}',
        },
        //日志文件按日期切割
        pattern: 'yyyyMMdd',
        // 每个日志文件最大300M
        maxLogSize: 314572800,
        // 最多保留10个文件
        numBackups: 10,
        // 开启日志压缩
        compress: true,
        keepFileExt: true,
      },
      error: {
        type: 'dateFile',
        filename: `${baseLogPath}/error.log`,
        alwaysIncludePattern: true,
        layout: {
          type: 'pattern',
          pattern:
            '{"date":"%d{yyyy-MM-dd hh:mm:ss.SSS}","level":"%p","category":"%c","host":"%h","pid":"%z","data":\'%m\'}',
        },
        //日志文件按日期切割
        pattern: 'yyyyMMdd',
        // 每个日志文件最大300M
        maxLogSize: 314572800,
        // 最多保留10个文件
        numBackups: 10,
        // 开启日志压缩
        compress: true,
        keepFileExt: true,
      },
    },
    categories: {
      default: {
        appenders: ['console', 'access'],
        level: process.env.LOGGER_LEVEL ?? 'debug', // 设置记录日志的最低等级
      },
      error: {
        appenders: ['console', 'error'],
        level: process.env.LOGGER_ERROR_LEVEL ?? 'error', // 设置记录日志的最低等级
      },
    },
    // 使用pm2来管理项目时打开
    pm2: true,
    // 会根据 pm2 分配的 id 进行区分，以免各进程在写日志时造成冲突
    pm2InstanceVar: 'INSTANCE_ID',
    disableClustering: true,
  },
  logger_level: process.env.LOGGER_LEVEL,

  /******************************** 数据库配置 ***********************************/
  database: {
    type: 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: ~~process.env.POSTGRES_PORT || 5432,
    username: process.env.POSTGRES_USERNAME || 'root',
    password: process.env.POSTGRES_PASSWORD || 'root',
    database: process.env.POSTGRES_DATABASE || 'test',
    schema: process.env.POSTGRES_SCHEMA || 'test',
    autoLoadEntities: true,
  },

  database_openmeta: {
    type: 'postgres',
    host: process.env.POSTGRES_OPENMETA_HOST || 'localhost',
    port: ~~process.env.POSTGRES_OPENMETA_PORT || 5432,
    username: process.env.POSTGRES_OPENMETA_USERNAME || 'root',
    password: process.env.POSTGRES_OPENMETA_PASSWORD || 'root',
    database: process.env.POSTGRES_OPENMETA_DATABASE || 'test',
    schema: process.env.POSTGRES_OPENMETA_SCHEMA || 'test',
    autoLoadEntities: true,
  },

  /******************************** 钉钉配置 ***********************************/
  dingtalk: {
    webhook: process.env.DINGDING_ROBOT_WEBHOOK,
    secret: process.env.DINGDING_ROBOT_SECRET,
  },

  /******************************** redis配置 ***********************************/
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: ~~process.env.REDIS_PORT || 6379,
    db: ~~process.env.REDIS_DB || 9,
    username: process.env.REDIS_USER_NAME || '',
    password: process.env.REDIS_PASSWORD || '',
    keyPrefix: `nft_amm:${process.env.APP_ENV}:` || 'redis',
  },
});
