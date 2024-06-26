import type { APIRoute } from "astro";

const robotsTxt = `
User-agent: *
Disallow: /projects/
Disallow: /fr/projects/
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
