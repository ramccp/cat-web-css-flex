import { Section } from '@/components/Section';
import { CodeBlock } from '@/components/CodeBlock';
import { GradientBuilder } from '@/components/GradientBuilder';
import { motion } from 'framer-motion';

const DIRECTION_TABLE = [
  { keyword: 'to top', angle: '0deg', dir: 'Bottom to top' },
  { keyword: 'to right', angle: '90deg', dir: 'Left to right' },
  { keyword: 'to bottom', angle: '180deg', dir: 'Top to bottom (default)' },
  { keyword: 'to left', angle: '270deg', dir: 'Right to left' },
  { keyword: 'to top right', angle: '45deg', dir: 'Bottom-left to top-right' },
];

export function LinearGradientSection() {
  return (
    <Section id="linear-gradient">
      <h2
        className="text-3xl md:text-[40px] font-semibold leading-tight mb-4"
        style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}
      >
        Linear Gradients
      </h2>
      <p className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
        Linear gradients transition colors along a straight line. You control the direction and the color stops — the points where one color transitions to the next.
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
          <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Colors are evenly spaced automatically</span>
        </div>
        <p className="text-[15px] leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
          When you just list colors without percentages, the browser evenly distributes them across the gradient. This is the simplest way to create a gradient.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div
              className="w-full h-[80px] rounded-xl mb-3"
              style={{ background: 'linear-gradient(to right, #6366F1, #8B5CF6)' }}
            />
            <p className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>Two colors — 50/50 split</p>
            <CodeBlock code={`background: linear-gradient(to right, #6366F1, #8B5CF6);`} />
          </div>
          <div>
            <div
              className="w-full h-[80px] rounded-xl mb-3"
              style={{ background: 'linear-gradient(45deg, #6366F1, #06B6D4, #8B5CF6)' }}
            />
            <p className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>Three colors — 33/33/33 split</p>
            <CodeBlock code={`background: linear-gradient(45deg, #6366F1, #06B6D4, #8B5CF6);`} />
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
          <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Precise control over where each color starts and ends</span>
        </div>
        <p className="text-[15px] leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
          Color stops let you control exactly where each color appears. Add a percentage after any color to position it precisely. This gives you much more control over the gradient's look.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div
              className="w-full h-[80px] rounded-xl mb-3"
              style={{ background: 'linear-gradient(to right, #6366F1 0%, #8B5CF6 50%, #06B6D4 100%)' }}
            />
            <p className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>Explicit 0% — 50% — 100%</p>
            <CodeBlock
              code={`background: linear-gradient(to right,
  #6366F1 0%,
  #8B5CF6 50%,
  #06B6D4 100%
);`}
            />
          </div>
          <div>
            <div
              className="w-full h-[80px] rounded-xl mb-3"
              style={{ background: 'linear-gradient(to right, #6366F1 0%, #6366F1 40%, #EC4899 40%, #EC4899 60%, #8B5CF6 60%, #8B5CF6 100%)' }}
            />
            <p className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>Hard color stops — solid bands</p>
            <CodeBlock
              code={`background: linear-gradient(to right,
  #6366F1 0%,
  #6366F1 40%,
  #EC4899 40%,
  #EC4899 60%,
  #8B5CF6 60%,
  #8B5CF6 100%
);`}
            />
          </div>
        </div>
      </motion.div>

      <GradientBuilder type="linear" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-10"
      >
        <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}>
          Direction Keywords
        </h3>
        <div className="overflow-x-auto rounded-xl border" style={{ borderColor: 'var(--border-subtle)' }}>
          <table className="w-full text-sm" style={{ color: 'var(--text-secondary)' }}>
            <thead>
              <tr className="border-b" style={{ borderColor: 'var(--border-medium)', background: 'var(--bg-elevated)' }}>
                <th className="text-left py-3 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>Keyword</th>
                <th className="text-left py-3 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>Equivalent Angle</th>
                <th className="text-left py-3 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>Direction</th>
              </tr>
            </thead>
            <tbody style={{ background: 'var(--bg-secondary)' }}>
              {DIRECTION_TABLE.map((row) => (
                <tr key={row.keyword} className="border-b" style={{ borderColor: 'var(--border-subtle)' }}>
                  <td className="py-3 px-4 font-mono text-xs" style={{ color: 'var(--accent-tertiary)' }}>{row.keyword}</td>
                  <td className="py-3 px-4 font-mono text-xs">{row.angle}</td>
                  <td className="py-3 px-4">{row.dir}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </Section>
  );
}
