import { useState } from "react";
import { FiPlus, FiMinus, FiPhoneCall } from "react-icons/fi"; // FiPhoneCall যোগ করা হয়েছে
import Title from "../../../components/SectionTitle";

const faqs = [
  {
    question: "What treatments does Dentopia specialize in?",
    answer:
      "Dentopia specializes in advanced Oral & Maxillofacial Surgery, Pediatric Dentistry, Prosthodontics, cosmetic smile design, and modern restorative dental care.",
  },
  {
    question: "How can I book an appointment at Dentopia?",
    answer:
      "You can easily book an appointment by calling 01815-667766 or via our WhatsApp link. We recommend booking at least 24 hours in advance.",
  },
  {
    question: "Is Dentopia child-friendly?",
    answer:
      "Yes, absolutely! We have a specialized environment designed to make children feel safe and relaxed during their dental checkups.",
  },
  {
    question: "What should I do in case of a dental emergency?",
    answer:
      "For urgent cases like severe toothache, broken teeth, or swelling, please call our Priority Line immediately. We prioritize emergency patients during our working hours.",
  },
  {
    question: "Do you offer teeth whitening or veneers?",
    answer:
      "Yes, we offer premium Cosmetic Dentistry services including Laser Teeth Whitening, Porcelain Veneers, and full Smile Makeovers to enhance your natural look.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0); 

  const PHONE_NUMBER = "01815-667766";

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Header & Context */}
          <div className="lg:col-span-5 space-y-8 sticky top-32">
            <div className="space-y-6">
              <Title
                subtitle="Patient Support"
                title="Common Queries & Answers"
                align="start"
              />
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                Everything you need to know about our dental procedures and patient care at Dentopia.
              </p>
            </div>
            
            {/* Help Card */}
            <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 space-y-5">
              <h4 className="text-xl font-black text-slate-900 tracking-tight">Still have questions?</h4>
              <p className="text-sm text-slate-500 font-medium">Our support team is available from Sat - Thu (10 AM - 9 PM).</p>
              
              {/* Clickable Support Link */}
              <a 
                href={`tel:${PHONE_NUMBER.replace(/-/g, '')}`} 
                className="inline-flex items-center gap-3 bg-white border border-slate-200 px-6 py-3 rounded-2xl text-sky-600 font-black text-sm uppercase tracking-widest hover:bg-sky-600 hover:text-white hover:border-sky-600 transition-all shadow-sm active:scale-95 group"
              >
                <FiPhoneCall className="text-lg group-hover:animate-bounce" />
                Contact: {PHONE_NUMBER}
              </a>
            </div>
          </div>

          {/* Right Side: FAQ Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((item, index) => (
              <div
                key={index}
                className={`group rounded-[32px] border transition-all duration-500 ${
                  activeIndex === index 
                  ? "bg-white border-sky-100 shadow-2xl shadow-sky-50" 
                  : "bg-transparent border-slate-100 hover:border-slate-200"
                }`}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="flex items-center justify-between w-full p-8 text-left focus:outline-none"
                >
                  <span className={`text-lg lg:text-xl font-black tracking-tight transition-colors duration-300 ${
                    activeIndex === index ? "text-sky-600" : "text-slate-900"
                  }`}>
                    {item.question}
                  </span>
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                    activeIndex === index ? "bg-sky-500 text-white rotate-180" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
                  }`}>
                    {activeIndex === index ? <FiMinus /> : <FiPlus />}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}>
                  <div className="px-8 pb-8 text-slate-500 font-medium leading-relaxed">
                    <div className="pt-2 border-t border-slate-50">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;