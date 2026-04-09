import React, { useState, useEffect, useRef } from "react";
import { FiPhone, FiCheckCircle, FiActivity } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import gsap from "gsap";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const root = useRef();

  const PHONE_NUMBER = "01815-667766";
  const WHATSAPP_LINK = "https://wa.me/8801815667766?text=Hello%20Dentopia,%20I%20would%20like%20to%20book%20an%20appointment.";

  const slides = [
    {
      img: "https://res.cloudinary.com/dro6y5qla/image/upload/v1775730010/530878091_122121521456924527_441994811122286466_n_1_ehjc6e.jpg",
      tag: "Advanced Dental Care",
      title: "Perfect Smiles At Dentopia.",
    },
    {
      img: "https://res.cloudinary.com/dro6y5qla/image/upload/v1775730009/530383108_122121521498924527_2174816076924682166_n_gym21r.jpg",
      tag: "Modern Technology",
      title: "Precision Meets Comfort.",
    },
    {
      img: "https://res.cloudinary.com/dro6y5qla/image/upload/v1775730009/529861076_122121521420924527_3803538027661719695_n_xpvqxc.jpg",
      tag: "Trusted Dental Team",
      title: "Advanced Care For Every Smile.",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".bg-image", 
        { scale: 1.2, filter: "brightness(0.3) blur(10px)" }, 
        { scale: 1, filter: "brightness(0.5) blur(0px)", duration: 3, ease: "power2.out" }
      );

      const tl = gsap.timeline();
      tl.from(".char", {
        y: 100,
        opacity: 0,
        rotate: 2,
        stagger: 0.15,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5
      })
      .from(".ui-fade", {
        opacity: 0,
        y: 20,
        stagger: 0.25,
        duration: 1.2,
        ease: "power2.out"
      }, "-=1");
    }, root);
    return () => ctx.revert();
  }, [index]);

  return (
    <section ref={root} className="relative h-screen w-full bg-slate-950 overflow-hidden flex items-center pt-20">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          key={slides[index].img}
          src={slides[index].img} 
          className="bg-image w-full h-full object-cover transition-all duration-1000"
          alt="Dentopia"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Text Content */}
          <div className="lg:col-span-7">
            <div className="ui-fade flex items-center gap-4 mb-6">
              <span className="h-[2px] w-12 bg-sky-500"></span>
              <span className="text-sky-400 uppercase tracking-[4px] text-[10px] font-black">
                {slides[index].tag}
              </span>
            </div>

            <h1 className="text-[11vw] lg:text-[5.5vw] leading-[0.9] font-black text-white mb-10 tracking-tighter">
                {slides[index].title.split(" ").map((word, i) => (
                  <span key={i} className="inline-block overflow-hidden mr-4">
                     <span className="char inline-block">{word}</span>
                  </span>
                ))}
            </h1>

            {/* Action Buttons */}
            <div className="ui-fade flex flex-wrap gap-4 items-center">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#25D366] text-white rounded-full font-bold text-sm flex items-center gap-2 hover:bg-[#128C7E] transition-all active:scale-95 shadow-xl shadow-green-500/20"
                >
                  <FaWhatsapp size={20} />
                  WhatsApp
                </a>

                <a 
                 href={`tel:${PHONE_NUMBER.replace(/-/g, '')}`} 
                 className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-sky-600 transition-all text-white"
                >
                  <FiPhone size={18} />
                </a>
            </div>
          </div>

          {/* Right Side Info Card */}
          <div className="lg:col-span-5 hidden lg:block">
             <div className="ui-fade bg-slate-900/40 backdrop-blur-3xl border border-white/10 p-10 rounded-[40px] shadow-2xl">
                <div className="flex justify-between items-start mb-10">
                   <div>
                      {/* Changed to Expert Dentistry */}
                      <h3 className="text-white text-2xl font-black mb-1 leading-tight">Expert <br/> Dentistry</h3>
                      <p className="text-sky-400 text-xs font-bold tracking-widest uppercase mt-2">Merul Badda Branch</p>
                   </div>
                   <div className="bg-sky-600/20 p-3 rounded-2xl text-sky-500">
                      <FiActivity size={32}/>
                   </div>
                </div>
                
                <div className="space-y-8">
                   {/* Changed to Years of Trust: 9+ */}
                   <div className="flex flex-col gap-1 border-l-2 border-sky-600/30 pl-6">
                      <span className="text-white/50 text-xs font-bold uppercase tracking-widest">Years of Trust</span>
                      <span className="text-white text-3xl font-black">9+</span>
                   </div>
                   
                   <div className="flex flex-col gap-1 border-l-2 border-sky-600/30 pl-6">
                      <span className="text-white/50 text-xs font-bold uppercase tracking-widest">Availability</span>
                      <span className="text-white text-lg font-bold italic tracking-wide">Sat - Thu (10am-9pm)</span>
                   </div>

                   <div className="pt-4 flex items-center gap-3 text-sky-400 font-bold text-sm">
                      <div className="bg-sky-400/10 p-1.5 rounded-full">
                        <FiCheckCircle />
                      </div>
                      <span>Specialized Laser Dentistry</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 lg:left-20 lg:translate-x-0 flex items-center gap-4 z-20">
          <div className="flex gap-3 items-center">
            {slides.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-700 ${index === i ? "w-16 bg-sky-500" : "w-6 bg-white/20"}`}
              />
            ))}
          </div>
          <span className="text-white/30 font-black text-[10px] tracking-widest uppercase">0{index + 1}</span>
      </div>

    </section>
  );
};

export default Hero;