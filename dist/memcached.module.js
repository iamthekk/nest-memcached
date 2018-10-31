"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var MemcachedModule_1;
const memcached_wrapper_1 = require("./memcached.wrapper");
const common_1 = require("@nestjs/common");
const constants_1 = require("./constants");
let MemcachedModule = MemcachedModule_1 = class MemcachedModule {
    static register(uri, options) {
        const connectionProvider = {
            provide: constants_1.MEMCACHED_PROVIDER,
            useFactory: () => __awaiter(this, void 0, void 0, function* () { return yield new memcached_wrapper_1.Memcached(uri, options); }),
        };
        return {
            module: MemcachedModule_1,
            components: [connectionProvider],
            exports: [connectionProvider],
        };
    }
    static registerByBoot(options) {
        const connectionProvider = {
            provide: constants_1.MEMCACHED_PROVIDER,
            useFactory: (boot) => {
                const opts = boot.get(options.path);
                return new memcached_wrapper_1.Memcached(opts.uri, opts);
            },
            inject: ['BootstrapProvider']
        };
        return {
            module: MemcachedModule_1,
            components: [connectionProvider],
            exports: [connectionProvider],
        };
    }
    static registerByConsul(options) {
        const connectionProvider = {
            provide: 'MemcachedClient',
            useFactory: (config) => __awaiter(this, void 0, void 0, function* () {
                const opts = yield config.get(options.path);
                return new memcached_wrapper_1.Memcached(opts.uri, opts);
            }),
            inject: ['ConsulConfigClient']
        };
        return {
            module: MemcachedModule_1,
            components: [connectionProvider],
            exports: [connectionProvider],
        };
    }
};
MemcachedModule = MemcachedModule_1 = __decorate([
    common_1.Global(),
    common_1.Module({})
], MemcachedModule);
exports.MemcachedModule = MemcachedModule;
