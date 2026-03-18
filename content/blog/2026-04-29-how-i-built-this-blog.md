---
title: "How I Built This Blog (And Why I Didn't Use WordPress)"
slug: "2026-04-29-how-i-built-this-blog"
date: "2026-04-29"
excerpt: "I'm a software engineer who also happens to be a mom blogger. Here's why I built violetmama.com from scratch with Next.js, Tailwind CSS, and Vercel — and why I'd do it again."
author: "Violet"
tags: ["tech", "behind the scenes"]
featured: false
heroImage: "/images/blog/2026-04-29-how-i-built-this-blog/tech-stack-hero.jpg"
heroImageAlt: "Laptop on a desk with code editor open next to a cup of coffee"
seo:
  title: "How I Built This Blog - Next.js, Tailwind CSS, and Vercel"
  description: "A mom and software engineer explains why she built her blog from scratch instead of using WordPress, and walks through the tech stack behind violetmama.com."
  keywords: "how to build a blog, Next.js blog, Tailwind CSS blog, Vercel deployment, developer mom blog, build your own blog"
---

I get this question sometimes — usually from other techy moms who are thinking about starting a blog: "What platform do you use?"

And when I say "I built it myself with Next.js," the response is either "oh cool, what's your stack?" (the engineers) or "...why would you do that to yourself?" (everyone else).

Both are fair questions. Let me answer both.

## Why Not WordPress?

Look, WordPress is fine. Millions of blogs run on it. If you're not a developer, it's probably the right choice. But I *am* a developer, and every time I've used WordPress, I've spent more time fighting it than writing.

The plugin ecosystem is a mess. You need a plugin for SEO, a plugin for caching, a plugin for image optimization, a plugin to manage your other plugins. Half of them haven't been updated in two years. Security patches feel like a part-time job. And the themes — unless you're paying for a premium theme, you're tweaking CSS overrides until 2 AM trying to make your site look like it wasn't built in 2014.

I wanted something fast, clean, and simple. Something I could control completely. And honestly? I wanted a project. I was on maternity leave, my son was sleeping 18 hours a day (the newborn era was wild), and my brain needed something to build.

## The Stack

Here's what's under the hood:

### Next.js

[Next.js](https://nextjs.org/) is a React framework, and it's kind of perfect for a content-heavy blog. I use static generation for all the blog posts — they're pre-built at deploy time, so the site loads fast. Like, really fast. No server rendering on every page load, no database queries. Just static HTML and CSS served from a CDN.

The file-based routing is clean. Each blog post is a markdown file with frontmatter (title, date, tags, etc.), and Next.js turns them into pages at build time. Adding a new post means adding a new `.md` file. That's it.

### Tailwind CSS

I resisted [Tailwind](https://tailwindcss.com/) for a long time. Writing `className="flex items-center justify-between px-4 py-2"` felt wrong. It looked ugly. I was a "proper CSS" person.

Then I tried it on this project and... yeah. I get it now.

Tailwind lets me style things fast without context-switching between files. I'm not naming CSS classes or wondering if `.card-wrapper-inner-content` already exists. The utility classes are right there in the JSX. And with the config file, I set up my colors and fonts once, and everything stays consistent.

The site looks the way I want it to look, and I barely wrote any custom CSS. For a solo project where I'm the only developer AND the content creator AND the designer AND the person who has to stop every 20 minutes because someone needs a snack — that efficiency matters.

### Vercel

[Vercel](https://vercel.com/) is where Next.js lives (they made it), so the deployment story is as smooth as it gets. I push to GitHub, Vercel builds and deploys automatically. Preview deployments for branches. Custom domain. SSL. Analytics.

The free tier handles everything I need. I'm not paying for hosting. I'm not managing a server. I'm not debugging nginx configs at midnight. It just works.

### Markdown for Content

All the blog posts live as markdown files in a `content/blog/` directory. Each one has YAML frontmatter with metadata — title, slug, date, excerpt, tags, hero image, SEO stuff.

I write posts in VS Code (same place I write code, so muscle memory does the work) or sometimes in a markdown editor on my phone when inspiration hits during quiet time. No CMS login, no WYSIWYG editor fighting me on formatting.

## What I Considered and Rejected

**Ghost** — Nice, but I didn't want to pay for hosting or manage a Node.js server.

**Hugo** — Fast, but Go templating makes me want to cry. The learning curve wasn't worth it for my needs.

**Gatsby** — This was the other serious contender, but Gatsby's build times and plugin ecosystem gave me WordPress flashbacks. Next.js felt simpler.

**Squarespace/Wix** — No. I need control. And I'm not paying $16/month for something I can build better myself for free.

## The Real Reason

Here's the honest answer: I built it myself because I could, and because it makes me happy.

I spend most of my professional engineering time in large codebases I don't fully control, with design systems someone else chose, deploying through pipelines with 14 approval steps. This blog is mine. Every pixel, every component, every deployment. It's a small, clean codebase that does exactly what I want.

There's something deeply satisfying about running `git push` and watching your words appear on the internet 30 seconds later. No approval queue. No content calendar review. Just write, push, done.

Also — and I think this matters — knowing how my blog works means I'm never dependent on a platform that could change its pricing, kill features, or shut down. My content is markdown files in a Git repo. If Vercel disappeared tomorrow, I could deploy this anywhere in an hour.

## Would I Recommend This?

If you're a developer? Absolutely. The initial setup takes a weekend, and after that, adding content is trivial.

If you're not a developer? Probably not. Use WordPress or Ghost. The point of a blog is the writing, not the infrastructure. Don't let the tooling become the thing.

But if you're like me — someone who gets genuine joy from building things, who wants total control, and who has strong opinions about page load times — build your own. It's worth it.

And if you want to peek at the code, the repo is [on GitHub](https://github.com/jemustain/spirited-roots2). It's nothing fancy. That's the whole point.

---

*Got questions about the tech stack? I'm always happy to nerd out about this stuff. Drop me a message.*
