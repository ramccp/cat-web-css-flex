import { Section } from '@/components/Section';
import { CodeBlock } from '@/components/CodeBlock';
import { GradientBuilder } from '@/components/GradientBuilder';
import { motion } from 'framer-motion';

const SIZES = [
  { label: 'closest-side', desc: 'Gradient reaches the nearest edge' },
  { label: 'farthest-side', desc: 'Gradient reaches the farthest edge' },
  { label: 'closest-corner', desc: 'Gradient reaches the nearest corner' },
  { label: 'farthest-corner', desc: 'Gradient reaches the farthest corner (default)' },
];

export function RadialGradientSection() {
  return (
    <Section id="radial-gradient" className="section-gradient-2">
      <h2
        className="text-3xl md:text-[40px] font-semibold leading-tight mb-4"
        style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}
      >
        Radial Gradients
      </h2>
      <p className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
        Radial gradients radiate outward from a center point, like a sunburst or a drop of ink spreading in water. You control the shape, size, and position of the gradient.
      </p>

      {/* Shape comparison */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap gap-8 mb-8"
      >
        <div className="flex flex-col items-center gap-3">
          <div
            className="w-[200px] h-[200px] rounded-xl border"
            style={{
              background: 'radial-gradient(circle, #6366F1, #E2E4EA)',
              borderColor: 'var(--border-subtle)',
            }}
          />
          <span className="text-xs font-mono" style={{ color: 'var(--accent-tertiary)' }}>circle</span>
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Perfect circular gradient</span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div
            className="w-[200px] h-[200px] rounded-xl border"
            style={{
              background: 'radial-gradient(ellipse, #6366F1, #E2E4EA)',
              borderColor: 'var(--border-subtle)',
            }}
          />
          <span className="text-xs font-mono" style={{ color: 'var(--accent-tertiary)' }}>ellipse</span>
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Stretches to fill the container</span>
        </div>
      </motion.div>

      {/* Without Color Stops */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border p-6 md:p-8 mb-8"
        style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-subtle)' }}
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded" style={{ background: 'var(--accent-primary)', color: 'white' }}>Without Color Stops</span>
          <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Colors spread evenly from center to edge</span>
        </div>
        <p className="text-[15px] leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
          Without color stops, each color is evenly spaced from the center to the edge of the container. Simple and clean for most use cases.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div
              className="w-full aspect-square rounded-xl mb-3 border"
              style={{
                background: 'radial-gradient(circle, #6366F1, #8B5CF6)',
                borderColor: 'var(--border-subtle)',
              }}
            />
            <p className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>Two colors — center to edge</p>
            <CodeBlock code={`background: radial-gradient(circle, #6366F1, #8B5CF6);`} />
          </div>
          <div>
            <div
              className="w-full aspect-square rounded-xl mb-3 border"
              style={{
                background: 'radial-gradient(circle, #6366F1, #06B6D4, #E2E4EA)',
                borderColor: 'var(--border-subtle)',
              }}
            />
            <p className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>Three colors — evenly spaced</p>
            <CodeBlock code={`background: radial-gradient(circle, #6366F1, #06B6D4, #E2E4EA);`} />
          </div>
        </div>
      </motion.div>

      {/* With Color Stops */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border p-6 md:p-8 mb-8"
        style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-subtle)' }}
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded" style={{ background: 'var(--accent-secondary)', color: 'white' }}>With Color Stops</span>
          <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Control exactly where each color appears</span>
        </div>
        <p className="text-[15px] leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
          Color stops let you position colors at specific points. Use percentages to control how far each color extends from the center.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div
              className="w-full aspect-square rounded-xl mb-3 border"
              style={{
                background: 'radial-gradient(circle, #6366F1 0%, #8B5CF6 50%, #E2E4EA 100%)',
                borderColor: 'var(--border-subtle)',
              }}
            />
            <p className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>Explicit 0% — 50% — 100%</p>
            <CodeBlock
              code={`background: radial-gradient(circle,
  #6366F1 0%,
  #8B5CF6 50%,
  #E2E4EA 100%
);`}
            />
          </div>
          <div>
            <div
              className="w-full aspect-square rounded-xl mb-3 border"
              style={{
                background: 'radial-gradient(circle at top right, #6366F1 0%, #EC4899 30%, #8B5CF6 70%, #E2E4EA 100%)',
                borderColor: 'var(--border-subtle)',
              }}
            />
            <p className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>Offset center + multiple stops</p>
            <CodeBlock
              code={`background: radial-gradient(
  circle at top right,
  #6366F1 0%,
  #EC4899 30%,
  #8B5CF6 70%,
  #E2E4EA 100%
);`}
            />
          </div>
        </div>
      </motion.div>

      <GradientBuilder type="radial" />

      {/* Size keywords */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-10"
      >
        <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}>
          Size Keywords
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SIZES.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border p-4"
              style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-subtle)' }}
            >
              <span className="font-mono text-xs mb-2 block" style={{ color: 'var(--accent-tertiary)' }}>{s.label}</span>
              <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
