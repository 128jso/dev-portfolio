import React from 'react';
import { Sparkles, Terminal, Cpu, Bot, ArrowRight } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { DEVELOPER_PROFILE } from '../data/githubData';

export default function Hero() {
  return (
    <section style={{ padding: '3.5rem 1.5rem 2.5rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div className="clean-panel" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
        
        {/* Subtle Background Glow */}
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

        {/* Status Pill */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
          <span className="pill-badge pill-badge-purple">
            <Sparkles size={13} /> Open to AI Systems & Full-Stack Opportunities
          </span>
          <span className="pill-badge pill-badge-emerald">
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399', display: 'inline-block' }}></span>
            Active GitHub Developer
          </span>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: '2.8rem', fontWeight: 900, lineHeight: 1.15, color: '#fff', marginBottom: '1rem', maxWidth: '850px' }}>
          Crafting Intelligent <span style={{ background: 'linear-gradient(135deg, #c084fc, #8b5cf6, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Agentic Systems</span> & Modern Web Applications
        </h1>

        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '780px', marginBottom: '1.75rem', lineHeight: 1.6 }}>
          {DEVELOPER_PROFILE.bio} Experienced in building full-stack web applications, agentic tools with **Google ADK**, **Vertex AI Memory Bank**, and cloud-native serverless backends.
        </p>

        {/* Quick CTA Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', marginBottom: '2rem' }}>
          <a href="#projects" className="btn-primary" style={{ textDecoration: 'none', padding: '0.75rem 1.4rem' }}>
            Explore Featured Projects <ArrowRight size={16} />
          </a>
          <a href="#ai-assistant" className="btn-secondary" style={{ textDecoration: 'none', padding: '0.75rem 1.4rem' }}>
            <Bot size={16} color="var(--accent-purple-light)" /> Chat with AI Assistant
          </a>
          <a 
            href={DEVELOPER_PROFILE.githubUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="btn-secondary" 
            style={{ textDecoration: 'none', padding: '0.75rem 1.4rem' }}
          >
            <GithubIcon size={16} /> GitHub Profile
          </a>
        </div>

        {/* Live GitHub Stats Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1rem',
          paddingTop: '1.25rem',
          borderTop: '1px solid var(--border-subtle)'
        }}>
          <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '0.85rem 1rem', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Public Repositories</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>{DEVELOPER_PROFILE.publicRepos} Repos</div>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '0.85rem 1rem', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Primary Stack</div>
            <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--accent-purple-light)' }}>Python & React</div>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '0.85rem 1rem', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Cloud Infrastructure</div>
            <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#38bdf8' }}>Google Cloud Vertex AI</div>
          </div>
        </div>

      </div>
    </section>
  );
}
