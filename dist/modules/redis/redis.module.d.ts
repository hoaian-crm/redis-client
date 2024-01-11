import { DynamicModule } from '@nestjs/common';
import { RedisDb } from '../../config/constants';
export type RedisConfig = {
    database: RedisDb;
};
export declare class RedisModule {
    static register(config: RedisConfig): DynamicModule;
}
