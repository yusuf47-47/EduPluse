import React from "react";

import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "Courses", href: "#courses" },
  { label: "For Business", href: "#business" },
  { label: "Become an Instructor", href: "#instructor" },
  { label: "Help Center", href: "#help" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#dce9ed] bg-white">
      <div className="mx-auto max-w-360 px-6 py-10 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <a
              href="/"
              className="inline-block text-2xl font-bold tracking-tight text-petrol-dark transition-colors hover:text-petrol"
            >
              EduPluse
            </a>

            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              Learn Continuously, Grow Endlessly
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end lg:gap-x-10"
          >
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group inline-flex items-center gap-1 text-sm font-semibold text-slate-600 transition-colors hover:text-petrol"
              >
                {link.label}
                <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-slate-100 pt-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Olivieda. All rights reserved.</p>

          <a
            href="#top"
            className="w-fit font-medium text-petrol transition-colors hover:text-petrol-dark"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
