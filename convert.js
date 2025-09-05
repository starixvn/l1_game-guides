const configs = require("./configs.json");
const fs = require("fs");


function convertToEnv(configs) {
  const env = {
    ...configs,
  };
  const envVars = {};
  for (const [key, value] of Object.entries(env)) {
    envVars[`NEXT_PUBLIC_${key}`] = typeof value === "string" ? value : JSON.stringify(value);
  }
  return Object.entries(envVars).map(([key, value]) => `${key}=${value}`).join("\n");
}

const env = convertToEnv(configs);
fs.writeFileSync(".env", env);