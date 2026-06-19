import { Section } from '@/components/Section';
import { CodeBlock } from '@/components/CodeBlock';
import { motion } from 'framer-motion';

const DIRECTIONS = [
  { label: 'row', desc: 'Left to right (default)', style: { flexDirection: 'row' as const }, code: 'flex-direction: row;' },
  { label: 'row-reverse', desc: 'Right to left', style: { flexDirection: 'row-reverse' as const }, code: 'flex-direction: row-reverse;' },
  { label: 'column', desc: 'Top to bottom', style: { flexDirection: 'column' as const }, code: 'flex-direction: column;' },
  { label: 'column-reverse', desc: 'Bottom to top', style: { flexDirection: 'column-reverse' as const }, code: 'flex-direction: column-reverse;' },
];

const COLORS = ['#6366F1', '#8B5CF6', '#06B6D4', '#EC4899'];

export function FlexDirectionSection() {
  return (
    <Section id="flex-direction">
      <h2 className="text-3xl md:text-[40px] font-semibold leading-tight mb-4" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}>
        flex-direction
      </h2>
      <p className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
        <code className="font-mono text-sm">flex-direction</code> defines the <strong>main axis</strong> — the direction in which flex items are placed. By default it's <code className="font-mono text-sm">row</code> (horizontal), but you can flip or rotate it.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {DIRECTIONS.map((dir, i) => (
          <motion.div key={dir.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: i * 0.1 }}
            className="rounded-2xl border p-5" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-subtle)' }}>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-sm font-semibold px-2 py-1 rounded" style={{ color: 'var(--accent-primary)', background: 'var(--bg-elevated)' }}>{dir.label}</span>
              <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{dir.desc}</span>
            </div>
            <div className="border rounded-lg p-4 mb-4 min-h-[120px] flex gap-2" style={{ ...dir.style, background: 'var(--bg-primary)', borderColor: 'var(--border-medium)' }}>
              {COLORS.map((c, j) => (
                <div key={j} className="px-4 py-3 rounded text-sm text-white font-bold text-center" style={{ background: c, minWidth: '50px' }}>{j + 1}</div>
              ))}
            </div>
            <CodeBlock code={dir.code} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
