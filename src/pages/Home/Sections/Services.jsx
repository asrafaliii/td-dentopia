import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesGrid() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const containerRef = useRef(null);

  // 1. Fetch Data
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data.slice(0, 6));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch services:", err);
        setLoading(false);
      });
  }, []);

  // 2. Optimized GSAP Animation
  useEffect(() => {
    if (loading || services.length === 0) return;

    const ctx = gsap.context(() => {
      // Elements gulo render howar sathe sathe opacity set kora
      gsap.set(".service-card", { opacity: 0, y: 30 });

      ScrollTrigger.batch(".service-card", {
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "expo.out",
            overwrite: true,
          }),
        start: "top 88%",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [loading, services]);

  if (loading) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-sky-100 border-t-sky-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <section ref={containerRef} className="py-28 bg-[#fcfcfc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Modern Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-[2px] bg-sky-500"></span>
              <span className="text-sky-600 font-black tracking-[5px] text-[10px] uppercase">
                Premium Care
              </span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter">
              Bespoke Dental <br />
              <span className="italic font-light text-sky-500">Solutions.</span>
            </h2>
          </div>
          
          <button 
            onClick={() => navigate("/services")}
            className="group relative px-8 py-4 bg-white border border-slate-200 rounded-full overflow-hidden transition-all hover:border-sky-500"
          >
            <span className="relative z-10 flex items-center gap-3 text-slate-900 font-bold text-sm group-hover:text-sky-600 transition-colors">
              View All Services <FiArrowUpRight className="group-hover:rotate-45 transition-transform" />
            </span>
          </button>
        </div>

        {/* The Modern Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id || index}
              onClick={() => navigate(`/services/${service.slug}`)}
              className="service-card group cursor-pointer relative bg-white rounded-[40px] p-2 border border-slate-100 hover:border-sky-100 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden rounded-[34px] bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating Badge */}
                <div className="absolute top-5 right-5 w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-slate-900 shadow-xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <FiArrowUpRight size={22} />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 pb-10">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-black text-slate-900 leading-tight group-hover:text-sky-600 transition-colors">
                    {service.title}
                  </h4>
                  <span className="text-[10px] font-black text-slate-300 tracking-widest mt-2">
                    0{index + 1}
                  </span>
                </div>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2 font-medium">
                  {service.description || "Advancing oral health through precision surgical techniques and aesthetic mastery."}
                </p>

                {/* Bottom Bar */}
                <div className="flex items-center gap-4">
                  <div className="h-[1px] flex-1 bg-slate-100 group-hover:bg-sky-100 transition-colors" />
                  <span className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 group-hover:text-sky-600 transition-colors">
                    Explore
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}