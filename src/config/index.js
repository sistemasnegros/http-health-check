let config;

try {
  config = require(`./${process.env.config}`);
} catch {
  config = require("./default");
}

module.exports = config;
