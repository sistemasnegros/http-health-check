const axios = require("axios").default;
const https = require("https");

const Logger = require("./Logger");
const ConfigWeb = require("./ConfigWeb");

const { TIMEOUT, PATH_CONFIG } = require("./config");

const httpsAgent = new https.Agent({
  rejectUnauthorized: false
});

class CheckServer {
  constructor(server, host, options = { timeout: TIMEOUT, httpsAgent }) {
    this.server = server;
    this.options = options;
    this.fails = 0;
    this.online = true;
    this.retryOnline = 0;
    this.configWeb = new ConfigWeb(host, PATH_CONFIG);
  }

  async check() {
    const state = { status: null, err: null };

    try {
      const res = await axios.get(this.server, this.options);
      state.status = res ? true : false;
      this.retryOnline = this.retryOnline = this.retryOnline + 1;
    } catch {
      state.status = false;
      state.err = "Offline";
      this.fails = this.fails + 1;
    }
    Logger.info(
      `checkServer:${this.server}, state:${state.status}, retryOnline:${this.retryOnline}, fails:${this.fails}`
    );
    return state;
  }
}

module.exports = CheckServer;
