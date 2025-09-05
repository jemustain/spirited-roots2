import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags: string[];
  featured?: boolean;
  content: string;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Convert markdown to HTML
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      author: data.author,
      tags: data.tags || [],
      featured: data.featured || false,
      content: contentHtml,
      seo: data.seo || {
        title: data.title,
        description: data.excerpt,
        keywords: data.tags?.join(', ') || '',
      },
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export function getAllPosts(): BlogPost[] {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        return {
          slug,
          title: data.title,
          date: data.date,
          excerpt: data.excerpt,
          author: data.author,
          tags: data.tags || [],
          featured: data.featured || false,
          content: '', // Don't load full content for listing
          seo: data.seo || {
            title: data.title,
            description: data.excerpt,
            keywords: data.tags?.join(', ') || '',
          },
        };
      })
      .sort((a, b) => {
        // Sort by date, newest first
        if (a.date < b.date) {
          return 1;
        } else {
          return -1;
        }
      });

    return allPostsData;
  } catch (error) {
    console.error('Error reading posts:', error);
    return [];
  }
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter((post) => post.featured);
}
