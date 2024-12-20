"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Header() {
  const NavLink = [
    {
      name: "Beranda",
      href: "/",
    },
    {
      name: "Artikel",
      href: "/artikel",
    },
    {
      name: "Kosakata",
      href: "/kosakata",
    },
    {
      name: "Kontak",
      href: "/kontak",
    },
  ];
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-3 py-3 md:px-10">
      <Link href="/">
        <h1 className="text-xl font-semibold sm:text-2xl">
          <span>&#128218;</span> BahasaArUp
        </h1>
      </Link>
      {/* Nav Desktop */}

      <ul className="hidden gap-6 sm:flex">
        {NavLink.map(({ name, href }, index) => (
          <li key={index}>
            <Link
              className={clsx("hover:text-blue-400", {
                "text-blue-400": pathname === href,
              })}
              href={href}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="relative sm:hidden">
        {isOpen ? (
          <FaTimes onClick={() => setIsOpen((prev) => !prev)} />
        ) : (
          <FaBars
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden"
          />
        )}
        {/* Nav Mobile */}
        {isOpen && (
          <ul className="absolute right-8 top-0 z-50 space-y-4 bg-gray-900 sm:hidden">
            {NavLink.map(({ name, href }, index) => (
              <li key={index}>
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
