import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import Button from '../../../components/Button';

const Hero = () => {
  const bgImages = [
    'https://res.cloudinary.com/dro6y5qla/image/upload/v1747126736/hero1_vdqpwp.png',
    'https://res.cloudinary.com/dro6y5qla/image/upload/v1747127674/hero2_z5anyw.png',
    'https://res.cloudinary.com/dro6y5qla/image/upload/v1747127675/hero3_qggzfw.png',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Whatsapp
  const phoneNumber = "8801723605509"; // Replace with your full international number
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [bgImages.length]);

  const currentBgImage = bgImages[currentIndex];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center text-sm text-gray-500 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        {/* Optional: blur effect behind gradient for cleaner text */}
        <div className="absolute inset-0 backdrop-blur-sm"></div>

        {/* Enhanced radial gradient for maximum text clarity */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0.3) 70%, rgba(255,255,255,0) 90%), url('${currentBgImage}')`,
            opacity: 1,
          }}
        ></div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-6 lg:px-12 relative z-10 flex flex-col items-center justify-center text-center">
  <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6 border border-gray-500/30 rounded-full bg-gray-300/15 pl-4 pr-4 py-1 text-sm text-primary max-w-full">
    <p>Committed to your healthy smile.</p>
  </div>

  <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold max-w-4xl text-primary">
    Your Journey to a Beautiful Smile Starts Here
  </h1>

  <p className="max-w-xl mt-6 px-4 text-primary font-bold">
    Modern dental care and experienced dentists ensuring your dental health and beauty. Customized treatments tailored to your needs.
  </p>

  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
    <Button
      label="WhatsApp"
      icon={FaWhatsapp}
      onClick={() => window.open(whatsappUrl, "_blank")}
      variant="primary"
    />
    <Link to="/services" className="group px-7 py-2.5 flex items-center gap-2 font-medium text-primary">
      Explore Our Services
      <svg className="group-hover:translate-x-1 transition pt-0.5 text-primary" width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 4.5h10.182m-4-3.5 4 3.5-4 3.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  </div>
</div>



    </div>
  );
};

export default Hero;

import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../../../components/Title";

const teamMembers = [
  {
    name: "Dr. Suraiya Farjana Mithila",
    designation: "Orthodontist",
    image: "https://res.cloudinary.com/dro6y5qla/image/upload/v1747132533/About2_gh9kgc.png",
  },
  {
    name: "Name",
    designation: "Endodontist",
    image: "https://res.cloudinary.com/dro6y5qla/image/upload/v1747588321/WhatsApp_Image_2025-05-17_at_9.29.28_PM_mtkfqk.jpg",
  },
  {
    name: "Dr. Nusrat Jahan",
    designation: "Pediatric Dentist",
    image: "https://img.freepik.com/free-photo/portrait-doctor-wearing-lab-coat_23-2148741246.jpg",
  },
  {
    name: "Dr. Mahmud Hasan",
    designation: "Oral Surgeon",
    image: "https://img.freepik.com/free-photo/doctor-wearing-uniform-stethoscope-isolated_1303-29940.jpg",
  },
  {
    name: "Dr. Sara Hossain",
    designation: "Cosmetic Dentist",
    image: "https://img.freepik.com/free-photo/portrait-beautiful-young-doctor-standing-hospital-corridor_1303-26362.jpg",
  },
];

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute -top-14 right-12 z-10 cursor-pointer"
    onClick={onClick}
  >
    <FaChevronLeft className="text-gray-700 hover:text-gray-800 text-xl" />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute -top-14 right-4 z-10 cursor-pointer"
    onClick={onClick}
  >
    <FaChevronRight className="text-gray-700 hover:text-gray-800 text-xl" />
  </div>
);

export default function Team() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3500,
    cssEase: "ease-in-out",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    swipeToSlide: true,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="bg-background">
      <div className="min-h-[470px] w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24 py-16 relative">
        <div className="flex justify-between items-center mb-6">
          <Title subtitle="Meet Our Experts" title="Our Dental Team" align="start" />
        </div>

        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-100 w-full object-cover"
                />
                <div className="p-4">
                  <h4 className="text-xl font-semibold text-primary">{member.name}</h4>
                  <p className="text-sm text-gray-800 mt-1">{member.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import Button from "../../../components/Button";

const Hero = () => {
  const phoneNumber = "8801723605509";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dro6y5qla/image/upload/v1747126736/hero1_vdqpwp.png')",
      }}
    >
      {/* Overlay gradient and glass effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-300 via-blue-100 to-white opacity-70"></div>
      <div className="absolute inset-0 backdrop-blur-md"></div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-6 lg:px-12 flex flex-col items-center text-center">
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6 border border-gray-500/30 rounded-full bg-white/30 backdrop-blur-sm pl-4 pr-4 py-1 text-sm text-primary">
          <p>Committed to your healthy smile.</p>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold max-w-4xl text-primary">
          Your Journey to a&nbsp;Beautiful&nbsp;Smile Starts Here
        </h1>

        <p className="max-w-xl mt-6 px-4 text-primary font-bold">
          Modern dental care and experienced dentists ensuring your dental
          health and beauty. Customized treatments tailored to your needs.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Button
            label="WhatsApp"
            icon={FaWhatsapp}
            onClick={() => window.open(whatsappUrl, "_blank")}
            variant="primary"
          />

          <Link
            to="/services"
            className="group px-7 py-2.5 flex items-center gap-2 font-medium text-primary"
          >
            Explore Our Services
            <svg
              className="group-hover:translate-x-1 transition pt-0.5 text-primary"
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 4.5h10.182m-4-3.5 4 3.5-4 3.5"
                stroke="#6B7280"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import Button from "../../../components/Button";

const Hero = () => {
  const phoneNumber = "8801723605509";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (video) {
          if (entry.isIntersecting) {
            video.muted = false;
            video.play();
            setIsMuted(false);
          } else {
            video.muted = true;
            setIsMuted(true);
          }
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden bg-cover bg-center">
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://res.cloudinary.com/dro6y5qla/video/upload/v1747723218/Untitled_design_1_w16lev.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Gradient only behind text content */}
      <div className="absolute z-10 w-full mx-auto  top-0 bottom-0 left-0 right-0 flex items-center justify-center">
        <div className="w-full h-full bg-gradient-to-b from-white/70 via-white/40 to-transparent rounded-xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-20 w-full  mx-auto px-6 sm:px-6 lg:px-12 flex flex-col items-center text-center">
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6 border border-gray-500/30 rounded-full bg-white/30 pl-4 pr-4 py-1 text-sm text-primary">
          <p>Committed to your healthy smile.</p>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold max-w-4xl text-primary">
          Your Journey to a&nbsp;Beautiful&nbsp;Smile Starts Here
        </h1>

        <p className="max-w-xl mt-6 px-4 text-primary font-bold">
          Modern dental care and experienced dentists ensuring your dental
          health and beauty. Customized treatments tailored to your needs.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Button
            label="WhatsApp"
            icon={FaWhatsapp}
            onClick={() => window.open(whatsappUrl, "_blank")}
            variant="primary"
          />

          <Link
            to="/services"
            className="group px-7 py-2.5 flex items-center gap-2 font-medium text-primary"
          >
            Explore Our Services
            <svg
              className="group-hover:translate-x-1 transition pt-0.5 text-primary"
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 4.5h10.182m-4-3.5 4 3.5-4 3.5"
                stroke="#6B7280"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

