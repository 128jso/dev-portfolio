import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsShowcase from './components/ProjectsShowcase';
import ExperienceTimeline from './components/ExperienceTimeline';
import TechStack from './components/TechStack';
import AiAssistantChat from './components/AiAssistantChat';
import ContactSection from './components/ContactSection';
import { DEVELOPER_PROFILE } from './data/githubData';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Hero />
        <ProjectsShowcase />
        <ExperienceTimeline />
        <TechStack />
        <AiAssistantChat />
        <ContactSection />
      </main>
      <footer style={{
        textAlign: 'center',
        padding: '1.5rem',
        borderTop: '1px solid var(--border-subtle)',
        fontSize: '0.8rem',
        color: 'var(--text-muted)'
      }}>
        © {new Date().getFullYear()} {DEVELOPER_PROFILE.name} • Full-Stack & AI Systems Developer • GitHub Portfolio
      </footer>
    </div>
  );
}


