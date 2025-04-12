import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import Navbar from "../components/NavBar";
// FAQ Item Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-5 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-800">{question}</span>
        <FaChevronDown
          className={`text-gray-400 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      
      {isOpen && (
        <div className="pb-5 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

// Main FAQ Component
const FAQSection = () => {
  const faqData = [
    {
      question: "What makes Everkind products different?",
      answer: "Everkind products are formulated with natural, sustainably-sourced ingredients that are gentle on your skin and environmentally friendly. We never use harsh chemicals, synthetic fragrances, or fillers that can irritate your skin or harm the planet."
    },
    {
      question: "Are your products cruelty-free?",
      answer: "Absolutely! We are proudly cruelty-free and never test on animals. We also carefully source our ingredients to ensure they meet our ethical standards throughout the supply chain."
    },
    {
      question: "How do I choose the right skincare routine?",
      answer: "Your skincare routine should be tailored to your specific skin type and concerns. We recommend starting with our essential trio: cleanser, serum, and moisturizer. You can take our skin quiz online or contact our skincare specialists for personalized recommendations."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with your purchase, you can return unused or gently used products within 30 days for a full refund or exchange."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes! We currently ship to over 30 countries worldwide. Shipping costs and delivery times vary by location. You can see specific shipping information at checkout."
    },
    {
      question: "Are your packaging materials recyclable?",
      answer: "Yes, sustainability is a core value for us. Our packaging is either recyclable, biodegradable, or made from recycled materials. Product containers can be returned to our recycling program for proper disposal or reuse."
    },
    {
      question: "How long do products typically last?",
      answer: "Most of our products are designed to last 2-3 months with regular use. Each product has a recommended use-by date printed on the packaging. For optimal effectiveness, we recommend using products within 6-12 months after opening."
    },
    {
      question: "Do you offer samples?",
      answer: "Yes! We offer sample sizes of our bestselling products. You can purchase a sample kit online or receive free samples with orders over $50."
    }
  ];

  return (
    <section className="container mx-auto py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-3">Frequently Asked Questions</h2>
        <p className="text-gray-600 mb-8">
          Find answers to common questions about our products, shipping, and sustainability practices.
        </p>
        
        <div className="space-y-0">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <Link 
            to="/contact"
            className="bg-pink-300 hover:bg-pink-400 text-white px-6 py-2 rounded-full inline-block"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
};

const Faq = () => {
  return (
    <>
        <Navbar />
        <FAQSection />
    </>
  )
}

export default Faq