import { Section } from '@/components/Section';
import { CodeBlock } from '@/components/CodeBlock';
import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';

const VALUES: { label: CSSProperties['alignContent']; desc: string }[] = [
  { label: 'flex-start', desc: 'Lines packed to the top' },
  { label: 'flex-end', desc: 'Lines packed to the bottom' },
  { label: 'center', desc: 'Lines centered vertically' },
  { label: 'space-between', desc: 'First line at top, last at bottom' },
  { label: 'space-around', desc: 'Equal space around each line' },
  { label: 'stretch', desc: 'Lines stretch to fill (default)' },
];

const COLORS = ['#6366F1', '#8B5CF6', '#06B6D4', '#EC4899', '#F59E0B', '#10B981'];

export function AlignContentSection() {
  return (
    <Section id="align-content" className="section-gradient-1">
      <h2 className="text-3xl md:text-[40px] font-semibold leading-tight mb-4" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}>
        align-content
      </h2>
      <p className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
        When you have <strong>multiple lines</strong> of flex items (using <code className="font-mono text-sm">flex-wrap: wrap</code>), <code className="font-mono text-sm">align-content</code> controls how those <strong>lines</strong> are distributed along the cross axis. It's like <code className="font-mono text-sm">justify-content</code> but for the wrapped lines.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {VALUES.map((v, i) => (
          <motion.div key={v.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: i * 0.08 }}
            className="rounded-2xl border p-5" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-subtle)' }}>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-sm font-semibold px-2 py-1 rounded" style={{ color: '#10B981', background: 'var(--bg-elevated)' }}>{v.label}</span>
            </div>
            <p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>{v.desc}</p>
            {/* Live Demo */}
            <div className="border rounded-lg p-2 flex flex-wrap gap-1 min-h-[140px]" style={{ alignContent: v.label, background: 'var(--bg-primary)', borderColor: 'var(--border-medium)' }}>
              {COLORS.map((c, j) => (
                <div key={j} className="px-3 py-1.5 rounded text-xs text-white font-bold" style={{ background: c, width: '45%' }}>
                  {j + 1}
                </div>
              ))}
            </div>
            <div className="mt-3">
              <CodeBlock code={`display: flex;\nflex-wrap: wrap;\nalign-content: ${v.label};`} />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
