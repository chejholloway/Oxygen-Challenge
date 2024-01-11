/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "air-prod.imgix.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
