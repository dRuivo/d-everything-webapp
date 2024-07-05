import { notFound } from "next/navigation";
import { getPoemBySlug, getNextPoem, getPrevPoem } from "@/app/_lib/api";
import markdownToHtml from "@/app/_lib/markdownToHtml";
import markdownStyles from "./markdown-styles.module.css";
import Breadcrumbs from "@/app/_ui/breadcrums";
import Pagination from "@/app/_ui/pagination";

type Params = {
  params: {
    slug: string;
  };
};

export default async function Poem({ params }: Params) {
  const poem = getPoemBySlug(params.slug);

  if (!poem) {
    return notFound();
  }

  const content = await markdownToHtml(poem.content || "");

  const prev_poem = getPrevPoem(params.slug);
  const prev = prev_poem ? { slug: "/poetry/poems/" + prev_poem.slug, title: prev_poem.title } : null;
  const next_poem = getNextPoem(params.slug);
  const next = next_poem ? { slug: "/poetry/poems/" + next_poem.slug, title: next_poem.title } : null;

  return (
    <main className="text-center ">
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Poetry', href: '/poetry' },
          {
              label: poem.title,
              href: `/poetry/poems/${poem.slug}`,
              active: true,
          },
        ]}
      />
      <h2 className="leading-loose">{poem.title}</h2>
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div className="mt-8">
        <p>{poem.author.name}</p>
        <p>{poem.date}</p>
      </div>
      <Pagination prev={prev} next={next} />
    </main>
  )
}