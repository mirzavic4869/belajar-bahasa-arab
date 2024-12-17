import Link from 'next/link';
import React from 'react';

export default function Header() {
  const NavLink = [
    {
      menu: 'Beranda',
      link: '/',
    },
    {
      menu: 'Artikel',
      link: '/artikel',
    },
    {
      menu: 'Kosakata',
      link: '/kosakata',
    },
    {
      menu: 'Kontak',
      link: '/kontak',
    },
  ];

  return (
    <nav className="flex justify-between items-center px-3 py-3 md:px-10 mx-auto max-w-7xl">
      <Link href="/">
        <h1 className="font-semibold text-xl sm:text-2xl">
          <span>&#128218;</span> BahasaArUp
        </h1>
      </Link>
      {/* Nav Desktop */}
      <ul className="sm:flex gap-6 hidden">
        {NavLink.map(({ menu, link }, index) => (
          <li key={index}>
            <Link href={link}>{menu}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
