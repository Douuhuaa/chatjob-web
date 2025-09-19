const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        config.resolve.alias["@"] = path.resolve(__dirname, "app");

        return config;
    },
};

module.exports = nextConfig;
