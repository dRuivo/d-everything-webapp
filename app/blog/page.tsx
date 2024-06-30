import { getAllPosts } from "@/app/_lib/api";
import Link from "next/link";

export default function Page() {
  const posts = getAllPosts();


  return (
    <main>
      <h1>Welcome to my page!</h1>
      <p>This is a basic page.</p>
      <section>
        <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
          More Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
          {posts.map((post) => (
            <Link href={`/blog/posts/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};
