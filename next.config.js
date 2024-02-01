/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  webpack(config, options) {
    Object.assign(config.experiments, { topLevelAwait: true });

    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "checkout",
          exposes: {
            "./App": "./src/app/page.tsx",
          },
          filename: "static/chunks/remoteEntry.js",
          extraOptions: {
            exposePages: true,
          },
        })
      );
    }
    return config;
  },
};

module.exports = nextConfig;
