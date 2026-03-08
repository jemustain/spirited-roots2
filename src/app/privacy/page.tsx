import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy - Violet Mama',
  description: 'Privacy Policy for Violet Mama — how we handle your data (spoiler: we collect very little).',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-whisper-50">
      <Header />

      <div className="bg-whisper-100 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-plum-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-plum-700">
            The short version: we respect your privacy and collect very little data.
          </p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="content-bg rounded-lg shadow-lg p-8 lg:p-12">
          <div className="prose prose-lg max-w-none text-primary-responsive leading-relaxed">
            <p className="text-secondary-responsive mb-6">Last updated: March 7, 2026</p>

            <h2 className="text-2xl font-bold text-plum-900 mt-8 mb-4">What This Site Is</h2>
            <p>
              Violet Mama is a personal blog about natural living, mindful motherhood, and
              homeschooling. There are no user accounts, no login forms, and no way for you
              to submit personal information through this site.
            </p>

            <h2 className="text-2xl font-bold text-plum-900 mt-8 mb-4">What We Collect</h2>
            <p>
              We keep data collection to a minimum. Here&rsquo;s exactly what happens when you visit:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Vercel Analytics &amp; Speed Insights</strong> — This site is hosted on
                Vercel, which collects anonymous, aggregated usage data (page views, load times,
                country-level location). This data is not personally identifiable and cannot be
                used to track individual visitors. No cookies are set by Vercel Analytics.
              </li>
              <li>
                <strong>Standard server logs</strong> — Like every website on the internet,
                our hosting provider (Vercel) processes your IP address to serve you the page.
                These logs are temporary and not used for tracking.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-plum-900 mt-8 mb-4">What We Don&rsquo;t Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>No email addresses (unless you reach out to us directly)</li>
              <li>No names or personal information</li>
              <li>No tracking cookies or advertising pixels</li>
              <li>No third-party analytics beyond Vercel&rsquo;s built-in tools</li>
            </ul>

            <h2 className="text-2xl font-bold text-plum-900 mt-8 mb-4">Third-Party Links</h2>
            <p>
              Our blog posts may contain links to other websites, including affiliate links
              (see our <a href="/disclosure" className="text-plum-600 hover:text-plum-800">Affiliate Disclosure</a>),
              social media platforms, and product pages. Once you click a link that takes you
              away from this site, you&rsquo;re subject to that site&rsquo;s privacy policy — not ours.
            </p>

            <h2 className="text-2xl font-bold text-plum-900 mt-8 mb-4">Social Media</h2>
            <p>
              We link to our social media accounts (Instagram, Facebook, Pinterest, YouTube,
              TikTok, X). Visiting those platforms means their privacy policies apply.
              We don&rsquo;t embed social media tracking widgets on this site.
            </p>

            <h2 className="text-2xl font-bold text-plum-900 mt-8 mb-4">Children&rsquo;s Privacy</h2>
            <p>
              This site is not directed at children under 13 and we do not knowingly collect
              any information from children.
            </p>

            <h2 className="text-2xl font-bold text-plum-900 mt-8 mb-4">Changes to This Policy</h2>
            <p>
              If we ever start collecting more data (like adding a newsletter signup), we&rsquo;ll
              update this page. The &ldquo;last updated&rdquo; date at the top will always reflect the
              most recent version.
            </p>

            <h2 className="text-2xl font-bold text-plum-900 mt-8 mb-4">Questions?</h2>
            <p>
              If you have any questions about this privacy policy, feel free to reach out
              on social media — find us <strong>@TheVioletMama</strong> on Instagram, Facebook,
              or any of our linked platforms.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
