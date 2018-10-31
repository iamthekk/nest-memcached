import { Options } from './memcached.options';
export declare class Memcached {
    private client;
    constructor(uri: string[] | object | string, options: Options);
    getOrSet(key: string, valueHandler: Function, lifetime?: number): Promise<{}>;
    touch(key: string, lifetime?: number): Promise<{}>;
    get(key: string): Promise<{}>;
    gets(key: string): Promise<{}>;
    getMulti(keys: string[]): Promise<{}>;
    set(key: string, value: any, lifetime?: number): Promise<{}>;
    replace(key: string, value: any, lifetime?: number): Promise<{}>;
    cas(key: string, value: any, lifetime: number, cas: string): Promise<{}>;
    append(key: string, value: any): Promise<{}>;
    prepend(key: string, value: any): Promise<{}>;
    incr(key: string, amount: number): Promise<{}>;
    decr(key: string, amount: number): Promise<{}>;
    del(key: string): Promise<{}>;
    on(event: string, callback: any): void;
}
