import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiActivity, FiShield, FiCpu, FiPlus } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const TrustPillars = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bento-card", {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-[#fcfcfc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Content */}
        <div className="mb-16 text-center lg:text-left flex flex-col lg:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-slate-900 leading-[0.85] mb-4">
              WHY <span className="text-primary italic font-light">NABILA</span> <br /> 
              SMILE DESIGN?
            </h2>
            <p className="text-gray-500 font-medium max-w-md">
              Combining world-class surgical expertise with the most advanced 2026 dental technology in the heart of Dhaka.
            </p>
          </div>
          <div className="hidden lg:block text-right">
             <div className="text-6xl font-thin text-slate-200">/01</div>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto lg:h-[600px]">
          
          {/* Card 1: Surgery Focus */}
          <div className="bento-card md:col-span-7 bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-xl transition-shadow group">
            <div className="flex justify-between items-start">
              <div className="p-4 bg-primary/10 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                <FiActivity size={32} />
              </div>
              <FiPlus className="text-slate-300" size={24} />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Precision Surgery</h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                Specialized in complex dental implants and oral surgeries with a focus on <strong>minimally invasive</strong> techniques and rapid recovery.
              </p>
            </div>
          </div>

          {/* Card 2: Technology */}
          <div className="bento-card md:col-span-5 bg-slate-900 p-10 rounded-[40px] text-white flex flex-col justify-between overflow-hidden relative group">
            <div className="relative z-10 flex justify-between items-start">
               <div className="p-4 bg-white/10 rounded-2xl">
                 <FiCpu size={32} className="text-primary" />
               </div>
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Digital Future</h3>
              <p className="text-white/60">
                100% digital workflow featuring 3D intraoral scanning and AI-assisted treatment planning.
              </p>
            </div>
            {/* Abstract Decorative Element */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/40 transition-all" />
          </div>

          {/* Card 3: Patient Safety */}
          <div className="bento-card md:col-span-5 bg-primary p-10 rounded-[40px] text-white flex flex-col justify-between">
             <FiShield size={40} className="mb-8" />
             <div>
                <h3 className="text-2xl font-bold mb-2">Global Standards</h3>
                <p className="text-white/80">Strict sterilization protocols following international healthcare guidelines.</p>
             </div>
          </div>

          {/* Card 4: Location/Trust */}
          <div className="bento-card md:col-span-7 bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm flex items-center gap-8 group">
             <div className="hidden sm:block w-32 h-32 rounded-full overflow-hidden border-4 border-slate-50 flex-shrink-0">
                <img src="https://i.pravatar.cc/150?img=32" alt="Trust" className="w-full h-full object-cover" />
             </div>
             <div>
                <h3 className="text-2xl font-bold text-slate-900">Patient-First Philosophy</h3>
                <p className="text-gray-500">Every smile is a unique masterpiece. We don't just treat teeth; we design confidence.</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustPillars;