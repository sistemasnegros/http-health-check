const { SERVERS, RETRY, INTERVAL } = require("./config");
const CheckServers = require("./CheckServers");
const Logger = require("./Logger");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class Main {
  static async start() {
    let exit = false;
    const checkServers = new CheckServers(SERVERS, RETRY);

    Logger.info("starting httpCheck");

    while (!exit) {
      await checkServers.check();
      checkServers.checkMaxRetry();

      checkServers.changeServer();

      Logger.info(`recheck in: ms${INTERVAL}`);
      await sleep(INTERVAL);
    }
  }
}

module.exports = Main;
