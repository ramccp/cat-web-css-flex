import { Section } from '@/components/Section';
import { CodeBlock } from '@/components/CodeBlock';
import { Callout } from '@/components/Callout';
import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';

const VALUES: { label: CSSProperties['flexWrap']; desc: string; code: string }[] = [
  { label: 'nowrap', desc: 'All items stay on one line (default). Items may shrink or overflow.', code: 'flex-wrap: nowrap;' },
  { label: 'wrap', desc: 'Items wrap onto multiple lines when they run out of space.', code: 'flex-wrap: wrap;' },
  { label: 'wrap-reverse', desc: 'Items wrap onto multiple lines in reverse order (bottom to top).', code: 'flex-wrap: wrap-reverse;' },
];

const COLORS = ['#6366F1', '#8B5CF6', '#06B6D4', '#EC4899', '#F59E0B', '#10B981'];

export function FlexWrapSection() {
  return (
    <Section id="flex-wrap">
      <h2 className="text-3xl md:text-[40px] font-semibold leading-tight mb-4" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}>
        flex-wrap
      </h2>
      <p className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
        By default, flex items try to fit on a <strong>single line</strong>. <code className="font-mono text-sm">flex-wrap</code> lets items wrap onto multiple lines when they don't fit. This is essential for responsive layouts.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {VALUES.map((v, i) => (
          <motion.div key={v.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: i * 0.1 }}
            className="rounded-2xl border p-5" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-subtle)' }}>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-sm font-semibold px-2 py-1 rounded" style={{ color: 'var(--accent-primary)', background: 'var(--bg-elevated)' }}>{v.label}</span>
            </div>
            <p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>{v.desc}</p>
            {/* Live Demo - constrained width to force wrapping */}
            <div className="border rounded-lg p-2 flex gap-2 overflow-hidden" style={{ flexWrap: v.label, background: 'var(--bg-primary)', borderColor: 'var(--border-medium)', maxHeight: v.label === 'nowrap' ? '60px' : '140px' }}>
              {COLORS.map((c, j) => (
                <div key={j} className="px-4 py-2 rounded text-xs text-white font-bold flex-shrink-0" style={{ background: c, width: '80px' }}>
                  {j + 1}
                </div>
              ))}
            </div>
            <div className="mt-3">
              <CodeBlock code={v.code} />
            </div>
          </motion.div>
        ))}
      </div>

      <Callout>
        Combine <code className="font-mono text-sm">flex-wrap: wrap</code> with <code className="font-mono text-sm">gap</code> for perfect responsive grids without media queries. This combo is the secret to modern responsive layouts.
      </Callout>
    </Section>
  );
}
