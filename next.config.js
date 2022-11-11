/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () => {
    return [
      {
        source: "/experience/:contract",
        destination: "/meta/experience/index.html?contract=contract",
      },
    ];
  },
};

module.exports = nextConfig;
