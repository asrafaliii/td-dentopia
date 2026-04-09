import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiAward } from "react-icons/fi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Team = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".team-card", { opacity: 0, y: 40 });

      gsap.to(".team-card", {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const teamMembers = [
    {
      name: "Dr. Raisul Islam",
      role: "BDS (Dhaka Dental College), BCS (Health)",
      experience: "MS in Oral & Maxillofacial Surgery, BMU",
      reg: "BMDC Reg: 4480",
      image: "https://res.cloudinary.com/dro6y5qla/image/upload/v1775729804/3_eo5jex.png",
      isLead: true,
    },
    {
      name: "Dr. Dibarati Bhattacharya",
      role: "BDS (Dhaka Dental College), BCS (Health)",
      experience: "Assistant Professor, Dhaka Dental College | MS in Pediatric Dentistry",
      reg: "BMDC Reg: 3846",
      image: "https://res.cloudinary.com/dro6y5qla/image/upload/v1775729804/2_sfdqau.png",
    },
    {
      name: "Dr. Md Mamunur Rashid",
      role: "BDS (Dhaka Dental College), BCS (Health)",
      experience: "Assistant Professor, Dhaka Dental College and BMU | MS in Prosthodontics",
      reg: "BMDC Reg: 3820",
      image: "https://res.cloudinary.com/dro6y5qla/image/upload/v1775729804/1_ai7qxb.png",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-12 bg-sky-500"></span>
            <span className="text-sky-600 font-black tracking-[4px] text-[10px] uppercase">Dentopia Specialists</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tighter">
            Meet Our Dental <span className="italic font-light text-sky-500">Experts.</span>
          </h2>
        </div>

        {/* Team Grid - 3 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="team-card group relative bg-slate-50 rounded-[40px] overflow-hidden border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-100 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden bg-slate-200">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                />
                
                {/* Lead Badge (Award Icon) */}
                {member.isLead && (
                  <div className="absolute top-5 left-5 bg-sky-600 text-white p-2 rounded-xl shadow-lg z-10">
                    <FiAward size={18} />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8 space-y-3">
                <div>
                  <h3 className="text-xl font-black text-slate-900 leading-tight group-hover:text-sky-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sky-600 font-bold text-[10px] uppercase tracking-widest mt-1">
                    {member.role}
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-slate-500 text-xs font-medium leading-relaxed line-clamp-3">
                    {member.experience}
                  </p>
                </div>

                {member.reg && (
                  <div className="pt-4 flex items-center justify-between border-t border-slate-200/50">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">BMDC Verified</span>
                    <span className="text-slate-900 font-black text-[9px] uppercase px-2 py-1 bg-white rounded-md border border-slate-200">
                      {member.reg.split(':')[1]}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;