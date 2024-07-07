import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
};

export default function Page() {
  return (
    <main className='grid grid-cols-1 justify-items-center'>
      <h1>Welcome to the Gallery Page!</h1>
      {/* Add your gallery content here */}
      <p>Here you can find some of my photos.</p>
      <p>Eventually.</p>
    </main>
  );
};