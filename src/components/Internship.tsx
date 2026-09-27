import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Building2, Terminal } from 'lucide-react';
import { INTERNSHIP_DATA } from '../data/portfolioData';

export const Internship: React.FC = () => {
  return (
    <section id="internship" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
            Industry Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Internship
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
            Hands-on data science engagement focusing on dataset preprocessing, SQL querying, and machine learning models.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 rounded-2xl p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 relative overflow-hidden group shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-600/10 transition-all" />

          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20 shrink-0">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {INTERNSHIP_DATA.role}
                </h3>
                <div className="flex items-center gap-2 text-sm sm:text-base text-blue-400 font-medium mt-1">
                  <Building2 className="w-4 h-4 text-blue-400" />
                  <span>{INTERNSHIP_DATA.company}</span>
                </div>
              </div>
            </div>

            {/* Date Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm font-mono text-slate-300 self-start md:self-center">
              <Calendar className="w-4 h-4 text-blue-400" />
              <span>{INTERNSHIP_DATA.period}</span>
            </div>
          </div>

          {/* Key Deliverables & Responsibilities */}
          <div className="pt-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-blue-400" />
              Key Responsibilities &amp; Applied Methodologies
            </h4>

            <div className="grid grid-cols-1 gap-3.5">
              {INTERNSHIP_DATA.responsibilities.map((resp, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/50 border border-slate-800/80 hover:border-slate-700/80 transition-all"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {resp}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
