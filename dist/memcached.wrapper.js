"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const MemcachedClient = require("memcached");
class Memcached {
    constructor(uri, options) {
        this.client = new MemcachedClient(uri, options);
    }
    getOrSet(key, valueHandler, lifetime) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.get(key);
            if (!result) {
                result = yield valueHandler();
                this.set(key, result, lifetime);
            }
            return result;
        });
    }
    touch(key, lifetime) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(((resolve, reject) => {
                this.client.touch(key, lifetime, err => err ? reject(err) : resolve());
            }));
        });
    }
    get(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(((resolve, reject) => {
                this.client.get(key, (err, data) => err ? reject(err) : resolve(data));
            }));
        });
    }
    gets(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(((resolve, reject) => {
                this.client.gets(key, (err, data) => err ? reject(err) : resolve(data));
            }));
        });
    }
    getMulti(keys) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(((resolve, reject) => {
                this.client.getMulti(keys, (err, data) => err ? reject(err) : resolve(data));
            }));
        });
    }
    set(key, value, lifetime) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(((resolve, reject) => {
                this.client.set(key, value, lifetime, err => err ? reject(err) : resolve());
            }));
        });
    }
    replace(key, value, lifetime) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(((resolve, reject) => {
                this.client.replace(key, value, lifetime, err => err ? reject(err) : resolve());
            }));
        });
    }
    cas(key, value, lifetime, cas) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(((resolve, reject) => {
                this.client.cas(key, value, lifetime, cas, err => err ? reject(err) : resolve());
            }));
        });
    }
    append(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(((resolve, reject) => {
                this.client.append(key, value, err => err ? reject(err) : resolve());
            }));
        });
    }
    prepend(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(((resolve, reject) => {
                this.client.append(key, value, err => err ? reject(err) : resolve());
            }));
        });
    }
    incr(key, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(((resolve, reject) => {
                this.client.incr(key, amount, err => err ? reject(err) : resolve());
            }));
        });
    }
    decr(key, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(((resolve, reject) => {
                this.client.decr(key, amount, err => err ? reject(err) : resolve());
            }));
        });
    }
    del(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(((resolve, reject) => {
                this.client.del(key, err => err ? reject(err) : resolve());
            }));
        });
    }
    on(event, callback) {
        this.client.on(event, callback);
    }
}
exports.Memcached = Memcached;
