import React, { useState, useRef } from "react";
import SectionTitle from "../../../components/SectionTitle";

const BeforeAfterSlider = ({ before, after, subtitle = "Transformation", title = "Visible Results" }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  return (
    <section className="py-20 bg-[#fcfcfc]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Updated Modern Section Title */}
        <SectionTitle
          subtitle={subtitle} 
          title={title} 
          align="center" 
          className="mb-16"
        />

        {/* Slider Container */}
        <div 
          ref={containerRef}
          className="relative w-full aspect-[4/3] md:aspect-video rounded-[2.5rem] md:rounded-[4rem] overflow-hidden cursor-ew-resize shadow-2xl border-[8px] border-white select-none"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* After Image */}
          <img 
            src={after} 
            alt="After treatment" 
            className="absolute inset-0 w-full h-full object-cover" 
          />

          {/* Before Image (Clipped) */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img 
              src={before} 
              alt="Before treatment" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
          </div>

          {/* Draggable Divider */}
          <div 
            className="absolute inset-y-0 w-1.5 bg-white shadow-[0_0_20px_rgba(0,0,0,0.4)] flex items-center justify-center pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
              <span className="text-xl font-black">⇄</span>
            </div>
          </div>

          {/* Labels with Glassmorphism */}
          <div className="absolute top-8 left-8 bg-black/30 backdrop-blur-md text-white px-6 py-2 rounded-2xl text-[10px] font-black tracking-[0.2em] uppercase border border-white/20">
            Before
          </div>
          <div className="absolute top-8 right-8 bg-primary/70 backdrop-blur-md text-white px-6 py-2 rounded-2xl text-[10px] font-black tracking-[0.2em] uppercase border border-white/20">
            After
          </div>
        </div>

      </div>
    </section>
  );
};

export default BeforeAfterSlider;