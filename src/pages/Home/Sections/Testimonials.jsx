import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../../../components/SectionTitle";

const testimonials = [
  {
    name: "Shakil Ahmed",
    designation: "CEO, Tech Vision BD",
    quote:
      "Excellent service! Their professionalism and commitment to quality exceeded our expectations. We highly recommend them.",
    image: "https://res.cloudinary.com/dro6y5qla/image/upload/v1747210471/WhatsApp_Image_2025-05-07_at_11.18.47_PM_l8rtt5.jpg",
  },
  {
    name: "Momena Khatun",
    designation: "Marketing Manager, BD Solutions",
    quote:
      "We were truly impressed with their professional approach and the results delivered. A great team to work with!",
    image: "https://res.cloudinary.com/dro6y5qla/image/upload/v1747210471/WhatsApp_Image_2025-05-07_at_11.18.47_PM_l8rtt5.jpg",
  },
  {
    name: "Tanvir Hasan",
    designation: "Founder, Startup Dhaka",
    quote:
      "Their innovative thinking and dedication helped us achieve our goals. Looking forward to working with them again.",
    image: "https://res.cloudinary.com/dro6y5qla/image/upload/v1747210471/WhatsApp_Image_2025-05-07_at_11.18.47_PM_l8rtt5.jpg",
  },
  {
    name: "Farzana Rahman",
    designation: "Director, Creative Hub BD",
    quote:
      "Exceptional support and a deep understanding of our needs. They are a valuable partner for our organization.",
    image: "https://res.cloudinary.com/dro6y5qla/image/upload/v1747210471/WhatsApp_Image_2025-05-07_at_11.18.47_PM_l8rtt5.jpg",
  },
];



const PrevArrow = ({ onClick }) => (
  <div
    className="absolute -top-15 right-12 z-10 cursor-pointer"
    onClick={onClick}
  >
    <FaChevronLeft className="text-gray-700 hover:text-gray-800 text-xl" />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute -top-15 right-4 z-10 cursor-pointer"
    onClick={onClick}
  >
    <FaChevronRight className="text-gray-700 hover:text-gray-800 text-xl" />
  </div>
);

export default function Testimonials() {

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    nextArrow: <NextArrow />, // visible
    prevArrow: <PrevArrow />, // visible
    swipeToSlide: true,
    arrows: true,
    dots: false, // disable dots
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="bg-background">
      <div className=" max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24 py-16 relative">
      <div className="flex justify-between items-center mb-6">
        <Title
          subtitle="What Our Clients Say"
          title="Testimonials"
          align="start"
        />
      </div>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-20 w-20 object-cover rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-primary text-center mb-2">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-600 text-center mb-4">
                {testimonial.designation}
              </p>
              <p className="text-gray-800 italic text-center">
                "{testimonial.quote}"
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
}