import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { format } from 'date-fns';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <header className="sage-gradient text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-sage-100 hover:text-white mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">
            🌿 SpiritedRoots Blog
          </h1>
          <p className="text-xl text-sage-100 mt-4">
            Natural living tips, product reviews, and joyful family inspiration
          </p>
        </div>
      </header>

      {/* Blog Posts */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-sage-600 text-lg">No blog posts found.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  {post.featured && (
                    <span className="inline-block bg-gold-500 text-white px-3 py-1 text-sm font-semibold rounded-full mb-4">
                      ✨ Featured
                    </span>
                  )}
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-sage-900 mb-4 hover:text-sage-700 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <div className="flex flex-wrap items-center text-sage-600 text-sm mb-4">
                    <span>By {post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
                  </div>
                  
                  <p className="text-sage-700 text-lg leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-sage-100 text-sage-700 px-3 py-1 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="btn-sage inline-block"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
