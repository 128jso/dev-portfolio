import React, { useState, useEffect } from 'react';
import { Palette, Sun, Moon, Sparkles } from 'lucide-react';

export const THEMES = [
  {
    id: 'capacities-dark',
    name: 'Capacities Slate',
    accent: '#8b5cf6',
    bg: '#0f1115',
    card: '#1c1e24',
    isLight: false
  },
  {
    id: 'cyber-violet',
    name: 'Cyber Violet',
    accent: '#c084fc',
    bg: '#0a0a10',
    card: '#18182a',
    isLight: false
  },
  {
    id: 'obsidian-emerald',
    name: 'Obsidian Emerald',
    accent: '#10b981',
    bg: '#070d0b',
    card: '#142421',
    isLight: false
  },
  {
    id: 'matrix-sunset',
    name: 'Neon Sunset',
    accent: '#f43f5e',
    bg: '#12090e',
    card: '#241421',
    isLight: false
  },
  {
    id: 'minimalist-light',
    name: 'Minimalist Light',
    accent: '#7c3aed',
    bg: '#f8fafc',
    card: '#f1f5f9',
    isLight: true
  }
];

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState('capacities-dark');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  return (
    <div style={{ position: 'relative' }}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="btn-secondary"
        style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem', borderRadius: '8px' }}
      >
        <Palette size={15} color="var(--accent-purple-light)" />
        <span style={{ fontSize: '0.78rem' }}>Theme</span>
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '120%',
          right: 0,
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '12px',
          padding: '0.65rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
          zIndex: 200,
          width: '210px',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.35rem'
        }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.2rem', paddingLeft: '0.35rem' }}>
            SELECT PORTFOLIO PALETTE
          </div>
          {THEMES.map(t => (
            <button
              key={t.id}
              onClick={() => {
                setCurrentTheme(t.id);
                setIsOpen(false);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.45rem 0.65rem',
                borderRadius: '8px',
                background: currentTheme === t.id ? 'var(--border-subtle-hover)' : 'transparent',
                border: 'none',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                fontSize: '0.82rem',
                fontWeight: currentTheme === t.id ? 700 : 500
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {t.isLight ? <Sun size={13} color={t.accent} /> : <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: t.accent }}></span>}
                <span>{t.name}</span>
              </div>
              {currentTheme === t.id && <Sparkles size={12} color={t.accent} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
