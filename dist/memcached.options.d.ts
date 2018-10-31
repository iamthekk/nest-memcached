export interface Options {
    maxKeySize: number;
    maxExpiration: number;
    maxValue: number;
    poolSize: number;
    algorithm: string;
    reconnect: number;
    timeout: number;
    retries: number;
    failures: number;
    retry: number;
    remove: boolean;
    failOverServers: string[];
    keyCompression: boolean;
    idle: number;
}
export interface BootOptions {
    path: string;
}
export interface ConfigOptions {
    path: string;
}
