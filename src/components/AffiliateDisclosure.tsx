import Link from 'next/link';

interface AffiliateDisclosureProps {
  variant?: 'full' | 'compact' | 'inline';
  className?: string;
}

export default function AffiliateDisclosure({ 
  variant = 'inline', 
  className = "" 
}: AffiliateDisclosureProps) {
  
  // Simple inline link style (like reading time)
  if (variant === 'inline') {
    return (
      <div className={`text-sm text-sage-600 ${className}`}>
        <Link 
          href="/disclosure" 
          className="hover:text-sage-800 transition-colors duration-200 flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <span>Affiliate disclosure</span>
        </Link>
      </div>
    );
  }

  // Compact version - still subtle but with brief explanation
  if (variant === 'compact') {
    return (
      <div className={`bg-sage-50 border border-sage-200 rounded-lg p-4 mb-6 ${className}`}>
        <p className="text-sm text-sage-700">
          This post contains affiliate links. 
          <Link 
            href="/disclosure" 
            className="text-sage-600 hover:text-sage-800 ml-1 underline transition-colors duration-200"
          >
            Read our full disclosure policy
          </Link>
        </p>
      </div>
    );
  }

  // Full version for the main disclosure page
  if (variant === 'full') {
    return (
      <div className={`bg-gold-50 border border-gold-200 rounded-lg p-6 mb-8 ${className}`}>
        <div className="flex items-start">
          <div className="text-2xl mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-marigold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-sage-900 mb-2">
              Affiliate Disclosure
            </h3>
            <p className="text-sage-700 leading-relaxed mb-3">
              This post contains affiliate links, which means I may receive a small commission 
              if you make a purchase through these links at no additional cost to you. This helps 
              support our family and allows me to continue sharing honest reviews and natural living tips.
            </p>
            <p className="text-sage-700 leading-relaxed">
              I only recommend products I genuinely use and believe will benefit your family. 
              My opinions are always my own, and I include both pros and cons in every review.
            </p>
            <Link 
              href="/disclosure" 
              className="inline-block mt-3 text-sage-600 hover:text-sage-800 underline text-sm"
            >
              Read our full affiliate disclosure →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Default fallback
  return null;
}
