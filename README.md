<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
<img src="https://img.shields.io/badge/👌-Production Ready-78c7ff.svg"/>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

This is a [Memcached](http://memcached.org/) module for [Nest](https://github.com/nestjs/nest).

## Installation

```bash
$ npm i --save nest-memcached memcached
```

## Quick Start

#### Import Module

```typescript
import { Module } from '@nestjs/common';
import { MemcachedModule } from 'nest-memcached';

@Module({
  imports: [MemcachedModule.init([ '192.168.0.102:11211', '192.168.0.103:11211', '192.168.0.104:11211' ], {retries: 3})],
})
export class ApplicationModule {}
```

If you use [nest-boot](https://github.com/miaowing/nest-boot) module.

```typescript
import { Module } from '@nestjs/common';
import { MemcachedModule } from 'nest-memcached';
import { BootModule } from 'nest-boot';

@Module({
  imports: [
      BootModule.register(__dirname, 'bootstrap.yml'),
      MemcachedModule.registerByBoot({path: 'memcached'})
  ],
})
export class ApplicationModule {}
```

##### bootstrap.yml

```yaml
memcached:
  uri: ['192.168.0.102:11211', '192.168.0.103:11211', '192.168.0.104:11211'],
  retries: 3
```

If you use [nest-consul-config](https://github.com/miaowing/nest-consul-config) module.

```typescript
import { Module } from '@nestjs/common';
import { MemcachedModule } from 'nest-memcached';
import { BootModule } from 'nest-boot';

@Module({
  imports: [
      BootModule.register(__dirname, 'bootstrap.yml'),
      MemcachedModule.registerByConsul({path: 'memcached'})
  ],
})
export class ApplicationModule {}
```

##### config in consul kv

```yaml
memcached:
  uri: ['192.168.0.102:11211', '192.168.0.103:11211', '192.168.0.104:11211'],
  retries: 3
```

#### Memcached Client Injection

```typescript
import { Component } from '@nestjs/common';
import { InjectMemcachedClient, Memcached } from 'nest-memcached';

@Component()
export class TestService {
  constructor(@InjectMemcachedClient() private readonly memClient: Memcached) {}

  async addValue(key: string, value: string): void {
      await this.memClient.add(key, value);
  }
  
  async deleteValue(key: string): void {
      await this.memClient.del(key);
  }
}
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://opencollective.com/nest).

## Stay in touch

- Author - [Miaowing](https://github.com/miaowing)
- Website - [https://nestjs.com](https://nestjs.com/)

## License

  Nest is [MIT licensed](LICENSE).