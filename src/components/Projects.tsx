import React, { useState } from 'react';
import { Layers, CheckCircle2, TrendingUp, Plane, ShieldCheck, ChevronRight, X } from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-slate-950/40">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
            Selected Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Machine Learning Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
            Practical machine learning and data analytics projects focused on predictive modeling, exploratory analysis, and feature engineering.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project) => {
            const isFlight = project.id === 'flight-delay-analysis';

            return (
              <div
                key={project.id}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-blue-500/50 hover:bg-slate-900/90 hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden shadow-lg shadow-black/20"
              >
                {/* Accent glow on hover */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/5 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-600/15 transition-all" />

                <div>
                  {/* Top Bar with Project Category Icon */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="p-3 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-600/20 transition-all">
                      {isFlight ? <Plane className="w-6 h-6" /> : <ShieldCheck className="w-6 h-6" />}
                    </div>

                    {project.metrics && project.metrics.length > 0 && (
                      <div className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold tabular-nums">
                        {project.metrics[0].label}: {project.metrics[0].value}
                      </div>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {/* Key Work Performed */}
                  <div className="mb-6">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Key Implementation
                    </div>
                    <ul className="space-y-2">
                      {project.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Models Evaluated (if applicable) */}
                  {project.models && (
                    <div className="mb-6 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                        Algorithms Evaluated
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.models.map((model) => (
                          <span
                            key={model}
                            className="px-2.5 py-1 text-xs rounded-md bg-slate-900 border border-slate-700/80 text-slate-200 font-medium"
                          >
                            {model}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Footer: Tech Stack & Action */}
                <div className="pt-6 border-t border-slate-800/80 mt-2">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-md bg-blue-950/40 border border-blue-500/20 text-blue-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-white text-xs font-semibold transition-all border border-slate-700/60 cursor-pointer active:scale-98"
                  >
                    <span>View Project Breakdown</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Deep Dive (Purely based on exact user details) */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-[#0b1021] border border-slate-700 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
                Project Detail View
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                {selectedProject.summary}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Scope &amp; Technical Execution
                </h4>
                <ul className="space-y-3">
                  {selectedProject.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-200 bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedProject.models && (
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Comparative ML Models
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.models.map((m) => (
                      <span key={m} className="px-3 py-1.5 text-xs bg-slate-900 border border-slate-700 text-slate-200 rounded-lg">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedProject.metrics && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
                  <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">
                    Evaluated Metric
                  </div>
                  <div className="text-base text-white font-medium">
                    {selectedProject.metrics[0].label}: <strong className="font-mono text-emerald-300">{selectedProject.metrics[0].value}</strong>
                  </div>
                </div>
              )}

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Technologies Employed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs bg-blue-950/60 border border-blue-500/30 text-blue-300 rounded-lg font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
