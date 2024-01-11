"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisService = void 0;
const common_1 = require("@nestjs/common");
const redis_1 = require("redis");
const constants_1 = require("../../config/constants");
let RedisService = class RedisService {
    constructor(redisConfig) {
        this.redisConfig = redisConfig;
    }
    async onModuleInit() {
        console.log('Run vo day');
        this.client = (0, redis_1.createClient)(Object.assign({ socket: {
                host: process.env.REDIS_HOST,
                port: +process.env.REDIS_PORT,
            } }, this.redisConfig));
        this.client.on('error', (err) => {
            throw err;
        });
        await this.client.connect();
        console.log('Redis connected');
    }
    async set(key, value) {
        return this.client.set(key, JSON.stringify(value));
    }
    async get(key) {
        const result = await this.client.get(key);
        if (!result)
            return null;
        return JSON.parse(result);
    }
};
exports.RedisService = RedisService;
exports.RedisService = RedisService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.CONFIG_META_KEY)),
    __metadata("design:paramtypes", [Object])
], RedisService);
//# sourceMappingURL=redis.service.js.map