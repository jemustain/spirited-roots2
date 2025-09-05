# Image Guidelines for SpiritedRoots

## Hero Image Recommendations

For the best visual impact, consider adding these types of images to `/public/images/heroes/`:

### Homepage Hero (`homepage-hero.jpg`)
- **Subject**: Mom and child exploring nature together
- **Setting**: Forest path, garden, or meadow
- **Mood**: Warm, joyful, natural lighting
- **Colors**: Earth tones that complement sage green/gold theme
- **Size**: 1920x800px minimum for desktop optimization

### About Page Hero (`about-hero.jpg`)
- **Subject**: Emily with her son in natural setting
- **Setting**: Cozy outdoor moment, reading together, or nature walk
- **Mood**: Intimate, warm, authentic
- **Colors**: Softer tones, golden hour lighting
- **Size**: 1920x600px minimum

### Blog Page Hero (`blog-hero.jpg`)
- **Subject**: Nature journaling, homeschool materials in outdoor setting
- **Setting**: Picnic blanket with books, natural learning setup
- **Mood**: Inspiring, educational, peaceful
- **Colors**: Fresh greens and earth tones
- **Size**: 1920x500px minimum

## Stock Photo Sources

### Free Options
- **Unsplash**: Search "mother child nature", "homeschool", "natural living"
- **Pexels**: High-quality family and nature photos
- **Pixabay**: Good selection of lifestyle images

### Premium Options
- **Shutterstock**: Professional family lifestyle photography
- **Getty Images**: High-end editorial-style images
- **Adobe Stock**: Extensive natural living collection

## Image Optimization

1. **File Format**: JPG for photos, PNG for graphics with transparency
2. **Compression**: Use tools like TinyPNG to reduce file size
3. **Responsive**: Consider WebP format for modern browsers
4. **Alt Text**: Always include descriptive alt text for accessibility

## Current Placeholder System

The site currently uses beautiful CSS gradient placeholders that match your color scheme:
- **Nature Gradient**: Forest green to sage to gold
- **Overlay Options**: Sage, forest, warm, or nature themes
- **Responsive**: Adapts to all screen sizes
- **Performance**: No file loading required

## Implementation

To add real images:
1. Place optimized images in `/public/images/heroes/`
2. Update HeroImage components with `src` prop:
   ```jsx
   <HeroImage 
     src="/images/heroes/homepage-hero.jpg"
     alt="Emily and son exploring nature together"
     className="h-96 md:h-[500px]"
     overlay={true}
     overlayColor="nature"
   />
   ```

## Color Palette for Photo Selection

- **Primary**: Sage greens (#6b8068, #8fa68f)
- **Secondary**: Warm golds (#f4b429, #e89611)
- **Accent**: Terracotta (#d26340, #c34b2c)
- **Earth**: Natural browns (#b39c7a, #8b7356)
- **Forest**: Deep greens (#5a7f5a, #7a9d7a)

Choose images that naturally include these colors or can be color-graded to match this palette.
