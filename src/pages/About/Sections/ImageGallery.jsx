import React, { useState } from "react";
import Title from "../../../components/SectionTitle";
import { FiMaximize2, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const images = [
  "https://res.cloudinary.com/dro6y5qla/image/upload/v1771135073/WhatsApp_Image_2026-02-13_at_8.18.44_PM_2_jrkgai.jpg",
  "https://res.cloudinary.com/dro6y5qla/image/upload/v1771135073/WhatsApp_Image_2026-02-13_at_8.18.43_PM_v8yuz4.jpg",
  "https://res.cloudinary.com/dro6y5qla/image/upload/v1771135073/WhatsApp_Image_2026-02-13_at_8.18.44_PM_yyckzu.jpg",
  "https://res.cloudinary.com/dro6y5qla/image/upload/v1770553143/1_9_k3dqnb.jpg",
  "https://res.cloudinary.com/dro6y5qla/image/upload/v1770553143/1_8_b09lb7.jpg",
  "https://res.cloudinary.com/dro6y5qla/image/upload/v1770553143/1_7_tygkmw.jpg",
  "https://res.cloudinary.com/dro6y5qla/image/upload/v1770553142/1_6_mmhqib.jpg",
  "https://res.cloudinary.com/dro6y5qla/image/upload/v1770553142/1_5_jfo5dg.jpg",
  "https://res.cloudinary.com/dro6y5qla/image/upload/v1770553141/1_4_gzlsil.jpg",
  "https://res.cloudinary.com/dro6y5qla/image/upload/v1770553141/1_3_zr3yhl.jpg",
  "https://res.cloudinary.com/dro6y5qla/image/upload/v1770553140/1_2_hji3q5.jpg",
  "https://res.cloudinary.com/dro6y5qla/image/upload/v1770553141/1_15_ycs9ok.jpg",
  "https://res.cloudinary.com/dro6y5qla/image/upload/v1770553140/1_11_pl84mj.jpg",
  "https://res.cloudinary.com/dro6y5qla/image/upload/v1770553141/1_16_rt6jlh.jpg",
  "https://res.cloudinary.com/dro6y5qla/image/upload/v1770553140/1_12_ja2eyd.jpg",
  "https://res.cloudinary.com/dro6y5qla/image/upload/v1770553139/1_13_p1kddh.jpg",
  "https://res.cloudinary.com/dro6y5qla/image/upload/v1770553139/1_10_ej71ih.jpg"
];

export default function ImageGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeModal = () => setSelectedIndex(null);
  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };
  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-24 bg-white">
      <Title
        subtitle="Gallery"
        title="Your journey to a healthier smile in pictures"
        align="center"
      />

      {/* Modern Grid Layout */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 mt-12">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative break-inside-avoid overflow-hidden rounded-[30px] group cursor-pointer border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={src}
              alt={`Clinical Gallery ${index + 1}`}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-sky-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-sky-600 transform scale-50 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                  <FiMaximize2 size={20} />
               </div>
            </div>
          </div>
        ))}
      </div>

      {/* Minimalist Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-[#05080d]/95 backdrop-blur-xl flex items-center justify-center p-4 lg:p-12 transition-all duration-300"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
          >
            <FiX size={40} strokeWidth={1} />
          </button>

          {/* Navigation */}
          <button
            onClick={showPrev}
            className="absolute left-4 lg:left-8 w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-all z-[110]"
          >
            <FiChevronLeft size={30} />
          </button>

          <div className="relative max-w-5xl w-full h-full flex items-center justify-center animate-in zoom-in duration-300">
            <img
              src={images[selectedIndex]}
              alt={`Full view ${selectedIndex + 1}`}
              className="max-h-full max-w-full rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Image Counter */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/40 text-xs font-black tracking-[4px] uppercase">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>

          <button
            onClick={showNext}
            className="absolute right-4 lg:right-8 w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-all z-[110]"
          >
            <FiChevronRight size={30} />
          </button>
        </div>
      )}
    </div>
  );
}