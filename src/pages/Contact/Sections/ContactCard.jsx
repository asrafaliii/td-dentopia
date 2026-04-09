import React, { useEffect, useRef } from "react";
// FiLinkedin যোগ করা হয়েছে
import { FiPhone, FiMapPin, FiExternalLink, FiFacebook, FiYoutube, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactCard = () => {
  const containerRef = useRef(null);
  const whatsappLink = "https://wa.me/8801815667766?text=Hello%20Dentopia,%20I%20would%20like%20to%20book%20an%20appointment.";
  const dentopiaMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29207.999985511273!2d90.42329600000001!3d23.7830144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a3ead9d819%3A0x2e06ed6040d5ccc2!2sDENTOPIA!5e0!3m2!1sen!2sbd!4v1775730231109!5m2!1sen!2sbd";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".reveal-card", { opacity: 0, y: 60 });

      gsap.to(".reveal-card", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const socialLinks = [
    { id: 1, icon: <FiFacebook />, link: "https://www.facebook.com/FatihaDentalClinic" },
    { id: 2, icon: <FaWhatsapp />, link: "https://wa.me/8801815667766" },
    { id: 3, icon: <FiLinkedin />, link: "https://www.linkedin.com/company/fatiha-dental-clinic" }, // LinkedIn যোগ করা হয়েছে
    { id: 4, icon: <FiYoutube />, link: "https://youtube.com/@FatihaDentalCare" },
  ];

  return (
    <div ref={containerRef} className="bg-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* --- Highlighted Booking Header --- */}
        <div className="reveal-card mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Ready for a healthier smile?
          </h2>
          <p className="mt-2 text-slate-500 font-medium italic">Call or WhatsApp us for instant support.</p>
        </div>

        {/* --- 3 Card Contact Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Phone Card */}
          <div className="reveal-card bg-slate-50 p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
            <div className="w-14 h-14 rounded-2xl bg-sky-600 text-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <FiPhone size={24} />
            </div>
            <h3 className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 mb-3">Direct Call</h3>
            <p className="text-xl font-black text-slate-900 tracking-tight">+8801815667766</p>
            <p className="text-xl font-black text-slate-900 tracking-tight">+8801815667766</p>
          </div>

          {/* WhatsApp Card (Highlighted) */}
          <div className="reveal-card bg-sky-50 p-10 rounded-[40px] border-2 border-sky-400 shadow-2xl md:scale-110 transition-all duration-500 z-10 group relative overflow-hidden">
            <FaWhatsapp className="absolute -right-4 -bottom-4 text-sky-200/50" size={120} />
            <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform">
              <FaWhatsapp size={24} />
            </div>
            <h3 className="text-[10px] font-black uppercase tracking-[3px] text-sky-600 mb-3">WhatsApp Support</h3>
            <p className="text-lg font-black text-slate-900 leading-snug mb-6">
              Chat directly with Dentopia for appointment and consultation.
            </p>
            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noreferrer"
              className="inline-block bg-sky-600 text-white text-[10px] font-black uppercase tracking-[2px] px-6 py-3 rounded-xl hover:bg-slate-900 transition-colors"
            >
              WhatsApp Now
            </a>
          </div>

          {/* Location Card */}
          <div className="reveal-card bg-slate-50 p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
            <div className="w-14 h-14 rounded-2xl bg-blue-500 text-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <FiMapPin size={24} />
            </div>
            <h3 className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 mb-3">Our Chamber</h3>
            <p className="text-lg font-black text-slate-900 leading-snug">
              House 04, Road 10, DIT Project, Merul Badda, Dhaka, Bangladesh
            </p>
          </div>
        </div>

        {/* --- Map & Social Studio Section --- */}
        <div className="reveal-card relative bg-[#0a0f1a] rounded-[60px] p-8 lg:p-16 overflow-hidden shadow-2xl border border-white/5">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-600/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-2/5 space-y-10 text-center lg:text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20">
                  <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                  <span className="text-sky-400 text-[10px] font-black uppercase tracking-[3px]">Clinic Studio</span>
                </div>
                <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[0.85]">
                  We care for <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 italic font-light">
                    your smile.
                  </span>
                </h2>
                <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-sm mx-auto lg:mx-0 pt-4">
                  Visit Dentopia for a modern and painless dental experience. 
                </p>
              </div>

              {/* Action Buttons - WhatsApp */}
              <div className="flex justify-center lg:justify-start">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center justify-center gap-4 bg-sky-500 text-white px-10 py-5 rounded-[22px] font-black text-xs uppercase tracking-[2px] transition-all hover:bg-white hover:text-slate-950 shadow-lg shadow-sky-500/20"
                >
                  <span>WhatsApp Us</span>
                  <FiExternalLink className="transition-transform group-hover:scale-125" />
                </a>
              </div>

              {/* Social Icons */}
              <div className="space-y-6 pt-4">
                <p className="text-[10px] font-black uppercase tracking-[4px] text-slate-500">Digital Presence</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.id}
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 hover:border-sky-500/50 hover:bg-sky-500/10"
                    >
                      <span className="relative z-10 text-white group-hover:text-sky-400 transition-colors transform group-hover:scale-110 duration-500">
                        {React.cloneElement(social.icon, { size: 22 })}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Map Column */}
            <div className="w-full lg:w-3/5">
              <div className="relative p-2 rounded-[50px] bg-gradient-to-br from-white/10 to-transparent border border-white/10">
                <div className="h-[400px] lg:h-[500px] w-full rounded-[40px] overflow-hidden relative group">
                  <iframe
                    src={dentopiaMap}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="grayscale-[0.4] group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
                    title="Clinic Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;