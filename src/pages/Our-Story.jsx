import React, { useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "../assets/images/ourstory/image1.png";
import image2 from "../assets/images/ourstory/image2.png";
import image3 from "../assets/images/ourstory/image3.png";
import image4 from "../assets/images/ourstory/image4.png";
import image5 from "../assets/images/ourstory/image5.png";
import image6 from "../assets/images/ourstory/image6.png";
import image7 from "../assets/images/ourstory/image7.png";
import image8 from "../assets/images/ourstory/image8.png";
import Header from "../components/NavBar";
import Footer from "../components/Footer";

export default function BeautyBlog() {
  const [category, setCategory] = useState("All Categories");
  const [email, setEmail] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Different Skin Types",
      description: "A guide to identifying and caring for your skin type.",
      category: "Skincare",
      imageAlt: "Various skincare products with natural ingredients",
      image: image1,
    },
    {
      id: 2,
      title: "The Science of Hydration",
      description: "Explore the importance of hydration for skin health.",
      category: "Education",
      imageAlt: "Close-up of hydrated skin with water droplets",
      image: image2,
    },
    {
      id: 3,
      title: "Choosing the Right Cleanser",
      description: "Learn how to select the best cleanser for your needs.",
      category: "Products",
      imageAlt: "Cleanser bottle with citrus ingredients",
      image: image3,
    },
    {
      id: 4,
      title: "Sunscreen: Your Best Friend",
      description: "Why sunscreen is essential for daily skincare.",
      category: "Protection",
      imageAlt: "Sunscreen bottle with orange slice",
      image: image4,
    },
    {
      id: 5,
      title: "Decoding Product Labels",
      description:
        "Understand the ingredients and claims on skincare products.",
      category: "Education",
      imageAlt: "Close-up of skincare product label",
      image: image5,
    },
    {
      id: 6,
      title: "Simple Skincare Routine",
      description: "A basic routine for healthy, glowing skin.",
      category: "Routines",
      imageAlt: "Set of minimal skincare products in a routine",
      image: image6,
    },
    {
      id: 7,
      title: "Dealing with Acne",
      description: "Tips and products for managing acne effectively.",
      category: "Treatments",
      imageAlt: "Person applying acne treatment to face",
      image: image7,
    },
    {
      id: 8,
      title: "The Power of Antioxidants",
      description: "Discover the benefits of antioxidants in skincare.",
      category: "Ingredients",
      imageAlt: "Serum bottle with plant elements",
      image: image8,
    },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    alert(`Subscribed with email: ${email}`);
    setEmail("");
  };

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Blog Title */}
        <h1 className="text-3xl font-bold text-center mb-8">The Beauty Blog</h1>

        {/* Search Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search articles"
            className="w-full py-3 px-12 bg-gray-100 rounded-lg text-gray-800"
          />
          <Search className="absolute left-4 top-3.5 text-gray-500" size={20} />
        </div>

        {/* Categories Dropdown */}
        <div className="mb-6">
          <p className="text-gray-800 mb-2">All Categories</p>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-lg text-gray-800"
          >
            <option>All Categories</option>
            <option>Skincare</option>
            <option>Makeup</option>
            <option>Haircare</option>
            <option>Wellness</option>
          </select>
        </div>

        {/* Blog Posts Grid - First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
          {blogPosts.slice(0, 8).map((post) => (
            <div key={post.id} className="cursor-pointer">
              <div className="h-48 rounded-lg mb-3 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.description}</p>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="text-center mt-32 mb-16">
          <h2 className="text-3xl font-bold mb-6">Stay in the Glow</h2>
          <form onSubmit={handleSubscribe} className="max-w-lg mx-auto flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-grow p-3 bg-gray-100 rounded-l-lg focus:outline-none"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-purple-300 text-gray-800 font-medium rounded-r-lg hover:bg-purple-400 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2">
          <button className="p-2 text-gray-500 hover:text-gray-800">
            <ChevronLeft size={20} />
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-800 font-medium">
            1
          </button>
          <button className="w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center text-gray-600">
            2
          </button>
          <button className="w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center text-gray-600">
            3
          </button>
          <button className="p-2 text-gray-600">...</button>
          <button className="p-2 text-gray-500 hover:text-gray-800">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
