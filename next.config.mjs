/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/spacecowboys",
        destination: "https://www.youtube.com/watch?v=Ru_H5PiyfSA",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
