import { useState } from 'react';
import type { CSSProperties } from 'react';
import { Section } from '@/components/Section';
import { CodeBlock } from '@/components/CodeBlock';
import { motion } from 'framer-motion';

const ALIGN_SELF_VALUES: CSSProperties['alignSelf'][] = ['auto', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline'];

export function ChildPropertiesSection() {
  const [order1, setOrder1] = useState(0);
  const [order2, setOrder2] = useState(0);
  const [order3, setOrder3] = useState(0);
  const [order4, setOrder4] = useState(0);
  const [selfAlign, setSelfAlign] = useState<CSSProperties['alignSelf']>('center');

  const items = [
    { id: 1, color: '#6366F1', order: order1, setOrder: setOrder1, label: 'A' },
    { id: 2, color: '#8B5CF6', order: order2, setOrder: setOrder2, label: 'B' },
    { id: 3, color: '#06B6D4', order: order3, setOrder: setOrder3, label: 'C' },
    { id: 4, color: '#EC4899', order: order4, setOrder: setOrder4, label: 'D' },
  ];

  const sortedItems = [...items].sort((a, b) => a.order - b.order);

  return (
    <Section id="child-properties" className="section-gradient-1">
      <h2 className="text-3xl md:text-[40px] font-semibold leading-tight mb-4" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}>
        Child Properties
      </h2>
      <p className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
        While most flexbox properties go on the parent, a few go directly on the <strong>children</strong> to control their individual behavior. <code className="font-mono text-sm">order</code> changes visual order, and <code className="font-mono text-sm">align-self</code> overrides the parent's alignment for a single item.
      </p>

      {/* Order Interactive */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="rounded-2xl border p-6 mb-8" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-subtle)' }}>
        <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}>order — Change the visual order</h3>
        <p className="text-sm mb-5" style={{ color: 'var(--text-secondary)' }}>By default all items have order: 0. Lower numbers appear first. Negative values are allowed! This only changes visual order — not the DOM order.</p>

        <div className="flex gap-3 mb-6 h-[60px]">
          {sortedItems.map((item) => (
            <div key={item.id} className="flex-1 rounded-lg flex items-center justify-center text-white font-bold text-lg transition-all duration-300"
              style={{ background: item.color }}>
              {item.label} <span className="text-xs ml-1 opacity-70">(order:{item.order})</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
          {items.map((item) => (
            <div key={item.id}>
              <label className="text-xs font-medium block mb-1" style={{ color: 'var(--text-muted)' }}>
                Item {item.label} order: {item.order}
              </label>
              <input type="range" min="-2" max="5" step="1" value={item.order} onChange={(e) => item.setOrder(Number(e.target.value))} className="w-full accent-[var(--accent-primary)]" />
            </div>
          ))}
        </div>

        <CodeBlock code={`.item-a { order: ${order1}; }   /* Original: A */
.item-b { order: ${order2}; }   /* Original: B */
.item-c { order: ${order3}; }   /* Original: C */
.item-d { order: ${order4}; }   /* Original: D */`} />
      </motion.div>

      {/* align-self Interactive */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
        className="rounded-2xl border p-6" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-subtle)' }}>
        <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}>align-self — Override alignment for one item</h3>
        <p className="text-sm mb-5" style={{ color: 'var(--text-secondary)' }}>While <code className="font-mono text-sm">align-items</code> controls all children, <code className="font-mono text-sm">align-self</code> lets a single child override that alignment. The pink item below has its own align-self value.</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {ALIGN_SELF_VALUES.map((v) => (
            <button key={v} onClick={() => setSelfAlign(v)}
              className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200"
              style={{ background: selfAlign === v ? '#EC4899' : 'var(--bg-elevated)', color: selfAlign === v ? 'white' : 'var(--text-secondary)', border: selfAlign === v ? 'none' : '1px solid var(--border-subtle)' }}>
              {v}
            </button>
          ))}
        </div>

        <div className="border rounded-lg p-3 flex gap-3 h-[160px]" style={{ alignItems: 'center', background: 'var(--bg-primary)', borderColor: 'var(--border-medium)' }}>
          <div className="w-16 py-4 rounded flex items-center justify-center text-white text-sm font-bold" style={{ background: '#6366F1', height: '50%' }}>1</div>
          <div className="w-16 py-4 rounded flex items-center justify-center text-white text-sm font-bold transition-all duration-300" style={{ background: '#EC4899', alignSelf: selfAlign, height: selfAlign === 'stretch' ? 'auto' : '40%' }}>
            ME
          </div>
          <div className="w-16 py-4 rounded flex items-center justify-center text-white text-sm font-bold" style={{ background: '#8B5CF6', height: '60%' }}>3</div>
          <div className="w-16 py-4 rounded flex items-center justify-center text-white text-sm font-bold" style={{ background: '#06B6D4', height: '50%' }}>4</div>
        </div>
        <p className="text-xs mt-3 mb-4" style={{ color: 'var(--text-muted)' }}>Other items use align-items: center. The pink "ME" item uses align-self: {selfAlign}.</p>

        <CodeBlock code={`.container {
  display: flex;
  align-items: center;   /* All items centered */
}

.special-item {
  align-self: ${selfAlign};  /* This item overrides */
}`} />
      </motion.div>
    </Section>
  );
}
