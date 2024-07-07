import { notFound } from "next/navigation";
import { getPostBySlug, getNextPost, getPrevPost } from "@/app/_lib/api";
import markdownToHtml from "@/app/_lib/markdownToHtml";
import markdownStyles from "./markdown-styles.module.css";
import Breadcrumbs from "@/app/_ui/breadcrums";
import Pagination from "@/app/_ui/pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Blog',
};

type Params = {
  params: {
    slug: string;
  };
};

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");
  const next_post = getNextPost(params.slug);
  const next = next_post ? { slug: "/blog/posts/" + next_post.slug, title: next_post.title } : null;
  const prev_post = getPrevPost(params.slug);
  const prev = prev_post ? { slug: "/blog/posts/" + prev_post.slug, title: prev_post.title } : null;

  return (
    <main>
      <Breadcrumbs
          breadcrumbs={[
              { label: 'Blog', href: '/blog' },
              {
                  label: post.title,
                  href: `/blog/posts/${post.slug}`,
                  active: true,
              },
          ]}
      />
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {/* <article class="prose prose-slate">{{ post.content }}</article> */}
      {/* Previous and next post */}
      <Pagination prev={prev} next={next} />
    </main>
  )
}