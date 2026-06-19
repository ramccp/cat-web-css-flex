import { Section } from '@/components/Section';
import { CodeBlock } from '@/components/CodeBlock';
import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';

const VALUES: { label: CSSProperties['alignItems']; desc: string; heights: string[] }[] = [
  { label: 'stretch', desc: 'Items stretch to fill container height (default)', heights: ['100%', '100%', '100%'] },
  { label: 'flex-start', desc: 'Items aligned to top', heights: ['40%', '60%', '50%'] },
  { label: 'flex-end', desc: 'Items aligned to bottom', heights: ['40%', '60%', '50%'] },
  { label: 'center', desc: 'Items centered vertically', heights: ['40%', '60%', '50%'] },
  { label: 'baseline', desc: 'Text baselines aligned', heights: ['40%', '60%', '50%'] },
];

const COLORS = ['#6366F1', '#8B5CF6', '#06B6D4'];

export function AlignItemsSection() {
  return (
    <Section id="align-items" className="section-gradient-1">
      <h2 className="text-3xl md:text-[40px] font-semibold leading-tight mb-4" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}>
        align-items
      </h2>
      <p className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
        Controls how items are aligned along the <strong style={{ color: '#EC4899' }}>Cross Axis</strong> (perpendicular to the main axis). For a row, this means vertical alignment. For a column, this means horizontal alignment.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {VALUES.map((v, i) => (
          <motion.div key={v.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: i * 0.08 }}
            className="rounded-2xl border p-5" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-subtle)' }}>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-sm font-semibold px-2 py-1 rounded" style={{ color: '#EC4899', background: 'var(--bg-elevated)' }}>{v.label}</span>
            </div>
            <p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>{v.desc}</p>
            {/* Live Demo */}
            <div className="border rounded-lg p-3 h-[130px] flex gap-2" style={{ alignItems: v.label, background: 'var(--bg-primary)', borderColor: 'var(--border-medium)' }}>
              {COLORS.map((c, j) => (
                <div key={j} className="w-10 rounded flex items-center justify-center text-xs text-white font-bold flex-shrink-0 transition-all" style={{ background: c, height: v.heights[j] }}>
                  {j + 1}
                </div>
              ))}
            </div>
            <div className="mt-3">
              <CodeBlock code={`display: flex;\nalign-items: ${v.label};`} />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
