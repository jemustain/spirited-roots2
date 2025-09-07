# Blog Images Directory

This directory contains all images used in blog posts.

## Structure

```
/public/images/blog/
├── energy-balls/
│   ├── energy-balls-hero.jpg      # 1200x800 - Hero/main image
│   ├── energy-balls-medium.jpg    # 768x512 - Tablet
│   └── energy-balls-small.jpg     # 480x320 - Mobile
└── [future-post-slug]/
    └── [post-images...]
```

## Image Guidelines

### Naming Convention
- `[post-slug]/[descriptive-name]-[size].jpg`
- Sizes: `hero`, `medium`, `small`

### Recommended Dimensions
- **Hero**: 1200x800px (3:2 ratio) - Main image for blog post
- **Medium**: 768x512px (tablet and smaller desktop)
- **Small**: 480x320px (mobile devices)

### Usage in Blog Posts

Add to frontmatter:
```yaml
heroImage: "/images/blog/energy-balls/energy-balls-hero.jpg"
heroImageAlt: "Descriptive alt text for accessibility"
```

### Optimization
- Use WebP format when possible
- Compress images before uploading
- Next.js will automatically optimize and serve appropriate sizes
