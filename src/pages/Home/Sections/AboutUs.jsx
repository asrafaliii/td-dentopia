import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom"; 
import { FiAward, FiCheckCircle, FiArrowRight, FiShield, FiStar } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import doctorImg from "../../../assets/about.png"; 

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const { pathname } = useLocation();
  const sectionRef = useRef(null);
  const APPOINTMENT_LINK = "https://fdc.dentzobd.com/appointment";

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        gsap.set(".reveal-item", { opacity: 0, y: 30 });

        gsap.fromTo(".about-image", 
          { scale: 1.3 }, 
          {
            scale: 1,
            duration: 1.5,
            ease: "expo.out",
            scrollTrigger: {
              trigger: ".about-image-container",
              start: "top 85%",
            }
          }
        );

        gsap.to(".reveal-item", {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-content",
            start: "top 80%",
            onEnter: () => ScrollTrigger.refresh()
          }
        });

      }, sectionRef);

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <section ref={sectionRef} className="relative py-28 bg-[#fdfdfd] overflow-hidden">
      {/* Decorative Background Text */}
      <div className="absolute top-10 left-10 text-[15vw] font-black text-slate-100/30 select-none pointer-events-none">
        SURGEON
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Left: Image Frame */}
          <div className="relative w-full lg:w-1/2 about-image-container">
            <div className="relative z-10 rounded-[60px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] aspect-[4/5] bg-slate-200">
              <img
                // src={doctorImg}
                src="https://res.cloudinary.com/dro6y5qla/image/upload/v1775730010/530878091_122121521456924527_441994811122286466_n_1_ehjc6e.jpg"
                className="about-image w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
                alt="Dentopia Dental Team"
              />
            </div>
            
            {/* Experience Card - Updated with Correct BMDC */}
            <div className="reveal-item absolute -bottom-8 -left-8 z-20 bg-white p-8 rounded-[40px] shadow-2xl border border-slate-50 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-3xl bg-sky-500 flex items-center justify-center text-white shadow-xl shadow-sky-200">
                   <FiShield size={32} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 mb-1">BMDC Reg. No</p>
                  <p className="text-xl font-black text-slate-900 tracking-tighter">4480 / 3846 / 3820</p>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[90%] border border-sky-100 rounded-[80px] -rotate-6 -z-0" />
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 about-content space-y-8">
            <div className="reveal-item">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[2px] w-12 bg-sky-500"></span>
                <span className="text-sky-600 font-black tracking-[5px] text-xs uppercase">Practitioner Details</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-6">
                Precision In <br />
                <span className="italic font-light text-sky-500">Every Procedure.</span>
              </h2>
              <p className="text-lg text-slate-500 font-medium">
                Dentopia is dedicated to advanced, ethical, and patient-centered dental care with expert clinical precision.
              </p>
            </div>

            {/* Profile Card - Updated Info */}
            <div className="reveal-item bg-white rounded-[45px] p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 group hover:border-sky-200 transition-all duration-500">
              <div className="mb-6">
                <h3 className="text-3xl font-black text-slate-900 mb-1">DENTOPIA EXPERT TEAM</h3>
                <p className="text-sky-600 font-bold tracking-tight uppercase text-sm">Oral Surgery, Pediatric Dentistry, Prosthodontics</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 text-slate-700 font-bold text-sm">
                  <div className="mt-1 w-5 h-5 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 shrink-0"><FiCheckCircle /></div>
                  <p>Dr. Raisul Islam - BDS (Dhaka Dental College), BCS (Health)</p>
                </div>
                <div className="flex items-start gap-3 text-slate-700 font-bold text-sm">
                  <div className="mt-1 w-5 h-5 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 shrink-0"><FiAward /></div>
                  <p>Dr. Dibarati Bhattacharya - Assistant Professor, Dhaka Dental College <br/> <span className="text-slate-400 font-medium">BDS, BCS (Health), MS in Pediatric Dentistry</span></p>
                </div>
                <div className="flex items-start gap-3 text-slate-700 font-bold text-sm">
                  <div className="mt-1 w-5 h-5 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 shrink-0"><FiStar /></div>
                  <p>Dr. Md Mamunur Rashid - Assistant Professor, Dhaka Dental College and BMU <br/> <span className="text-slate-400 font-medium">BDS, BCS (Health), MS in Prosthodontics</span></p>
                </div>
              </div>

              {/* Appointment Link Integrated */}
              <div className="pt-2">
                <a 
                  href={APPOINTMENT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 bg-slate-900 text-white px-8 py-4 rounded-[20px] font-black text-xs uppercase tracking-widest hover:bg-sky-600 transition-all shadow-xl"
                >
                  Book Appointment
                  <FiArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;