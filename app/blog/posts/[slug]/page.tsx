import { notFound } from "next/navigation";
import { getPostBySlug } from "@/app/_lib/api";
import markdownToHtml from "@/app/_lib/markdownToHtml";
import markdownStyles from "./markdown-styles.module.css";
import Breadcrumbs from "@/app/_ui/breadcrums";


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
    </main>
  )
}