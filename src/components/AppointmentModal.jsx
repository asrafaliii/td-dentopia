import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const AppointmentModal = ({ onClose }) => {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
  });
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false); // ✅ success modal state

  // Fetch services from services.json
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error fetching services:", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = "";
    const templateID = "";
    const publicKey = "";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(
        () => {
          setFormData({ name: "", phone: "", service: "", date: "" });
          setShowSuccess(true); // ✅ show success modal
        },
        (error) => {
          console.error(error);
          alert("Failed to send. Please try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <>
      {/* Main Appointment Modal */}
      <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
        <div className="bg-white w-full max-w-md p-6 rounded-lg relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl cursor-pointer"
          >
            &times;
          </button>
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Book Appointment
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
              required
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
              required
            >
              <option value="">Select Service</option>
              {services.map((service, index) => (
                <option key={index} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
              required
            />
            <button
              type="submit"
              className="bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition cursor-pointer"
              disabled={loading}
            >
              {loading ? "Booking..." : "Book Now"}
            </button>
          </form>
        </div>
      </div>

      {/* ✅ Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-sm p-6 rounded-lg text-center shadow-lg">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              Success!
            </h2>
            <p className="text-gray-700 mb-6">
              Your appointment has been booked successfully.
            </p>
            <button
              onClick={() => {
                setShowSuccess(false);
                onClose(); // Close main modal as well
              }}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition cursor-pointer"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AppointmentModal;
