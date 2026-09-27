import React from 'react';
import { Award, Calendar, CheckCircle } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-slate-950/40">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
            Credentials &amp; Learning
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Certifications
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
            Verified course certifications across big data architectures, database foundations, and computational libraries.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {CERTIFICATIONS_DATA.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 hover:bg-slate-900/90 rounded-2xl p-6 transition-all duration-300 group flex items-start gap-4 shadow-lg shadow-black/20"
            >
              <div className="p-3 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 group-hover:scale-105 group-hover:bg-blue-600/20 transition-all shrink-0">
                <Award className="w-6 h-6" />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider">
                    {cert.issuer || 'Technical Credential'}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-mono text-slate-400 tabular-nums">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{cert.year}</span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                  {cert.title}
                </h3>

                <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Completed in {cert.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
