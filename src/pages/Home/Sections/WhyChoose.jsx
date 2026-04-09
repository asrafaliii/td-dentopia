import React, { useEffect, useRef } from 'react';
import { FiCheckCircle, FiShield, FiHeart, FiStar, FiZap } from 'react-icons/fi';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import whyImg from "../../../assets/why.jpeg"; 

gsap.registerPlugin(ScrollTrigger);

const WhyChoose = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // ১. ব্রাউজারকে ডোম রেন্ডার করার জন্য সামান্য সময় দেওয়া
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        
        // ২. টাইটেল অ্যানিমেশন
        gsap.fromTo(".why-header", 
          { y: 30, opacity: 0 }, 
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: ".why-header",
              start: "top 90%",
              toggleActions: "play none none none"
            }
          }
        );

        // ৩. ফিচার কার্ড অ্যানিমেশন (সবচেয়ে বেশি সমস্যা এখানে হয়)
        gsap.fromTo(".feature-card", 
          { x: -20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.6,
            ease: "power1.out",
            scrollTrigger: {
              trigger: ".features-container",
              start: "top 85%",
              onEnter: () => ScrollTrigger.refresh() // ফোর্স রিফ্রেশ
            }
          }
        );

        // ৪. ইমেজের জন্য প্যারালাক্স ইফেক্ট
        gsap.fromTo(".why-image-wrapper", 
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: ".why-image-wrapper",
              start: "top 80%",
            }
          }
        );

      }, sectionRef);

      // ৫. গ্লোবাল রিফ্রেশ যাতে ক্যালকুলেশন ঠিক থাকে
      ScrollTrigger.refresh();

      return () => ctx.revert();
    }, 100); 

    return () => clearTimeout(timer);
  }, []);

  const features = [
    { title: "Expert Team", desc: "Dentopia specialists focus on precision, ethics, and patient safety.", icon: <FiZap />, color: "text-sky-500", bgColor: "bg-sky-50" },
    { title: "Advanced Safety", desc: "BMDC sterilization protocols and modern tools.", icon: <FiShield />, color: "text-blue-600", bgColor: "bg-blue-50" },
    { title: "Pain Management", desc: "Painless techniques for a comfortable experience.", icon: <FiHeart />, color: "text-rose-500", bgColor: "bg-rose-50" },
    { title: "Aesthetic Vision", desc: "Designing smiles that fit your unique personality.", icon: <FiStar />, color: "text-amber-500", bgColor: "bg-amber-50" }
  ];

  return (
    <section ref={sectionRef} className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="why-header space-y-6">
              <span className="text-sky-600 text-[10px] font-black uppercase tracking-[3px] bg-sky-50 px-4 py-2 rounded-full">Dentopia</span>
              <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter">
                Crafting <span className="text-sky-500 italic font-light">Smiles.</span>
              </h2>
            </div>

            <div className="features-container space-y-4">
              {features.map((item, index) => (
                <div key={index} className="feature-card flex gap-6 p-5 rounded-[28px] border border-slate-50 hover:bg-slate-50 transition-colors">
                  <div className={`shrink-0 w-12 h-12 ${item.bgColor} ${item.color} rounded-2xl flex items-center justify-center text-xl`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 why-image-wrapper">
            <div className="rounded-[60px] overflow-hidden shadow-2xl">
              <img src="https://plus.unsplash.com/premium_photo-1674368232044-31d75efc09fa?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Dental Care" className="w-full h-[600px] object-cover" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;