import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroImage from '@/components/HeroImage';

export const metadata = {
  title: 'About Violet',
  description: 'Meet Violet, a mom, software engineer, and nature enthusiast sharing natural living tips and mindful motherhood wisdom for families.',
  keywords: 'about Violet, natural living mama, family wellness, nature-based parenting, mindful motherhood',
  openGraph: {
    title: 'About Violet - Violet Mama',
    description: 'Meet Violet, a mom, software engineer, and nature enthusiast sharing natural living tips and mindful motherhood wisdom for families.',
    url: 'https://www.violetmama.com/about/',
    images: [{ url: '/images/heroes/about-hero.jpg', width: 1200, height: 630, alt: 'About Violet Mama' }],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-whisper-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <HeroImage 
          src="/images/heroes/about-hero.jpg"
          alt="Violet with her son exploring nature - homeschool mom and natural living advocate"
          className="h-80 md:h-96"
          overlay={true}
          overlayColor="brand"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 hero-text-shadow">
              About Violet
            </h1>
            <p className="text-xl md:text-2xl hero-text-shadow">
              Mom, Nature Enthusiast & Your Guide to Natural Family Living
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="content-bg rounded-lg shadow-lg p-8 lg:p-12">
          
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary-responsive mb-4">
              Hey There
            </h2>
            <p className="text-secondary-responsive text-lg leading-relaxed mb-4">
              I'm Violet — a mom to one amazing little one, a software engineer by trade, 
              and a crunchy mama by choice. Welcome to my corner of the internet.
            </p>
            <p className="text-secondary-responsive text-lg leading-relaxed">
              My days look like homeschool lessons that turn into backyard adventures, 
              herbal tea while I sneak in some coding, and way too much research into 
              whatever natural product rabbit hole I've fallen into this week. 
              It's chaotic and wonderful and I wouldn't trade it.
            </p>
          </section>

          {/* My Journey */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary-responsive mb-6">
              How I Got Here
            </h2>
            <p className="text-secondary-responsive text-lg leading-relaxed mb-4">
              My son's dad died while I was pregnant. I became a mom and learned to grieve at the 
              same time. Later I met my husband, and we've walked through three miscarriages 
              together. All of that loss shaped me — it made me intentional about how we live, 
              what we put in our bodies, how we spend our days. Nothing feels small anymore.
            </p>
            <p className="text-secondary-responsive text-lg leading-relaxed">
              We're snowbirds — splitting time between Washington and Arizona depending on the season. 
              I've built a life around raising my son with curiosity, fresh air, and a home full of 
              lavender and purple tones (because obviously). 
              It's not perfect, but it's ours.
            </p>
          </section>

          {/* My Approach */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary-responsive mb-6">
              What We're About
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-secondary-responsive mb-3">
                  Nature-First Living
                </h3>
                <p className="text-secondary-responsive leading-relaxed">
                  Screens stay minimal, adventures stay maximal. Forest walks, mud puddles, 
                  and hands-on learning that follows my son's curiosity wherever it goes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary-responsive mb-3">
                  Gentle Products
                </h3>
                <p className="text-secondary-responsive leading-relaxed">
                  I'm picky about what we put on and in our bodies — eco-friendly clothing, 
                  natural self-care, wholesome food. If I recommend it, we actually use it.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary-responsive mb-3">
                  Homeschool Heart
                </h3>
                <p className="text-secondary-responsive leading-relaxed">
                  Our homeschool is interest-led, play-based, and built around real-world experiences. 
                  Some days are Pinterest-worthy. Most are not. Both are fine.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary-responsive mb-3">
                  Tech Meets Crunchy
                </h3>
                <p className="text-secondary-responsive leading-relaxed">
                  I come from a software engineering background, which means I built this blog 
                  with Git and CI/CD — then went outside barefoot with my kid. Balance.
                </p>
              </div>
            </div>
          </section>

          {/* What You'll Find Here */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary-responsive mb-6">
              What You'll Find Here
            </h2>
            <p className="text-secondary-responsive text-lg leading-relaxed mb-6">
              This is a space for moms who want to live more naturally without the gatekeeping. 
              Real talk, real recommendations, real life.
            </p>
            <ul className="space-y-3 text-secondary-responsive">
              <li className="flex items-start">
                <span className="text-marigold-500 mr-3">•</span>
                <span>Honest reviews of natural products that actually work for busy families</span>
              </li>
              <li className="flex items-start">
                <span className="text-marigold-500 mr-3">•</span>
                <span>Simple, nourishing recipes for homeschool days and on-the-go life</span>
              </li>
              <li className="flex items-start">
                <span className="text-marigold-500 mr-3">•</span>
                <span>Nature-based learning activities that spark curiosity and joy</span>
              </li>
              <li className="flex items-start">
                <span className="text-marigold-500 mr-3">•</span>
                <span>Self-care for moms who want to thrive, not just survive</span>
              </li>
              <li className="flex items-start">
                <span className="text-marigold-500 mr-3">•</span>
                <span>A community that gets it — the messy, beautiful, real version of motherhood</span>
              </li>
            </ul>
          </section>

          {/* Connect Section */}
          <section className="section-bg rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-primary-responsive mb-4">
              Let's Connect
            </h2>
            <p className="text-secondary-responsive text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
              I'd love to hear from you — whether you're deep into the crunchy life 
              or just getting started. Come say hi.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-6">
              <a href="https://instagram.com/thevioletmama" className="inline-flex items-center px-5 py-2.5 bg-plum-600 hover:bg-plum-700 text-white rounded-lg transition-colors text-sm font-medium" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="https://www.facebook.com/TheVioletMama" className="inline-flex items-center px-5 py-2.5 bg-plum-600 hover:bg-plum-700 text-white rounded-lg transition-colors text-sm font-medium" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href="https://x.com/thevioletmama" className="inline-flex items-center px-5 py-2.5 bg-plum-600 hover:bg-plum-700 text-white rounded-lg transition-colors text-sm font-medium" target="_blank" rel="noopener noreferrer">
                X
              </a>
              <a href="https://pinterest.com/thevioletmama" className="inline-flex items-center px-5 py-2.5 bg-plum-600 hover:bg-plum-700 text-white rounded-lg transition-colors text-sm font-medium" target="_blank" rel="noopener noreferrer">
                Pinterest
              </a>
              <a href="https://youtube.com/@thevioletmama" className="inline-flex items-center px-5 py-2.5 bg-plum-600 hover:bg-plum-700 text-white rounded-lg transition-colors text-sm font-medium" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
              <a href="https://tiktok.com/@thevioletmama" className="inline-flex items-center px-5 py-2.5 bg-plum-600 hover:bg-plum-700 text-white rounded-lg transition-colors text-sm font-medium" target="_blank" rel="noopener noreferrer">
                TikTok
              </a>
            </div>
            <p className="text-muted-responsive text-sm">
              Or find all my links at{' '}
              <a href="https://linktr.ee/violetmama" className="text-plum-600 hover:text-plum-700 underline" target="_blank" rel="noopener noreferrer">
                linktr.ee/violetmama
              </a>
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
