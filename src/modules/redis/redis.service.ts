import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { RedisClientType, createClient } from 'redis';
import { CONFIG_META_KEY } from '../../config/constants';
import { RedisConfig } from './redis.module';

@Injectable()
export class RedisService implements OnModuleInit {
  private client: RedisClientType;
  constructor(@Inject(CONFIG_META_KEY) private redisConfig: RedisConfig) {}

  async onModuleInit() {
    this.client = createClient({
      socket: {
        host: process.env.REDIS_HOST,
        port: +process.env.REDIS_PORT,
      },
      ...this.redisConfig,
    });
    this.client.on('error', (err) => {
      throw err;
    });
    await this.client.connect();
  }

  async set(key: string, value: any) {
    return this.client.set(key, JSON.stringify(value));
  }

  async get<T>(key: string) {
    const result = await this.client.get(key);
    if (!result) return null;
    return JSON.parse(result) as T;
  }
}
