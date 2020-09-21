const fs = require('fs');
const generateConfig = require('./config/pro/nginx');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

class ConfigWeb {
  constructor(host, pathConfig) {
    this.host = host;
    this.config = generateConfig(this.host);
    this.pathConfig = pathConfig;
  }

  fileWrite() {
    fs.writeFileSync(this.pathConfig, this.config);
  }

  async updateConfig() {
    const { stdout, stderr } = await exec('/etc/init.d/nginx reload');
    // const { stdout, stderr } = await exec('ls');
    return { stdout, stderr };
  }
}

module.exports = ConfigWeb;
