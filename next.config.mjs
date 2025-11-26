/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // hostname: "i.ibb.co.com",
        hostname: "**",
        port: "",
        pathname: "/**",
        
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
