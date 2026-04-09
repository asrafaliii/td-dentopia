import React, { useEffect, useRef } from "react";
import { FiPhone, FiClock, FiMail, FiArrowUpRight } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactInfo() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // শুরুতে এলিমেন্টগুলো লুকিয়ে রাখা
      gsap.set(".info-card", { y: 40, opacity: 0 });

      // স্ক্রল ট্রিগার অ্যানিমেশন
      gsap.to(".info-card", {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const infoData = [
    {
      icon: <FiPhone size={22} />,
      label: "Priority Care",
      value: "01815-667766",
      sub: "Emergency & General Inquiry",
      link: "tel:01815667766",
      accent: "bg-sky-500",
    },
    {
      icon: <FiClock size={22} />,
      label: "Clinic Hours",
      value: "10 AM – 09 PM",
      sub: "Saturday – Thursday",
      link: "#",
      accent: "bg-blue-600",
    },
    {
      icon: <FiMail size={22} />,
      label: "Official Support",
      value: "care@fatihadesign.com",
      sub: "Expert Dental Consultation",
      link: "mailto:care@fatihadesign.com",
      accent: "bg-indigo-600",
    },
  ];

  return (
    <div className="bg-white py-16 lg:py-24 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {infoData.map((item, index) => (
            <div key={index} className="info-card group relative">
              {/* background glass effect on hover */}
              <div className="absolute inset-0 bg-slate-50 rounded-[40px] scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 -z-0" />
              
              <a 
                href={item.link} 
                className="relative z-10 flex flex-col p-10 h-full border border-slate-100 rounded-[40px] transition-all duration-500 group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-sky-500/5"
              >
                {/* Icon Box */}
                <div className={`w-16 h-16 rounded-3xl ${item.accent} text-white flex items-center justify-center mb-10 shadow-lg shadow-sky-200 transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110`}>
                  {item.icon}
                </div>

                {/* Text Content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[4px] font-black text-slate-400">
                      {item.label}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                      <FiArrowUpRight className="text-slate-900" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-2xl font-black text-slate-900 tracking-tighter leading-none">
                      {item.value}
                    </h4>
                    <p className="text-sm text-slate-500 font-medium">
                      {item.sub}
                    </p>
                  </div>
                </div>

                {/* Bottom Decorative Line */}
                <div className="mt-auto pt-8">
                  <div className="h-[2px] w-12 bg-slate-100 group-hover:w-full group-hover:bg-sky-500 transition-all duration-700" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}