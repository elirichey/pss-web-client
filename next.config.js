const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d39mtxj8ssuyt4.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "opensheet.elk.sh",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
