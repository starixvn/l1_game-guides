const fs = require("fs");

const server = fs.readFileSync("/app/.next/standalone/server.js", "utf8");

const content = `const runtimeConfig = require("./configs.json")
nextConfig.publicRuntimeConfig = runtimeConfig
process.env.__NEXT_PRIVATE_STANDALONE_CONFIG = JSON.stringify(nextConfig)`;

const newServerFile = server.replace("process.env.__NEXT_PRIVATE_STANDALONE_CONFIG = JSON.stringify(nextConfig)", content);

fs.writeFileSync("/app/.next/standalone/server.js", newServerFile);