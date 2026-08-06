import React from 'react';
import { Sparkles, Bot, ArrowRight, MapPin, Award } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { LinkedinIcon } from './LinkedinIcon';
import { DEVELOPER_PROFILE } from '../data/githubData';

export default function Hero() {
  return (
    <section style={{ padding: '3.5rem 1.5rem 2.5rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div className="clean-panel" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
        
        {/* Background Radial Glow */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.18) 0%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none'
        }} />

        {/* Badges Row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
          <span className="pill-badge pill-badge-purple">
            <Award size={13} /> Nordstrom Delivery of the Year Winner ($115M+ Demand Generated)
          </span>
          <span className="pill-badge pill-badge-emerald">
            <MapPin size={12} /> {DEVELOPER_PROFILE.location}
          </span>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: '2.8rem', fontWeight: 900, lineHeight: 1.15, color: '#fff', marginBottom: '1rem', maxWidth: '880px' }}>
          Hi, I'm <span style={{ color: 'var(--accent-purple-light)' }}>{DEVELOPER_PROFILE.name}</span> — <span style={{ background: 'linear-gradient(135deg, #c084fc, #8b5cf6, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Software Engineer II</span> Building Scalable Data Platforms
        </h1>

        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '820px', marginBottom: '1.75rem', lineHeight: 1.6 }}>
          {DEVELOPER_PROFILE.bio}
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', marginBottom: '2rem' }}>
          <a href="#experience" className="btn-primary" style={{ textDecoration: 'none', padding: '0.75rem 1.4rem' }}>
            View Work Experience <ArrowRight size={16} />
          </a>
          <a href="#ai-assistant" className="btn-secondary" style={{ textDecoration: 'none', padding: '0.75rem 1.4rem' }}>
            <Bot size={16} color="var(--accent-purple-light)" /> Chat with AI Assistant
          </a>
          <a 
            href={DEVELOPER_PROFILE.linkedinUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="btn-secondary" 
            style={{ textDecoration: 'none', padding: '0.75rem 1.4rem' }}
          >
            <LinkedinIcon size={16} /> LinkedIn
          </a>
          <a 
            href={DEVELOPER_PROFILE.githubUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="btn-secondary" 
            style={{ textDecoration: 'none', padding: '0.75rem 1.4rem' }}
          >
            <GithubIcon size={16} /> GitHub
          </a>
        </div>

        {/* Key Metrics Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          paddingTop: '1.25rem',
          borderTop: '1px solid var(--border-subtle)'
        }}>
          <div style={{ background: 'var(--bg-card)', padding: '0.85rem 1rem', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Nordstrom Platform Delivery</div>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--accent-purple-light)' }}>$115M+ Demand</div>
          </div>

          <div style={{ background: 'var(--bg-card)', padding: '0.85rem 1rem', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Egress Cost Savings</div>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#34d399' }}>$50K+/Year</div>
          </div>

          <div style={{ background: 'var(--bg-card)', padding: '0.85rem 1rem', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Engineering Production</div>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#38bdf8' }}>4+ Years • Zero Incident</div>
          </div>
        </div>

      </div>
    </section>
  );
}
