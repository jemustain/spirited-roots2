import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroImage from '@/components/HeroImage';
import Link from 'next/link';

export const metadata = {
  title: 'About Emily - SpiritedRoots',
  description: 'Meet Emily, a homeschool mom, software engineer, and nature enthusiast sharing natural living tips and product reviews for families.',
  keywords: 'about Emily, homeschool mom, natural living, family wellness, nature-based parenting',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <HeroImage 
          src="/images/heroes/about-hero.jpg"
          alt="Emily with her son exploring nature - homeschool mom and natural living advocate"
          className="h-80 md:h-96"
          overlay={true}
          overlayColor="forest"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              About Emily
            </h1>
            <p className="text-xl md:text-2xl drop-shadow-md">
              Wife, Mom, Nature Enthusiast & Your Guide to Natural Family Living
            </p>
          </div>
        </div>
      </section>

      {/* Page Title - Removed since we have hero */}
      <div className="hidden bg-sage-100 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-sage-900 mb-4">
            About Emily
          </h1>
          <p className="text-xl text-sage-700">
            Wife, Mom, Nature Enthusiast & Your Guide to Natural Family Living
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
          
          {/* Introduction */}
          <section className="mb-12">
            <div className="flex items-start mb-6">
              <div className="text-4xl mr-4">🌿</div>
              <div>
                <h2 className="text-2xl font-bold text-sage-900 mb-4">
                  Hello, Beautiful Moms!
                </h2>
                <p className="text-sage-700 text-lg leading-relaxed mb-4">
                  I&apos;m Emily, and I&apos;m so glad you&apos;ve found your way to SpiritedRoots! 
                  I&apos;m a wife, mom to an incredible 3-year-old son, and a software engineer who believes 
                  that family life can be both beautifully grounded and wonderfully adventurous.
                </p>
                <p className="text-sage-700 text-lg leading-relaxed">
                  My days are filled with the joyful chaos of homeschooling, forest walks with my little explorer, 
                  and discovering natural products that make our family life more vibrant and healthy. 
                  Whether I&apos;m coding with a mug of herbal tea or chasing my son through our backyard garden, 
                  I&apos;m always searching for ways to nurture our family&apos;s well-being.
                </p>
              </div>
            </div>
          </section>

          {/* My Journey */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-sage-900 mb-6">
              🌱 My Journey to Natural Living
            </h2>
            <p className="text-sage-700 text-lg leading-relaxed mb-4">
              My path to motherhood and natural living has been beautifully winding, with moments of both 
              deep joy and profound growth. When I was five months pregnant with my son, his father passed away, 
              and I found myself preparing to raise this precious little one as a single mom. 
              It was during this tender time that I truly discovered the healing power of nature, community, and intentional living.
            </p>
            <p className="text-sage-700 text-lg leading-relaxed mb-4">
              My journey has included three pregnancy losses that taught me to treasure each moment and 
              find opportunity for growth even in life&apos;s most challenging seasons. These experiences, 
              while difficult, led me to embrace the Taoist wisdom that every moment—joyful or challenging—offers 
              a chance to bloom where we&apos;re planted.
            </p>
            <p className="text-sage-700 text-lg leading-relaxed">
              Now, as a wife to my wonderful husband and mom to my spirited little boy, 
              I&apos;ve found such joy in creating a home filled with sage green tones, natural fabrics, 
              and the kind of cozy warmth that makes everyday moments feel special.
            </p>
          </section>

          {/* My Approach */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-sage-900 mb-6">
              💚 My Approach to Family & Wellness
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-sage-800 mb-3">
                  🌲 Nature-First Living
                </h3>
                <p className="text-sage-700 leading-relaxed">
                  We keep screens minimal and adventures maximal! Our days are filled with forest walks, 
                  backyard explorations, and hands-on learning that sparks my son&apos;s natural curiosity.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-sage-800 mb-3">
                  🌿 Gentle Products
                </h3>
                <p className="text-sage-700 leading-relaxed">
                  I&apos;m passionate about eco-friendly kids&apos; clothing, natural self-care products, 
                  and wholesome foods that nourish our bodies and support our values.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-sage-800 mb-3">
                  📚 Homeschool Heart
                </h3>
                <p className="text-sage-700 leading-relaxed">
                  Our homeschool approach focuses on following my son&apos;s interests, 
                  learning through play, and building confidence through real-world experiences.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-sage-800 mb-3">
                  ⚡ Tech-Life Balance
                </h3>
                <p className="text-sage-700 leading-relaxed">
                  As a software engineer, I use technology thoughtfully—like building this blog 
                  with Git and CI/CD—to support our low-screen family lifestyle.
                </p>
              </div>
            </div>
          </section>

          {/* What You'll Find Here */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-sage-900 mb-6">
              ✨ What You&apos;ll Find at SpiritedRoots
            </h2>
            <p className="text-sage-700 text-lg leading-relaxed mb-6">
              This space is my love letter to fellow homeschooling moms who want to create 
              joyful, natural lifestyles for their families. Here, you&apos;ll discover:
            </p>
            <ul className="space-y-3 text-sage-700">
              <li className="flex items-start">
                <span className="text-gold-500 mr-3">•</span>
                <span>Honest reviews of natural products that actually work for busy families</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-3">•</span>
                <span>Simple, nourishing recipes perfect for homeschool days and nature picnics</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-3">•</span>
                <span>Nature-based learning activities that spark curiosity and joy</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-3">•</span>
                <span>Self-care tips for moms who want to thrive, not just survive</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-3">•</span>
                <span>A supportive community where we celebrate the beauty of everyday moments</span>
              </li>
            </ul>
          </section>

          {/* Connect Section */}
          <section className="bg-sage-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-sage-900 mb-4">
              Let&apos;s Grow Together! 🌸
            </h2>
            <p className="text-sage-700 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
              I believe that every mom deserves to feel supported, inspired, and connected to a community 
              that celebrates both the wild adventures and quiet moments of family life. 
              I&apos;d love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="btn-sage">
                Follow on Instagram
              </a>
              <a href="#" className="btn-gold">
                Connect on Facebook
              </a>
            </div>
            <p className="text-sage-600 mt-6 text-sm">
              Find me @SpiritedRoots on Instagram, Facebook, X, and Pinterest for daily nature-inspired tips!
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
