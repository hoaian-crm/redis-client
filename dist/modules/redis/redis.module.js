"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RedisModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisModule = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../config/constants");
const redis_service_1 = require("./redis.service");
let RedisModule = RedisModule_1 = class RedisModule {
    static register(config) {
        return {
            module: RedisModule_1,
            providers: [
                {
                    provide: constants_1.CONFIG_META_KEY,
                    useValue: config,
                },
                redis_service_1.RedisService,
            ],
            exports: [redis_service_1.RedisService],
        };
    }
};
exports.RedisModule = RedisModule;
exports.RedisModule = RedisModule = RedisModule_1 = __decorate([
    (0, common_1.Module)({})
], RedisModule);
//# sourceMappingURL=redis.module.js.map