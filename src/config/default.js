const SERVERS = [
  {
    url: "https://pruebas-claro.zfr.com.co/sizfra",
    host: "https://pruebas-claro.zfr.com.co/"
  },
  {
    url: "https://pruebas-une.zfr.com.co/sizfra",
    host: "https://pruebas-une.zfr.com.co/"
  }
];

const RETRY = 3;

const PATH_CONFIG = "/home/app/zfr/nginx.conf";
const INTERVAL = 10000;
const TIMEOUT = 10000;

module.exports = {
  SERVERS,
  RETRY,
  PATH_CONFIG,
  INTERVAL,
  TIMEOUT
};
