// src/config/index.ts
const isProduction = process.env.NODE_ENV === 'production';

const config = {
  enableClarity: isProduction,
  clarityId: process.env.NEXT_PUBLIC_CLARITY_ID ?? '',
};

export default config;
