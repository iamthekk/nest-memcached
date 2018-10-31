import { DynamicModule } from '@nestjs/common';
import { Options, BootOptions, ConfigOptions } from './memcached.options';
export declare class MemcachedModule {
    static register(uri: string[], options: Options): DynamicModule;
    static registerByBoot(options: BootOptions): DynamicModule;
    static registerByConsul(options: ConfigOptions): DynamicModule;
}
