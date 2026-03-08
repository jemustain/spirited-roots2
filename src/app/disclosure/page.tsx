import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Affiliate Disclosure - Violet Mama',
  description: 'FTC-compliant affiliate disclosure — how we keep things honest and transparent.',
};

export default function DisclosurePage() {
  return (
    <div className="min-h-screen bg-whisper-50">
      <Header />

      <div className="bg-whisper-100 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-plum-900 mb-4">
            Affiliate Disclosure
          </h1>
          <p className="text-xl text-plum-700">
            Keeping it real — here&rsquo;s how we keep the lights on
          </p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="content-bg rounded-lg shadow-lg p-8 lg:p-12">
          <div className="prose prose-lg max-w-none text-primary-responsive leading-relaxed">

            <h2 className="text-2xl font-bold text-plum-900 mt-8 mb-4">The Honest Truth</h2>
            <p>
              Some of the links on Violet Mama are affiliate links. That means if you click
              on a link and make a purchase, we may earn a small commission — at no extra
              cost to you. Think of it as a tiny thank-you from the brand for sending you
              their way.
            </p>

            <h2 className="text-2xl font-bold text-plum-900 mt-8 mb-4">Our Promise to You</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Honest opinions, always.</strong> We only recommend products and
                services we genuinely use, love, or believe in. A commission will never
                change our opinion of a product — if it&rsquo;s not great, we&rsquo;ll say so
                (or just not write about it).
              </li>
              <li>
                <strong>No pay-to-play.</strong> Companies cannot pay for a positive review
                on this site. Sponsored content, if we ever do it, will always be clearly
                labeled.
              </li>
              <li>
                <strong>Your trust matters more.</strong> We&rsquo;d rather lose a commission
                than lose your trust. This blog is built on being real with our community,
                and that&rsquo;s not changing.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-plum-900 mt-8 mb-4">FTC Compliance</h2>
            <p>
              In accordance with the Federal Trade Commission&rsquo;s guidelines on endorsements
              and testimonials (<a href="https://www.ftc.gov/legal-library/browse/rules/endorsement-guides" target="_blank" rel="noopener noreferrer" className="text-plum-600 hover:text-plum-800">16 CFR Part 255</a>),
              we disclose that this site may receive compensation for products or services
              mentioned. This disclosure applies to all affiliate links across the site,
              including blog posts, product reviews, and resource pages.
            </p>

            <h2 className="text-2xl font-bold text-plum-900 mt-8 mb-4">What This Means in Practice</h2>
            <p>
              When you see a product link in a blog post, it might be an affiliate link.
              If you click it and buy something, the brand gives us a small percentage of
              the sale. The price you pay stays exactly the same — you&rsquo;re not paying
              extra. These commissions help cover the costs of running this site (hosting,
              domain, the occasional coffee that fuels late-night writing sessions ☕).
            </p>

            <h2 className="text-2xl font-bold text-plum-900 mt-8 mb-4">Questions?</h2>
            <p>
              We believe in transparency. If you ever have questions about whether a link is
              an affiliate link, or about our review process, reach out to us on social media
              — <strong>@TheVioletMama</strong> everywhere.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
