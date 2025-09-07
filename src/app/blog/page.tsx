import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { format } from 'date-fns';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroImage from '@/components/HeroImage';
import BlogImage from '@/components/BlogImage';
import PlaceholderImage from '@/components/PlaceholderImage';

export const metadata = {
  title: 'Blog - Violet Mama',
  description: 'Read Violet\'s latest posts on natural living, mindful motherhood, eco-friendly products, and family wellness tips.',
  keywords: 'natural living blog, mindful motherhood, eco-friendly family, parenting tips, healthy lifestyle',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-whisper-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <HeroImage 
          src="/images/heroes/blog-hero.jpg"
          alt="Natural living blog posts about homeschooling and eco-friendly family life"
          className="h-64 md:h-80"
          overlay={true}
          overlayColor="violet"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              Our Family Stories
            </h1>
            <p className="text-lg md:text-xl drop-shadow-md">
              Discover natural living tips, product reviews, and homeschool adventures
            </p>
          </div>
        </div>
      </section>

      {/* Page Title - Hidden since we have hero */}
      <div className="hidden bg-sage-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-sage-900 mb-4">
            🌿 Blog
          </h1>
          <p className="text-xl text-sage-700">
            Natural living tips, product reviews, and joyful family inspiration
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-sage-600 text-lg">No blog posts found.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="content-bg rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Image Section */}
                <div className="aspect-[4/3] overflow-hidden">
                  {post.heroImage && post.heroImage !== 'placeholder' ? (
                    <BlogImage
                      src={post.heroImage}
                      alt={post.heroImageAlt || post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <PlaceholderImage 
                      width={400}
                      height={300}
                      text="Violet Mama"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                
                <div className="p-6">
                  {post.featured && (
                    <span className="inline-block bg-marigold-500 text-white px-2 py-1 text-xs font-semibold rounded-full mb-3">
                      ✨ Featured
                    </span>
                  )}
                  
                  <h2 className="text-lg font-bold text-primary-responsive mb-2 hover:text-sage-700 transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <div className="flex flex-wrap items-center text-muted-responsive text-xs mb-3 gap-2">
                    <span className="flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {format(new Date(post.date + 'T12:00:00'), 'MMM d, yyyy')}
                    </span>
                    <span>•</span>
                    <span className="flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      {post.readingTime} min
                    </span>
                  </div>
                  
                  <p className="text-secondary-responsive text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="section-bg text-secondary-responsive px-2 py-1 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="section-bg text-secondary-responsive px-2 py-1 text-xs rounded-full">
                        +{post.tags.length - 2}
                      </span>
                    )}
                  </div>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm btn-lavender inline-block w-full text-center"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
