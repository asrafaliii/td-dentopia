import React, { useEffect, useRef, useState } from "react";
import { FiPhone, FiMapPin, FiArrowRight, FiNavigation, FiX } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BranchLocations = () => {
  const containerRef = useRef(null);
  const [activeMap, setActiveMap] = useState(null); // ম্যাপ কন্ট্রোল করার জন্য state

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".branch-card", { opacity: 0, y: 40 });

      gsap.to(".branch-card", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const branches = [
    {
      name: "Dentopia",
      tagline: "We care for your smile!",
      phones: ["+8801815667766", "+8801815667766"],
      address: "House 04, Road 10, DIT Project, Merul Badda, Dhaka, Bangladesh",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.5925454508956!2d90.4289586!3d23.761905099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b80a90000007%3A0xac7dddd5ce0df7b!2sFatiha%20Dental%20Clinic!5e0!3m2!1sen!2sbd!4v1771046238998!5m2!1sen!2sbd",
      color: "border-sky-500",
      bg: "bg-sky-50",
      text: "text-sky-600"
    },
    {
      name: "Dhaka Royal Care",
      tagline: "Diagnostic Centre and Hospital",
      phones: ["+8801815667766", "+8801815667766"],
      address: "House 04, Road 10, DIT Project, Merul Badda, Dhaka, Bangladesh",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.587186219548!2d90.4160017!3d23.7620961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7003de8bf61%3A0x3e88b5e7f35f6054!2sDhaka%20Royal%20Care%20Diagnostic%20%26%20Hospital!5e0!3m2!1sen!2sbd!4v1771046381410!5m2!1sen!2sbd",
      color: "border-slate-800",
      bg: "bg-slate-50",
      text: "text-slate-800"
    },
  ];

  return (
    <section ref={containerRef} className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-8 bg-sky-500"></span>
              <span className="text-sky-600 font-black tracking-[4px] text-[10px] uppercase">Locations</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter">
              Where to <span className="italic font-light text-sky-500">Find Us.</span>
            </h2>
          </div>
        </div>

        {/* Branch Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {branches.map((branch, idx) => (
            <div 
              key={idx} 
              className={`branch-card group relative p-10 rounded-[45px] border-2 ${branch.color} transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 bg-white`}
            >
              <div className="relative">
                <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-1">{branch.name}</h3>
                <p className="text-sky-600 font-bold text-[11px] uppercase tracking-widest mb-10">{branch.tagline}</p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className={`mt-1 w-10 h-10 shrink-0 rounded-2xl ${branch.bg} flex items-center justify-center ${branch.text}`}>
                      <FiMapPin size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Clinic Address</p>
                      <p className="text-slate-800 font-bold leading-snug">{branch.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className={`mt-1 w-10 h-10 shrink-0 rounded-2xl ${branch.bg} flex items-center justify-center ${branch.text}`}>
                      <FiPhone size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Contact Number</p>
                      <div className="flex flex-col gap-1">
                        {branch.phones.map((phone, i) => (
                          <a key={i} href={`tel:${phone.replace(/\+/g, '')}`} className="text-slate-950 font-black text-xl hover:text-sky-600 transition-colors">
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
                  {/* বাটন যা ক্লিক করলে activeMap সেট হবে */}
                  <button 
                    onClick={() => setActiveMap(branch.mapEmbed)}
                    className="flex items-center gap-2 font-black text-[11px] uppercase tracking-widest text-slate-900 hover:text-sky-600 transition-colors"
                  >
                    View on Map <FiNavigation className="animate-pulse" />
                  </button>
                  <div className={`w-10 h-10 rounded-full ${branch.bg} flex items-center justify-center`}>
                    <FiArrowRight className={branch.text} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Map Modal (Pop-up) --- */}
      {activeMap && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          {/* Backdrop (কালো আবছা অংশ) */}
          <div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setActiveMap(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative w-full max-w-5xl aspect-video bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 animate-in zoom-in duration-300">
            <button 
              onClick={() => setActiveMap(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 p-2 rounded-full text-slate-900 hover:bg-sky-500 hover:text-white transition-all shadow-lg"
            >
              <FiX size={24} />
            </button>
            <iframe 
              src={activeMap}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default BranchLocations;