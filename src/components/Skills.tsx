import React, { useState } from 'react';
import { Code, Database, BarChart3, Brain, Wrench, Layers } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming':
        return <Code className="w-5 h-5 text-blue-400" />;
      case 'Data Analysis':
        return <Database className="w-5 h-5 text-sky-400" />;
      case 'Visualization':
        return <BarChart3 className="w-5 h-5 text-indigo-400" />;
      case 'Machine Learning':
        return <Brain className="w-5 h-5 text-cyan-400" />;
      case 'Tools':
        return <Wrench className="w-5 h-5 text-blue-300" />;
      default:
        return <Layers className="w-5 h-5 text-blue-400" />;
    }
  };

  const filteredCategories =
    selectedCategory === 'all'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
              Technical Stack
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Skills &amp; Capabilities
            </h2>
          </div>

          {/* Interactive Category Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl backdrop-blur-sm">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              All Skills
            </button>
            {SKILLS_DATA.map((cat) => (
              <button
                key={cat.category}
                type="button"
                onClick={() => setSelectedCategory(cat.category)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  selectedCategory === cat.category
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Categorized Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/40 hover:bg-slate-900/90 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:border-blue-500/30 group-hover:bg-blue-600/10 transition-all">
                    {getCategoryIcon(group.category)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {group.category}
                    </h3>
                    <span className="text-xs text-slate-400">
                      {group.skills.length} core {group.skills.length === 1 ? 'skill' : 'skills'}
                    </span>
                  </div>
                </div>

                {/* Skill Items */}
                <div className="space-y-2.5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 text-sm text-slate-200 group-hover:border-slate-700/80 transition-all"
                    >
                      <span className="font-medium text-slate-200">{skill}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer note */}
              <div className="mt-5 pt-3 border-t border-slate-800/60 text-[11px] text-slate-400 font-mono">
                Resume Verified Competency
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
