import Link from 'next/link';
import BlogImage from '@/components/BlogImage';
import PlaceholderImage from '@/components/PlaceholderImage';

interface PostSummary {
  slug: string;
  title: string;
  tags: string[];
  heroImage?: string;
  heroImageAlt?: string;
}

export default function RelatedPosts({
  currentSlug,
  currentTags,
  allPosts,
}: {
  currentSlug: string;
  currentTags: string[];
  allPosts: PostSummary[];
}) {
  const others = allPosts.filter((p) => p.slug !== currentSlug);

  // Score by shared tags
  const scored = others.map((p) => ({
    ...p,
    score: p.tags.filter((t) => currentTags.includes(t)).length,
  }));

  scored.sort((a, b) => b.score - a.score);

  const related = scored.slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="mt-12">
      <h3 className="text-2xl font-bold text-primary-responsive mb-6">Related Posts</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="content-bg rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden group"
          >
            <div className="aspect-[4/3] overflow-hidden">
              {post.heroImage && post.heroImage !== 'placeholder' ? (
                <BlogImage
                  src={post.heroImage}
                  alt={post.heroImageAlt || post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
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
            <div className="p-4">
              <h4 className="text-sm font-semibold text-primary-responsive line-clamp-2 group-hover:text-plum-700 transition-colors">
                {post.title}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
