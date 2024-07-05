import { Metadata } from 'next';
import { getAllPoems } from "@/app/_lib/api";
import Link from "next/link";
import PoemCard from '@/app/_ui/cards';

export const metadata: Metadata = {
  title: 'Poetry',
};

export default function Page() {
  const poems = getAllPoems();

  return (
    <main className='flex flex-col justify-center'>
      <h2 className='text-center'>Welcome to my Poetry Page!</h2>
      <p className='text-center'>Here you can find some of my poems.</p>
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-x-16 lg:gap-x-32 py-12">
        {poems.map((poem) => (
          <Link href={`/poetry/poems/${poem.slug}`} className="hover:underline"  key={poem.slug}>
            <PoemCard poem={poem}/>
          </Link>
        ))}
      </div>
    </main>
  );
};