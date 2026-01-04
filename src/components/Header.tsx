"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="py-6 px-6 md:px-8">
      <nav className="max-w-3xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="font-heading text-lg font-bold text-neutral-900 hover:text-neutral-600 transition-colors"
        >
          Simeon Udoh
        </Link>
        <ul className="flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm transition-colors ${
                  pathname === link.href
                    ? "text-neutral-900 font-medium"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
