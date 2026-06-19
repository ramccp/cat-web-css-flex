import { Section } from '@/components/Section';
import { CodeBlock } from '@/components/CodeBlock';
import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';

const VALUES: { label: CSSProperties['justifyContent']; desc: string; icon: string }[] = [
  { label: 'flex-start', desc: 'Items packed to the start', icon: '←|' },
  { label: 'flex-end', desc: 'Items packed to the end', icon: '|→' },
  { label: 'center', desc: 'Items centered', icon: '←|→' },
  { label: 'space-between', desc: 'First at start, last at end, rest evenly spaced', icon: '←   →' },
  { label: 'space-around', desc: 'Equal space around each item', icon: ' ○  ○  ○ ' },
  { label: 'space-evenly', desc: 'Truly equal spacing between all', icon: ' |  |  | ' },
];

const COLORS = ['#6366F1', '#8B5CF6', '#06B6D4', '#EC4899'];

export function JustifyContentSection() {
  return (
    <Section id="justify-content">
      <h2 className="text-3xl md:text-[40px] font-semibold leading-tight mb-4" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}>
        justify-content
      </h2>
      <p className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
        Controls how items are distributed along the <strong style={{ color: 'var(--accent-primary)' }}>Main Axis</strong> (the direction set by flex-direction). This is the most-used flexbox property for horizontal alignment.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {VALUES.map((v, i) => (
          <motion.div key={v.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: i * 0.08 }}
            className="rounded-2xl border p-5" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-subtle)' }}>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-sm font-semibold px-2 py-1 rounded" style={{ color: 'var(--accent-primary)', background: 'var(--bg-elevated)' }}>{v.label}</span>
              <span className="text-lg" style={{ color: 'var(--text-muted)' }}>{v.icon}</span>
            </div>
            <p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>{v.desc}</p>
            {/* Live Demo */}
            <div className="border rounded-lg p-3 h-[70px] flex" style={{ justifyContent: v.label, gap: '6px', background: 'var(--bg-primary)', borderColor: 'var(--border-medium)' }}>
              {COLORS.slice(0, 3).map((c, j) => (
                <div key={j} className="w-10 rounded flex items-center justify-center text-xs text-white font-bold flex-shrink-0" style={{ background: c }}>{j + 1}</div>
              ))}
            </div>
            <div className="mt-3">
              <CodeBlock code={`display: flex;\njustify-content: ${v.label};`} />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
