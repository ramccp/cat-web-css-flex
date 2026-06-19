import { Section } from '@/components/Section';
import { CodeBlock } from '@/components/CodeBlock';
import { Callout } from '@/components/Callout';
import { motion } from 'framer-motion';

export function WhyFlexboxSection() {
  return (
    <Section id="why-flexbox">
      <h2 className="text-3xl md:text-[40px] font-semibold leading-tight mb-4" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}>
        Why Make the Parent <code className="font-mono text-[0.8em] px-2 py-1 rounded-md" style={{ background: 'var(--bg-secondary)' }}>display: flex</code>?
      </h2>
      <p className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
        The core idea of Flexbox: <strong style={{ color: 'var(--text-primary)' }}>the parent controls the children</strong>. When you set <code className="font-mono text-sm">display: flex</code> on a parent element, you unlock a powerful layout engine that controls how all its direct children are positioned, aligned, and sized.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Before Flexbox */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="rounded-2xl border p-6" style={{ background: 'var(--bg-secondary)', borderColor: '#FCA5A5' }}>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2" style={{ fontFamily: 'Outfit, sans-serif', color: '#DC2626' }}>
            <span className="w-2 h-2 rounded-full bg-red-500" /> Without Flexbox (Hard)
          </h3>
          <div className="border rounded-lg p-4 mb-4" style={{ background: 'var(--bg-primary)', borderColor: 'var(--border-subtle)' }}>
            <div className="inline-block px-3 py-1.5 rounded mr-2 mb-2 text-sm text-white" style={{ background: '#94A3B8' }}>Item 1</div>
            <div className="inline-block px-3 py-1.5 rounded mr-2 mb-2 text-sm text-white" style={{ background: '#94A3B8' }}>Item 2</div>
            <div className="inline-block px-3 py-1.5 rounded mr-2 mb-2 text-sm text-white" style={{ background: '#94A3B8' }}>Item 3</div>
          </div>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">&times;</span> Hard to center vertically</li>
            <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">&times;</span> Items don't share space equally</li>
            <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">&times;</span> Need floats, clearfix hacks</li>
            <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">&times;</span> No control over spacing</li>
          </ul>
        </motion.div>

        {/* With Flexbox */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl border p-6" style={{ background: 'var(--bg-secondary)', borderColor: '#86EFAC' }}>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2" style={{ fontFamily: 'Outfit, sans-serif', color: '#16A34A' }}>
            <span className="w-2 h-2 rounded-full bg-green-500" /> With Flexbox (Easy)
          </h3>
          <div className="border rounded-lg p-4 mb-4 flex gap-3" style={{ background: 'var(--bg-primary)', borderColor: 'var(--border-subtle)' }}>
            <div className="px-4 py-2 rounded text-sm text-white font-medium" style={{ background: '#6366F1' }}>Item 1</div>
            <div className="px-4 py-2 rounded text-sm text-white font-medium" style={{ background: '#8B5CF6' }}>Item 2</div>
            <div className="px-4 py-2 rounded text-sm text-white font-medium" style={{ background: '#06B6D4' }}>Item 3</div>
          </div>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">&#10003;</span> Perfect vertical centering</li>
            <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">&#10003;</span> Equal space distribution</li>
            <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">&#10003;</span> No hacks needed</li>
            <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">&#10003;</span> Full control over alignment</li>
          </ul>
        </motion.div>
      </div>

      <CodeBlock code={`.parent {
  display: flex;  /* This single line unlocks the flexbox layout engine */
}`} />

      <Callout>
        <strong style={{ color: 'var(--text-primary)' }}>Key concept:</strong> Flexbox works on a <strong>parent-child relationship</strong>. Properties like <code className="font-mono text-sm">justify-content</code> and <code className="font-mono text-sm">align-items</code> go on the <strong>parent</strong> to control the <strong>children</strong>. Properties like <code className="font-mono text-sm">flex-grow</code> and <code className="font-mono text-sm">align-self</code> go on the <strong>children</strong> to control themselves.
      </Callout>
    </Section>
  );
}
