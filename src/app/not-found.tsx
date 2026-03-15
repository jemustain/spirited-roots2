import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-whisper-50 flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-lg">
          <p className="text-8xl mb-4">🌿</p>
          <h1 className="text-5xl md:text-6xl font-bold text-plum-900 mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-plum-700 mb-6">
            Oops, this page wandered off the trail
          </h2>
          <p className="text-lg text-plum-600 mb-10 leading-relaxed">
            It looks like the path you followed leads to a clearing with nothing in it — yet.
            Let&rsquo;s get you back to familiar ground.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="btn-lavender inline-block"
            >
              Back to Home
            </Link>
            <Link
              href="/blog"
              className="text-lavender-600 hover:text-lavender-800 font-semibold underline underline-offset-4 transition-colors"
            >
              Browse the Blog
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
