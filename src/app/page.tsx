import Link from 'next/link';
import { getFeaturedPosts } from '@/lib/blog';
import { format } from 'date-fns';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroImage from '@/components/HeroImage';

export default function Home() {
  const featuredPosts = getFeaturedPosts();

  return (
    <div className="min-h-screen bg-whisper-50">
      <Header />

      {/* Hero Section */}
      <section className="relative">
        <HeroImage 
          src="/images/heroes/homepage-hero.jpg"
          alt="Violet Mama - Natural family living with mom and child in nature"
          className="h-56 md:h-72"
          overlay={true}
          overlayColor="nature"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-3xl">
            <h1 className="text-2xl md:text-4xl font-bold mb-2 hero-text-shadow">
              Natural mom. Honest reviews. No fluff.
            </h1>
            <p className="text-base md:text-lg hero-text-shadow max-w-xl mx-auto leading-relaxed opacity-90">
              Homeschooling, natural living &amp; the products that actually hold up.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Quick About */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <p className="text-secondary-responsive text-base md:text-lg leading-relaxed">
            Hi, I&apos;m Violet — a natural-leaning, homeschooling mom who also happens to write code. 
            I test products so you don&apos;t waste money, share recipes my toddler actually eats, 
            and document the beautiful chaos of raising a kid outside the system.
          </p>
          <Link href="/about" className="text-lavender-600 hover:text-lavender-800 font-semibold text-sm mt-3 inline-block transition-colors">
            More about me →
          </Link>
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Link href="/blog" className="group relative rounded-2xl overflow-hidden shadow-lg h-64 block">
            <div className="absolute inset-0 bg-gradient-to-br from-lavender-600 to-plum-700 group-hover:scale-105 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
            <div className="relative h-full flex flex-col justify-end p-8 text-white">
              <div className="text-5xl mb-3">🌱</div>
              <h3 className="text-2xl font-bold mb-2">Natural Products</h3>
              <p className="text-white/85 text-sm leading-relaxed">
                Discover eco-friendly kids&apos; clothing, natural self-care products, and toxin-free household items.
              </p>
            </div>
          </Link>
          
          <Link href="/blog" className="group relative rounded-2xl overflow-hidden shadow-lg h-64 block">
            <div className="absolute inset-0 bg-gradient-to-br from-marigold-500 to-coral-600 group-hover:scale-105 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
            <div className="relative h-full flex flex-col justify-end p-8 text-white">
              <div className="text-5xl mb-3">🥗</div>
              <h3 className="text-2xl font-bold mb-2">Healthy Recipes</h3>
              <p className="text-white/85 text-sm leading-relaxed">
                Nourishing, family-friendly recipes perfect for homeschool picnics and busy weekdays.
              </p>
            </div>
          </Link>
          
          <Link href="/blog" className="group relative rounded-2xl overflow-hidden shadow-lg h-64 block">
            <div className="absolute inset-0 bg-gradient-to-br from-coral-500 to-lavender-600 group-hover:scale-105 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
            <div className="relative h-full flex flex-col justify-end p-8 text-white">
              <div className="text-5xl mb-3">📚</div>
              <h3 className="text-2xl font-bold mb-2">Homeschool Tips</h3>
              <p className="text-white/85 text-sm leading-relaxed">
                Nature-based learning activities and screen-free ideas for raising resilient children.
              </p>
            </div>
          </Link>
        </div>

        {/* Featured Blog Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary-responsive text-center mb-10">
              ✨ Featured Posts
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredPosts.slice(0, 3).map((post) => (
                <article
                  key={post.slug}
                  className="blog-card card-bg-alt rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center text-muted-responsive text-sm mb-3 gap-3">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        {format(new Date(post.date + 'T12:00:00'), 'MMM d, yyyy')}
                      </span>
                      <span>•</span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        {post.readingTime} min read
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-primary-responsive mb-3 line-clamp-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-sage-700 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-secondary-responsive mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-muted-responsive font-semibold hover:text-sage-800 transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link href="/blog" className="btn-lavender">
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
