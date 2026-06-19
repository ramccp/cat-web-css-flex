import { Section } from '@/components/Section';
import { motion } from 'framer-motion';

const GRADIENT_TYPES = [
  {
    title: 'Linear Gradient',
    preview: 'linear-gradient(to bottom right, #6366F1, #8B5CF6)',
    previewShape: 'rounded-xl w-full h-[100px]',
    useCases: [
      'Hero section backgrounds',
      'Button backgrounds',
      'Card overlays',
      'Text gradients (with background-clip: text)',
      'Progress bars',
    ],
  },
  {
    title: 'Radial Gradient',
    preview: 'radial-gradient(circle, #6366F1, #0B0C10)',
    previewShape: 'rounded-full w-[100px] h-[100px] mx-auto',
    useCases: [
      'Spotlight/highlight effects',
      'Circular progress indicators',
      'Avatar glow effects',
      'Sunburst backgrounds',
      'Focus indicators',
    ],
  },
  {
    title: 'Conic Gradient',
    preview: 'conic-gradient(from 0deg, red, orange, yellow, green, blue, indigo, violet, red)',
    previewShape: 'rounded-full w-[100px] h-[100px] mx-auto',
    useCases: [
      'Pie charts (without JavaScript!)',
      'Color pickers',
      'Loading spinners',
      'Circular color transitions',
      'Badge/ribbon effects',
    ],
  },
];

export function GradientGuideSection() {
  return (
    <Section id="gradient-guide" className="section-gradient-2">
      <h2
        className="text-3xl md:text-[40px] font-semibold leading-tight mb-4"
        style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}
      >
        When to Use Each Gradient
      </h2>
      <p className="text-base md:text-lg leading-relaxed mb-10 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
        Now that you know all three gradient types, here's a quick guide for choosing the right one for your project.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {GRADIENT_TYPES.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
            className="rounded-2xl border p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-subtle)' }}
          >
            <div
              className={`${g.previewShape} border mb-6`}
              style={{ background: g.preview, borderColor: 'var(--border-subtle)' }}
            />
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}>
              {g.title}
            </h3>
            <ul className="space-y-2">
              {g.useCases.map((uc) => (
                <li key={uc} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--accent-primary)' }} />
                  {uc}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
