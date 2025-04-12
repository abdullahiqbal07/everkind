import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from  "../components/Footer"

import Protective from "../assets/essentials/Protective Moisturizer.png"
import Hydrating  from "../assets/essentials/Hydrating Serum.png"
import Gentle  from "../assets/essentials/Gentle Cleansing Balm.png"

import Relax from "../assets/wellness/Relax & Rejuvenate.png"
import Revitalize  from "../assets/wellness/Revitalize & Glow.png"
import Calm  from "../assets/wellness/Calm & Center.png"

import Blog1 from "../assets/banner/Blog.png"

// ProductCard Component - Reusable for product displays
const ProductCard = ({ image, title, description }) => {
  return (
    <div className="flex flex-col">
      <div className="rounded-lg overflow-hidden mb-4">
        <img src={image} alt={title} className="w-full h-60 object-cover" />
      </div>
      <h3 className="font-medium text-lg mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

// WellnessCard Component - Reusable for wellness section
const WellnessCard = ({ image, title, description }) => {
  return (
    <div className="flex flex-col">
      <div className="rounded-lg overflow-hidden mb-4">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </div>
      <h3 className="font-medium text-lg mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

// TestimonialCard Component - Reusable for customer reviews
const TestimonialCard = ({ avatar, name, time, rating, review }) => {
  return (
    <div className="mb-8">
      <div className="flex  justify-center mb-2">
        <img src={avatar} alt={name} className="w-8 h-8 rounded-full mr-3 center" />
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-gray-500 text-xs">{time}</p>
        </div>
      </div>
      <div className="flex mb-2">
        {rating && <p className="text-sm text-gray-800">{rating}</p>}
      </div>
      <p className="text-gray-700">{review}</p>
    </div>
  );
};

// Main Homepage Component
const HomePage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-8 lg:px-12 pt-6 md:pt-10">
        <div className="relative">
          <img 
            src={Blog1}
            alt="Woman applying skincare product"
            className="w-full h-[500px] object-cover"
          />
          {/* <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-center px-8 md:px-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Radiate Naturally with Everkind</h1>
            <p className="text-white text-lg md:text-xl max-w-lg mb-8">
              Embrace a healthier, more radiant you with our sustainable skincare and wellness solutions. Discover the beauty of nature, crafted for your well-being and the planet.
            </p>
            <Link to="/shop" className="bg-pink-300 hover:bg-pink-400 text-white px-8 py-3 rounded-full inline-block w-max">
              Shop Now
            </Link>
          </div> */}
        </div>
      </section>
      
      {/* Skincare Essentials Section */}
      <section className="container mx-auto py-16 px-6 md:px-8 lg:px-12">
        <h2 className="text-2xl font-bold mb-3">Skincare Essentials</h2>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Elevate your skincare routine with our curated collection of gentle, effective, and eco-friendly products, designed to nurture your skin's natural beauty. From cleansers to serums, find your perfect match.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard 
            image={Protective}
            title="Gentle Cleansing Balm"
            description="Purify and nourish your skin with our soothing cleansing balm."
          />
          <ProductCard 
            image={Hydrating}
            title="Hydrating Serum"
            description="Infuse your skin with deep hydration using our lightweight serum."
          />
          <ProductCard 
            image={Gentle}
            title="Protective Moisturizer"
            description="Shield your skin from environmental stressors with our protective moisturizer."
          />
        </div>
      </section>
      
      {/* Featured Wellness Section */}
      <section className="container mx-auto py-12 px-6 md:px-8 lg:px-12 bg-gray-50">
        <h2 className="text-2xl font-bold mb-8">Featured Wellness</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <WellnessCard 
            image={Calm}
            title="Calm & Center"
            description="Find inner peace with our calming aroma blends and mindfulness tools."
          />
          <WellnessCard 
            image={Revitalize}
            title="Revitalize & Glow"
            description="Boost your energy and radiance with invigorating products and routines."
          />
          <WellnessCard 
            image={Relax}
            title="Relax & Rejuvenate"
            description="Unwind and restore your mind and body with our soothing treatments."
          />
        </div>
      </section>
      
      {/* Customer Love Section */}
      <section className="container mx-auto py-16 px-6 md:px-8 lg:px-12">
        <h2 className="text-2xl font-bold mb-8">Customer Love</h2>
        
        <div className="max-w-3xl mx-auto">
          <TestimonialCard 
            avatar="https://randomuser.me/api/portraits/women/44.jpg"
            name="Sophia Bennett"
            time="1 month ago"
            review="I love the natural ingredients and how gentle the cleanser is on my skin. It leaves my face feeling refreshed without stripping away moisture."
          />
          
          <TestimonialCard 
            avatar="https://randomuser.me/api/portraits/women/44.jpg"
            name="Emma Rodriguez"
            time="2 weeks ago"
            rating="****"
            review="The serum is hydrating, but I wish it had a slightly stronger fragrance. Overall, a good product that leaves my skin feeling soft."
          />
          
          <TestimonialCard 
            avatar="https://randomuser.me/api/portraits/women/44.jpg"
            name="Chloe Thompson"
            time="3 months ago"
            rating="*****"
            review="Everkind's wellness collection has helped me find more moments of calm in my busy life. The aroma blends are divine."
          />
        </div>
      </section>
      
      {/* Sustainability Section */}
      <section className="container mx-auto py-16 px-6 md:px-8 lg:px-12 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6">Our Commitment to Sustainability</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 mb-6">
              At Everkind, we believe in ethical and sustainable practices. We prioritize eco-friendly packaging, responsible sourcing, and cruelty-free formulations to minimize our impact on the planet and ensure our products are kind to both your skin and the environment.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">Ethically Sourced</h3>
            <p className="text-gray-700">
              Our ingredients are carefully chosen to support both people and the planet.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

const Blog = () => {
  return (
    <>
        <Navbar />
            <HomePage />
        <Footer />
    </>
  )
}

export default Blog;
