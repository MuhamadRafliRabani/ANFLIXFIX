/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net",
      },
      {
        hostname: "avatars.githubusercontent.com",
      },
      {
        hostname: "lh3.googleusercontent.com",
      },
      {
        hostname: "i.pinimg.com",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true, // Nonaktifkan TypeScript checking untuk build errors
  },
};

export default nextConfig;
