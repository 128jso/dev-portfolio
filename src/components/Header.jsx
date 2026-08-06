import React from 'react';
import { Code2, Bot } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import ThemeSwitcher from './ThemeSwitcher';
import { DEVELOPER_PROFILE } from '../data/githubData';

export default function Header() {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'rgba(15, 17, 21, 0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '0.9rem 1.5rem'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand / Name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-indigo))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 800
          }}>
            <Code2 size={20} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>{DEVELOPER_PROFILE.name}</h3>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Portfolio & AI Assistant</span>
          </div>
        </div>

        {/* Nav Jump Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 600 }}>
            Projects
          </a>
          <a href="#experience" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 600 }}>
            Experience
          </a>
          <a href="#tech-stack" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 600 }}>
            Tech Stack
          </a>
          <a href="#ai-assistant" style={{ color: 'var(--accent-purple-light)', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Bot size={15} /> AI Assistant
          </a>
          
          <ThemeSwitcher />

          <a 
            href={DEVELOPER_PROFILE.githubUrl} 
            target="_blank" 
            rel="noreferrer"
            className="btn-secondary"
            style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem', borderRadius: '8px' }}
          >
            <GithubIcon size={15} /> GitHub
          </a>
        </nav>

      </div>
    </header>
  );
}
