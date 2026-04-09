import React from 'react';
import Title from '../../../components/SectionTitle'; // Adjust the path if needed
import Button from '../../../components/Button'; // Reusable button component

const FaceAnalyzer = () => {
  return (
    <section className="bg-gray-50 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* Left Side - Content */}
      <div className="order-2 lg:order-1 max-w-2xl text-center lg:text-left">
        <Title
          subtitle="Technology + Precision"
          title="AI-Powered Face Analysis"
          align="start"
        />

        <p className="text-gray-700 text-base leading-7 mt-4">
          Discover the science behind your skin with our AI-powered face analysis. This technology scans your face to detect concerns like wrinkles, uneven tone, and loss of volume — all in seconds.
        </p>

        <p className="text-gray-700 text-base leading-7 mt-4">
          With this insight, we design a treatment plan that's tailored to your unique facial structure and skin needs — ensuring optimal, natural-looking results.
        </p>

        {/* Key Points */}
        <ul className="mt-5 text-gray-700 list-disc list-inside text-left space-y-2 text-sm sm:text-base">
          <li>Detect fine lines, pores, texture & pigmentation</li>
          <li>Analyze facial symmetry and volume loss</li>
          <li>Create precise, personalized treatment plans</li>
          <li>Track progress before & after treatments</li>
        </ul>

        {/* CTA Button */}
        <a href="tel:+8801776895468">
          <Button
            className="mt-6"
            label="Call Now"
            variant="primary"
          />
        </a>
      </div>

      {/* Right Side - Image */}
      <div className="order-1 lg:order-2 flex justify-center">
        <img
          src="https://res.cloudinary.com/dro6y5qla/image/upload/v1748838365/3dface-2_tal4te.jpg"
          alt="AI Face Analyzer"
          className="w-full h-full max-h-[500px] object-cover rounded-3xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default FaceAnalyzer;
