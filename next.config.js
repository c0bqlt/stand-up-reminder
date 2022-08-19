/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  reactStrictMode: true, // was there by default
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mp3$/i,
      use: [
        {
          loader: "file-loader",
        },
      ],
    });

    // Important: return the modified config
    return config;
  },
};
