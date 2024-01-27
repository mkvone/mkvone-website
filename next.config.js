/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,

    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ['assets.coingecko.com'],
    },
};

module.exports = nextConfig;
