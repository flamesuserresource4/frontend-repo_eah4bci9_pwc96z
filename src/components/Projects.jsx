import React from 'react';
import { ExternalLink, Code2, Rocket } from 'lucide-react';

const projects = [
  {
    title: 'Interactive Dashboard',
    description:
      'A responsive analytics dashboard with real-time charts and delightful micro-interactions.',
    tech: ['React', 'Tailwind', 'ChartJS'],
    link: '#',
    icon: Rocket,
  },
  {
    title: 'Design System',
    description:
      'A reusable component library following accessible design tokens and theming.',
    tech: ['Storybook', 'Radix', 'TypeScript'],
    link: '#',
    icon: Code2,
  },
  {
    title: '3D Playground',
    description:
      'Experimenting with 3D scenes and interactions powered by Spline and WebGL.',
    tech: ['Spline', 'WebGL'],
    link: '#',
    icon: Rocket,
  },
];

export default function Projects() {
  return (
    <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Selected Work</h2>
        <p className="mt-3 text-white/70">A few projects that showcase my approach to building for the web.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ title, description, tech, link, icon: Icon }) => (
          <a
            key={title}
            href={link}
            target={link.startsWith('http') ? '_blank' : undefined}
            rel={link.startsWith('http') ? 'noreferrer' : undefined}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                <Icon size={20} />
              </div>
              <ExternalLink className="opacity-0 transition group-hover:opacity-100" size={18} />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-white/70">{description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tech.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
