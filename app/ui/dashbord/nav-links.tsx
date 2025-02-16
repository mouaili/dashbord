'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

const links = [
  {
    name: 'Accueil',
    href: '/dashbord',
    icon: HomeIcon,
  },
  {
    name: 'customers',
    href: '/dashbord/customers',
    icon: UserGroupIcon,
  },
  {
    name: 'invoices',
    href: '/dashbord/invoices',
    icon: DocumentDuplicateIcon,
  },
];

export default function NavLinks(): JSX.Element {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <>
      {links.map(link => {
        const LinkIcon = link.icon;

        return (
          <Link
            className={clsx(
              `flex  justify-center gap-2 rounded-md bg-gray-50 p-3 font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3`,
              { 'bg-teal-400 text-white': pathname === link.href }
            )}
            key={link.name}
            href={link.href}
          >
            <LinkIcon className="w-5" />
            <p className=" hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
