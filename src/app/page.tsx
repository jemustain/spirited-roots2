import Link from 'next/link';
import { getFeaturedPosts } from '@/lib/blog';
import { format } from 'date-fns';

export default function Home() {
  const featuredPosts = getFeaturedPosts();

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <header className="sage-gradient text-white py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-4">
            <Link href="/" className="text-2xl font-bold">
              🌿 SpiritedRoots
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-sage-200 transition-colors">
                Home
              </Link>
              <Link href="/blog" className="hover:text-sage-200 transition-colors">
                Blog
              </Link>
              <Link href="#" className="hover:text-sage-200 transition-colors">
                Products
              </Link>
              <Link href="#" className="hover:text-sage-200 transition-colors">
                About
              </Link>
            </nav>
          </div>
          <div className="text-center">
            <p className="text-sage-100 text-lg">
              Natural Living for Homeschool Moms
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sage-900 mb-6">
            Welcome to Our Joyful Journey
          </h2>
          <p className="text-xl text-sage-700 max-w-2xl mx-auto leading-relaxed">
            Join me as we explore natural living, eco-friendly products, and nourishing recipes 
            that bring joy and wellness to homeschooling families.
          </p>
        </section>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-sage-500">
            <div className="text-gold-500 text-3xl mb-4">🌱</div>
            <h3 className="text-xl font-semibold text-sage-900 mb-3">Natural Products</h3>
            <p className="text-sage-700">
              Discover eco-friendly kids&apos; clothing, natural self-care products, and toxin-free household items.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-gold-500">
            <div className="text-sage-600 text-3xl mb-4">🥗</div>
            <h3 className="text-xl font-semibold text-sage-900 mb-3">Healthy Recipes</h3>
            <p className="text-sage-700">
              Nourishing, family-friendly recipes perfect for homeschool picnics and busy weekdays.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-sage-500">
            <div className="text-gold-500 text-3xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-sage-900 mb-3">Homeschool Tips</h3>
            <p className="text-sage-700">
              Nature-based learning activities and screen-free ideas for raising resilient children.
            </p>
          </div>
        </div>

        {/* Featured Blog Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-sage-900 text-center mb-8">
              ✨ Featured Posts
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center text-sage-600 text-sm mb-3">
                      <span>{format(new Date(post.date), 'MMM d, yyyy')}</span>
                      <span className="mx-2">•</span>
                      <span>{post.author}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-sage-900 mb-3 line-clamp-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-sage-700 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-sage-700 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sage-600 font-semibold hover:text-sage-800 transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link href="/blog" className="btn-sage">
                View All Posts
              </Link>
            </div>
          </section>
        )}        {/* Call to Action */}
        <section className="text-center bg-sage-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-sage-900 mb-4">
            Ready to Start Your Natural Living Journey?
          </h3>
          <p className="text-sage-700 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for weekly tips, product reviews, and recipes 
            delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-sage">
              Subscribe to Newsletter
            </button>
            <button className="btn-gold">
              Explore Products
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-sage-900 text-sage-100 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-4">Follow @SpiritedRoots for daily nature-inspired tips</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-gold-400 transition-colors">Instagram</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Facebook</a>
            <a href="#" className="hover:text-gold-400 transition-colors">X (Twitter)</a>
          </div>
          <p className="mt-6 text-sage-300 text-sm">
            © 2025 SpiritedRoots. Growing joyfully together.
          </p>
        </div>
      </footer>
    </div>
  );
}
