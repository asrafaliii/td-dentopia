import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowRight, FiActivity } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesGrid() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (loading || services.length === 0) return;

    // Small delay to let the browser finish rendering the DOM
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        
        // This is the batch animation logic
        ScrollTrigger.batch(".service-item", {
          onEnter: (elements) => {
            gsap.fromTo(elements, 
              { opacity: 0, y: 50 }, 
              { 
                opacity: 1, 
                y: 0, 
                stagger: 0.15, 
                duration: 1, 
                ease: "power4.out",
                overwrite: true 
              }
            );
          },
          start: "top 90%",
          once: true
        });

        // Crucial: Tell ScrollTrigger to recalculate everything
        ScrollTrigger.refresh();
      }, containerRef);

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, [loading, services]);

  if (loading) return (
    <div className="py-24 text-center">
      <p className="text-primary font-bold tracking-widest animate-pulse uppercase">Loading Quality Care...</p>
    </div>
  );

  return (
    <section ref={containerRef} className="bg-[#fcfcfc] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <FiActivity /> 2026 Dental Standards
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Complete <span className="text-primary italic font-light">Care Menu.</span>
          </h2>
        </div>

        {/* The Grid - No 'opacity-0' class here, GSAP handles it */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-item bg-white rounded-[32px] overflow-hidden border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onLoad={() => ScrollTrigger.refresh()} // Refresh when each image loads
                />
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h4 className="text-2xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h4>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3">
                  {service.description}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                  <button
                    onClick={() => navigate(`/services/${service.slug}`)}
                    className="flex items-center gap-2 font-bold text-sm text-slate-900 hover:text-primary transition-all uppercase tracking-wider"
                  >
                    Details <FiArrowRight />
                  </button>
                  <span className="text-[10px] font-black text-slate-300">0{index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}