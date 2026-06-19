import { useState } from 'react';
import type { CSSProperties } from 'react';
import { Section } from '@/components/Section';
import { CodeBlock } from '@/components/CodeBlock';
import { motion } from 'framer-motion';

const ITEM_COLORS = ['#6366F1', '#8B5CF6', '#06B6D4', '#EC4899', '#F59E0B', '#10B981', '#EF4444', '#3B82F6'];
type FlexDirectionValue = NonNullable<CSSProperties['flexDirection']>;
type JustifyContentValue = NonNullable<CSSProperties['justifyContent']>;
type AlignItemsValue = NonNullable<CSSProperties['alignItems']>;
type FlexWrapValue = NonNullable<CSSProperties['flexWrap']>;
type AlignContentValue = NonNullable<CSSProperties['alignContent']>;

const FLEX_DIRECTIONS: FlexDirectionValue[] = ['row', 'row-reverse', 'column', 'column-reverse'];
const JUSTIFY_CONTENT_VALUES: JustifyContentValue[] = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'];
const ALIGN_ITEMS_VALUES: AlignItemsValue[] = ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'];
const FLEX_WRAP_VALUES: FlexWrapValue[] = ['nowrap', 'wrap', 'wrap-reverse'];
const ALIGN_CONTENT_VALUES: AlignContentValue[] = ['stretch', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around'];

export function FlexboxPlayground() {
  const [flexDirection, setFlexDirection] = useState<FlexDirectionValue>('row');
  const [justifyContent, setJustifyContent] = useState<JustifyContentValue>('flex-start');
  const [alignItems, setAlignItems] = useState<AlignItemsValue>('stretch');
  const [flexWrap, setFlexWrap] = useState<FlexWrapValue>('nowrap');
  const [alignContent, setAlignContent] = useState<AlignContentValue>('stretch');
  const [gap, setGap] = useState(8);
  const [itemCount, setItemCount] = useState(5);
  const [containerHeight, setContainerHeight] = useState(280);

  const cssCode = `.container {
  display: flex;
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex-wrap: ${flexWrap};
  align-content: ${alignContent};
  gap: ${gap}px;
  height: ${containerHeight}px;
}`;

  const controlGroup = <T extends string | number>(
    label: string,
    value: T,
    options: readonly T[],
    setter: (v: T) => void,
    accent?: string
  ) => (
    <div className="mb-4">
      <label className="block text-[11px] font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'var(--text-muted)', fontFamily: 'Outfit, sans-serif' }}>{label}</label>
      <div className="flex flex-wrap gap-1">
        {options.map((opt) => (
          <button key={opt} onClick={() => setter(opt)}
            className="px-2.5 py-1 rounded-md text-[11px] font-medium transition-all duration-150"
            style={{
              background: value === opt ? (accent || 'var(--accent-primary)') : 'var(--bg-elevated)',
              color: value === opt ? 'white' : 'var(--text-secondary)',
              border: value === opt ? 'none' : '1px solid var(--border-subtle)',
            }}>
            {opt}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <Section id="playground">
      <h2 className="text-3xl md:text-[40px] font-semibold leading-tight mb-4" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}>
        Interactive Flexbox Playground
      </h2>
      <p className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
        This is where the magic happens. Control every flexbox property below and watch the container respond in real-time. Try different combinations to see how they work together!
      </p>

      <motion.div initial={{ opacity: 0, y: 30, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="rounded-2xl border overflow-hidden" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-subtle)' }}>
        <div className="flex flex-col xl:flex-row">
          {/* Controls Panel */}
          <div className="xl:w-[320px] border-b xl:border-b-0 xl:border-r p-4 md:p-5 overflow-y-auto max-h-[500px]" style={{ borderColor: 'var(--border-subtle)' }}>
            {controlGroup('flex-direction', flexDirection, FLEX_DIRECTIONS, setFlexDirection)}
            {controlGroup('justify-content', justifyContent, JUSTIFY_CONTENT_VALUES, setJustifyContent)}
            {controlGroup('align-items', alignItems, ALIGN_ITEMS_VALUES, setAlignItems, '#EC4899')}
            {controlGroup('flex-wrap', flexWrap, FLEX_WRAP_VALUES, setFlexWrap)}
            {controlGroup('align-content', alignContent, ALIGN_CONTENT_VALUES, setAlignContent, '#10B981')}

            {/* Sliders */}
            <div className="mb-4">
              <label className="block text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)', fontFamily: 'Outfit, sans-serif' }}>gap: {gap}px</label>
              <input type="range" min="0" max="30" value={gap} onChange={(e) => setGap(Number(e.target.value))} className="w-full accent-[var(--accent-primary)]" />
            </div>
            <div className="mb-4">
              <label className="block text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)', fontFamily: 'Outfit, sans-serif' }}>items: {itemCount}</label>
              <input type="range" min="1" max="8" value={itemCount} onChange={(e) => setItemCount(Number(e.target.value))} className="w-full accent-[var(--accent-primary)]" />
            </div>
            <div className="mb-2">
              <label className="block text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)', fontFamily: 'Outfit, sans-serif' }}>height: {containerHeight}px</label>
              <input type="range" min="120" max="400" step="20" value={containerHeight} onChange={(e) => setContainerHeight(Number(e.target.value))} className="w-full accent-[var(--accent-primary)]" />
            </div>
          </div>

          {/* Preview */}
          <div className="flex-1 p-4 md:p-6 flex flex-col" style={{ background: 'var(--bg-primary)' }}>
            <div className="border-2 border-dashed rounded-xl p-3 transition-all duration-300 flex-1"
              style={{
                display: 'flex',
                flexDirection,
                justifyContent,
                alignItems,
                flexWrap,
                alignContent,
                gap: `${gap}px`,
                minHeight: `${containerHeight}px`,
                borderColor: 'var(--accent-primary)',
                background: 'var(--bg-secondary)',
              }}>
              {ITEM_COLORS.slice(0, itemCount).map((c, i) => (
                <div key={i}
                  className="min-w-[60px] min-h-[50px] px-4 py-3 rounded-lg text-white font-bold text-sm flex items-center justify-center flex-shrink-0 shadow-sm"
                  style={{ background: c }}>
                  {i + 1}
                </div>
              ))}
            </div>
            {/* CSS Output */}
            <div className="mt-4">
              <CodeBlock code={cssCode} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick reference */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }} className="mt-10">
        <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}>Property Cheat Sheet</h3>
        <div className="overflow-x-auto rounded-xl border" style={{ borderColor: 'var(--border-subtle)' }}>
          <table className="w-full text-sm" style={{ color: 'var(--text-secondary)' }}>
            <thead>
              <tr className="border-b" style={{ borderColor: 'var(--border-medium)', background: 'var(--bg-elevated)' }}>
                <th className="text-left py-3 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>Property</th>
                <th className="text-left py-3 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>Goes On</th>
                <th className="text-left py-3 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>What It Does</th>
              </tr>
            </thead>
            <tbody style={{ background: 'var(--bg-secondary)' }}>
              {[
                { prop: 'display: flex', on: 'Parent', what: 'Enables flexbox layout' },
                { prop: 'flex-direction', on: 'Parent', what: 'Sets main axis direction' },
                { prop: 'justify-content', on: 'Parent', what: 'Aligns items along main axis' },
                { prop: 'align-items', on: 'Parent', what: 'Aligns items along cross axis' },
                { prop: 'flex-wrap', on: 'Parent', what: 'Allows items to wrap' },
                { prop: 'align-content', on: 'Parent', what: 'Aligns wrapped lines' },
                { prop: 'flex-grow', on: 'Child', what: 'How much to grow' },
                { prop: 'flex-shrink', on: 'Child', what: 'How much to shrink' },
                { prop: 'flex-basis', on: 'Child', what: 'Starting size' },
                { prop: 'order', on: 'Child', what: 'Visual order' },
                { prop: 'align-self', on: 'Child', what: 'Override align-items' },
              ].map((row) => (
                <tr key={row.prop} className="border-b" style={{ borderColor: 'var(--border-subtle)' }}>
                  <td className="py-2.5 px-4 font-mono text-xs" style={{ color: row.on === 'Parent' ? 'var(--accent-primary)' : '#EC4899' }}>{row.prop}</td>
                  <td className="py-2.5 px-4">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded" style={{ background: row.on === 'Parent' ? 'rgba(99,102,241,0.1)' : 'rgba(236,72,153,0.1)', color: row.on === 'Parent' ? 'var(--accent-primary)' : '#EC4899' }}>{row.on}</span>
                  </td>
                  <td className="py-2.5 px-4 text-xs">{row.what}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </Section>
  );
}
