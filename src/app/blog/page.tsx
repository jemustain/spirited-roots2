import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { format } from 'date-fns';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroImage from '@/components/HeroImage';

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
          overlayColor="sage"
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
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-sage-600 text-lg">No blog posts found.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="content-bg rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  {post.featured && (
                    <span className="inline-block bg-marigold-500 text-white px-3 py-1 text-sm font-semibold rounded-full mb-4">
                      ✨ Featured
                    </span>
                  )}
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-primary-responsive mb-4 hover:text-sage-700 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <div className="flex flex-wrap items-center text-muted-responsive text-sm mb-4 gap-3">
                    <Link href="/about" className="flex items-center hover:text-sage-800 transition-colors">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      {post.author}
                    </Link>
                    <span>•</span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {format(new Date(post.date), 'MMMM d, yyyy')}
                    </span>
                    <span>•</span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      {post.readingTime} min read
                    </span>
                  </div>
                  
                  <p className="text-secondary-responsive text-lg leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="section-bg text-secondary-responsive px-3 py-1 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="btn-lavender inline-block"
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
