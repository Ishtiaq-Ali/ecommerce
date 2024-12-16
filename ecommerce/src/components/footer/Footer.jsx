import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import google from "../../assets/images/google.png";
import appstore from "../../assets/images/appstore.png";

const Footer = () => {
  return (
    <div className="bg-black text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8">
        <div className="flex flex-col flex-1 min-w-[200px]">
          <h3 className="text-lg font-bold mb-4">Exclusive</h3>
          <p className="mb-2">Subscribe</p>
          <p className="text-sm mb-4">Get 10% off your first order</p>
          <div className="flex items-center border border-white rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black text-sm text-white px-4 py-2 outline-none flex-grow"
            />
            <button className="bg-white text-black px-4 py-2">→</button>
          </div>
        </div>
        <div className="flex flex-col flex-1 min-w-[200px]">
          <h3 className="text-lg font-bold mb-4">Support</h3>
          <p className="text-sm mb-2">
            111 Bijoy Sarani, Dhaka,
            <br />
            DH 1515, Bangladesh.
          </p>
          <p className="text-sm mb-2">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>
        <div className="flex flex-col flex-1 min-w-[200px]">
          <h3 className="text-lg font-bold mb-4">Account</h3>
          <ul className="space-y-2 text-sm">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>
        <div className="flex flex-col flex-1 min-w-[200px]">
          <h3 className="text-lg font-bold mb-4">Quick Link</h3>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex flex-col flex-1 min-w-[200px]">
          <h3 className="text-lg font-bold mb-4">Download App</h3>
          <p className="text-sm mb-4">Save $3 with App New User Only</p>
          <div className="flex items-center space-x-4 mb-4">
            <img src={google} alt="Google Play" className="h-10" />
            <img src={appstore} alt="App Store" className="h-10" />
          </div>
          <div className="flex space-x-4 text-xl">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © Copyright Rimel 2022. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
