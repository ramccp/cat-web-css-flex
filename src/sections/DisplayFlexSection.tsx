import { Section } from '@/components/Section';
import { CodeBlock } from '@/components/CodeBlock';
import { motion } from 'framer-motion';

export function DisplayFlexSection() {
  return (
    <Section id="display-flex" className="section-gradient-1">
      <h2 className="text-3xl md:text-[40px] font-semibold leading-tight mb-4" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}>
        display: flex
      </h2>
      <p className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
        This is the starting point. When you apply <code className="font-mono text-sm">display: flex</code> to a container, its children become <strong>flex items</strong> and line up horizontally (in a row) by default. The container itself becomes a <strong>flex container</strong>.
      </p>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Before */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="rounded-2xl border p-6" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-subtle)' }}>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--text-muted)', fontFamily: 'Outfit, sans-serif' }}>display: block (default)</h3>
          <div className="border rounded-lg p-4 space-y-2" style={{ background: 'var(--bg-primary)', borderColor: 'var(--border-subtle)' }}>
            <div className="px-4 py-3 rounded text-sm text-white font-medium" style={{ background: '#6366F1' }}>Block Item 1</div>
            <div className="px-4 py-3 rounded text-sm text-white font-medium" style={{ background: '#8B5CF6' }}>Block Item 2</div>
            <div className="px-4 py-3 rounded text-sm text-white font-medium" style={{ background: '#06B6D4' }}>Block Item 3</div>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--text-muted)' }}>Items stack vertically, each takes full width</p>
        </motion.div>

        {/* After */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl border p-6" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-subtle)' }}>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--text-muted)', fontFamily: 'Outfit, sans-serif' }}>display: flex</h3>
          <div className="border rounded-lg p-4 flex gap-2 flex-wrap" style={{ background: 'var(--bg-primary)', borderColor: 'var(--border-subtle)' }}>
            <div className="px-4 py-3 rounded text-sm text-white font-medium" style={{ background: '#6366F1' }}>Flex Item 1</div>
            <div className="px-4 py-3 rounded text-sm text-white font-medium" style={{ background: '#8B5CF6' }}>Flex Item 2</div>
            <div className="px-4 py-3 rounded text-sm text-white font-medium" style={{ background: '#06B6D4' }}>Flex Item 3</div>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--text-muted)' }}>Items line up horizontally in a row</p>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-8">
        <CodeBlock
          code={`<div class="container">           <!-- Parent (flex container) -->
  <div class="item">Item 1</div>   <!-- Child (flex item) -->
  <div class="item">Item 2</div>   <!-- Child (flex item) -->
  <div class="item">Item 3</div>   <!-- Child (flex item) -->
</div>

.container {
  display: flex;     /* Enables flexbox */
  gap: 10px;         /* Optional: space between items */
}

.item {
  /* These are now flex items */
}`}
        />
      </motion.div>
    </Section>
  );
}
