'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';  // TODO: Import the correct icons from the Heroicons library.
import Link from 'next/link';	

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { name: 'home', href: '/', icon: null },
    {
      name: 'blog',
      href: '/blog',
      icon: null,
    },
    { name: 'galery', href: '/galery', icon: null },
];

export default function NavLinks() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <>
          {links.map((link) => {
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
              >
                <p className="hidden md:block">{link.name}</p>
              </Link>
            );
          })}
        </>
      </div>
    </div>
  );
}
