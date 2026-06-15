import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://soleshifu.com',
      changeFrequency: 'weekly',
      priority: 1.0
    }
  ];
}
