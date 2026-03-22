import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-whisper-50 flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-lg">
          <p className="text-8xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 mx-auto text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
          </p>
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
