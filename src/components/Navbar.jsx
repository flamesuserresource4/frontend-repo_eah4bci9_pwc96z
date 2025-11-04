import React from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-white">
            <span className="text-primary-500">&lt;</span>Portfolio<span className="text-primary-500">/&gt;</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-white text-neutral-900 px-4 py-2 text-sm font-medium hover:bg-white/90 transition-colors"
          >
            Let’s talk
          </a>
        </div>
      </div>
    </header>
  );
}
