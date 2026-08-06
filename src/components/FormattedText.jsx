import React from 'react';

export default function FormattedText({ text, style }) {
  if (!text) return null;

  const lines = text.split('\n');

  return (
    <span style={style}>
      {lines.map((line, lineIdx) => {
        // Regex matches **bold**, *italics*, `code`, or [text](url)
        const regex = /(\*\*.+?\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
        const parts = line.split(regex);

        const renderedLine = parts.map((part, partIdx) => {
          if (!part) return null;

          if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
            return (
              <strong key={partIdx} style={{ fontWeight: 800, color: 'inherit' }}>
                {part.slice(2, -2)}
              </strong>
            );
          }

          if (part.startsWith('*') && part.endsWith('*') && part.length >= 2) {
            return (
              <em key={partIdx} style={{ fontStyle: 'italic', color: 'var(--accent-purple-light)' }}>
                {part.slice(1, -1)}
              </em>
            );
          }

          if (part.startsWith('`') && part.endsWith('`') && part.length >= 2) {
            return (
              <code
                key={partIdx}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  padding: '0.12rem 0.35rem',
                  borderRadius: '4px',
                  color: 'var(--accent-purple-light)',
                  fontFamily: 'var(--font-code)',
                  fontSize: '0.88em'
                }}
              >
                {part.slice(1, -1)}
              </code>
            );
          }

          if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
            const match = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
            if (match) {
              return (
                <a
                  key={partIdx}
                  href={match[2]}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: 'var(--accent-purple-light)', fontWeight: 700, textDecoration: 'underline' }}
                >
                  {match[1]}
                </a>
              );
            }
          }

          return part;
        });

        return (
          <React.Fragment key={lineIdx}>
            {renderedLine}
            {lineIdx < lines.length - 1 && <br />}
          </React.Fragment>
        );
      })}
    </span>
  );
}
