import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Sparkles, X, MessageSquare, ChevronDown, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { DEVELOPER_PROFILE, PROJECTS_DATABASE, EXPERIENCE_TIMELINE } from '../data/githubData';

// Helper for formatted text rendering
const renderFormattedText = (text) => {
  if (!text) return null;
  const lines = text.split('\n');
  return lines.map((line, lineIdx) => {
    const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
    const tokens = line.split(regex);
    const formattedTokens = tokens.map((part, tokenIdx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={tokenIdx} style={{ fontWeight: 700, color: '#fff' }}>{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={tokenIdx} style={{ fontStyle: 'italic', color: 'var(--accent-purple-light)' }}>{part.slice(1, -1)}</em>;
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return <code key={tokenIdx} style={{ background: 'rgba(255,255,255,0.08)', padding: '0.1rem 0.3rem', borderRadius: '4px', color: 'var(--accent-purple-light)', fontFamily: 'var(--font-code)', fontSize: '0.85em' }}>{part.slice(1, -1)}</code>;
      }
      return part;
    });
    return (
      <React.Fragment key={lineIdx}>
        {formattedTokens}
        {lineIdx < lines.length - 1 && <br />}
      </React.Fragment>
    );
  });
};

export default function AiAssistantChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: `Hello! I am **John So's Portfolio AI Assistant**.\n\nAsk me anything about John's **4+ years at Nordstrom**, $115M+ Marketplace platform delivery, AWS & Java tech stack, or GitHub repositories!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  const handleSendMessage = (textToSend = inputMessage) => {
    const text = textToSend.trim();
    if (!text) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (textToSend === inputMessage) setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const lower = text.toLowerCase();
      let responseMsg = {};

      if (lower.includes('nordstrom') || lower.includes('experience') || lower.includes('work') || lower.includes('history')) {
        responseMsg = {
          id: Date.now() + 1,
          sender: 'ai',
          text: `💼 **John So's Career Experience at Nordstrom:**\n\n• **Software Engineer II (Sep 2024 – Present)**: Architected Nordstrom's PIM foundational platform (PostgreSQL, Docker) eliminating downtime; built foundational data service using AI-assisted development (100% QA pass rate); led SIT for zero-incident launch.\n• **Software Engineer I (Jul 2022 – Sep 2024)**: Directed delivery of Mirakl Marketplace driving **$115M+ in demand** (*won Nordstrom Delivery of the Year*); decoupled legacy cache reducing egress costs by **$50K+/year**.\n• **University of Washington, Brunton Lab (2018 – 2020)**: Accelerated neuroscience data analysis pipelines by 70% using Python (pandas, NumPy), contributing to 4 academic papers.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      }
      else if (lower.includes('aura') || lower.includes('fitness') || lower.includes('agent')) {
        const auraProj = PROJECTS_DATABASE.find(p => p.id === 'aura-fitness-agent');
        responseMsg = {
          id: Date.now() + 1,
          sender: 'ai',
          text: `Here is John So's flagship Agentic AI project surface:`,
          a2uiCard: {
            title: auraProj.title,
            tagline: auraProj.tagline,
            gif: auraProj.demoGif,
            repoUrl: auraProj.githubUrl,
            highlights: auraProj.highlights
          },
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      }
      else if (lower.includes('stack') || lower.includes('skills') || lower.includes('language') || lower.includes('tech')) {
        responseMsg = {
          id: Date.now() + 1,
          sender: 'ai',
          text: `🛠️ **John So's Technical Stack:**\n\n• **Languages**: Java, Go, Python, SQL, JavaScript, TypeScript\n• **Frameworks**: Spring Boot, React.js, Node.js, Pandas, Maven\n• **Cloud & DevOps**: AWS (EC2, Lambda, S3, DynamoDB), Terraform, Docker, Kubernetes, Kafka, CI/CD, GitLab\n• **Databases & System Design**: PostgreSQL, MySQL, DynamoDB, MongoDB, Schema Design, Scalability & Caching, OOP Design`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      }
      else if (lower.includes('education') || lower.includes('uw') || lower.includes('degree') || lower.includes('university')) {
        responseMsg = {
          id: Date.now() + 1,
          sender: 'ai',
          text: `🎓 **Education:**\n\n• **University of Washington** (Seattle, WA)\n• **Degree**: B.A. in Mathematics (Sep 2017 – Jun 2021)\n• **Research**: Neuroscience/Computer Science Research Assistant at Brunton Lab (contributed to 4 academic papers).`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      }
      else if (lower.includes('contact') || lower.includes('hire') || lower.includes('email') || lower.includes('linkedin') || lower.includes('phone')) {
        responseMsg = {
          id: Date.now() + 1,
          sender: 'ai',
          text: `📫 **Contact Information for John So:**\n\n• **Location**: Seattle, WA\n• **Email**: [johnhyunso@gmail.com](mailto:johnhyunso@gmail.com)\n• **Phone**: (702) 245-3161\n• **LinkedIn**: [linkedin.com/in/johnhyunso](https://linkedin.com/in/johnhyunso)\n• **GitHub**: [github.com/128jso](https://github.com/128jso)`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      }
      else {
        responseMsg = {
          id: Date.now() + 1,
          sender: 'ai',
          text: `✨ **John So** is a **Software Engineer II** based in Seattle, WA with 4+ years experience building scalable data platforms at Nordstrom ($115M+ Marketplace demand).\n\nAsk me about **John's Nordstrom experience**, **AWS/Java tech stack**, **education**, or **contact info**!`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      }

      setIsTyping(false);
      setMessages(prev => [...prev, responseMsg]);
    }, 600);
  };

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 1000 }}>
      
      {/* Floating Chat Modal Popout Window */}
      {isOpen && (
        <div className="clean-panel" style={{
          width: '380px',
          height: '520px',
          marginBottom: '1rem',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7), 0 0 25px rgba(139, 92, 246, 0.25)',
          overflow: 'hidden',
          animation: 'fadeIn 0.2s ease-in-out'
        }}>
          {/* Popout Header */}
          <div style={{
            padding: '0.85rem 1rem',
            background: 'var(--bg-card)',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-indigo))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff'
              }}>
                <Bot size={16} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>AI Assistant</h4>
                <span style={{ fontSize: '0.68rem', color: '#34d399', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#34d399', display: 'inline-block' }}></span>
                  Online • Ask About John So
                </span>
              </div>
            </div>

            <button onClick={() => setIsOpen(false)} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '0.2rem' }}>
              <X size={18} />
            </button>
          </div>

          {/* Messages Feed */}
          <div style={{ flex: 1, padding: '0.85rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {messages.map((msg) => (
              <div key={msg.id} style={{ display: 'flex', flexDirection: 'column', alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '88%',
                  padding: '0.75rem 0.95rem',
                  borderRadius: msg.sender === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
                  background: msg.sender === 'user' ? 'var(--accent-purple)' : 'var(--bg-card)',
                  border: msg.sender === 'user' ? 'none' : '1px solid var(--border-subtle)',
                  color: '#fff'
                }}>
                  <div style={{ fontSize: '0.85rem', lineHeight: 1.45 }}>
                    {renderFormattedText(msg.text)}
                  </div>

                  {/* A2UI Card Inside Popout */}
                  {msg.a2uiCard && (
                    <div style={{ marginTop: '0.65rem', background: 'var(--bg-surface)', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                      <h5 style={{ fontWeight: 800, color: 'var(--accent-purple-light)', fontSize: '0.88rem', marginBottom: '0.2rem' }}>{msg.a2uiCard.title}</h5>
                      <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{msg.a2uiCard.tagline}</p>

                      {msg.a2uiCard.gif && (
                        <div style={{ position: 'relative', width: '100%', height: '120px', borderRadius: '6px', overflow: 'hidden', marginBottom: '0.5rem' }}>
                          <img src={msg.a2uiCard.gif} alt="Demo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      )}

                      <a href={msg.a2uiCard.repoUrl} target="_blank" rel="noreferrer" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.45rem', textDecoration: 'none', fontSize: '0.75rem' }}>
                        <GithubIcon size={12} /> Open GitHub Repo
                      </a>
                    </div>
                  )}

                </div>
              </div>
            ))}

            {isTyping && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                <Sparkles size={13} color="var(--accent-purple)" />
                <span>AI is reasoning...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Bar */}
          <div style={{ display: 'flex', gap: '0.3rem', overflowX: 'auto', padding: '0.4rem 0.85rem', borderTop: '1px solid var(--border-subtle)' }}>
            {[
              "💼 Nordstrom Experience",
              "🤖 AURA Fitness AI",
              "🛠️ Tech Stack",
              "🎓 Education & UW",
              "📫 Contact Info"
            ].map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(prompt)}
                className="btn-secondary"
                style={{ padding: '0.25rem 0.55rem', fontSize: '0.72rem', borderRadius: '15px', whiteSpace: 'nowrap' }}
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div style={{ padding: '0.5rem', background: 'var(--bg-card)', borderTop: '1px solid var(--border-subtle)', display: 'flex', gap: '0.4rem' }}>
            <input
              type="text"
              placeholder="Ask AI about John So..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              style={{ background: 'transparent', border: 'none', paddingLeft: '0.5rem', fontSize: '0.85rem' }}
            />
            <button className="btn-primary" onClick={() => handleSendMessage()} style={{ padding: '0.45rem 0.85rem' }}>
              <Send size={14} />
            </button>
          </div>

        </div>
      )}

      {/* Bottom Right Floating Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-indigo))',
          border: 'none',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 8px 25px rgba(139, 92, 246, 0.5)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          marginLeft: 'auto'
        }}
        className="popout-btn"
      >
        {isOpen ? <ChevronDown size={24} /> : <Bot size={26} />}
      </button>

    </div>
  );
}
