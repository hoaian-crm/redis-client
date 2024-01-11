import { OnModuleInit } from '@nestjs/common';
import { RedisConfig } from './redis.module';
export declare class RedisService implements OnModuleInit {
    private redisConfig;
    private client;
    constructor(redisConfig: RedisConfig);
    onModuleInit(): Promise<void>;
    set(key: string, value: any): Promise<string>;
    get<T>(key: string): Promise<T>;
}
