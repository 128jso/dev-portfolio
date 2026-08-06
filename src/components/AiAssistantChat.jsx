import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, Send, Sparkles, X, ChevronDown, CheckCircle2, 
  Maximize2, Minimize2, RotateCcw, Copy, Check, ExternalLink, 
  Briefcase, Code2, GraduationCap, Trophy, Mail, Phone, MapPin, 
  Layers, Zap, Award
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { LinkedinIcon } from './LinkedinIcon';
import FormattedText from './FormattedText';
import { DEVELOPER_PROFILE, PROJECTS_DATABASE, EXPERIENCE_TIMELINE, SKILLS_MATRIX, EDUCATION_DATA } from '../data/githubData';

// Initial greeting message
const INITIAL_MESSAGE = {
  id: 1,
  sender: 'ai',
  text: `Hello! I am **John So's AI Portfolio Assistant** powered by Gemini intelligence.\n\nI can answer questions about John's **4+ years at Nordstrom**, $115M+ Marketplace launch, AWS & Java backend systems, **AURA Fitness AI**, or recruiter contact info!`,
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  suggestedPills: [
    "💼 Nordstrom Experience",
    "🏆 Delivery of the Year ($115M)",
    "🤖 AURA Fitness AI",
    "🛠️ Tech Stack",
    "📫 Contact Info"
  ]
};

