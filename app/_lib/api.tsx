import { Post } from "@/app/_interfaces/post";
import { Poem } from "@/app/_interfaces/poem";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");
const poemsDirectory = join(process.cwd(), "_poems");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md"));
}

export function getPoemSlugs() {
  return fs.readdirSync(poemsDirectory).filter((file) => file.endsWith(".md"));
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getPoemBySlug(slug: string) {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(poemsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return { ...data, slug: realSlug, content } as Poem;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}

export function getAllPoems(): Poem[] {
    const slugs = getPoemSlugs();
    const poems = slugs
      .map((slug) => getPoemBySlug(slug))
      // sort poems by date in descending order
      .sort((poem1, poem2) => (poem1.date > poem2.date ? -1 : 1));
      return poems;
}

export function getPrevPost(slug: string) : Post | null{
  const posts = getAllPosts();
  const currentIndex = posts.findIndex((post) => post.slug === slug);
  const previousIndex = currentIndex - 1;
  if (previousIndex >= posts.length) {
    return null;
  }
  return posts[previousIndex];
}

export function getNextPost(slug: string) : Post | null{
  const posts = getAllPosts();
  const currentIndex = posts.findIndex((post) => post.slug === slug);
  const nextIndex = currentIndex + 1;
  if (nextIndex < 0) {
    return null;
  }
  return posts[nextIndex]
}

export function getPrevPoem(slug: string) : Poem | null {
    const poems = getAllPoems();
    const currentIndex = poems.findIndex((poem) => poem.slug === slug);
    const previousIndex = currentIndex - 1;
    if (previousIndex >= poems.length) {
      return null;
    }
    return poems[previousIndex];
  }
  
export function getNextPoem(slug: string) : Poem | null {
  const poems = getAllPoems();
  const currentIndex = poems.findIndex((poem) => poem.slug === slug);
  const nextIndex = currentIndex + 1;
  if (nextIndex < 0) {
    return null;
  }
  return poems[nextIndex];
}