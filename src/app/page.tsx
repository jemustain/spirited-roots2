import Link from 'next/link';
import { getFeaturedPosts } from '@/lib/blog';
import { format } from 'date-fns';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroImage from '@/components/HeroImage';

export default function Home() {
  const featuredPosts = getFeaturedPosts();

  return (
    <div className="min-h-screen bg-cream-50">
      <Header />

      {/* Hero Section */}
      <section className="relative">
        <HeroImage 
          src="/images/heroes/homepage-hero.jpg"
          alt="Natural family living with homeschool mom and child in nature"
          className="h-96 md:h-[500px]"
          overlay={true}
          overlayColor="nature"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Welcome to Our Joyful Journey
            </h1>
            <p className="text-xl md:text-2xl mb-8 drop-shadow-md max-w-2xl mx-auto leading-relaxed">
              Discover natural living, eco-friendly products, and nourishing recipes 
              that bring joy and wellness to homeschooling families
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/blog" className="btn-sage text-lg px-8 py-3">
                Explore Our Stories
              </Link>
              <Link href="/about" className="btn-terracotta text-lg px-8 py-3">
                Meet Emily
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Welcome Section - Removed since we have hero */}
        
        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-xl p-8 border-t-4 border-sage-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-terracotta-500 text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-semibold text-sage-900 mb-3">Natural Products</h3>
            <p className="text-sage-700">
              Discover eco-friendly kids&apos; clothing, natural self-care products, and toxin-free household items.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl p-8 border-t-4 border-gold-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-forest-600 text-4xl mb-4">🥗</div>
            <h3 className="text-xl font-semibold text-sage-900 mb-3">Healthy Recipes</h3>
            <p className="text-sage-700">
              Nourishing, family-friendly recipes perfect for homeschool picnics and busy weekdays.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl p-8 border-t-4 border-terracotta-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-gold-500 text-4xl mb-4">📚</div>
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
                    <div className="flex items-center text-sage-600 text-sm mb-3 gap-3">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        {format(new Date(post.date), 'MMM d, yyyy')}
                      </span>
                      <span>•</span>
                      <Link href="/about" className="flex items-center hover:text-sage-800 transition-colors">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        {post.author}
                      </Link>
                      <span>•</span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        {post.readingTime} min read
                      </span>
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
        )}
      </main>

      <Footer />
    </div>
  );
}
