import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from "../constants";
import logo from "../assets/logo.png";
import { 
  FiFacebook, 
  FiYoutube, 
  FiInstagram, 
  FiArrowUpRight, 
  FiPhone, 
  FiMail, 
  FiMapPin,
  FiClock,
  FiLinkedin // LinkedIn আইকন যোগ করা হয়েছে
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const serviceLinks = navLinks.find(link => link.id === "services")?.submenu || [];
  const half = Math.ceil(serviceLinks.length / 2);
  const firstHalf = serviceLinks.slice(0, half);
  const secondHalf = serviceLinks.slice(half);

  const socialLinks = [
    { id: 1, icon: <FiFacebook size={18} />, link: "https://www.facebook.com/FatihaDentalClinic", color: "hover:bg-[#1877F2]", label: "Facebook" },
    { id: 2, icon: <FaWhatsapp size={18} />, link: "https://wa.me/8801815667766", color: "hover:bg-[#25D366]", label: "WhatsApp" },
    { id: 3, icon: <FiLinkedin size={18} />, link: "https://www.linkedin.com/company/fatiha-dental-clinic", color: "hover:bg-[#0A66C2]", label: "LinkedIn" }, // LinkedIn যোগ করা হয়েছে
    { id: 4, icon: <FiYoutube size={18} />, link: "https://youtube.com/@FatihaDentalCare", color: "hover:bg-[#FF0000]", label: "YouTube" }
  ];

  return (
    <footer className="bg-[#05080d] text-slate-400 pt-28 pb-12 px-6 lg:px-12 relative overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Column 1: Brand Identity */}
          <div className="lg:col-span-4 space-y-10">
            <Link to="/" className="inline-block transition-transform hover:scale-105">
              <img src={logo} alt="Dentopia" className="h-14 brightness-0 invert opacity-90" />
            </Link>
            <p className="text-base leading-relaxed text-slate-500 font-medium max-w-sm">
              Experience the next generation of dental care with <span className="text-white">Dentopia</span>. Combining surgical precision with compassionate care in Merul Badda.
            </p>
            
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[4px] text-sky-500/60 mb-5">Follow Us</span>
              <div className="flex items-center gap-3 mt-3">
                {socialLinks.map((social) => (
                  <a 
                    key={social.id}
                    href={social.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all duration-500 group ${social.color} hover:border-transparent hover:-translate-y-2`}
                  >
                    <span className="group-hover:scale-110 transition-transform">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Treatments Grid */}
          <div className="lg:col-span-5">
            <h4 className="text-white text-[11px] font-black uppercase tracking-[4px] mb-10 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-sky-500"></span> Specialities
            </h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <ul className="space-y-4 text-[13px] font-bold">
                {firstHalf.map((service, index) => (
                  <li key={index}>
                    <Link to={`/services/${service.id}`} className="hover:text-sky-400 transition-colors flex items-center gap-2 group">
                      <span className="w-0 h-[1px] bg-sky-500 group-hover:w-3 transition-all"></span>
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4 text-[13px] font-bold">
                {secondHalf.map((service, index) => (
                  <li key={index}>
                    <Link to={`/services/${service.id}`} className="hover:text-sky-400 transition-colors flex items-center gap-2 group">
                      <span className="w-0 h-[1px] bg-sky-500 group-hover:w-3 transition-all"></span>
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Instant Contact */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-white text-[11px] font-black uppercase tracking-[4px] mb-10 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-sky-500"></span> Headquarters
            </h4>
            
            <div className="space-y-5">
              {/* Call Links */}
              <div className="flex flex-col gap-3">
                <a href="tel:01815667766" className="flex items-center gap-4 p-4 rounded-[20px] bg-white/5 border border-white/5 hover:border-sky-500/30 hover:bg-white/[0.08] transition-all group">
                  <div className="w-9 h-9 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all">
                    <FiPhone size={16} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase text-slate-500 tracking-widest">Primary Contact</p>
                    <span className="font-black text-white text-md tracking-tight">01815-667766</span>
                  </div>
                </a>
                <a href="tel:01815667766" className="flex items-center gap-4 p-4 rounded-[20px] bg-white/5 border border-white/5 hover:border-sky-500/30 hover:bg-white/[0.08] transition-all group">
                  <div className="w-9 h-9 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all">
                    <FiPhone size={16} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase text-slate-500 tracking-widest">Emergency</p>
                    <span className="font-black text-white text-md tracking-tight">01815-667766</span>
                  </div>
                </a>
              </div>
              
              {/* Address */}
              <div className="flex items-start gap-4 px-2">
                <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 shrink-0">
                  <FiMapPin size={18} />
                </div>
                <div>
                    <p className="text-[9px] font-black uppercase text-slate-500 tracking-widest mb-1">Clinic Address</p>
                    <span className="leading-relaxed text-[13px] font-medium text-slate-300 block">
                     House 04, Road 10, DIT Project, <br />
                     Merul Badda, Dhaka, Bangladesh.
                  </span>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 px-2">
                <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 shrink-0">
                  <FiClock size={18} />
                </div>
                <div>
                    <p className="text-[9px] font-black uppercase text-slate-500 tracking-widest mb-1">Visiting Hours</p>
                    <span className="text-[13px] font-medium text-slate-300">Sat - Thu: 10AM - 9PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-[10px] uppercase tracking-[3px] font-black text-slate-600">
              &copy; {new Date().getFullYear()} Dentopia
            </p>
            <p className="text-[10px] uppercase tracking-[3px] font-black text-sky-500/40 hidden md:block">
              Dentopia Dental Team
            </p>
          </div>
          
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[3px] font-black text-slate-600">
            <span className="opacity-50">Developed by</span>
            <a href="https://www.threeaid.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-sky-400 flex items-center gap-2 transition-all group">
              Threeaid <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;