import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-8">
        <h2 className="text-3xl font-semibold tracking-tight">Let’s build something great</h2>
        <p className="mt-3 max-w-2xl text-white/70">
          I’m currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-white/90"
          >
            <Mail size={18} /> Email me
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
