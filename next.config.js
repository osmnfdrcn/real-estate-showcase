/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.realtorglobal.com"],
  },
};

const withNextIntl = require("next-intl/plugin")("./i18n.ts");

module.exports = withNextIntl(nextConfig);
