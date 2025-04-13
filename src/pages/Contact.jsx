import { useState } from "react";
import image1 from "../assets/images/Contact/image1.png";
import image2 from "../assets/images/Contact/image2.png";
import Header from "../components/NavBar";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section with Background Image */}
        <div className="relative rounded-lg overflow-hidden mb-8">
          <img
            src={image1}
            alt="Spa Treatment Beds"
            className="w-full object-cover h-96"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Get in Touch</h1>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mb-12">
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              placeholder="How can we help you?"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-pink-300 hover:bg-pink-400 text-gray-800 font-medium py-2 px-6 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Location Info Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Spa Info */}
          <div className="md:w-1/2">
            <h2 className="text-sm text-gray-500 font-medium">
              SereneSkin Spa
            </h2>
            <h3 className="text-xl font-bold mb-2">Visit our tranquil oasis</h3>
            <p className="text-gray-600 mb-4">
              231 Blissful Avenue, Harmony, CA 91234
            </p>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-700 hover:text-pink-500"
            >
              <span>View on Map</span>
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </a>
          </div>

          {/* Spa Image */}
          <div className="md:w-1/2">
            <img
              src={image2}
              alt="Spa Exterior"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-12">
          <iframe
            title="Spa Location"
            className="w-full h-96 rounded-lg border border-gray-200"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6502594.288012564!2d-123.79641055!3d37.19533444999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia!5e0!3m2!1sen!2sus!4v1681494266125!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
