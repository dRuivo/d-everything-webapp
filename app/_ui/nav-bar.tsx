'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline';  // TODO: Import the correct icons from the Heroicons library.
import Link from 'next/link';
import MyLogo from '@/app/_ui/logo';


// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    // { name: 'home', href: '/', icon: null },
    { name: 'about me', href: '/about', icon: null},
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
      <div className="hidden md:flex  max-w-full items-center justify-end text-blue-gray-900">
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
      <div className="md:hidden flex max-w-full items-center justify-end text-blue-gray-900 dropdown dropdown-bottom dropdown-end">
        <div tabIndex={0} role="button" className="btn m-1">
          <Bars3Icon className='size-6 text-blue-gray-900'/>
        </div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          {links.map((link) => {
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className='flex items-center justify-center px-4'
                >
                  <p className="block">{link.name}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
