import { getAllPosts } from '@/lib/blog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroImage from '@/components/HeroImage';
import BlogPageClient from '@/components/BlogPageClient';

export const metadata = {
  title: 'Blog - Violet Mama',
  description: 'Read Violet\'s latest posts on natural living, mindful motherhood, eco-friendly products, and family wellness tips.',
  keywords: 'natural living blog, mindful motherhood, eco-friendly family, parenting tips, healthy lifestyle',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-whisper-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <HeroImage 
          src="/images/heroes/blog-hero.jpg"
          alt="Natural living blog posts about homeschooling and eco-friendly family life"
          className="h-64 md:h-80"
          overlay={true}
          overlayColor="brand"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 hero-text-shadow">
              Our Family Stories
            </h1>
            <p className="text-lg md:text-xl hero-text-shadow">
              Discover natural living tips, product reviews, and homeschool adventures
            </p>
          </div>
        </div>
      </section>

      <BlogPageClient posts={posts} />

      <Footer />
    </div>
  );
}
