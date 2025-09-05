import Link from 'next/link';

export default function Header() {
  return (
    <header className="sage-gradient text-white py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-4">
          <Link href="/" className="text-2xl font-bold hover:text-sage-200 transition-colors">
            🌿 SpiritedRoots
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-sage-200 transition-colors">
              Home
            </Link>
            <Link href="/blog" className="hover:text-sage-200 transition-colors">
              Blog
            </Link>
            <Link href="/about" className="hover:text-sage-200 transition-colors">
              About
            </Link>
          </nav>
          {/* Mobile menu button - you can expand this later */}
          <button className="md:hidden text-sage-200 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className="text-center">
          <p className="text-sage-100 text-lg">
            Natural Living for Homeschool Moms
          </p>
        </div>
      </div>
    </header>
  );
}
