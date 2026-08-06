import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, GraduationCap, Award } from 'lucide-react';
import { EXPERIENCE_TIMELINE, EDUCATION_DATA } from '../data/githubData';

export default function ExperienceTimeline() {
  return (
    <section id="experience" style={{ padding: '2.5rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
      
      {/* Section Header */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
          <Briefcase size={18} color="var(--accent-purple-light)" />
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent-purple-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            4+ Years Platform Engineering Experience
          </span>
        </div>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff' }}>
          Work Experience & Education
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Technical leadership at Nordstrom, scalable data platform engineering, and computational research at the University of Washington.
        </p>
      </div>

      {/* Timeline List Container */}
      <div style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid var(--border-subtle)' }}>
        
        {EXPERIENCE_TIMELINE.map((item, idx) => (
          <div key={item.id} style={{ position: 'relative', marginBottom: '2.25rem' }}>
            
            {/* Node Circle */}
            <div style={{
              position: 'absolute',
              left: '-2.15rem',
              top: '4px',
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              background: 'var(--bg-surface)',
              border: '3px solid var(--accent-purple)',
              boxShadow: '0 0 10px rgba(139, 92, 246, 0.4)'
            }} />

            {/* Role Panel */}
            <div className="clean-panel" style={{ padding: '1.5rem' }}>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.65rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>{item.role}</h3>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-purple-light)' }}>{item.company}</div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Calendar size={13} /> {item.period}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <MapPin size={13} /> {item.location}
                  </span>
                </div>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                {item.description}
              </p>

              {/* Bullet Highlights */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.1rem' }}>
                {item.bullets.map((b, bIdx) => (
                  <div key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                    <CheckCircle2 size={15} color="var(--accent-purple-light)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              {/* Skill Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {item.skills.map((s, sIdx) => (
                  <span key={sIdx} className="pill-badge" style={{ fontSize: '0.72rem', padding: '0.15rem 0.5rem' }}>
                    {s}
                  </span>
                ))}
              </div>

            </div>

          </div>
        ))}

        {/* Education Node */}
        <div style={{ position: 'relative' }}>
          
          <div style={{
            position: 'absolute',
            left: '-2.15rem',
            top: '4px',
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            background: 'var(--bg-surface)',
            border: '3px solid #34d399',
            boxShadow: '0 0 10px rgba(52, 211, 153, 0.4)'
          }} />

          <div className="clean-panel" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <GraduationCap size={20} color="#34d399" />
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff' }}>{EDUCATION_DATA.institution}</h3>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#34d399' }}>{EDUCATION_DATA.degree}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <Calendar size={13} /> {EDUCATION_DATA.period}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <MapPin size={13} /> {EDUCATION_DATA.location}
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
