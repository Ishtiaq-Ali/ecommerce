import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
const navigate = useNavigate();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="bg-gray-100 ">
    <div className="flex justify-between items-center px-6 py-2  md:w-[90%]  mx-auto">
      <div className="text-lg font-bold">
        <buton onClick={()=> navigate('/')} className="list-none cursor-pointer">Exclusive</buton>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
        </button>
      </div>

      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center md:space-x-4 w-full md:w-auto absolute md:static top-14 left-0 bg-gray-100 z-10 md:z-auto p-4 md:p-0`}
      >
        <ul className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:gap-12">
        <li className="cursor-pointer"><Link to="/">Home</Link></li> 
          <li className="cursor-pointer">< Link to='/contact'>Contact</Link></li>
          <li className="cursor-pointer">< Link to='/about'>About</Link></li>
          <li className="cursor-pointer">< Link to='/create-account'>Signup</Link></li>
          <li className="cursor-pointer"> <Link to='/login'>Login</Link></li>
          <li className="relative w-full md:w-auto md:ms-16">
            <input
              type="text"
              placeholder="What are you looking for"
              className="border-2 border-black rounded-md py-2 pl-10 pr-4 outline-none w-full md:w-[250px]"
            />
            <CiSearch className="absolute top-1/2 right-1 transform -translate-y-1/2 text-gray-500 text-[20px]" />
          </li>
          <li className="cursor-pointer">
            <FaRegHeart />
          </li>
          <li className="cursor-pointer">
            <FiShoppingCart />
          </li>
        </ul>
      </nav>
    </div>
    </div>
    </>
  );
};

export default Navbar;
