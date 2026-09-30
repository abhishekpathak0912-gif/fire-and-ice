import React, { useState } from 'react';

export interface AccordionItem {
  id: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpenId?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpenId
}) => {
  const [openIds, setOpenIds] = useState<string[]>(
    defaultOpenId ? [defaultOpenId] : []
  );

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds(prev =>
        prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
      );
    } else {
      setOpenIds(prev => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
      {items.map(item => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              border: '1px solid rgba(197, 170, 121, 0.35)',
              overflow: 'hidden',
              transition: 'border-color 0.2s ease'
            }}
          >
            <button
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
              id={`accordion-btn-${item.id}`}
              style={{
                width: '100%',
                padding: '1rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textAlign: 'left',
                backgroundColor: isOpen ? 'var(--color-surface-container)' : 'transparent',
                transition: 'background-color 0.2s ease',
                color: 'var(--color-on-surface)'
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    display: 'block'
                  }}
                >
                  {item.title}
                </span>
                {item.subtitle && (
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: 'var(--color-secondary)',
                      display: 'block',
                      marginTop: '0.15rem'
                    }}
                  >
                    {item.subtitle}
                  </span>
                )}
              </div>
              <span
                className="material-symbols-outlined"
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.25s ease',
                  color: 'var(--color-secondary)'
                }}
              >
                expand_more
              </span>
            </button>

            {isOpen && (
              <div
                id={`accordion-content-${item.id}`}
                role="region"
                aria-labelledby={`accordion-btn-${item.id}`}
                style={{
                  padding: '1.25rem',
                  fontSize: '0.925rem',
                  lineHeight: '1.6',
                  color: 'var(--color-on-surface-variant)',
                  borderTop: '1px solid rgba(197, 170, 121, 0.2)',
                  backgroundColor: '#FFFFFF'
                }}
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
