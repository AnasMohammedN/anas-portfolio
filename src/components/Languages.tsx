import React from 'react';
import { Languages as LangIcon, Globe2, Check } from 'lucide-react';
import { LANGUAGES_DATA } from '../data/portfolioData';

export const Languages: React.FC = () => {
  return (
    <section id="languages" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
            Communication
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Languages
          </h2>
        </div>

        {/* Languages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
          {LANGUAGES_DATA.map((lang) => (
            <div
              key={lang.language}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {lang.language}
                  </h3>
                  <span className="text-xs text-blue-400 font-medium">
                    {lang.proficiency} Proficiency
                  </span>
                </div>
              </div>

              <div className="px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-blue-400" />
                <span>{lang.proficiency}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
