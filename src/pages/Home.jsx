import React from 'react'
import Navbar from '../components/NavBar'
import Gentle from "../assets/best-sellers/Gentle.png"
import Nourishing from "../assets/best-sellers/Nourishing Face Oil.png"
import Calming from "../assets/best-sellers/Calming Herbal Tea Blend.png"
import Soothing from "../assets/best-sellers/Soothing Lavender Balm.png"
import main from "../assets/banner/main-banner.png"
import Mind from "../assets/Category/Mind and Body.png"
import Wellness from "../assets/Category/Wellness.png"
import Herbal from "../assets/Category/Herbal Remedies.png"
import Skincare from "../assets/Category/Skincare.png"
import Ethical from "../assets/Choose/Ethical and Cruelty-Free.png"
import Sustainable from "../assets/Choose/Sustainable Practices.png"
import Natural from "../assets/Choose/Natural Ingredients.png"
import Isabella from "../assets/Reviews/Isabella L.png"
import Olivia from "../assets/Reviews/Olivia R.png"
import Sophia from "../assets/Reviews/Sophia M.png"




const ProductCard = ({ imageSrc, title, description }) => {
  return (
    <div className="flex flex-col">
      <div className="rounded-lg overflow-hidden bg-stone-100 mb-3">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-64 object-cover"
        />
      </div>
      <h3 className="font-medium text-lg mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};


const CategoryCard = ({ imageSrc, title, description }) => {
  return (
    <div className="flex flex-col">
      <div className="rounded-lg overflow-hidden bg-stone-100 mb-3">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
      </div>
      <h3 className="font-medium text-lg mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};



const FeatureCard = ({ imageSrc, title, description }) => {
  return (
    <div className="flex flex-col">
      <div className="rounded-lg overflow-hidden bg-stone-100 mb-3">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-40 object-cover"
        />
      </div>
      <h3 className="font-medium text-lg mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};


// Reusable Testimonial Card Component
const TestimonialCard = ({ imageSrc, name, quote }) => {
  return (
    <div className="flex flex-col">
      <div className="rounded-lg overflow-hidden bg-stone-100 mb-3">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-full h-64 object-cover"
        />
      </div>
      <h3 className="font-medium text-lg mb-1">{name}</h3>
      <p className="text-gray-600 text-sm italic">"{quote}"</p>
    </div>
  );
};


// Button Component
const Button = ({ children, primary, className }) => {
  return (
    <button 
      className={`px-6 py-2 rounded-full font-medium transition duration-300 ${
        primary 
          ? 'bg-pink-300 text-gray-800 hover:bg-pink-400' 
          : 'bg-white text-gray-800 hover:bg-gray-100 border border-gray-200'
      } ${className}`}
    >
      {children}
    </button>
  );
};

// Main App Component
 function App() {
  // Mock data for products
  const products = [
    {
      id: 1,
      imageSrc: Gentle,
      description: "A gentle balm to melt away makeup and impurities"
    },
    {
      id: 2,
      imageSrc: Nourishing,
      title: "Nourishing Face Oil",
      description: "A lightweight oil for hydration and radiant skin"
    },
    {
      id: 3,
      imageSrc: Calming,
      title: "Calming Herbal Tea Blend",
      description: "A blend of herbs to promote relaxation and calm"
    },
    {
      id: 4,
      imageSrc: Soothing,
      title: "Soothing Lavender Balm",
      description: "A multi-purpose balm for dry skin and minor irritations"
    }
  ];

  // Mock data for categories
  const categories = [
    {
      id: 1,
      imageSrc: Skincare,
      title: "Skincare",
      description: "Essentials for a radiant complexion"
    },
    {
      id: 2,
      imageSrc: Herbal,
      title: "Herbal Remedies",
      description: "Natural solutions for inner balance"
    },
    {
      id: 3,
      imageSrc: Wellness,
      title: "Wellness",
      description: "Products for a healthy lifestyle"
    },
    {
      id: 4,
      imageSrc: Mind,
      title: "Mind and Body",
      description: "Tools for mindfulness and self-care"
    }
  ];

  // Mock data for features
  const features = [
    {
      id: 1,
      imageSrc: Natural,
      title: "Natural Ingredients",
      description: "We carefully select plant-based ingredients for their efficacy and purity."
    },
    {
      id: 2,
      imageSrc: Sustainable,
      title: "Sustainable Practices",
      description: "Our packaging is designed to minimize environmental impact, using recyclable materials."
    },
    {
      id: 3,
      imageSrc: Ethical,
      title: "Ethical and Cruelty-Free",
      description: "We are committed to ethical sourcing and never test on animals."
    }
  ];

  // Mock data for testimonials
  const testimonials = [
    {
      id: 1,
      imageSrc: Sophia,
      name: "Sophia M.",
      quote: "Everkind products transformed my skin! My complexion is clearer and more radiant than ever. I love that they're natural and effective."
    },
    {
      id: 2,
      imageSrc: Olivia,
      name: "Olivia R.",
      quote: "The Herbal Tea Blend is my evening ritual. It helps me unwind and get a restful sleep. I appreciate the subtle, soothing flavor."
    },
    {
      id: 3,
      imageSrc: Isabella,
      name: "Isabella L.",
      quote: "I feel good about using Everkind products. Knowing they're eco-friendly and cruelty-free aligns with my values."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
      {/* Hero Section */}
      <div className="relative rounded-xl overflow-hidden my-8">
        <img 
          src= {main} 
          alt="Beauty products with natural elements"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Beauty Rooted in Kindness</h1>
          <p className="text-white text-lg mb-8">Holistic wellness and skincare essentials for body, mind, and planet.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button primary>Shop Now</Button>
            <Button>Explore Self Care</Button>
          </div>
        </div>
      </div>

      {/* Best Sellers Section */}
      <section className="my-16">
        <h2 className="text-3xl font-bold mb-8">Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard 
              key={product.id}
              imageSrc={product.imageSrc}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="my-16">
        <h2 className="text-3xl font-bold mb-8">Explore by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(category => (
            <CategoryCard 
              key={category.id}
              imageSrc={category.imageSrc}
              title={category.title}
              description={category.description}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="my-16">
        <h2 className="text-3xl font-bold mb-8">Why Choose Everkind?</h2>
        <p className="text-gray-700 mb-8 max-w-3xl">
          Our commitment to kindness means creating products that are gentle on your skin and our planet. 
          We blend the wisdom of nature with the best of modern science to bring you effective, safe, 
          and sustainable solutions for your wellness journey.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(feature => (
            <FeatureCard 
              key={feature.id}
              imageSrc={feature.imageSrc}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="my-16">
        <h2 className="text-3xl font-bold mb-8">Customer Stories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(testimonial => (
            <TestimonialCard 
              key={testimonial.id}
              imageSrc={testimonial.imageSrc}
              name={testimonial.name}
              quote={testimonial.quote}
            />
          ))}
        </div>
        <div className="flex justify-end mt-6">
          <Button className="flex items-center">
            {/* Read More Reviews <FiChevronRight className="ml-2" /> */}
          </Button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="my-16 text-center">
        <h2 className="text-3xl font-bold mb-2">Stay Connected with Everkind</h2>
        <p className="text-gray-600 mb-6">Be the first to know about new products, exclusive offers, and wellness tips.</p>
        <div className="flex max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email"
            className="flex-grow px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-200"
          />
          <Button primary className="rounded-l-none">Subscribe</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">All Products</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Best Sellers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">New Arrivals</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Gift Sets</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Our Story</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Sustainability</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Ingredients</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Track Order</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                {/* <FiInstagram size={20} /> */}
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                {/* <FiFacebook size={20} /> */}
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                {/* <FiTwitter size={20} /> */}
              </a>
            </div>
            <p className="text-gray-600">customercare@everkind.com</p>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">© 2025 Everkind. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}


const Home = () => {
  return (
    <div>
      <Navbar />
      <App />
    </div>
  )
}

export default Home
