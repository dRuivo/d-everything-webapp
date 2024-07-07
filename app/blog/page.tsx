import { Metadata } from 'next';
import { getAllPosts } from "@/app/_lib/api";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Blog',
};

export default function Page() {
  const posts = getAllPosts();


  return (
    <main className='grid grid-cols-1 justify-items-center'>
      <h1>Welcome to my Blog!</h1>
      <section className='space-y-4'>
        <p>Some introductory words.</p>
        <p>This blog serves as a space to showcase my thoughts.</p>
        <p>They may take the form of hardware of software projects, serve to document the mastering of tools or subjects, or be just me blurting out words.</p>
        <p>Still under construction...</p>
      </section>
      
      {/* <section>
        <h2>
          Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
          {posts.map((post) => (
            <Link href={`/blog/posts/${post.slug}`} className="hover:underline" key={post.slug}>
              {post.title}
            </Link>
          ))}
        </div>
      </section> */}
    </main>
  );
};
