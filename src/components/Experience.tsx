import { useEffect, useState } from 'react'
import { supabase, type Experience } from '../lib/supabase'
import { Briefcase, MapPin, Calendar } from 'lucide-react'

export default function Experience() {
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchExperiences()
  }, [])

  async function fetchExperiences() {
    try {
      const { data, error } = await supabase
        .from('experiences')
        .select('*')
        .order('order_index', { ascending: true })

      if (error) throw error
      setExperiences(data || [])
    } catch (error) {
      console.error('Error fetching experiences:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">Life Experience</h2>
          <div className="loading">Loading experience...</div>
        </div>
      </section>
    )
  }

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Life Experience</h2>
        <p className="section-subtitle">
          Professional journey and hands-on experience building technical skills
        </p>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="experience-card">
              <div className="experience-header">
                <div className="experience-icon">
                  <Briefcase size={24} />
                </div>
                <div className="experience-title-group">
                  <h3 className="experience-position">{exp.position}</h3>
                  <div className="experience-company">{exp.company}</div>
                </div>
              </div>

              <div className="experience-meta">
                <div className="experience-meta-item">
                  <Calendar size={16} />
                  <span>
                    {exp.start_date} - {exp.end_date || 'Present'}
                  </span>
                </div>
                <div className="experience-meta-item">
                  <MapPin size={16} />
                  <span>{exp.location}</span>
                </div>
              </div>

              {exp.description && (
                <p className="experience-description">{exp.description}</p>
              )}

              {exp.highlights && exp.highlights.length > 0 && (
                <ul className="experience-highlights">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              )}

              {index < experiences.length - 1 && (
                <div className="experience-connector" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}