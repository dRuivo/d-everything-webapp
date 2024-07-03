import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
};

export default function Page() {
  return (
    <main>
      <h1>About Me</h1>
      <p>Hi, I&apos;m dRuivo!</p>
      <p>I&apos;m a software engineer and a poet.</p>
      <p>My interests are varied and I&apos;m always looking for new things to learn.</p>
      <p>Feel free to explore my blog and my poetry.</p>
    </main>
  ); 
}