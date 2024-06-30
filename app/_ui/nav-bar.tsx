'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';  // TODO: Import the correct icons from the Heroicons library.
import Link from 'next/link';
import MyLogo from '@/app/_ui/logo';


// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { name: 'home', href: '/', icon: null },
    {
      name: 'blog',
      href: '/blog',
      icon: null,
    },
    { name: 'poetry', href: '/poetry', icon: null},
    { name: 'gallery', href: '/gallery', icon: null },
];

export default function NavBar() {
  return (
    <div className="flex top-0 z-10 h-max w-full rounded-none py-2 justify-between md:px-32">
      <div className="flex items-center justify-start text-blue-gray-900">
        <MyLogo />
      </div>
      <div className="flex max-w-full items-center justify-end text-blue-gray-900">
        <>
          {links.map((link) => {
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className='flex items-center justify-center px-4'
              >
                <p className="block">{link.name}</p>
              </Link>
            );
          })}
        </>
      </div>
    </div>
  );
}
