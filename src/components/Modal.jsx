import React, { useState } from "react";
import ReactDOM from "react-dom";

const services = [
  { id: "medicated-hydrafacial", title: "Medicated HydraFacial" },
  { id: "bb-glow-facial", title: "BB Glow Facial" },
  { id: "carbon-facial", title: "Carbon Facial" },
  { id: "chemical-peels", title: "Chemical Peels" },
  { id: "prp-face", title: "PRP Face" },
  { id: "body-fat-reduction-hifu", title: "Body Fat Reduction (With HIFU)" },
  { id: "skin-rejuvenation", title: "Skin Rejuvenation" },
  { id: "anti-aging-treatments", title: "Anti-Aging Treatments" },
  { id: "aesthetic-care", title: "Aesthetic Care" },
  { id: "fat-reduction", title: "Fat Reduction" },
  { id: "laser-treatments", title: "LASER Treatments" },
  { id: "pigmentation-reduction", title: "Pigmentation Reduction" },
  { id: "pico-laser", title: "Pico Laser" },
  { id: "mole-removal", title: "Mole Removal" },
  { id: "botox", title: "Botox" },
  { id: "dermal-fillers", title: "Dermal Fillers" },
  { id: "threads", title: "Threads" },
  { id: "others", title: "Others" }
];

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    service: "",
    date: "",
  });

  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number, service, date } = formData;

    const message =
      `Your Appointment Details\n` +
      `Name: *${name}*\n` +
      `Phone: *${number}*\n` +
      `Service: *${service}*\n` +
      `Date: *${date}*`;

    setShowMessage(true);

    setTimeout(() => {
      onClose(); // Close modal
      window.open(
        `https://wa.me/8801776895468?text=${encodeURIComponent(message)}`,
        "_blank"
      );
      setShowMessage(false);
      setFormData({ name: "", number: "", service: "", date: "" });
    }, 1000);
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg bg-white rounded-2xl p-6 sm:p-8 mx-auto shadow-xl max-h-[90vh] overflow-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-600 hover:text-black text-3xl font-bold cursor-pointer"
          aria-label="Close modal"
        >
          &times;
        </button>

        <h2 className="text-center text-3xl font-bold text-primary my-5">
          Book Your Appointment
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          {/* Phone Input with Icon */}
          <div className="relative">
            <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="number"
              id="number"
              required
              placeholder="Enter your phone number"
              value={formData.number}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-10 py-2"
            />
            <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
              {/* Phone SVG Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3.5A1.5 1.5 0 013.5 2h1A1.5 1.5 0 016 3.5v1A1.5 1.5 0 014.5 6h-1A1.5 1.5 0 012 4.5v-1zM2 10a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-1zm2 6a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-1z" />
              </svg>
            </div>
          </div>

          {/* Service Select */}
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
              Select Service
            </label>
            <div className="relative">
              <select
                name="service"
                id="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 appearance-none bg-white pr-10 z-10"
              >
                <option value="">Choose a service</option>
                {services.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                {/* Down arrow icon */}
                ▼
              </div>
            </div>
          </div>

          {/* Date Input with Calendar Icon */}
          <div className="relative">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 pr-10 appearance-none"
            />
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
              {/* Calendar SVG Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 012 0v1h4V2a1 1 0 112 0v1h1a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h1V2zm0 5v2h8V7H6z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded hover:bg-primary-dark transition cursor-pointer"
              disabled={showMessage}
            >
              {showMessage ? "Sending..." : "Confirm Booking"}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
