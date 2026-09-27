import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Code2, Copy, Check, ExternalLink, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Contact Information
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed text-balance">
            Available for data analyst roles, machine learning internships, and engineering opportunities.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {/* Email Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between group shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20 group-hover:bg-blue-600/20 transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-blue-400 font-medium">Primary Contact</span>
              </div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-1">
                Email Address
              </h3>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-lg sm:text-xl font-bold text-white hover:text-blue-400 transition-colors break-all"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            <div className="flex items-center gap-2 mt-6 pt-4 border-t border-slate-800">
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Recruitment%20Inquiry%20-%20Mohammed%20Anas%20N`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>
              <button
                type="button"
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-all cursor-pointer"
                title="Copy email to clipboard"
              >
                {copiedType === 'email' ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Phone Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between group shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20 group-hover:bg-blue-600/20 transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-blue-400 font-medium">Direct Line</span>
              </div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-1">
                Phone Number
              </h3>
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="text-lg sm:text-xl font-bold font-mono text-white hover:text-blue-400 transition-colors tabular-nums"
              >
                {PERSONAL_INFO.phone}
              </a>
            </div>

            <div className="flex items-center gap-2 mt-6 pt-4 border-t border-slate-800">
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-all cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>Call Directly</span>
              </a>
              <button
                type="button"
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-all cursor-pointer"
                title="Copy phone to clipboard"
              >
                {copiedType === 'phone' ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Profiles Row */}
        <div className="max-w-4xl mx-auto">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 text-center">
            Online Presence &amp; Profiles
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 hover:bg-slate-900/90 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-600/10 text-blue-400 group-hover:bg-blue-600/20 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">LinkedIn</div>
                  <div className="text-xs text-slate-400">mohammed-anas</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
            </a>

            {/* GitHub */}
            <a
              href={PERSONAL_INFO.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 hover:bg-slate-900/90 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-800 text-slate-300 group-hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">GitHub</div>
                  <div className="text-xs text-slate-400">AnasMohammedN</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
            </a>

            {/* LeetCode */}
            <a
              href={PERSONAL_INFO.social.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-900/90 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/20 transition-colors">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">LeetCode</div>
                  <div className="text-xs text-slate-400">mohammed-anas</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
