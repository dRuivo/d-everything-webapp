import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
};

export default function Page() {
  return (
    <div>
      <h1>Welcome to the Gallery Page!</h1>
      {/* Add your gallery content here */}
    </div>
  );
};