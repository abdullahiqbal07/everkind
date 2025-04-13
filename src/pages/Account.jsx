import { useState, useContext } from "react";
import {
  Package,
  ShoppingCart,
  Heart,
  Calendar,
  Droplet,
  MapPin,
  CreditCard,
  Star,
  Settings,
  HelpCircle,
  ChevronRight,
} from "lucide-react";
import Navbar from "../components/NavBar";
import image from "../assets/images/Account/image1.png";
import { authenticate } from "../context/AuthContext"; // Update path as needed

export default function AccountPage() {
  const [userData] = useState({
    name: "Sophia Carter",
    email: "sophia.carter@example.com",
    phone: "(555) 123-4567",
  });

  const { logout, user } = useContext(authenticate);
  console.log(user);

  const accountOptions = [
    {
      icon: <Package className="text-gray-600" size={20} />,
      title: "Orders",
      description: "Track your past purchases",
    },
    {
      icon: <ShoppingCart className="text-gray-600" size={20} />,
      title: "Cart",
      description: "View and manage items you've added",
    },
    {
      icon: <Heart className="text-gray-600" size={20} />,
      title: "Wishlist",
      description: "Save your favorite products",
    },
    {
      icon: <Calendar className="text-gray-600" size={20} />,
      title: "Subscriptions",
      description: "Manage your recurring orders",
    },
    {
      icon: <Droplet className="text-gray-600" size={20} />,
      title: "Skin Type Preferences",
      description: "Customize product recommendations",
    },
    {
      icon: <MapPin className="text-gray-600" size={20} />,
      title: "Address Book",
      description: "Manage your shipping and billing addresses",
    },
    {
      icon: <CreditCard className="text-gray-600" size={20} />,
      title: "Payment Methods",
      description: "Add and manage your payment details",
    },
    {
      icon: <Star className="text-gray-600" size={20} />,
      title: "Customer Reviews",
      description: "View your feedback on products",
    },
    {
      icon: <Settings className="text-gray-600" size={20} />,
      title: "Settings",
      description: "Adjust your preferences and notifications",
    },
    {
      icon: <HelpCircle className="text-gray-600" size={20} />,
      title: "Help & Support",
      description: "Find answers to common questions",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
            {user.image ? (
              <img
                src={user.image}
                alt="User profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                  user.name
                )}&background=random&color=fff&rounded=true&size=96`}
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-1">{user.name}</h2>
          <p className="text-gray-600 mb-4">
            {user.email} · {userData.phone}
          </p>

          <button className="bg-gray-100 text-gray-800 px-6 py-2 rounded-full text-sm font-medium">
            Edit Profile
          </button>
        </div>

        {/* Account Options Section */}
        <h3 className="text-xl font-bold text-gray-800 mb-6">
          Account Options
        </h3>

        <div className="space-y-2">
          {accountOptions.map((option, index) => (
            <a
              href="#"
              key={index}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-md hover:bg-gray-100 transition duration-150"
            >
              <div className="flex items-center">
                <div className="w-8 mr-4">{option.icon}</div>
                <div>
                  <h4 className="font-medium text-gray-800">{option.title}</h4>
                  <p className="text-sm text-gray-500">{option.description}</p>
                </div>
              </div>
              <ChevronRight className="text-gray-400" size={20} />
            </a>
          ))}
        </div>

        {/* Log Out Button */}
        <div className="mt-8">
          <button
            className="bg-gray-100 text-gray-800 px-8 py-3 rounded-full text-sm font-medium"
            onClick={logout}
          >
            Log Out
          </button>
        </div>
      </div>
    </>
  );
}
