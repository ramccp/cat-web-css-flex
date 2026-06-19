import { useState } from 'react';
import { Section } from '@/components/Section';
import { CodeBlock } from '@/components/CodeBlock';
import { Callout } from '@/components/Callout';
import { motion } from 'framer-motion';

export function NetflixSection() {
  const [showImage, setShowImage] = useState(true);
  const [overlayOpacity, setOverlayOpacity] = useState(70);
  const [showContent, setShowContent] = useState(true);
  const [gradientDir, setGradientDir] = useState<'toTop' | 'toBottom'>('toTop');
  const [activeTab, setActiveTab] = useState<'controls' | 'code'>('controls');

  const opacityVal = overlayOpacity / 100;
  const gradientCSS = gradientDir === 'toTop'
    ? `linear-gradient(to top, rgba(0,0,0,${Math.min(opacityVal * 1.2, 0.95)}) 0%, rgba(0,0,0,${opacityVal * 0.6}) 50%, transparent 100%)`
    : `linear-gradient(to bottom, rgba(0,0,0,${Math.min(opacityVal * 1.2, 0.95)}) 0%, rgba(0,0,0,${opacityVal * 0.6}) 50%, transparent 100%)`;

  const fullCSS = `.netflix-hero {
  background-image:
    ${gradientDir === 'toTop' ? 'linear-gradient(to top,' : 'linear-gradient(to bottom,'}
      rgba(0, 0, 0, ${Math.min(opacityVal * 1.2, 0.95).toFixed(2)}) 0%,
      rgba(0, 0, 0, ${(opacityVal * 0.6).toFixed(2)}) 50%,
      transparent 100%
    ),
    ${showImage ? "url('hero-bg.jpg')" : 'none'};
  background-size: cover;
  background-position: center;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}`;

  return (
    <Section id="netflix">
      <h2
        className="text-3xl md:text-[40px] font-semibold leading-tight mb-4"
        style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}
      >
        Practice: Netflix Landing Page
      </h2>
      <p className="text-base md:text-lg leading-relaxed mb-10 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
        Let's put everything together. The Netflix landing page hero is one of the most recognized designs on the web. It combines a background image with a gradient overlay — and you now have all the tools to build it.
      </p>

      {/* Main Interactive Demo */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl border overflow-hidden"
        style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-subtle)' }}
      >
        <div className="flex flex-col lg:flex-row">
          {/* Left: Controls & Code */}
          <div className="lg:w-[40%] border-b lg:border-b-0 lg:border-r p-5 md:p-6" style={{ borderColor: 'var(--border-subtle)' }}>
            {/* Tabs */}
            <div className="flex gap-1 mb-6 p-1 rounded-xl" style={{ background: 'var(--bg-elevated)' }}>
              {(['controls', 'code'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 capitalize"
                  style={{
                    background: activeTab === tab ? 'var(--accent-primary)' : 'transparent',
                    color: activeTab === tab ? 'white' : 'var(--text-muted)',
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === 'controls' ? (
              <div className="space-y-5">
                {/* Background image toggle */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)', fontFamily: 'Outfit, sans-serif' }}>
                    Background Image
                  </label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setShowImage(true)}
                      className="flex-1 py-2 px-4 rounded-lg text-sm transition-all duration-200"
                      style={{
                        background: showImage ? 'var(--accent-primary)' : 'var(--bg-primary)',
                        color: showImage ? 'white' : 'var(--text-muted)',
                        border: showImage ? 'none' : '1px solid var(--border-subtle)',
                      }}
                    >
                      Show Image
                    </button>
                    <button
                      onClick={() => setShowImage(false)}
                      className="flex-1 py-2 px-4 rounded-lg text-sm transition-all duration-200"
                      style={{
                        background: !showImage ? 'var(--accent-primary)' : 'var(--bg-primary)',
                        color: !showImage ? 'white' : 'var(--text-muted)',
                        border: !showImage ? 'none' : '1px solid var(--border-subtle)',
                      }}
                    >
                      Solid Color
                    </button>
                  </div>
                </div>

                {/* Overlay opacity */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)', fontFamily: 'Outfit, sans-serif' }}>
                    Overlay Opacity: {overlayOpacity}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={overlayOpacity}
                    onChange={(e) => setOverlayOpacity(Number(e.target.value))}
                    className="w-full accent-[var(--accent-primary)]"
                  />
                </div>

                {/* Content overlay toggle */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)', fontFamily: 'Outfit, sans-serif' }}>
                    Content Overlay
                  </label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setShowContent(true)}
                      className="flex-1 py-2 px-4 rounded-lg text-sm transition-all duration-200"
                      style={{
                        background: showContent ? 'var(--accent-primary)' : 'var(--bg-primary)',
                        color: showContent ? 'white' : 'var(--text-muted)',
                        border: showContent ? 'none' : '1px solid var(--border-subtle)',
                      }}
                    >
                      Show Content
                    </button>
                    <button
                      onClick={() => setShowContent(false)}
                      className="flex-1 py-2 px-4 rounded-lg text-sm transition-all duration-200"
                      style={{
                        background: !showContent ? 'var(--accent-primary)' : 'var(--bg-primary)',
                        color: !showContent ? 'white' : 'var(--text-muted)',
                        border: !showContent ? 'none' : '1px solid var(--border-subtle)',
                      }}
                    >
                      Hide Content
                    </button>
                  </div>
                </div>

                {/* Gradient direction */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)', fontFamily: 'Outfit, sans-serif' }}>
                    Gradient Direction
                  </label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setGradientDir('toTop')}
                      className="flex-1 py-2 px-4 rounded-lg text-sm transition-all duration-200"
                      style={{
                        background: gradientDir === 'toTop' ? 'var(--accent-primary)' : 'var(--bg-primary)',
                        color: gradientDir === 'toTop' ? 'white' : 'var(--text-muted)',
                        border: gradientDir === 'toTop' ? 'none' : '1px solid var(--border-subtle)',
                      }}
                    >
                      to top
                    </button>
                    <button
                      onClick={() => setGradientDir('toBottom')}
                      className="flex-1 py-2 px-4 rounded-lg text-sm transition-all duration-200"
                      style={{
                        background: gradientDir === 'toBottom' ? 'var(--accent-primary)' : 'var(--bg-primary)',
                        color: gradientDir === 'toBottom' ? 'white' : 'var(--text-muted)',
                        border: gradientDir === 'toBottom' ? 'none' : '1px solid var(--border-subtle)',
                      }}
                    >
                      to bottom
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <CodeBlock code={fullCSS} />
            )}
          </div>

          {/* Right: Live Preview */}
          <div className="lg:w-[60%] p-5 md:p-8 flex items-center justify-center" style={{ background: 'var(--bg-primary)' }}>
            <div
              className="w-full aspect-video rounded-xl overflow-hidden relative flex items-center justify-center"
              style={{
                backgroundImage: showImage ? `${gradientCSS}, url(/assets/netflix-hero-bg.jpg)` : gradientCSS,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: showImage ? undefined : 'var(--bg-elevated)',
                transition: 'all 0.3s ease',
              }}
            >
              {showContent && (
                <div className="relative z-10 text-center px-6 max-w-md">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-3 text-white/70">
                    Netflix Original
                  </p>
                  <h3
                    className="text-lg md:text-2xl font-bold text-white mb-3 leading-tight"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    UNLIMITED MOVIES, TV SHOWS, AND MORE.
                  </h3>
                  <p className="text-white/80 text-sm">
                    Watch anywhere. Cancel anytime.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Step-by-step Breakdown */}
      <div className="mt-12 space-y-8">
        {[
          {
            num: 1,
            title: 'Set your background image',
            text: 'Use background-image with background-size: cover and background-position: center to fill the hero area.',
            code: `.hero {
  background-image: url('hero-bg.jpg');
  background-size: cover;
  background-position: center;
  height: 80vh;
}`,
          },
          {
            num: 2,
            title: 'Add the gradient overlay',
            text: "The trick is layering: put a linear-gradient BEFORE the image URL, separated by a comma. The gradient sits on top of the image.",
            code: `.hero {
  background-image:
    linear-gradient(to top, rgba(0,0,0,0.8), transparent),
    url('hero-bg.jpg');
  background-size: cover;
  background-position: center;
}`,
          },
          {
            num: 3,
            title: 'Control the fade direction',
            text: 'Use to top to fade from dark at the bottom to transparent at the top. This ensures text at the bottom stays readable.',
            code: `/* Dark at bottom, transparent at top */
background-image:
  linear-gradient(to top,
    rgba(0,0,0,0.8) 0%,
    rgba(0,0,0,0.4) 50%,
    transparent 100%
  ),
  url('hero-bg.jpg');`,
          },
          {
            num: 4,
            title: 'Add your content',
            text: 'Place your text content inside the hero div. The dark overlay ensures white text is always readable, even over busy images.',
            code: `<div class="hero">
  <h1>Your Title Here</h1>
  <p>Your subtitle here</p>
</div>`,
          },
        ].map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: i * 0.1 }}
            className="flex gap-6"
          >
            <div
              className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
              style={{ background: 'var(--accent-primary)', color: 'white', fontFamily: 'Outfit, sans-serif' }}
            >
              {step.num}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}>
                {step.title}
              </h3>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                {step.text}
              </p>
              <CodeBlock code={step.code} />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Callout>
          <strong style={{ color: 'var(--text-primary)' }}>Your turn!</strong> Try changing the gradient direction, adjusting the opacity, or swapping the background image. Once you're comfortable, try building this on your own in a new HTML file. The best way to learn is by doing.
        </Callout>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 text-center"
      >
        <div className="w-[100px] h-px mx-auto mb-8" style={{ background: 'var(--border-medium)' }} />
        <p className="text-base italic" style={{ color: 'var(--text-secondary)' }}>
          You've now mastered CSS backgrounds. From hero sections to parallax effects to stunning gradients — you have the tools to bring any design to life.
        </p>
      </motion.div>
    </Section>
  );
}
