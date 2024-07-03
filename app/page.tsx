import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-full flex-col space-y-4 items-center justify-between ">
      <h1>Welcome to dRuivo</h1>
      <p>
        My name is Diogo and I&apos;ll be your host during this stay.
        </p>
      <p>If you&apos;re here for my thoughts, check out the <Link href="/blog">Blog</Link>, latest Post:</p>
      <p>If you&apos;re here for my <Link href="/gallery">photos</Link> check that: Random picture</p>
      <p>Or maybe you&apos;re here for my <Link href="/poetry">poems</Link>, latest Poem:</p>
      <p>If you&apos;re here for the services I provide, continue to one of these links.</p>
      <p>And if you want to learn a bit about me:</p>
    </main>
  );
}
