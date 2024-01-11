import { DynamicModule, Module } from '@nestjs/common';
import { CONFIG_META_KEY, RedisDb } from '../../config/constants';
import { RedisService } from './redis.service';

export type RedisConfig = {
  database: RedisDb;
};

@Module({})
export class RedisModule {
  static register(config: RedisConfig): DynamicModule {
    return {
      module: RedisModule,
      providers: [
        {
          provide: CONFIG_META_KEY,
          useValue: config,
        },
        RedisService,
      ],
      exports: [RedisService],
    };
  }
}
