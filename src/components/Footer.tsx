import Link from "next/link";

const socialLinks = [
  { href: "https://github.com/0xSimeon", label: "GitHub" },
  { href: "https://x.com/0xsimeon", label: "Twitter" },
  { href: "https://linkedin.com/in/simeonudoh", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="px-6 md:px-8 py-12 mt-20 border-t border-neutral-200">
      <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-500">
          &copy; 2026 Simeon Udoh. All rights reserved.
        </p>
        <ul className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
