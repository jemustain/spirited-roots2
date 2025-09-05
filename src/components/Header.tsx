'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="nature-gradient text-white py-6 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-4">
          <Link href="/" className="text-2xl font-bold hover:text-cream-100 transition-colors" onClick={closeMenu}>
            🌿 SpiritedRoots
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-cream-100 transition-colors">
              Home
            </Link>
            <Link href="/blog" className="hover:text-cream-100 transition-colors">
              Blog
            </Link>
            <Link href="/about" className="hover:text-cream-100 transition-colors">
              About
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-cream-200 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cream-300 rounded-lg p-2"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-cream-200/20 pt-4 mt-4">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="hover:text-cream-100 transition-colors py-2 px-4 rounded-lg hover:bg-white/10"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                href="/blog" 
                className="hover:text-cream-100 transition-colors py-2 px-4 rounded-lg hover:bg-white/10"
                onClick={closeMenu}
              >
                Blog
              </Link>
              <Link 
                href="/about" 
                className="hover:text-cream-100 transition-colors py-2 px-4 rounded-lg hover:bg-white/10"
                onClick={closeMenu}
              >
                About
              </Link>
            </div>
          </nav>
        )}
        
        <div className="text-center">
          <p className="text-cream-100 text-lg">
            Natural Living for Homeschool Moms
          </p>
        </div>
      </div>
    </header>
  );
}
