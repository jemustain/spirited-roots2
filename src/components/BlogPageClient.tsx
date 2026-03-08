'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import BlogImage from '@/components/BlogImage';
import PlaceholderImage from '@/components/PlaceholderImage';

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags: string[];
  featured?: boolean;
  heroImage?: string;
  heroImageAlt?: string;
  readingTime: number;
}

export default function BlogPageClient({ posts }: { posts: Post[] }) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
    return Array.from(tagSet).sort();
  }, [posts]);

  const filtered = useMemo(() => {
    let result = posts;
    if (selectedTag) {
      result = result.filter((p) => p.tags.includes(selectedTag));
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return result;
  }, [posts, selectedTag, search]);

  return (
    <>
      {/* Search + Tag Filter Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="relative mb-4">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-plum-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search posts by title, tags, or keywords..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-plum-200 bg-white text-plum-900 placeholder-plum-400 focus:outline-none focus:ring-2 focus:ring-plum-500 focus:border-transparent"
          />
        </div>
        <div className="flex flex-wrap gap-2 mb-2">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              selectedTag === null
                ? 'bg-plum-600 text-white'
                : 'bg-plum-100 text-plum-700 hover:bg-plum-200'
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                selectedTag === tag
                  ? 'bg-plum-600 text-white'
                  : 'bg-plum-100 text-plum-700 hover:bg-plum-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        {(selectedTag || search) && (
          <p className="text-sm text-plum-600 mb-2">
            Showing {filtered.length} of {posts.length} posts
            {selectedTag && <> tagged <strong>{selectedTag}</strong></>}
            {search && <> matching &ldquo;{search}&rdquo;</>}
          </p>
        )}
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-sage-600 text-lg">No posts found.</p>
            <button
              onClick={() => { setSelectedTag(null); setSearch(''); }}
              className="mt-4 text-plum-600 hover:text-plum-800 underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <article
                key={post.slug}
                className="content-bg rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  {post.heroImage && post.heroImage !== 'placeholder' ? (
                    <BlogImage
                      src={post.heroImage}
                      alt={post.heroImageAlt || post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <PlaceholderImage
                      width={400}
                      height={300}
                      text="Violet Mama"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-6">
                  {post.featured && (
                    <span className="inline-block bg-marigold-500 text-white px-2 py-1 text-xs font-semibold rounded-full mb-3">
                      ✨ Featured
                    </span>
                  )}
                  <h2 className="text-lg font-bold text-primary-responsive mb-2 hover:text-sage-700 transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <div className="flex flex-wrap items-center text-muted-responsive text-xs mb-3 gap-2">
                    <span className="flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {format(new Date(post.date + 'T12:00:00'), 'MMM d, yyyy')}
                    </span>
                    <span>•</span>
                    <span className="flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      {post.readingTime} min
                    </span>
                  </div>
                  <p className="text-secondary-responsive text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-gray-400 dark:text-gray-500 text-xs">
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="text-gray-400 dark:text-gray-500 text-xs">
                        +{post.tags.length - 2}
                      </span>
                    )}
                  </div>
                  <Link href={`/blog/${post.slug}`} className="text-sm btn-lavender inline-block w-full text-center">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
