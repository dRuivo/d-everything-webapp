import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
};

export default function Page() {
  return (
    <main className="grid grid-cols-1 justify-items-center">
      <div className="w-7/12 justify-center space-y-4">
        <h1 className="text-center">About Me</h1>
        <p>Hi, I&apos;m dRuivo!</p>
        {/* TODO: add more of my creative side. Poetry, drawing, photography */}
        <p>I&apos;m an engineer, a dicoverer, a poet, a maker.</p>
        <p>My interests are varied and I&apos;m always looking for new things to learn.</p>
        <p>Feel free to explore my blog and my poetry.</p>
        <p>Thanks for stopping by!</p>
        <div className="py-8"/>
        <p>If you're looking for my job experience check my <Link href={"/resume"} className="hover:italic underline" >Resume</Link>.</p>
      </div>
    </main>
  ); 
}