const basePath = "";
const { i18n } = require("./next-i18next.config");
const { v4: uuidv4 } = require("uuid");


/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    i18n,
    productionBrowserSourceMaps: false,
    publicRuntimeConfig: {
        buildSystem: process.env.NEXT_PUBLIC_SYSTEM,
    },
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
