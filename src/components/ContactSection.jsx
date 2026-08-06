import React, { useState } from 'react';
import { Mail, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import confetti from 'canvas-confetti';
import { DEVELOPER_PROFILE } from '../data/githubData';

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
    setFormSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: '2.5rem 1.5rem 4rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div className="clean-panel" style={{ padding: '2.25rem' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          
          {/* Left Info Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
              <Mail size={18} color="var(--accent-purple-light)" />
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent-purple-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Get In Touch
              </span>
            </div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
              Let's Build Together
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Interested in collaborating, discussing agentic AI architecture, full-stack development, or engineering opportunities? Drop a message below!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <a 
                href={DEVELOPER_PROFILE.githubUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="clean-card"
                style={{ padding: '0.85rem 1rem', textDecoration: 'none', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
              >
                <GithubIcon size={20} color="var(--accent-purple-light)" />
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700 }}>GitHub Profile</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>github.com/128jso</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Form Column */}
          <div>
            {formSubmitted ? (
              <div className="clean-card" style={{ padding: '2rem', textAlign: 'center' }}>
                <CheckCircle2 size={48} color="var(--accent-emerald)" style={{ margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>Message Sent!</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                  Thank you for reaching out. I'll get back to you shortly.
                </p>
                <button onClick={() => { setFormSubmitted(false); setFormData({ name: '', email: '', message: '' }); }} className="btn-secondary">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.3rem', display: 'block' }}>Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.3rem', display: 'block' }}>Your Email</label>
                  <input 
                    type="email" 
                    placeholder="name@company.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.3rem', display: 'block' }}>Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="How can we collaborate?" 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ justifyContent: 'center', padding: '0.8rem' }}>
                  <Send size={16} /> Send Inquiry Message
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
