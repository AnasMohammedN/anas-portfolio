import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-slate-950/40">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education
          </h2>
        </div>

        {/* Education Cards */}
        <div className="space-y-6">
          {EDUCATION_DATA.map((item, index) => (
            <div
              key={index}
              className={`p-6 sm:p-8 rounded-2xl border transition-all relative overflow-hidden backdrop-blur-sm ${
                item.isHighlighted
                  ? 'bg-slate-900/80 border-blue-500/40 shadow-xl shadow-blue-950/30'
                  : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
              }`}
            >
              {item.isHighlighted && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
              )}

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex items-start gap-3.5">
                  <div
                    className={`p-3 rounded-xl shrink-0 ${
                      item.isHighlighted
                        ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                        : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {item.degree}
                      </h3>
                      {item.isHighlighted && (
                        <span className="text-[11px] font-mono tracking-wide px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/40 font-semibold">
                          Undergraduate
                        </span>
                      )}
                    </div>
                    <p className="text-sm sm:text-base font-medium text-slate-300 mt-1">
                      {item.institution}
                    </p>
                  </div>
                </div>

                {/* Score highlight badge */}
                <div
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border shrink-0 ${
                    item.isHighlighted
                      ? 'bg-blue-600/15 border-blue-500/50 text-white'
                      : 'bg-slate-800/80 border-slate-700 text-slate-300'
                  }`}
                >
                  <Award
                    className={`w-5 h-5 ${
                      item.isHighlighted ? 'text-blue-400' : 'text-slate-400'
                    }`}
                  />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-mono">
                      {item.gradeType}
                    </div>
                    <div
                      className={`text-xl sm:text-2xl font-bold font-mono tabular-nums leading-none ${
                        item.isHighlighted ? 'text-blue-400' : 'text-white'
                      }`}
                    >
                      {item.grade}
                    </div>
                  </div>
                </div>
              </div>

              {/* Metadata row */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400 pt-3 border-t border-slate-800/80">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span className="font-mono tabular-nums">{item.period}</span>
                </span>
                <span aria-hidden="true" className="text-slate-700 hidden sm:inline">
                  &bull;
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>{item.location}</span>
                </span>
                {item.isHighlighted && (
                  <>
                    <span aria-hidden="true" className="text-slate-700 hidden sm:inline">
                      &bull;
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-blue-300">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span>Consistent academic performance</span>
                    </span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
