"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#bio", label: "Bio" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-10 border-b border-white bg-background py-4 font-mono">
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link href="/" className="text-lg font-bold text-black dark:text-white">
          Vasishta&apos;s Portfolio
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex text-lg">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white p-4 rounded-xl"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          className="md:hidden text-black dark:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden flex flex-col px-6 pb-4">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className="block py-2 text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white px-4 rounded-xl"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
