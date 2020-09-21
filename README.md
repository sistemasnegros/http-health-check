# http-health-check

Module http for check-failover for nginx.


## Installation

Use the package manager [npm](https://www.npmjs.com/) to install dependencies.

```bash
npm install
```

## File config
define host checks, retry, interval, config path.

```javascript
const SERVERS = [
  {
    url: "https://app1.midomain.com/app",
    host: "https://app1.midomain.com/"
  },
  {
    url: "https://app2.midomain.com/app",
    host: "https://app2.midomain.com/"
  }
];

const RETRY = 3;

const PATH_CONFIG = "/../../nginx.conf";
const INTERVAL = 10000
module.exports = { SERVERS, RETRY, PATH_CONFIG, INTERVAL };
```


## Templete config nginx
copy file templete src/config/nginxTemplete.conf to src/config/pro/nginx.conf.

```nginx
const SERVERS = [
  {
    url: "https://app1.midomain.com/app",
    host: "https://app1.midomain.com/"
  },
  {
    url: "https://app2.midomain.com/app",
    host: "https://app2.midomain.com/"
  }
];

const RETRY = 3;

const PATH_CONFIG = "/../../nginx.conf";
const INTERVAL = 10000
module.exports = { SERVERS, RETRY, PATH_CONFIG, INTERVAL };
```

## Usage

```bash
npm start
```

## Run background
Use the PM2 is a daemon process manager [pm2](https://pm2.keymetrics.io/docs/usage/quick-start/) PM2 is a daemon process manager that will help you manage and keep your application online 24/7.

```bash
pm2 start
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
