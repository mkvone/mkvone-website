/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,

    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ['assets.coingecko.com'],
    },
    //output: 'standalone',
    output: 'export',
};

module.exports = nextConfig;
