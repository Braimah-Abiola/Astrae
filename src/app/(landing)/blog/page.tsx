import BlogCard from "@/components/common/blog-card";
import { getPosts } from "@/hooks/get-blogs";
import AnimatedHero from "@/sections/animated-hero";
import CallToAction from "@/sections/cta";
import { Post } from "@/utils/Interface";
import { Metadata } from "next";

export const revalidate = 60;

const baseUrl = "https://astrae.design";
const wwwBaseUrl = "https://www.astrae.design";

export const metadata: Metadata = {
  metadataBase: new URL(`${baseUrl}`) || new URL(`${wwwBaseUrl}`),
  keywords: [
    "web design blog",
    "React tutorials",
    "Next.js blog",
    "UI/UX tips",
    "Tailwind CSS articles",
    "Framer Motion guides",
    "front-end development blog",
    "Astrae Design blogs",
    "web development tutorials",
    "modern web design articles",
    "React landing page tutorials",
    "UI design resources",
  ],
  title: "Blog",
  description:
    "Stay up-to-date with the latest trends in web design and development. Explore blog posts covering topics like React, Next.js, Tailwind CSS, Framer Motion, and UI/UX design from Astrae Design experts.",
  openGraph: {
    title: "Astrae Design Blog | Web Design & Development Insights",
    siteName: "Astrae Design",
    description:
      "Stay up-to-date with the latest trends in web design and development. Explore blog posts covering topics like React, Next.js, Tailwind CSS, Framer Motion, and UI/UX design from Astrae Design experts.",
    images: ["/assets/blog-thumbnail.png"],
    url: `${baseUrl}/blog`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Astrae Design Blog | Web Design & Development Insights",
    description:
      "Discover the latest web design trends, tutorials, and insights on Astrae Design's blog. From React and Next.js to Tailwind CSS and Framer Motion, we've got you covered.",
    images: ["/assets/blog-thumbnail.png"],
    creator: "@astraedesign0",
  },
  icons: "/favicon.ico",
};

const Blogs = async () => {
  const posts: Post[] = await getPosts();
  return (
    <section>
      <AnimatedHero
        title="News & Insights"
        description="Discover our latests articles and news about industry, best practices and latest developments in React, Next.js, tailwindcss, shadcn and framer-motion."
      />
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {posts?.length > 0 &&
            posts?.map((post) => <BlogCard key={post?._id} post={post} />)}
        </div>
      </div>
      <CallToAction />
    </section>
  );
};

export default Blogs;
