import { useEffect, useState } from 'react'
import { supabase, type AboutInfo } from '../lib/supabase'
import { Briefcase, Calendar } from 'lucide-react'

export default function Hero() {
  const [aboutInfo, setAboutInfo] = useState<AboutInfo | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchAboutInfo()
  }, [])

  async function fetchAboutInfo() {
    try {
      const { data, error } = await supabase
        .from('about_info')
        .select('*')
        .maybeSingle()

      if (error) throw error
      setAboutInfo(data)
    } catch (error) {
      console.error('Error fetching about info:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section className="hero">
        <div className="hero-background">
          <div className="animated-gradient"></div>
        </div>
        <div className="container">
          <div className="loading">Loading...</div>
        </div>
      </section>
    )
  }

  if (!aboutInfo) {
    return (
      <>
        <section className="hero">
          <div className="hero-background">
            <div className="animated-gradient"></div>
          </div>
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                Hi! I'm <span className="gradient-text">Jason</span>
              </h1>
              <h2 className="hero-subtitle-large">
                Aspiring Cybersecurity Professional
              </h2>
              <p className="hero-subtitle">
                Career-changer committed to continuous learning and building real-world security skills.
              </p>
            </div>
          </div>
        </section>

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
      </>
    )
  }

  return (
    <>
      <section className="hero">
        <div className="hero-background">
          <div className="animated-gradient"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi! I'm <span className="gradient-text">{aboutInfo.name}</span>
            </h1>
            <h2 className="hero-subtitle-large">
              {aboutInfo.subtitle}
            </h2>
            <p className="hero-subtitle">
              {aboutInfo.hero_bio}
            </p>
            <div className="hero-cta">
              <a href={aboutInfo.hero_cta_primary_link} className="btn btn-primary">
                {aboutInfo.hero_cta_primary_text}
              </a>
              <a href={aboutInfo.hero_cta_secondary_link} className="btn btn-secondary">
                {aboutInfo.hero_cta_secondary_text}
              </a>
            </div>
          </div>
          {aboutInfo.hero_stats && aboutInfo.hero_stats.length > 0 && (
            <div className="hero-stats">
              {aboutInfo.hero_stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

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
    </>
  )
}