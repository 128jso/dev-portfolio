import React from 'react';
import { SKILLS_MATRIX } from '../data/githubData';
import { Cpu, CheckCircle2 } from 'lucide-react';

export default function TechStack() {
  return (
    <section id="tech-stack" style={{ padding: '2rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
      
      {/* Section Header */}
      <div style={{ marginBottom: '1.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
          <Cpu size={18} color="var(--accent-purple-light)" />
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent-purple-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Technical Capabilities
          </span>
        </div>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff' }}>
          Tech Stack & Domain Expertise
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Core technologies, frameworks, and cloud architectures utilized across projects.
        </p>
      </div>

      {/* Skills Matrix Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.25rem'
      }}>
        {SKILLS_MATRIX.map((group, idx) => (
          <div key={idx} className="clean-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-purple)' }}></span>
              {group.category}
            </h3>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {group.skills.map((skill, sIdx) => (
                <div key={sIdx} className="clean-card" style={{ padding: '0.5rem 0.75rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={14} color="var(--accent-purple-light)" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
