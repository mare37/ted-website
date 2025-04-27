/** @type {import('next').NextConfig} */
const nextConfig = {
    "rules": {
    "react/no-unescaped-entities": "off",
    "react/react-in-jsx-scope": "off",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
}

module.exports = nextConfig
