import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/sections/HeroSection';
import { WhyFlexboxSection } from '@/sections/WhyFlexboxSection';
import { DisplayFlexSection } from '@/sections/DisplayFlexSection';
import { FlexDirectionSection } from '@/sections/FlexDirectionSection';
import { AxisSection } from '@/sections/AxisSection';
import { JustifyContentSection } from '@/sections/JustifyContentSection';
import { AlignItemsSection } from '@/sections/AlignItemsSection';
import { FlexWrapSection } from '@/sections/FlexWrapSection';
import { AlignContentSection } from '@/sections/AlignContentSection';
import { FlexBasisGrowShrinkSection } from '@/sections/FlexBasisGrowShrinkSection';
import { ChildPropertiesSection } from '@/sections/ChildPropertiesSection';
import { FlexboxPlayground } from '@/sections/FlexboxPlayground';

function App() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <Navigation />
      <main>
        <HeroSection />
        <WhyFlexboxSection />
        <DisplayFlexSection />
        <FlexDirectionSection />
        <AxisSection />
        <JustifyContentSection />
        <AlignItemsSection />
        <FlexWrapSection />
        <AlignContentSection />
        <FlexBasisGrowShrinkSection />
        <ChildPropertiesSection />
        <FlexboxPlayground />
      </main>
      <Footer />

      {/* Brand watermark — fixed bottom-right, low opacity, non-interactive */}
      <img
        src="/assets/cat-logo.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none fixed bottom-6 right-10 z-40 h-10 w-auto object-contain opacity-15 select-none"
      />
    </div>
  );
}

export default App;
