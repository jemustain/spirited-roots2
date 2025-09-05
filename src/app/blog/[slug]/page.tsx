import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { format } from 'date-fns';
import type { Metadata } from 'next';

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
      title: 'Post Not Found - SpiritedRoots',
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
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <header className="sage-gradient text-white py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-sage-100 hover:text-white mb-4 inline-block">
            ← Back to Blog
          </Link>
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap justify-center items-center text-sage-100 text-sm">
              <span>By {post.author}</span>
              <span className="mx-2">•</span>
              <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
          {post.featured && (
            <div className="text-center mb-8">
              <span className="inline-block bg-gold-500 text-white px-4 py-2 text-sm font-semibold rounded-full">
                ✨ Featured Post
              </span>
            </div>
          )}
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-sage-100 text-sage-700 px-3 py-1 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Post Content */}
          <div 
            className="prose prose-lg max-w-none text-sage-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-sage-50 rounded-lg border-l-4 border-gold-500">
            <div className="flex items-start">
              <div className="text-4xl mr-4">🌿</div>
              <div>
                <h3 className="text-xl font-semibold text-sage-900 mb-2">
                  About {post.author}
                </h3>
                <p className="text-sage-700">
                  A homeschooling mom, software engineer, and nature enthusiast passionate about 
                  natural living and helping families create joyful, grounded lifestyles rooted in wellness.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center p-8 bg-cream-100 rounded-lg">
            <h3 className="text-2xl font-bold text-sage-900 mb-4">
              Join the SpiritedRoots Community
            </h3>
            <p className="text-sage-700 mb-6 max-w-2xl mx-auto">
              Get weekly tips, product reviews, and nature-inspired recipes delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-sage">
                Subscribe to Newsletter
              </button>
              <Link href="/blog" className="btn-gold">
                Read More Posts
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
