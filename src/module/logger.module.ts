import { Global, Module } from '@nestjs/common';
import { LoggerService } from '../service/logger.service';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config/configuration';

@Global()
@Module({
  imports: [
    // 配置可以覆盖（在项目配置一遍即可）
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
  ],
  providers: [LoggerService],
  exports: [LoggerService],
})
export class LoggerModule {}
