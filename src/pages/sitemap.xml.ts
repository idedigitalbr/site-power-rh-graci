import type { APIRoute } from 'astro';

const publicRoutes = [
  '/',
  '/sobre/',
  '/servicos/',
  '/servicos/advisory-negocios-cultura/',
  '/servicos/pessoas-lideranca-performance/',
  '/servicos/processos-estrutura-organizacional/',
  '/contato/',
  '/privacidade/',
];

export const GET: APIRoute = ({ site }) => {
  const origin = (site ? site.toString() : 'https://idedigitalbr.github.io').replace(/\/$/, '');
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const lastmod = new Date().toISOString().split('T')[0];

  const urlsXml = publicRoutes
    .map((route) => {
      const loc = `${origin}${base}${route}`;
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
    })
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlsXml}\n</urlset>\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
