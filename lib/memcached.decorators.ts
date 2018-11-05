import { Inject } from '@nestjs/common';

export const InjectMemcachedClient = () => Inject('MEMCACHED_PROVIDER');