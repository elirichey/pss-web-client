const nextConfig = {
  reactStrictMode: true,
  images: {
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "**.amazonaws.com",
    //     pathname: "/**",
    //   },
    // ],
    domains: ["meddly-uploads.s3.us-east-1.amazonaws.com"],
  },
};

module.exports = nextConfig;
