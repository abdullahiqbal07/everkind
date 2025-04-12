import React from "react";
import {
  Clock,
  Users,
  Moon,
  Heart,
  Music,
  Leaf,
  Wind,
  ArrowRight,
} from "lucide-react";
import image1 from "../assets/images/selfcare/Self-care1.jpg";
import image10 from "../assets/images/selfcare/image 10.png";
import image9 from "../assets/images/selfcare/image 9.png";
import image11 from "../assets/images/selfcare/image 11.png";
import image4 from "../assets/images/selfcare/image 4.png";
import image7 from "../assets/images/selfcare/image 7.png";
import vector from "../assets/images/selfcare/vector.png";
import image3 from "../assets/images/selfcare/image 3.png";
import image14 from "../assets/images/selfcare/image 1.png";
import Navbar from "../components/NavBar";

export default function SelfCareSanctuary() {
  return (
    <>
    <Navbar />
    <div className="bg-white p-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative mb-12 rounded-lg overflow-hidden">
        <div className="relative h-128 bg-gray-300">
          <img
            src={image1}
            alt="Woman receiving a facial mask"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Skincare Routines Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Skincare Routines
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col space-y-4 border border-gray-200 p-6">
            <div className="h-12 w-12 rounded-lg flex items-center justify-center">
              <img src={image10} alt="Daily Radiance Icon" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">
                Daily Radiance Ritual
              </h3>
              <p className="text-md font-semibold text-gray-600">
                Start your day with a routine that cleanses, hydrates, and preps
                skin for a healthy glow.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-4 border border-gray-200 p-6">
            <div className="h-12 w-12 rounded-lg flex items-center justify-center">
              <img src={image9} alt="Evening Restoration Icon" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">
                Evening Restoration Routine
              </h3>
              <p className="text-md font-semibold text-gray-600">
                Cleanse and repair your skin with nourishing treatments that
                support skin rejuvenation and renewal.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-4 border border-gray-200 p-6">
            <div className="h-12 w-12 rounded-lg flex items-center justify-center">
              <img src={image11} alt="Weekend Pampering Icon" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">
                Weekend Pampering Guide
              </h3>
              <p className="text-md font-semibold text-gray-600">
                Take extra time for masks, exfoliation, and treatments to deeply
                rejuvenate your skin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Tips Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Wellness Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg flex flex-col border border-gray-200">
            <div className="h-12 w-12 rounded-lg flex items-center justify-center mb-2">
              <img src={image4} alt="Mindful Movement Icon" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Mindful Movement</h3>
            <p className="text-md font-semibold text-gray-600 mb-4">
              Practice moving from the hips or waist to foster physical and
              mental flexibility.
            </p>
          </div>

          <div className="p-6 rounded-lg flex flex-col border border-gray-200">
            <div className="h-12 w-12 rounded-lg flex items-center justify-center mb-2">
              <img src={image7} alt="Nature's Embrace Icon" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Nature's Embrace</h3>
            <p className="text-md font-semibold text-gray-600 mb-4">
              Find peace and rejuvenation by spending time in natural settings,
              connecting with the earth.
            </p>
          </div>

          <div className="p-6 rounded-lg flex flex-col border border-gray-200">
            <div className="h-12 w-12 rounded-lg flex items-center justify-center mb-2">
              <img src={vector} alt="Nightly Rituals Icon" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Nightly Rituals</h3>
            <p className="text-md font-semibold text-gray-600 mb-4">
              Create a consistent sleep schedule and a peaceful bedtime ritual
              for restorative sleep.
            </p>
          </div>
        </div>
      </section>

      {/* Relaxation Techniques Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Relaxation Techniques
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col space-y-4 p-4 border border-gray-200 rounded-lg">
            <div className="h-12 w-12 rounded-lg flex items-center justify-center">
              <img src={image3} alt="Soothing Breath Icon" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">Soothing Breath</h3>
              <p className="text-md font-semibold text-gray-600">
                Harness controlled breathing techniques to cultivate calm during
                stressful moments.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-4 p-4 border border-gray-200 rounded-lg">
            <div className="h-12 w-12 rounded-lg flex items-center justify-center">
              <img src={image3} alt="Gentle Awareness Icon" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">Gentle Awareness</h3>
              <p className="text-md font-semibold text-gray-600">
                Practice mindful breathing exercises to ground yourself in the
                present moment.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-4 p-4 border border-gray-200 rounded-lg">
            <div className="h-12 w-12 rounded-lg flex items-center justify-center">
              <img src={image14} alt="Harmonizing Bliss Icon" />{" "}
              {/* Reusing image15 as a placeholder */}
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">
                Harmonizing Bliss
              </h3>
              <p className="text-md font-semibold text-gray-600">
                Use soothing oils and diffusers to create a calming aromatic
                environment.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            <span>Continue Your Self-Care</span>
            <span className="ml-12">Journey</span>
          </h2>

          <p className="text-lg text-gray-700 mb-10">
            Discover Everkind's range of products designed to support your
            well-being and beauty routines.
          </p>

          <div className="flex justify-center">
            <button className="px-8 py-4 bg-purple-300 text-gray-800 rounded-full text-lg font-medium hover:bg-purple-400 transition-colors duration-300">
              Explore All Products
            </button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
