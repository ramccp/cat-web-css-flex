import type { ReactNode } from 'react';

interface CalloutProps {
  children: ReactNode;
  type?: 'tip' | 'warning';
}

export function Callout({ children, type = 'tip' }: CalloutProps) {
  const borderColor = type === 'warning' ? 'var(--warning)' : 'var(--accent-primary)';
  const bgColor = type === 'warning' ? 'rgba(245, 158, 11, 0.08)' : 'rgba(99, 102, 241, 0.08)';

  return (
    <div
      className="rounded-r-lg p-4 md:p-5 my-6"
      style={{
        borderLeft: `3px solid ${borderColor}`,
        background: bgColor,
      }}
    >
      <div className="text-[15px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {children}
      </div>
    </div>
  );
}
