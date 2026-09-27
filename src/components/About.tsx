import React from 'react';
import { Database, LineChart, Cpu, FileSpreadsheet, CheckCircle2 } from 'lucide-react';
import { PROFESSIONAL_SUMMARY } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
            Profile &amp; Focus
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Me
          </h2>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Professional Summary Card */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden group hover:border-blue-500/40 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-2xl pointer-events-none" />

            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              Professional Summary
            </h3>

            <blockquote className="text-slate-300 text-base sm:text-lg leading-relaxed border-l-2 border-blue-500/60 pl-4 py-1 italic mb-6">
              "{PROFESSIONAL_SUMMARY}"
            </blockquote>

            <div className="space-y-3 pt-4 border-t border-slate-800/80 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                <span>
                  <strong>Academic Track:</strong> Pursuing B.Tech in Artificial Intelligence &amp; Data Science at Dhaanish Chennai College of Engineering (2023–2027) with a CGPA of 8.21.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                <span>
                  <strong>Core Methodologies:</strong> End-to-end data cleaning, exploratory data analysis (EDA), feature engineering, predictive modeling, and business intelligence visualization.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                <span>
                  <strong>Data Tooling:</strong> Hands-on proficiency in Python, SQL, Excel, and Power BI for transforming complex raw data into analytical conclusions.
                </span>
              </div>
            </div>
          </div>

          {/* Right: Core Pillars / Competency Framework */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-blue-500/30 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20">
                  <Database className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">Data Analysis &amp; Preprocessing</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Skilled in handling missing data, outlier detection, data normalization, and structured transformations using Pandas and NumPy.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-blue-500/30 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">Machine Learning &amp; Modeling</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Experience in classification and regression modeling with Scikit-learn, including Random Forest, Logistic Regression, and Decision Trees.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-blue-500/30 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20">
                  <LineChart className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">Visualization &amp; BI</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Translating data patterns into clear visual narratives using Power BI dashboards and Python Matplotlib plots for decision support.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-blue-500/30 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20">
                  <FileSpreadsheet className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">SQL &amp; Spreadsheets</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Extracting, filtering, and querying relational database records with SQL; organizing quantitative data with Excel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
