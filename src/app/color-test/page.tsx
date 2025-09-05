'use client';

import { useEffect } from 'react';
import { testColorAccessibility } from '@/lib/colorContrast';

export default function ColorTestPage() {
  useEffect(() => {
    // Run the accessibility test when component mounts
    testColorAccessibility();
  }, []);

  return (
    <div className="min-h-screen bg-cream-50 dark:bg-sage-950 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-sage-900 dark:text-sage-100 mb-8">
          Color Accessibility Test
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Light Mode Examples */}
          <div className="bg-white dark:bg-sage-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-sage-900 dark:text-sage-100 mb-4">
              Light Mode Examples
            </h2>
            
            <div className="space-y-4">
              <p className="text-sage-800 dark:text-sage-200">
                This is primary text that should be easy to read.
              </p>
              <p className="text-sage-600 dark:text-sage-300">
                This is secondary text with good contrast.
              </p>
              <p className="text-sage-500 dark:text-sage-400">
                This is muted text for less important content.
              </p>
              
              <div className="space-y-2">
                <a href="#" className="text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-200 underline">
                  This is a link that changes on hover
                </a>
                <br />
                <button className="btn-sage">
                  Sage Button
                </button>
                <br />
                <button className="btn-gold">
                  Gold Button
                </button>
                <br />
                <button className="btn-terracotta">
                  Terracotta Button
                </button>
              </div>
            </div>
          </div>
          
          {/* Dark Mode Examples */}
          <div className="bg-sage-100 dark:bg-sage-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-sage-900 dark:text-sage-100 mb-4">
              Dark Mode Examples
            </h2>
            
            <div className="space-y-4">
              <p className="text-sage-800 dark:text-sage-200">
                Dark mode primary text for easy reading.
              </p>
              <p className="text-sage-600 dark:text-sage-300">
                Dark mode secondary text with proper contrast.
              </p>
              <p className="text-sage-500 dark:text-sage-400">
                Dark mode muted text that&apos;s still readable.
              </p>
              
              <div className="bg-sage-50 dark:bg-sage-900 p-4 rounded">
                <p className="text-sage-900 dark:text-sage-100">
                  Text in a contrasting background container.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-white dark:bg-sage-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-sage-900 dark:text-sage-100 mb-4">
            Instructions
          </h2>
          <p className="text-sage-700 dark:text-sage-300 mb-4">
            Open your browser&apos;s developer console to see the color accessibility test results.
            The test checks contrast ratios against WCAG AA standards (4.5:1 minimum).
          </p>
          <p className="text-sage-700 dark:text-sage-300">
            Toggle your system&apos;s dark mode setting to test both themes automatically.
          </p>
        </div>
      </div>
    </div>
  );
}
