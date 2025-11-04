import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] pt-24">
      {/* Background gradient accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Copy */}
        <div className="relative z-10">
          <p className="mb-3 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            Building playful, modern web experiences
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Hi, I’m <span className="bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">Your Name</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            A frontend-focused developer crafting fast, accessible, and delightful interfaces. I blend thoughtful design with robust engineering.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center rounded-md bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 shadow-sm hover:bg-white/90"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-md border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <a
              aria-label="GitHub"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-2 text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              <Github size={20} />
            </a>
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-2 text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              <Linkedin size={20} />
            </a>
            <a
              aria-label="Email"
              href="#contact"
              className="rounded-full border border-white/10 bg-white/5 p-2 text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* 3D Spline */}
        <div className="relative h-[420px] w-full rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-2 sm:h-[520px]">
          <div className="relative h-full w-full overflow-hidden rounded-lg">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Soft overlay to enhance contrast without blocking interaction */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/30 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
