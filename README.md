
# Violet Mama Affiliate Blog

Hey there! I'm Violet, a mom, software engineer, and nature lover helping other families discover joyful, natural ways to thrive together. 💜

This is my affiliate marketing blog focused on natural living and mindful motherhood - built with love, code, and the same GitHub CI/CD practices I use in my engineering work!

## About This Project

Violet Mama is where I share honest reviews of eco-friendly family products, healthy recipes for busy days, and mindful motherhood tips that actually work for real families. As a software engineer who values both technology and work-life balance, I've built this site to be fast, SEO-optimized, and perfect for sharing the natural products that make family life more vibrant.

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
- ✅ Responsive design with purple/lavender theme
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
   author: "Violet"
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
- Update colors in `tailwind.config.js` for purple/lavender theme
- Modify blog templates in `src/app/blog/`
- Add new pages in `src/app/`
- Configure SEO metadata in individual post frontmatter

## Deployment
- Build: `npm run build`
- All blog posts are statically generated for optimal performance
- Ready for deployment to Vercel, Netlify, or any static hosting

## License
MIT
