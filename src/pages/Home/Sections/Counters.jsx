import React from "react";
import { FaTooth, FaAward, FaHeartbeat } from "react-icons/fa";
import { BiHappyBeaming } from "react-icons/bi";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Counters() {
  const counterData = [
    { icon: <FaTooth />, end: 2500, label: "Precision Surgeries", suffix: "+" },
    { icon: <BiHappyBeaming />, end: 1800, label: "Happy Smiles", suffix: "+" },
    { icon: <FaAward />, end: 14752, label: "BMDC Registered", suffix: "" },
    { icon: <FaHeartbeat />, end: 9, label: "Years of Trust", suffix: "+" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-sky-50 rounded-full blur-[120px] -ml-40 -mt-40 opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Title & Subtitle Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-[2px] bg-sky-500"></span>
            <span className="text-sky-600 font-black tracking-[5px] text-[10px] uppercase">
              Our Achievements
            </span>
            <span className="w-8 h-[2px] bg-sky-500"></span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-tight">
            Excellence in <span className="text-sky-500 italic font-light">Numbers.</span>
          </h2>
          <p className="text-slate-500 font-medium max-w-xl mx-auto text-sm md:text-base">
            Providing world-class dental care with a proven track record of clinical success and patient satisfaction.
          </p>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {counterData.map((item, index) => (
            <CounterCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CounterCard({ icon, end, label, suffix, index }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div 
      ref={ref}
      className={`relative p-8 rounded-[40px] bg-white border border-slate-100 transition-all duration-1000 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] 
      ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex flex-col items-center text-center group">
        <div className="w-16 h-16 rounded-2xl bg-slate-50 text-sky-500 flex items-center justify-center text-3xl mb-6 group-hover:bg-sky-500 group-hover:text-white group-hover:rotate-[15deg] transition-all duration-500">
          {icon}
        </div>

        <div className="space-y-1">
          <h3 className="text-4xl font-black text-slate-900 tracking-tighter">
            {inView ? <CountUp end={end} duration={3} separator="," /> : "0"}
            <span className="text-sky-500">{suffix}</span>
          </h3>
          <p className="text-[11px] font-black uppercase tracking-[3px] text-slate-400 mt-2">
            {label}
          </p>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-slate-100 group-hover:w-16 group-hover:bg-sky-500 transition-all duration-500" />
      </div>
    </div>
  );
}