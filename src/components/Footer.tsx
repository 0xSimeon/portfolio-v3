import Link from "next/link";

const socialLinks = [
  { href: "https://github.com/0xSimeon", label: "GitHub" },
  { href: "https://x.com/0xsimeon", label: "Twitter" },
  { href: "https://linkedin.com/in/simeonudoh", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="px-6 md:px-8 py-16">
        <div className="max-w-2xl mx-auto">
          {/* Main footer content */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {/* Left side - Branding */}
            <div>
              <p className="font-heading text-lg font-bold text-neutral-900 mb-1">
                Simeon Udoh
              </p>
              <p className="text-sm text-neutral-500">
                Building and learning in public.
              </p>
            </div>

            {/* Right side - Social links */}
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

          {/* Divider */}
          <div className="my-8 border-t border-neutral-200" />

          {/* Copyright */}
          <p className="text-sm text-neutral-400">
            &copy; 2026 Simeon Udoh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
