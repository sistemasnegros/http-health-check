const SERVERS = [
  {
    url: "https://app1.com.co/home",
    host: "https://app1.com.co/"
  },
  {
    url: "https://app2.com.co/home",
    host: "https://app2.com.co/"
  }
];

const RETRY = 3;

const PATH_CONFIG = "./pro/nginx.conf";
const INTERVAL = 10000;
const TIMEOUT = 10000;

module.exports = {
  SERVERS,
  RETRY,
  PATH_CONFIG,
  INTERVAL,
  TIMEOUT
};
