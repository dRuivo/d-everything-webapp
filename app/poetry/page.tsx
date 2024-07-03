import { getAllPoems } from "@/app/_lib/api";
import Link from "next/link";

export default function Page() {
  const poems = getAllPoems();

  return (
    <main>
      <h1>Welcome to my Poetry Page!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
          {poems.map((poem) => (
            <Link href={`/poetry/poems/${poem.slug}`} className="hover:underline">
              {poem.title}
            </Link>
          ))}
        </div>
    </main>
  );
};