import React from 'react';
import Title from '../../../components/SectionTitle';

const AboutMe = () => {
  return (
    <section className="bg-white w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Side - Image + Name + Designation */}
      <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
        <img
          src="https://res.cloudinary.com/dro6y5qla/image/upload/v1748924176/WhatsApp_Image_2025-06-02_at_11_wtjgv5.png"
          alt="Dr. Sadia Maksud"
          className="w-full h-full max-h-[500px] object-cover rounded-3xl shadow-lg"
        />
      </div>

      {/* Right Side - Content */}
      <div className="max-w-2xl">
        <Title
          subtitle="Meet the Founder"
          title="About Dr. Sadia Maksud"
          align="start"
        />

        <p className="text-gray-700 text-base leading-7 mt-3">
          Assalamu Alaikum, I’m Dr. Sadia Maksud, founder and chief consultant of Dr. Sadia’s Advanced Aesthetic & Laser Center. With a background in BDS and advanced training from Bangkok and the American Council of Aesthetic Medicine & Surgery, I’ve dedicated my career to delivering global-standard aesthetic care here in Bangladesh.
        </p>

        <p className="text-gray-700 text-base leading-7 mt-4">
          This center is where science meets beauty — a place built on precision, care, and a passion for helping people look and feel their best. Thank you for trusting us with your beauty journey.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-6">
          Dr. Sadia Maksud
        </h2>
        <p className="text-gray-700 mt-1 text-sm sm:text-base font-medium">
          Founder & Chief Aesthetic Consultant <br />
          Dr. Sadia’s Advanced Aesthetic & Laser Center
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
