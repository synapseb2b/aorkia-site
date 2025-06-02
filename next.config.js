/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // <--- ISSO FAZ TUDO FUNCIONAR NO VERCEL

  async headers() {
    return [
      {
        source: "/(.*)", // Aplica para todas as rotas
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
