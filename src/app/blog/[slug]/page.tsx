import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { format } from 'date-fns';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import BlogImage from '@/components/BlogImage';
import PlaceholderImage from '@/components/PlaceholderImage';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found - Violet Mama',
    };
  }

  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-whisper-50">
      <Header />
      
      {/* Page Title */}
      <div className="bg-whisper-100 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-plum-700 hover:text-plum-900 mb-4 inline-block transition-colors">
            ← Back to Blog
          </Link>
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-plum-900 mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap justify-center items-center text-plum-700 text-sm gap-3">
              <Link href="/about" className="flex items-center hover:text-plum-900 transition-colors">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                {post.author}
              </Link>
              <span className="text-plum-500">•</span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                {format(new Date(post.date + 'T12:00:00'), 'MMMM d, yyyy')}
              </span>
              <span className="text-plum-500">•</span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                {post.readingTime} min read
              </span>
              <span className="text-plum-500">•</span>
              <AffiliateDisclosure variant="inline" />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {post.heroImage && post.heroImage !== 'placeholder' ? (
          <BlogImage
            src={post.heroImage}
            alt={post.heroImageAlt || post.title}
            priority={true}
          />
        ) : (
          <PlaceholderImage 
            text={post.title.length > 30 ? "Violet Mama" : post.title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        )}
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="content-bg rounded-lg shadow-lg p-8 lg:p-12">
          {post.featured && (
            <div className="text-center mb-8">
              <span className="inline-block bg-marigold-500 text-white px-4 py-2 text-sm font-semibold rounded-full">
                ✨ Featured Post
              </span>
            </div>
          )}
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="section-bg text-secondary-responsive px-3 py-1 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Post Content */}
          <div 
            className="prose prose-lg max-w-none text-primary-responsive leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Bio */}
          <div className="mt-12 p-6 section-bg rounded-lg border-l-4 border-marigold-500">
            <div className="flex items-start">
              <div className="text-4xl mr-4">🌿</div>
              <div>
                <h3 className="text-xl font-semibold text-primary-responsive mb-2">
                  About {post.author}
                </h3>
                <p className="text-secondary-responsive">
                  A homeschooling mom, software engineer, and nature enthusiast passionate about 
                  natural living and helping families create joyful, grounded lifestyles rooted in wellness.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center p-8 section-bg rounded-lg">
            <h3 className="text-2xl font-bold text-primary-responsive mb-4">
              Join the Violet Mama Community
            </h3>
            <p className="text-secondary-responsive mb-6 max-w-2xl mx-auto">
              Get weekly tips, product reviews, and nature-inspired recipes delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-lavender">
                Subscribe to Newsletter
              </button>
              <Link href="/blog" className="btn-marigold">
                Read More Posts
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
