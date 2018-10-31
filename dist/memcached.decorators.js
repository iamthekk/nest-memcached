"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
exports.InjectMemcachedClient = () => common_1.Inject('MemcachedClient');
