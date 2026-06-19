import { Section } from '@/components/Section';
import { CodeBlock } from '@/components/CodeBlock';
import { GradientBuilder } from '@/components/GradientBuilder';
import { motion } from 'framer-motion';

export function ConicGradientSection() {
  return (
    <Section id="conic-gradient">
      <h2
        className="text-3xl md:text-[40px] font-semibold leading-tight mb-4"
        style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}
      >
        Conic Gradients
      </h2>
      <p className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
        Conic gradients sweep colors around a central point, like a color wheel. They're perfect for pie charts, color wheels, and dramatic circular color transitions.
      </p>

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
          <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Colors are evenly distributed around the circle</span>
        </div>
        <p className="text-[15px] leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
          List colors without degree values and the browser spreads them evenly around the full 360 degrees. Great for smooth color wheels and rainbow effects.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <div
              className="w-[130px] h-[130px] rounded-full border mb-3"
              style={{
                background: 'conic-gradient(#6366F1, #8B5CF6, #6366F1)',
                borderColor: 'var(--border-subtle)',
              }}
            />
            <p className="text-xs mb-2 text-center" style={{ color: 'var(--text-muted)' }}>Two colors — smooth blend</p>
            <CodeBlock code={`background: conic-gradient(#6366F1, #8B5CF6);`} />
          </div>
          <div className="flex flex-col items-center">
            <div
              className="w-[130px] h-[130px] rounded-full border mb-3"
              style={{
                background: 'conic-gradient(#6366F1, #06B6D4, #8B5CF6, #6366F1)',
                borderColor: 'var(--border-subtle)',
              }}
            />
            <p className="text-xs mb-2 text-center" style={{ color: 'var(--text-muted)' }}>Three colors — evenly spaced</p>
            <CodeBlock code={`background: conic-gradient(#6366F1, #06B6D4, #8B5CF6);`} />
          </div>
          <div className="flex flex-col items-center">
            <div
              className="w-[130px] h-[130px] rounded-full border mb-3"
              style={{
                background: 'conic-gradient(from 0deg, red, orange, yellow, green, blue, indigo, violet, red)',
                borderColor: 'var(--border-subtle)',
              }}
            />
            <p className="text-xs mb-2 text-center" style={{ color: 'var(--text-muted)' }}>Rainbow color wheel</p>
            <CodeBlock code={`background: conic-gradient(
  red, orange, yellow, green,
  blue, indigo, violet, red
);`} />
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
          <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Control exact angles for each color</span>
        </div>
        <p className="text-[15px] leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
          Color stops with degrees let you create sharp pie-chart segments, exact color bands, and precise angular transitions. Each color gets a start and end degree.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <div
              className="w-[130px] h-[130px] rounded-full border mb-3"
              style={{
                background: 'conic-gradient(from 0deg, #6366F1 0deg 120deg, #8B5CF6 120deg 240deg, #06B6D4 240deg 360deg)',
                borderColor: 'var(--border-subtle)',
              }}
            />
            <p className="text-xs mb-2 text-center" style={{ color: 'var(--text-muted)' }}>Pie chart — 3 equal slices</p>
            <CodeBlock
              code={`background: conic-gradient(
  #6366F1 0deg 120deg,
  #8B5CF6 120deg 240deg,
  #06B6D4 240deg 360deg
);`}
            />
          </div>
          <div className="flex flex-col items-center">
            <div
              className="w-[130px] h-[130px] rounded-full border mb-3"
              style={{
                background: 'conic-gradient(from 0deg, #6366F1 0deg 90deg, transparent 90deg 360deg)',
                borderColor: 'var(--border-subtle)',
              }}
            />
            <p className="text-xs mb-2 text-center" style={{ color: 'var(--text-muted)' }}>Quarter slice highlight</p>
            <CodeBlock
              code={`background: conic-gradient(
  #6366F1 0deg 90deg,
  transparent 90deg 360deg
);`}
            />
          </div>
          <div className="flex flex-col items-center">
            <div
              className="w-[130px] h-[130px] rounded-full border mb-3"
              style={{
                background: 'conic-gradient(from 45deg, #EC4899 0deg 60deg, #6366F1 60deg 180deg, #06B6D4 180deg 300deg, #EC4899 300deg 360deg)',
                borderColor: 'var(--border-subtle)',
              }}
            />
            <p className="text-xs mb-2 text-center" style={{ color: 'var(--text-muted)' }}>Unequal segments from 45deg</p>
            <CodeBlock
              code={`background: conic-gradient(
  from 45deg,
  #EC4899 0deg 60deg,
  #6366F1 60deg 180deg,
  #06B6D4 180deg 300deg,
  #EC4899 300deg 360deg
);`}
            />
          </div>
        </div>
      </motion.div>

      <GradientBuilder type="conic" />
    </Section>
  );
}
