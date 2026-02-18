import { Briefcase, Calendar } from 'lucide-react';

export default function WhyCybersecurity() {
  return (
    <section id="why" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 p-8 sm:p-12">
          <div className="flex items-start gap-6 mb-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-cyan-400" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Why Cybersecurity
              </h2>
              <p className="text-xl text-cyan-400 font-medium">Career Focus</p>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <Calendar className="w-5 h-5 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">Current</span>
          </div>

          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              Cybersecurity aligns naturally with my background in safety-critical, high-risk environments. I bring a
              disciplined, systems-focused mindset shaped by military service, industrial safety, technical
              documentation, and continuous self-directed learning.
            </p>

            <div className="space-y-3">
              {[
                'Systems Thinking',
                'Risk Assessment',
                'Disciplined Approach',
                'Continuous Learning',
                'Safety-first Mindset'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
