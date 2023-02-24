import path from 'path';

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
        numBackups: 120,
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
        numBackups: 120,
        keepFileExt: true,
      },
    },
    categories: {
      default: {
        appenders: ['console', 'access'],
        level: 'DEBUG', // 设置记录日志的最低等级
      },
      error: {
        appenders: ['console', 'error'],
        level: 'ERROR', // 设置记录日志的最低等级
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
    password: process.env.REDIS_PASSWORD || '',
    keyPrefix: `${process.env.APP_NAME}:${process.env.APP_ENV}:` || 'redis',
  },
});
