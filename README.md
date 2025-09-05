
# SpiritedRoots Affiliate Blog

This project is a modern affiliate marketing blog for homeschooling moms focused on natural living, eco-friendly kids' clothing, healthy recipes, and self-care products.

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- ESLint
- Markdown with frontmatter for blog posts

## Features
- ✅ SEO optimization
- ✅ Markdown-based blog system
- ✅ Automatic static generation for blog posts
- ✅ Responsive design with sage green/gold theme
- ✅ Featured posts on homepage
- ✅ Blog listing and individual post pages

## Getting Started

1. Install dependencies (already done):
   ```sh
   npm install
   ```
2. Run the development server:
   ```sh
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) to view the site.

## Blog System

### Adding New Blog Posts

1. Create a new `.md` file in the `content/blog/` directory
2. Add frontmatter with required fields:
   ```yaml
   ---
   title: "Your Post Title"
   slug: "url-friendly-slug"
   date: "2025-09-04"
   excerpt: "Brief description for previews"
   author: "Emily"
   tags: ["tag1", "tag2"]
   featured: true  # Shows on homepage
   seo:
     title: "SEO optimized title"
     description: "Meta description"
     keywords: "comma, separated, keywords"
   ---
   ```
3. Write your content in Markdown below the frontmatter
4. The post will automatically appear on the blog and homepage (if featured)

### Blog Structure
- `/blog` - Lists all blog posts with excerpts
- `/blog/[slug]` - Individual blog post pages
- Homepage shows featured posts automatically

### Supported Markdown Features
- Headers, paragraphs, lists
- Links and images
- Bold and italic text
- Blockquotes
- Code blocks

## Customization
- Update colors in `tailwind.config.js` for sage green/gold theme
- Modify blog templates in `src/app/blog/`
- Add new pages in `src/app/`
- Configure SEO metadata in individual post frontmatter

## Deployment
- Build: `npm run build`
- All blog posts are statically generated for optimal performance
- Ready for deployment to Vercel, Netlify, or any static hosting

## License
MIT
