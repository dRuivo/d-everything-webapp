import { notFound } from "next/navigation";
import { getPoemBySlug } from "@/app/_lib/api";
import markdownToHtml from "@/app/_lib/markdownToHtml";
import markdownStyles from "./markdown-styles.module.css";

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

  return (
    <main className="text-center">
      <h2 className="leading-loose">{poem.title}</h2>
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div className="mt-8">
        <p>{poem.author.name}</p>
        <p>{poem.date}</p>
      </div>
      {/* TODO: Next and Previous */}
    </main>
  )
}