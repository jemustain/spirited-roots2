import Link from 'next/link';
import { getFeaturedPosts } from '@/lib/blog';
import { format } from 'date-fns';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const featuredPosts = getFeaturedPosts();

  return (
    <div className="min-h-screen bg-whisper-50">
      <Header />

      {/* Hero Section — Texture/Pattern (no photo) */}
      <section className="relative overflow-hidden hero-texture-bg">
        {/* Inline SVG gold geometric pattern overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.12] pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern id="geo-gold" x="0" y="0" width="80" height="92" patternUnits="userSpaceOnUse">
              {/* Hexagon grid — art deco gold tessellation */}
              <polygon points="40,2 72,23 72,69 40,90 8,69 8,23" fill="none" stroke="#d4a017" strokeWidth="1.2" />
              {/* Inner hexagon */}
              <polygon points="40,16 58,28 58,64 40,76 22,64 22,28" fill="none" stroke="#eab34a" strokeWidth="0.8" />
              {/* Center diamond accent */}
              <polygon points="40,34 50,46 40,58 30,46" fill="#d4a017" opacity="0.35" />
              {/* Corner triangles for tessellation continuity */}
              <polygon points="0,0 8,23 0,23" fill="none" stroke="#c4922e" strokeWidth="0.6" />
              <polygon points="80,0 72,23 80,23" fill="none" stroke="#c4922e" strokeWidth="0.6" />
              <polygon points="0,92 8,69 0,69" fill="none" stroke="#c4922e" strokeWidth="0.6" />
              <polygon points="80,92 72,69 80,69" fill="none" stroke="#c4922e" strokeWidth="0.6" />
              {/* Thin art deco radiating lines from center */}
              <line x1="40" y1="46" x2="40" y2="2" stroke="#eab34a" strokeWidth="0.4" opacity="0.5" />
              <line x1="40" y1="46" x2="72" y2="23" stroke="#eab34a" strokeWidth="0.4" opacity="0.5" />
              <line x1="40" y1="46" x2="72" y2="69" stroke="#eab34a" strokeWidth="0.4" opacity="0.5" />
              <line x1="40" y1="46" x2="40" y2="90" stroke="#eab34a" strokeWidth="0.4" opacity="0.5" />
              <line x1="40" y1="46" x2="8" y2="69" stroke="#eab34a" strokeWidth="0.4" opacity="0.5" />
              <line x1="40" y1="46" x2="8" y2="23" stroke="#eab34a" strokeWidth="0.4" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geo-gold)" />
        </svg>

        <div className="relative flex items-center justify-center py-16 md:py-24">
          <div className="text-center px-4 max-w-3xl">
            <h1 className="text-2xl md:text-4xl font-bold mb-3 text-white hero-text-shadow">
              Natural mom. Honest reviews. No fluff.
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-xl mx-auto leading-relaxed hero-text-shadow">
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
          <Link href="/blog" className="group relative rounded-2xl overflow-hidden shadow-lg h-64 block"
            style={{ background: 'linear-gradient(to bottom right, #7a5fc7, #6b5fa8)' }}>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
            <div className="relative h-full flex flex-col justify-end p-8 text-white">
              <svg className="w-10 h-10 mb-3 opacity-90" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>
              <h3 className="text-2xl font-bold mb-2">Natural Products</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Discover eco-friendly kids&apos; clothing, natural self-care products, and toxin-free household items.
              </p>
            </div>
          </Link>
          
          <Link href="/blog" className="group relative rounded-2xl overflow-hidden shadow-lg h-64 block"
            style={{ background: 'linear-gradient(to bottom right, #eab34a, #d85570)' }}>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
            <div className="relative h-full flex flex-col justify-end p-8 text-white">
              <svg className="w-10 h-10 mb-3 opacity-90" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" /></svg>
              <h3 className="text-2xl font-bold mb-2">Healthy Recipes</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Nourishing, family-friendly recipes perfect for homeschool picnics and busy weekdays.
              </p>
            </div>
          </Link>
          
          <Link href="/blog" className="group relative rounded-2xl overflow-hidden shadow-lg h-64 block"
            style={{ background: 'linear-gradient(to bottom right, #ea7186, #7a5fc7)' }}>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
            <div className="relative h-full flex flex-col justify-end p-8 text-white">
              <svg className="w-10 h-10 mb-3 opacity-90" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>
              <h3 className="text-2xl font-bold mb-2">Homeschool Tips</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Nature-based learning activities and screen-free ideas for raising resilient children.
              </p>
            </div>
          </Link>
        </div>

        {/* Featured Blog Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary-responsive text-center mb-10">
              Featured Posts
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
