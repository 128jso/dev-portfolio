import React, { useState } from 'react';
import { PROJECTS_DATABASE } from '../data/githubData';
import { ExternalLink, Sparkles, Code, CheckCircle2, Play } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

export default function ProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" style={{ padding: '2rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
      
      {/* Section Header */}
      <div style={{ marginBottom: '1.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
          <Code size={18} color="var(--accent-purple-light)" />
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent-purple-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Featured Portfolio Works
          </span>
        </div>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff' }}>
          Projects & Code Repositories
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Explore key projects built across AI agents, full-stack web applications, and enterprise systems.
        </p>
      </div>

      {/* Projects Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.25rem'
      }}>
        {PROJECTS_DATABASE.map((project) => (
          <div key={project.id} className="clean-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            
            <div>
              {/* Card Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.85rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '0.2rem' }}>
                    {project.title}
                  </h3>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{project.repoName}</span>
                </div>
                {project.featured && (
                  <span className="pill-badge pill-badge-purple" style={{ fontSize: '0.7rem' }}>
                    <Sparkles size={11} /> Featured
                  </span>
                )}
              </div>

              {/* Tagline */}
              <p style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--accent-purple-light)', marginBottom: '0.65rem' }}>
                {project.tagline}
              </p>

              {/* GIF Preview for AURA Fitness AI */}
              {project.demoGif && (
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '160px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  backgroundColor: '#0f1115',
                  marginBottom: '1rem',
                  border: '1px solid var(--border-subtle)'
                }}>
                  <img 
                    src={project.demoGif} 
                    alt={`${project.title} Demo`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '8px',
                    left: '8px',
                    background: 'rgba(0, 0, 0, 0.75)',
                    backdropFilter: 'blur(4px)',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '6px',
                    fontSize: '0.68rem',
                    color: '#c084fc',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontWeight: 700
                  }}>
                    <Play size={10} fill="#c084fc" /> Agent Demo Recording
                  </div>
                </div>
              )}

              {/* Description */}
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.1rem' }}>
                {project.description}
              </p>

              {/* Topics / Tech Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
                {project.topics.map((topic, idx) => (
                  <span key={idx} className="pill-badge" style={{ fontSize: '0.72rem', padding: '0.15rem 0.5rem' }}>
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Buttons */}
            <div style={{ display: 'flex', gap: '0.5rem', paddingTop: '0.85rem', borderTop: '1px solid var(--border-subtle)' }}>
              <button 
                onClick={() => setSelectedProject(project)} 
                className="btn-secondary" 
                style={{ flex: 1, justifyContent: 'center', fontSize: '0.8rem', padding: '0.45rem' }}
              >
                View Highlights
              </button>
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-primary" 
                style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem', textDecoration: 'none' }}
              >
                <GithubIcon size={14} /> Code
              </a>
            </div>

          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.75)',
          backdropFilter: 'blur(6px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '1.5rem'
        }}>
          <div className="clean-panel" style={{ maxWidth: '600px', width: '100%', padding: '1.75rem', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>{selectedProject.title}</h3>
                <span style={{ fontSize: '0.82rem', color: 'var(--accent-purple-light)' }}>{selectedProject.tagline}</span>
              </div>
              <button 
                onClick={() => setSelectedProject(null)} 
                className="btn-secondary" 
                style={{ padding: '0.2rem 0.5rem', fontSize: '0.8rem' }}
              >
                ✕
              </button>
            </div>

            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              {selectedProject.description}
            </p>

            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '0.65rem' }}>
              Key Architectural Highlights:
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {selectedProject.highlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={16} color="var(--accent-emerald)" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.65rem' }}>
              <button onClick={() => setSelectedProject(null)} className="btn-secondary">
                Close
              </button>
              <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer" className="btn-primary" style={{ textDecoration: 'none' }}>
                <GithubIcon size={16} /> Open Repository on GitHub
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
