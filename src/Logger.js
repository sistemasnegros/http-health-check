const simpleNodeLogger = require("simple-node-logger");

const logConfig = {
  timestampFormat: "YYYY-MM-DD HH:mm:ss"
};

const log = simpleNodeLogger.createSimpleLogger(logConfig);

class Logger {
  static info(text) {
    log.info(text);
  }
  static error(text) {
    log.error(text);
  }
}

module.exports = Logger;
