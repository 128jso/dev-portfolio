import React, { useState, useEffect } from 'react';
import { Palette, Moon, Sun, Sparkles } from 'lucide-react';

export const THEMES = [
  {
    id: 'capacities-dark',
    name: 'Capacities Slate',
    accent: '#8b5cf6',
    bg: '#0f1115',
    card: '#1c1e24',
    border: 'rgba(255, 255, 255, 0.08)'
  },
  {
    id: 'cyber-violet',
    name: 'Cyber Violet',
    accent: '#c084fc',
    bg: '#0a0a10',
    card: '#141420',
    border: 'rgba(192, 132, 252, 0.18)'
  },
  {
    id: 'obsidian-emerald',
    name: 'Obsidian Emerald',
    accent: '#10b981',
    bg: '#0b1311',
    card: '#131f1c',
    border: 'rgba(16, 185, 129, 0.18)'
  },
  {
    id: 'matrix-sunset',
    name: 'Neon Sunset',
    accent: '#f43f5e',
    bg: '#120b10',
    card: '#1f131a',
    border: 'rgba(244, 63, 94, 0.18)'
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
          boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
          zIndex: 200,
          width: '200px',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.35rem'
        }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.2rem', paddingLeft: '0.35rem' }}>
            SELECT PORTFOLIO THEME
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
                background: currentTheme === t.id ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
                fontSize: '0.82rem',
                fontWeight: currentTheme === t.id ? 700 : 500
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: t.accent }}></span>
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
