import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const SITE_URL = 'https://www.violetmama.com';
const postsDir = path.join(process.cwd(), 'content/blog');

function getAllPosts() {
  if (!fs.existsSync(postsDir)) return [];
  return fs.readdirSync(postsDir)
    .filter(f => f.endsWith('.md'))
    .map(f => {
      const { data } = matter(fs.readFileSync(path.join(postsDir, f), 'utf8'));
      return { slug: f.replace(/\.md$/, ''), ...data };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

const posts = getAllPosts();
const today = new Date().toISOString().split('T')[0];

// Generate sitemap.xml
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${SITE_URL}/</loc><lastmod>${today}</lastmod><priority>1.0</priority></url>
  <url><loc>${SITE_URL}/blog/</loc><lastmod>${today}</lastmod><priority>0.8</priority></url>
  <url><loc>${SITE_URL}/about/</loc><lastmod>${today}</lastmod><priority>0.7</priority></url>
  <url><loc>${SITE_URL}/privacy/</loc><lastmod>${today}</lastmod><priority>0.3</priority></url>
  <url><loc>${SITE_URL}/disclosure/</loc><lastmod>${today}</lastmod><priority>0.3</priority></url>
${posts.map(p => `  <url><loc>${SITE_URL}/blog/${p.slug}/</loc><lastmod>${p.date}</lastmod><priority>0.6</priority></url>`).join('\n')}
</urlset>`;

// Generate feed.xml (RSS 2.0)
const escXml = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Violet Mama</title>
    <link>${SITE_URL}</link>
    <description>Natural living tips, eco-friendly product reviews, and mindful motherhood resources.</description>
    <language>en-us</language>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${posts.map(p => `    <item>
      <title>${escXml(p.title)}</title>
      <link>${SITE_URL}/blog/${p.slug}/</link>
      <guid>${SITE_URL}/blog/${p.slug}/</guid>
      <pubDate>${new Date(p.date + 'T12:00:00Z').toUTCString()}</pubDate>
      <description>${escXml(p.excerpt || '')}</description>
    </item>`).join('\n')}
  </channel>
</rss>`;

const outDir = path.join(process.cwd(), 'out');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(outDir, 'feed.xml'), feed);
console.log('Generated sitemap.xml and feed.xml');
