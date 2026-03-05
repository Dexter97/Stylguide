import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['nl', 'en'];
  const paths = ['', '/approach', '/services', '/assessment', '/scan', '/cases', '/about', '/resources', '/contact'];

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `https://aibridgemakers.com/${locale}${path}`,
      lastModified: new Date()
    }))
  );
}