export default function AiAssistantChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const [activePills, setActivePills] = useState(INITIAL_MESSAGE.suggestedPills);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleResetChat = () => {
    setMessages([INITIAL_MESSAGE]);
    setActivePills(INITIAL_MESSAGE.suggestedPills);
  };

  // Advanced intent engine for intelligent query matching
  const matchIntentAndGenerateResponse = (rawQuery) => {
    const q = rawQuery.toLowerCase().trim();

    // 1. Nordstrom Experience & Leadership
    if (q.includes('nordstrom') || q.includes('experience') || q.includes('work') || q.includes('career') || q.includes('history') || q.includes('job')) {
      if (q.includes('pim') || q.includes('postgresql') || q.includes('docker') || q.includes('se2') || q.includes('ii') || q.includes('recent')) {
        return {
          text: `💼 **Software Engineer II at Nordstrom (Sep 2024 – Present):**\n\n• **Architected PIM Platform**: Designed foundational data service using PostgreSQL & Docker; authored ADRs adopted as team standards.\n• **AI-Assisted Development**: Built core data management service with a 40-case QA matrix and **100% pass rate**.\n• **Zero-Incident SIT**: Led end-to-end System Integration Testing and authored automated validation scripts for launch reliability.`,
          cardType: 'experience',
          cardData: EXPERIENCE_TIMELINE[0],
          suggestedPills: [
            "🏆 Delivery of the Year ($115M)",
            "⚡ $50K/yr Cache Optimization",
            "🛠️ Tech Stack",
            "📫 Contact Info"
          ]
        };
      }

      if (q.includes('115m') || q.includes('award') || q.includes('delivery of the year') || q.includes('marketplace') || q.includes('mirakl')) {
        return {
          text: `🏆 **Award-Winning Marketplace Delivery at Nordstrom:**\n\nJohn directed the technical delivery of the **Mirakl Marketplace integration**, driving **$115M+ in consumer demand** and winning **Nordstrom's Delivery of the Year Award**!\n\n• Applied Object-Oriented Design across cross-functional engineering teams.\n• Built core PostgreSQL & Docker mapping infrastructure.\n• Conducted parity analytics on **100K+ discrepancies** across millions of records.`,
          cardType: 'award',
          cardData: {
            title: "Nordstrom Delivery of the Year Award",
            subtitle: "Mirakl Marketplace Integration",
            stat: "$115M+ Demand Generated",
            highlights: [
              "Cross-functional technical leadership",
              "Decoupled legacy caching ($50K+/yr savings)",
              "Zero-incident data migration & parity testing"
            ]
          },
          suggestedPills: [
            "🧩 PIM Platform Design",
            "⚡ How did he save $50K?",
            "🤖 AURA Fitness AI",
            "📫 Hire John So"
          ]
        };
      }

      if (q.includes('cost') || q.includes('savings') || q.includes('cache') || q.includes('egress') || q.includes('50k')) {
        return {
          text: `⚡ **$50,000+/Year Egress Cost Reduction:**\n\nWhile serving as Software Engineer I at Nordstrom, John identified and decoupled ID mapping from a legacy distributed cache.\n\n• **Impact**: Reduced cloud egress bandwidth costs by **$50K+ annually**.\n• **Architecture**: Improved overall system scalability and reliability during peak retail traffic events like Anniversary Sale.`,
          suggestedPills: [
            "🏆 Delivery of the Year ($115M)",
            "🧩 PIM Platform Architecture",
            "🛠️ Java & AWS Experience"
          ]
        };
      }

      // General Nordstrom Overview
      return {
        text: `💼 **John So's 4+ Year Career at Nordstrom:**\n\n1️⃣ **Software Engineer II (Sep 2024 – Present)**: Architected foundational PIM platform (PostgreSQL, Docker) eliminating downtime; built AI-assisted data services with 100% QA pass rate.\n2️⃣ **Software Engineer I (Jul 2022 – Sep 2024)**: Led Mirakl Marketplace delivery generating **$115M+ demand** (*won Delivery of the Year*); reduced egress costs by **$50K/year**.`,
        cardType: 'experience',
        cardData: EXPERIENCE_TIMELINE[0],
        suggestedPills: [
          "🏆 Tell me about $115M Marketplace",
          "⚡ How did he save $50K/yr?",
          "🧩 PIM Platform Architecture",
          "🎓 University of Washington Research"
        ]
      };
    }

    // 2. Specific Projects Match
    if (q.includes('aura') || q.includes('fitness') || q.includes('workout') || q.includes('adk') || q.includes('vertex')) {
      const aura = PROJECTS_DATABASE.find(p => p.id === 'aura-fitness-agent');
      return {
        text: `🏋️ **AURA Fitness AI** is John's flagship Agentic AI workspace built with Google ADK and Vertex AI Memory Bank:`,
        cardType: 'project',
        cardData: aura,
        suggestedPills: [
          "📖 Bible Memory App",
          "✉️ Emaily Survey App",
          "🎮 Family Business Java Game",
          "🛠️ Full Tech Stack"
        ]
      };
    }

    if (q.includes('bible') || q.includes('memory') || q.includes('spaced') || q.includes('scripture')) {
      const bible = PROJECTS_DATABASE.find(p => p.id === 'bible-memory');
      return {
        text: `📖 **Bible Memory App** is a TypeScript web application for scripture memorization:`,
        cardType: 'project',
        cardData: bible,
        suggestedPills: [
          "🏋️ AURA Fitness AI",
          "✉️ Emaily Survey App",
          "🎮 Family Business Java Game",
          "💼 Nordstrom Experience"
        ]
      };
    }

    if (q.includes('emaily') || q.includes('survey') || q.includes('feedback') || q.includes('express')) {
      const emaily = PROJECTS_DATABASE.find(p => p.id === 'emaily');
      return {
        text: `✉️ **Emaily** is a full-stack automated survey and feedback workflow engine:`,
        cardType: 'project',
        cardData: emaily,
        suggestedPills: [
          "🏋️ AURA Fitness AI",
          "📖 Bible Memory App",
          "🎮 Family Business Java Game",
          "🛠️ Tech Stack"
        ]
      };
    }

    if (q.includes('family') || q.includes('business') || q.includes('game') || q.includes('strategy')) {
      const game = PROJECTS_DATABASE.find(p => p.id === 'family-business');
      return {
        text: `🎮 **Family Business** is an interactive Java strategy & resource management game engine:`,
        cardType: 'project',
        cardData: game,
        suggestedPills: [
          "☕ Java & Spring Boot Details",
          "🏋️ AURA Fitness AI",
          "💼 Nordstrom Experience",
          "📫 Contact Info"
        ]
      };
    }

    if (q.includes('project') || q.includes('repo') || q.includes('portfolio') || q.includes('github') || q.includes('app')) {
      return {
        text: `📁 **John So's Featured Engineering Projects:**\n\n• **AURA Fitness AI** (Agentic AI with Google ADK, Vertex AI, Python)\n• **Bible Memory** (TypeScript, Spaced-Repetition Algorithm)\n• **Emaily** (React, Node.js/Express, Email Survey Workflows)\n• **Family Business** (Java OOP Custom Strategy Game Engine)\n\nWhich project would you like to explore?`,
        suggestedPills: [
          "🏋️ AURA Fitness AI",
          "📖 Bible Memory App",
          "✉️ Emaily App",
          "🎮 Family Business Game"
        ]
      };
    }

    // 3. Technical Skills & Languages
    if (q.includes('stack') || q.includes('skill') || q.includes('language') || q.includes('tech') || q.includes('java') || q.includes('python') || q.includes('aws') || q.includes('docker') || q.includes('sql') || q.includes('react')) {
      return {
        text: `🛠️ **John So's Technical Stack & System Competencies:**\n\n• **Languages**: Java, Go, Python, SQL, JavaScript, TypeScript\n• **Backend & Frameworks**: Spring Boot, React.js, Node.js, Pandas, Maven\n• **Cloud & Infrastructure**: AWS (EC2, Lambda, S3, DynamoDB), Vertex AI, Docker, Kubernetes, Kafka, Terraform, GitLab CI/CD\n• **Databases**: PostgreSQL, MySQL, DynamoDB, MongoDB`,
        cardType: 'techStack',
        cardData: SKILLS_MATRIX,
        suggestedPills: [
          "💼 Nordstrom Experience",
          "🏋️ AURA Fitness AI",
          "🏆 Key Accomplishments",
          "📫 Contact & Relocation"
        ]
      };
    }

    // 4. Education & Brunton Lab Research
    if (q.includes('education') || q.includes('uw') || q.includes('washington') || q.includes('degree') || q.includes('math') || q.includes('brunton') || q.includes('research') || q.includes('paper')) {
      return {
        text: `🎓 **Education & Computational Research:**\n\n• **University of Washington** (Seattle, WA)\n• **Degree**: B.A. in Mathematics (2017 – 2021)\n• **Brunton Lab Research (2018–2020)**: Built automated Python (pandas, NumPy) data pipelines that **accelerated analysis by 70%** and contributed to **4 published academic neuroscience papers**.`,
        suggestedPills: [
          "💼 Nordstrom Software Engineer II",
          "🛠️ Technical Stack",
          "📫 Hire John So"
        ]
      };
    }

    // 5. Contact, Hiring, Relocation, Recruiter Details
    if (q.includes('contact') || q.includes('hire') || q.includes('email') || q.includes('linkedin') || q.includes('phone') || q.includes('recruiter') || q.includes('location') || q.includes('resume') || q.includes('relocate')) {
      return {
        text: `📫 **Recruiter Quick Profile & Contact Details:**\n\nJohn So is a **Seattle-based Software Engineer II** with 4+ years experience in distributed data platforms, Java, AWS, and AI systems. Open to top engineering roles!`,
        cardType: 'recruiter',
        cardData: DEVELOPER_PROFILE,
        suggestedPills: [
          "💼 Nordstrom Experience",
          "🏆 Delivery of the Year ($115M)",
          "🏋️ AURA Fitness AI",
          "📁 Browse Projects"
        ]
      };
    }

    // Default Fallback Response
    return {
      text: `✨ **John So** is a **Software Engineer II** in Seattle, WA with 4+ years experience building high-scale data platforms at Nordstrom ($115M+ Marketplace delivery) and agentic AI software.\n\nAsk me about **Nordstrom experience**, **AURA Fitness AI**, **AWS/Java stack**, **UW research**, or **contact info**!`,
      suggestedPills: [
        "💼 Nordstrom Experience",
        "🏆 Delivery of the Year ($115M)",
        "🏋️ AURA Fitness AI",
        "🛠️ Technical Stack",
        "📫 Contact Info"
      ]
    };
  };

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
      const generated = matchIntentAndGenerateResponse(text);

      const aiMsg = {
        id: Date.now() + 1,
        sender: 'ai',
        text: generated.text,
        cardType: generated.cardType,
        cardData: generated.cardData,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setIsTyping(false);
      setMessages(prev => [...prev, aiMsg]);
      if (generated.suggestedPills) {
        setActivePills(generated.suggestedPills);
      }
    }, 550);
  };

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 1000 }} id="ai-assistant">
      
      {/* Floating / Expanded Chat Modal Popout Window */}
      {isOpen && (
        <div className="clean-panel" style={{
          width: isExpanded ? '540px' : '390px',
          height: isExpanded ? '640px' : '520px',
          maxWidth: '92vw',
          maxHeight: '85vh',
          marginBottom: '1rem',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.75), 0 0 30px rgba(139, 92, 246, 0.3)',
          overflow: 'hidden',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          animation: 'fadeIn 0.2s ease-in-out'
        }}>

          {/* Chat Popout Header */}
          <div style={{
            padding: '0.85rem 1rem',
            background: 'var(--bg-card)',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-indigo))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                boxShadow: '0 2px 10px rgba(139, 92, 246, 0.4)'
              }}>
                <Sparkles size={17} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>
                  Portfolio AI Assistant
                </h4>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.15rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399', display: 'inline-block' }}></span>
                  <span>Powered by Gemini • Online</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
              <button 
                onClick={handleResetChat} 
                title="Reset Conversation"
                style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '0.35rem', borderRadius: '6px' }}
              >
                <RotateCcw size={15} />
              </button>
              <button 
                onClick={() => setIsExpanded(!isExpanded)} 
                title={isExpanded ? "Collapse Window" : "Expand Window"}
                style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '0.35rem', borderRadius: '6px' }}
              >
                {isExpanded ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
              </button>
              <button 
                onClick={() => setIsOpen(false)} 
                title="Close Chat"
                style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '0.35rem', borderRadius: '6px' }}
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages Feed */}
          <div style={{ flex: 1, padding: '0.9rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            {messages.map((msg) => (
              <div key={msg.id} style={{ display: 'flex', flexDirection: 'column', alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                
                {/* Bubble Wrapper */}
                <div style={{
                  maxWidth: '92%',
                  padding: '0.8rem 1rem',
                  borderRadius: msg.sender === 'user' ? '14px 14px 2px 14px' : '14px 14px 14px 2px',
                  background: msg.sender === 'user' ? 'var(--accent-purple)' : 'var(--bg-card)',
                  border: msg.sender === 'user' ? 'none' : '1px solid var(--border-subtle)',
                  color: '#fff',
                  position: 'relative'
                }}>
                  <div style={{ fontSize: '0.86rem', lineHeight: 1.5 }}>
                    <FormattedText text={msg.text} />
                  </div>

                  {/* Copy Button on AI messages */}
                  {msg.sender === 'ai' && (
                    <button
                      onClick={() => copyToClipboard(msg.text, msg.id)}
                      style={{
                        position: 'absolute',
                        top: '6px',
                        right: '6px',
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--text-muted)',
                        cursor: 'pointer',
                        padding: '0.2rem'
                      }}
                      title="Copy message"
                    >
                      {copiedId === msg.id ? <Check size={13} color="#34d399" /> : <Copy size={13} />}
                    </button>
                  )}

                  {/* A2UI Rich Component Cards */}
                  {msg.cardType === 'project' && msg.cardData && (
                    <div style={{ marginTop: '0.75rem', background: 'var(--bg-surface)', padding: '0.85rem', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                          <h5 style={{ fontWeight: 800, color: 'var(--accent-purple-light)', fontSize: '0.9rem', marginBottom: '0.2rem' }}>{msg.cardData.title}</h5>
                          <p style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{msg.cardData.tagline}</p>
                        </div>
                        <span className="pill-badge pill-badge-purple" style={{ fontSize: '0.65rem' }}>{msg.cardData.language}</span>
                      </div>

                      {msg.cardData.demoGif && (
                        <div style={{ position: 'relative', width: '100%', height: '130px', borderRadius: '8px', overflow: 'hidden', marginBottom: '0.6rem', border: '1px solid var(--border-subtle)' }}>
                          <img src={msg.cardData.demoGif} alt="Demo Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      )}

                      {/* Highlights */}
                      <ul style={{ paddingLeft: '1rem', marginBottom: '0.75rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                        {msg.cardData.highlights?.map((hl, idx) => (
                          <li key={idx} style={{ marginBottom: '0.2rem' }}>{hl}</li>
                        ))}
                      </ul>

                      <a 
                        href={msg.cardData.githubUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="btn-primary" 
                        style={{ width: '100%', justifyContent: 'center', padding: '0.5rem', textDecoration: 'none', fontSize: '0.78rem' }}
                      >
                        <GithubIcon size={14} /> Open GitHub Repository <ExternalLink size={12} />
                      </a>
                    </div>
                  )}

                  {msg.cardType === 'recruiter' && msg.cardData && (
                    <div style={{ marginTop: '0.75rem', background: 'var(--bg-surface)', padding: '0.85rem', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                        <div style={{ width: '36px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-indigo))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800 }}>
                          JS
                        </div>
                        <div>
                          <h5 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#fff', lineHeight: 1.1 }}>{msg.cardData.name}</h5>
                          <span style={{ fontSize: '0.72rem', color: 'var(--accent-purple-light)' }}>{msg.cardData.title}</span>
                        </div>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <MapPin size={13} color="var(--accent-purple-light)" /> {msg.cardData.location} (Open to Relocation / Remote)
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <Mail size={13} color="var(--accent-purple-light)" /> {msg.cardData.email}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <Phone size={13} color="var(--accent-purple-light)" /> {msg.cardData.phone}
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem' }}>
                        <a href={msg.cardData.linkedinUrl} target="_blank" rel="noreferrer" className="btn-secondary" style={{ justifyContent: 'center', padding: '0.4rem', fontSize: '0.72rem', textDecoration: 'none' }}>
                          <LinkedinIcon size={13} /> LinkedIn
                        </a>
                        <a href={msg.cardData.githubUrl} target="_blank" rel="noreferrer" className="btn-secondary" style={{ justifyContent: 'center', padding: '0.4rem', fontSize: '0.72rem', textDecoration: 'none' }}>
                          <GithubIcon size={13} /> GitHub
                        </a>
                      </div>
                    </div>
                  )}

                  {msg.cardType === 'award' && msg.cardData && (
                    <div style={{ marginTop: '0.75rem', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(99, 102, 241, 0.15))', padding: '0.85rem', borderRadius: '10px', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                        <Trophy size={18} color="#f59e0b" />
                        <div>
                          <h5 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#fff' }}>{msg.cardData.title}</h5>
                          <span style={{ fontSize: '0.72rem', color: 'var(--accent-purple-light)' }}>{msg.cardData.subtitle}</span>
                        </div>
                      </div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#34d399', margin: '0.4rem 0' }}>
                        ⚡ {msg.cardData.stat}
                      </div>
                      <ul style={{ paddingLeft: '1rem', fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
                        {msg.cardData.highlights?.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>

                <span style={{ fontSize: '0.62rem', color: 'var(--text-muted)', marginTop: '0.2rem', padding: '0 0.2rem' }}>
                  {msg.timestamp}
                </span>

              </div>
            ))}

            {isTyping && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-purple-light)', fontSize: '0.8rem', padding: '0.4rem' }}>
                <Sparkles size={15} className="animate-spin" style={{ animation: 'spin 2s linear infinite' }} />
                <span>Gemini is reasoning & fetching portfolio insights...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Contextual Suggested Prompt Pills */}
          <div style={{
            display: 'flex',
            gap: '0.35rem',
            overflowX: 'auto',
            padding: '0.5rem 0.85rem',
            borderTop: '1px solid var(--border-subtle)',
            background: 'var(--bg-surface)'
          }}>
            {activePills.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(prompt)}
                className="btn-secondary"
                style={{ padding: '0.28rem 0.65rem', fontSize: '0.72rem', borderRadius: '16px', whiteSpace: 'nowrap' }}
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Chat Input Bar */}
          <div style={{ padding: '0.6rem 0.85rem', background: 'var(--bg-card)', borderTop: '1px solid var(--border-subtle)', display: 'flex', gap: '0.5rem' }}>
            <input
              type="text"
              placeholder="Ask AI about John's experience, stack, projects..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', paddingLeft: '0.75rem', fontSize: '0.85rem', borderRadius: '8px' }}
            />
            <button className="btn-primary" onClick={() => handleSendMessage()} style={{ padding: '0.5rem 0.9rem', borderRadius: '8px' }}>
              <Send size={15} />
            </button>
          </div>

        </div>
      )}

      {/* Floating Bottom Right Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-indigo))',
          border: 'none',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 8px 25px rgba(139, 92, 246, 0.55)',
          transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease',
          marginLeft: 'auto'
        }}
        className="popout-btn"
        title="Open John So AI Assistant"
      >
        {isOpen ? <ChevronDown size={24} /> : <Bot size={28} />}
      </button>

    </div>
  );
}



