import { type Author } from "@/app/_interfaces/author";

export type Poem = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
  color: string;
};
