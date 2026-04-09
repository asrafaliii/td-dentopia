import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useLayoutEffect, useRef } from "react";
import PageHeader from '../../components/PageHeader';
import { FiCheckCircle, FiCalendar, FiArrowLeft, FiShield, FiPhone } from 'react-icons/fi';
import gsap from "gsap";

export default function ServiceDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const mainRef = useRef(null);

  // ১. ডেটা ফেচিং এবং স্ক্রল রিসেট
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setLoading(true);
    
    // API বা JSON থেকে ডেটা কল করা
    fetch("/services.json")
      .then(res => res.json())
      .then(data => {
        const found = data.find(item => item.slug === slug);
        // যদি স্লাগ না মিলে তবে ম্যানুয়ালি চেক করা
        setService(found);
      })
      .catch(err => console.error("Fetch Error:", err))
      .finally(() => setLoading(false));
  }, [slug]);

  // ২. হাই-পারফরম্যান্স GSAP এনিমেশন
  useLayoutEffect(() => {
    if (!loading && service) {
      let ctx = gsap.context(() => {
        // এলিমেন্টগুলোকে নিচ থেকে ভেসে উঠানো
        gsap.from(".reveal-up", {
          y: 60,
          opacity: 0,
          stagger: 0.1,
          duration: 1.2,
          ease: "expo.out",
        });

        // ইমেজের জন্য প্যারালাক্স জুম ইফেক্ট
        gsap.from(".hero-image", {
          scale: 1.2,
          duration: 2,
          ease: "power2.out"
        });
      }, mainRef);

      return () => ctx.revert();
    }
  }, [loading, service]);

  if (loading) return (
    <div className="h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-sky-100 border-t-sky-500 rounded-full animate-spin" />
        <p className="text-[10px] font-black uppercase tracking-[4px] text-slate-400">Loading Excellence</p>
      </div>
    </div>
  );

  if (!service) return (
    <div className="h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">Service Not Found</h2>
      <p className="text-slate-500 mb-8 max-w-sm">The treatment you are looking for might have been moved or renamed.</p>
      <button 
        onClick={() => navigate('/services')} 
        className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-sky-600 transition-all"
      >
        <FiArrowLeft /> Back to Services
      </button>
    </div>
  );

  return (
    <div className="bg-[#fdfdfd] min-h-screen pb-32" ref={mainRef}>
      <PageHeader title={service.title} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-[-100px] relative z-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* লেফট সাইড: ট্রিটমেন্ট ডিটেইলস */}
          <div className="w-full lg:w-2/3">
            {/* মেইন ইমেজ কার্ড */}
            <div className="reveal-up relative rounded-[60px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] mb-16 bg-slate-200 aspect-[16/9]">
              <img
                src={service.image}
                alt={service.title}
                className="hero-image w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>

            <div className="reveal-up space-y-8">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-12 bg-sky-500"></span>
                <span className="text-sky-600 font-black tracking-[5px] text-xs uppercase">Premium Treatment</span>
              </div>
              
              <h2 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">
                Mastering the Art of <br />
                <span className="italic font-light text-sky-500">{service.title}</span>
              </h2>
              
              <p className="text-xl text-slate-500 leading-relaxed font-medium">
                {service.description}
              </p>
            </div>

            {/* সাব-ট্রিটমেন্ট গ্রিড */}
            {service.sub_treatments && (
              <div className="reveal-up mt-20">
                <h3 className="text-3xl font-black text-slate-900 mb-10 tracking-tight flex items-center gap-4">
                  Clinical Specializations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {service.sub_treatments.map((item, index) => (
                    <div key={index} className="bg-white p-10 rounded-[45px] border border-slate-50 hover:border-sky-100 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-500/5 group">
                      <div className="w-14 h-14 bg-sky-50 text-sky-500 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500">
                        <FiCheckCircle size={28} />
                      </div>
                      <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* রাইট সাইড: স্টিকি সাইডবার */}
          <div className="w-full lg:w-1/3">
            <div className="reveal-up lg:sticky lg:top-32 space-y-8">
              
              {/* বুকিং কার্ড */}
              <div className="bg-slate-900 p-12 rounded-[50px] shadow-2xl relative overflow-hidden group">
                <div className="relative z-10 space-y-6">
                  <h3 className="text-3xl font-black text-white tracking-tighter leading-tight">Book Your Consultation</h3>
                  <p className="text-slate-400 font-medium">Schedule a priority slot with the Dentopia expert team for personalized care.</p>
                  
                  <button 
                    onClick={() => navigate('/contact')}
                    className="w-full bg-sky-500 hover:bg-white hover:text-slate-900 text-white py-6 rounded-[24px] font-black text-sm uppercase tracking-widest transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3"
                  >
                    <FiCalendar size={20} /> Reserve My Slot
                  </button>
                </div>
                {/* ডেকোরেটিভ সার্কেল */}
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-sky-500/10 rounded-full blur-3xl group-hover:bg-sky-500/20 transition-all duration-700" />
              </div>

              {/* ট্রাস্ট ব্যাজ কার্ড */}
              <div className="bg-white p-8 rounded-[40px] border border-slate-100 flex items-center gap-6 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="w-16 h-16 rounded-3xl bg-sky-50 flex items-center justify-center text-sky-600 border border-sky-100">
                  <FiShield size={32} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-1">Guaranteed Safety</h4>
                  <p className="text-sm text-slate-400 font-bold tracking-tight">BMDC Reg No: 11435</p>
                </div>
              </div>

              {/* হেল্পলাইন */}
              <div className="p-8 rounded-[40px] bg-sky-50/50 border border-sky-100 flex flex-col items-center text-center space-y-3">
                <FiPhone className="text-sky-500 mb-2" size={24} />
                <p className="text-[10px] font-black uppercase tracking-[3px] text-slate-400">Emergency Support</p>
                <h4 className="text-xl font-black text-slate-900 tracking-tight">01815-667766</h4>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}