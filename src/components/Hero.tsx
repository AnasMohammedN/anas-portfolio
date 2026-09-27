import React from 'react';
import { ArrowRight, Mail, Github, Linkedin, Code2, Award, Database, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto w-full text-center relative z-10">
        {/* Academic status indicator */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs text-blue-300 font-medium mb-6 backdrop-blur-sm shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span>B.Tech Student</span>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
            {PERSONAL_INFO.name}
          </span>
        </h1>

        {/* Degree */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-400 mb-4 tracking-tight">
          {PERSONAL_INFO.degree}
        </h2>

        {/* Professional Headline */}
        <div className="inline-block px-4 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-sm sm:text-base md:text-lg font-mono text-slate-300 mb-8 max-w-2xl mx-auto">
          <span className="text-blue-400">&gt; </span>
          <span>{PERSONAL_INFO.headline}</span>
        </div>

        {/* Short value statement */}
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
          Focused on extracting actionable insights, building robust predictive models, and translating complex
          datasets into strategic, data-driven decisions.
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-blue-400" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Social and Coding Profile Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14">
          <a
            href={PERSONAL_INFO.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-blue-500/40 text-slate-300 hover:text-white text-xs sm:text-sm font-medium transition-all group"
          >
            <Github className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
            <span>GitHub</span>
          </a>
          <a
            href={PERSONAL_INFO.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-blue-500/40 text-slate-300 hover:text-white text-xs sm:text-sm font-medium transition-all group"
          >
            <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
            <span>LinkedIn</span>
          </a>
          <a
            href={PERSONAL_INFO.social.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-blue-500/40 text-slate-300 hover:text-white text-xs sm:text-sm font-medium transition-all group"
          >
            <Code2 className="w-4 h-4 text-slate-400 group-hover:text-amber-400 transition-colors" />
            <span>LeetCode</span>
          </a>
        </div>

        {/* Recruiter Quick Snapshot Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-6 border-t border-slate-800/80 text-left">
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-blue-500/30 transition-all">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums">
                  8.21 <span className="text-xs text-blue-400 font-sans font-medium">CGPA</span>
                </div>
                <div className="text-xs text-slate-400">Dhaanish Chennai College</div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-blue-500/30 transition-all">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-white leading-tight">
                  NSIC Intern
                </div>
                <div className="text-xs text-slate-400">Data Science Experience</div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-blue-500/30 transition-all">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-white leading-tight">
                  4 Certifications
                </div>
                <div className="text-xs text-slate-400">NPTEL, Oracle, NumPy, Mongo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
