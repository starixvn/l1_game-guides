const basePath = "";
const { i18n } = require("./next-i18next.config");
const { v4: uuidv4 } = require("uuid");
const configs = require("./configs.json");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    i18n,
    publicRuntimeConfig: configs,
    productionBrowserSourceMaps: false,
    generateBuildId: async () => {
        return uuidv4();
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    webpack: (config, options) => {
        if (!options.isServer) {
            config.resolve.alias["@sentry/node"] = "@sentry/browser";
        }
        config.plugins.push(
            new options.webpack.DefinePlugin({
                "process.env.NEXT_IS_SERVER": JSON.stringify(options.isServer.toString()),
            })
        );

        return config;
    },
    basePath,
    env: {
        buildVersion: uuidv4(),
    },
    async rewrites() {
        return [
            {
                source: "/health",
                destination: "/api/health",
            },
        ];
    },
    cleanDistDir: true,
    output: "standalone",
};

module.exports = nextConfig;
