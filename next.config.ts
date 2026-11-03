import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [{ source: '/business-central/', destination: '/soluciones/business-central/', permanent: true }];
  },
};

export default nextConfig;
