const CheckServer = require("./CheckServer");
const Logger = require("./Logger");

class CheckServers {
  constructor(servers, retry) {
    this.servers = servers;
    this.list = this.buildCheckServers();
    this.retry = retry;
    this.prod = null;
    this.change = false;
  }

  buildCheckServers() {
    return this.servers.map(
      (server) => new CheckServer(server.url, server.host)
    );
  }

  async check() {
    let promisesCheckservers = this.list.map(async (checkServer) => {
      return checkServer.check();
    });

    await Promise.all(promisesCheckservers);
  }

  changeServer() {
    if (this.change) {
      const server = this.list.find((s) => s.online === true);
      if (
        (server && !this.prod) ||
        (server && this.prod && this.prod.server !== server.server)
      ) {
        server.configWeb.fileWrite();
        server.configWeb.updateConfig();
        this.prod = server;
        this.change = false;
        Logger.info(`serverChange:${server.server}, genrationConfig:ngix, updateConfig:nginx`)
      }
    }
  }

  checkMaxRetry() {
    this.list.forEach((checkServer) => {
      if (this.retry === checkServer.fails) {
        checkServer.online = false;
        checkServer.fails = 0;
        this.change = true;
      } else if (
        checkServer.fails === 0 ||
        this.retry === checkServer.retryOnline
      ) {
        checkServer.online = true;
        checkServer.retryOnline = 0;
        checkServer.fails = 0;
      }
    });
  }
}

module.exports = CheckServers;
