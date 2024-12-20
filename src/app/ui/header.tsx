'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

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

  const [isOpen, setIsOpen] = useState(false);

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

      <div className="relative sm:hidden">
        {isOpen ? <FaTimes onClick={() => setIsOpen((prev) => !prev)} /> : <FaBars onClick={() => setIsOpen((prev) => !prev)} className="md:hidden" />}
        {/* Nav Mobile */}
        {isOpen && (
          <ul className="sm:hidden space-y-4 absolute right-8 top-0 bg-gray-900 z-50">
            {NavLink.map(({ menu, link }, index) => (
              <li key={index}>
                <Link href={link}>{menu}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
