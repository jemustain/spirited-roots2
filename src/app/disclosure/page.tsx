import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroImage from '@/components/HeroImage';

export const metadata = {
  title: 'Affiliate Disclosure - Violet Mama',
  description: 'Learn about our affiliate partnerships and how we maintain honest, transparent reviews while supporting our family.',
  keywords: 'affiliate disclosure, FTC compliance, product reviews, transparency',
};

export default function DisclosurePage() {
  return (
    <div className="min-h-screen bg-whisper-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <HeroImage 
          src="/images/heroes/blog-hero.jpg"
          alt="Transparency and trust in affiliate marketing for natural family living"
          className="h-64 md:h-80"
          overlay={true}
          overlayColor="nature"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              Affiliate Disclosure
            </h1>
            <p className="text-lg md:text-xl drop-shadow-md">
              Transparency and honesty in everything we share
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="content-bg rounded-lg shadow-lg p-8 lg:p-12">
          
          {/* Introduction */}
          <section className="mb-8">
            <div className="bg-marigold-50 border-l-4 border-marigold-500 p-6 rounded-lg mb-6">
              <div className="flex items-start">
                <div className="text-2xl mr-3">�</div>
                <div>
                  <h2 className="text-xl font-semibold text-primary-responsive mb-2">
                    Our Promise to You
                  </h2>
                  <p className="text-secondary-responsive leading-relaxed">
                    At Violet Mama, honesty and transparency are at the heart of everything we share. 
                    When I recommend a product, it&apos;s because I genuinely believe it will benefit your family&apos;s 
                    journey toward natural living - not because of any financial incentive.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FTC Compliance */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary-responsive mb-4">
              FTC Compliance Statement
            </h2>
            <p className="text-secondary-responsive text-lg leading-relaxed mb-4">
              In accordance with the Federal Trade Commission&apos;s 16 CFR, Part 255: &quot;Guides Concerning the Use of 
              Endorsements and Testimonials in Advertising,&quot; I am required to disclose any material connections 
              between myself and the companies whose products I review or recommend.
            </p>
            <p className="text-secondary-responsive leading-relaxed">
              This website contains affiliate links, which means I may receive a small commission 
              if you make a purchase through these links at no additional cost to you. This helps support 
              our family and allows me to continue sharing honest reviews and natural living tips.
            </p>
          </section>

          {/* How Affiliate Links Work */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary-responsive mb-4">
              How Affiliate Links Work
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-marigold-500 text-xl mr-3">•</span>
                <p className="text-secondary-responsive leading-relaxed">
                  <strong>What they are:</strong> Special links that track when someone makes a purchase 
                  after clicking from our site
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-marigold-500 text-xl mr-3">•</span>
                <p className="text-secondary-responsive leading-relaxed">
                  <strong>Your cost:</strong> You pay exactly the same price whether you use our link or not
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-marigold-500 text-xl mr-3">•</span>
                <p className="text-secondary-responsive leading-relaxed">
                  <strong>Our commission:</strong> We receive a small percentage (typically 2-8%) from the retailer
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-marigold-500 text-xl mr-3">•</span>
                <p className="text-secondary-responsive leading-relaxed">
                  <strong>Your privacy:</strong> Your personal information is never shared with us
                </p>
              </div>
            </div>
          </section>

          {/* Our Affiliate Partners */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary-responsive mb-4">
              Our Affiliate Partners
            </h2>
            <p className="text-secondary-responsive leading-relaxed mb-4">
              We carefully choose affiliate partnerships with companies that align with our values 
              of natural living, quality products, and family wellness. Our current partners include:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-lavender-50 p-4 rounded-lg">
                <h3 className="font-semibold text-primary-responsive mb-2">Amazon Associates</h3>
                <p className="text-secondary-responsive text-sm">
                  Books, household items, and everyday products we use and recommend
                </p>
              </div>
              <div className="bg-lavender-50 p-4 rounded-lg">
                <h3 className="font-semibold text-primary-responsive mb-2">ShareASale Network</h3>
                <p className="text-secondary-responsive text-sm">
                  Specialty natural living brands and eco-friendly companies
                </p>
              </div>
              <div className="bg-lavender-50 p-4 rounded-lg">
                <h3 className="font-semibold text-primary-responsive mb-2">Thrive Market</h3>
                <p className="text-secondary-responsive text-sm">
                  Organic foods, natural products, and household essentials
                </p>
              </div>
              <div className="bg-lavender-50 p-4 rounded-lg">
                <h3 className="font-semibold text-primary-responsive mb-2">Individual Brand Partnerships</h3>
                <p className="text-secondary-responsive text-sm">
                  Direct partnerships with companies whose products we genuinely use and love
                </p>
              </div>
            </div>
          </section>

          {/* Our Review Standards */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary-responsive mb-4">
              Our Review Standards
            </h2>
            <div className="section-bg p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-primary-responsive mb-3">
                What You Can Expect From Our Reviews:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-marigold-500 mr-2">✓</span>
                  <span className="text-secondary-responsive">Honest opinions based on real use in our family</span>
                </li>
                <li className="flex items-start">
                  <span className="text-marigold-500 mr-2">✓</span>
                  <span className="text-secondary-responsive">Both pros and cons of every product</span>
                </li>
                <li className="flex items-start">
                  <span className="text-marigold-500 mr-2">✓</span>
                  <span className="text-secondary-responsive">Clear information about who might (or might not) benefit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-marigold-500 mr-2">✓</span>
                  <span className="text-secondary-responsive">Alternatives and budget-friendly options when available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-marigold-500 mr-2">✓</span>
                  <span className="text-secondary-responsive">Updates if our opinion changes over time</span>
                </li>
              </ul>
            </div>
          </section>

          {/* What We Don't Do */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary-responsive mb-4">
              What We Don&apos;t Do
            </h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-coral-500 text-xl mr-3">✗</span>
                <p className="text-secondary-responsive leading-relaxed">
                  Recommend products we haven&apos;t personally used or thoroughly researched
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-coral-500 text-xl mr-3">✗</span>
                <p className="text-secondary-responsive leading-relaxed">
                  Accept payment for positive reviews or guaranteed coverage
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-coral-500 text-xl mr-3">✗</span>
                <p className="text-secondary-responsive leading-relaxed">
                  Hide or downplay negative aspects of products
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-coral-500 text-xl mr-3">✗</span>
                <p className="text-secondary-responsive leading-relaxed">
                  Recommend expensive products without suggesting budget alternatives
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary-responsive mb-4">
              Questions About Our Disclosures?
            </h2>
            <p className="text-secondary-responsive leading-relaxed mb-4">
              If you have any questions about our affiliate partnerships, review process, or this disclosure, 
              please don&apos;t hesitate to reach out. Transparency is important to us, and we&apos;re happy to 
              discuss any concerns you might have.
            </p>
            <div className="section-bg p-4 rounded-lg">
              <p className="text-secondary-responsive">
                <strong>Contact us:</strong> Find us on social media @TheVioletMama or visit our 
                <a href="/about" className="text-lavender-600 hover:text-lavender-800 underline"> About page</a> for more ways to connect.
              </p>
            </div>
          </section>

          {/* Last Updated */}
          <section className="text-center pt-6 border-t border-lavender-200">
            <p className="text-muted-responsive text-sm">
              This disclosure was last updated on September 6, 2025
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
