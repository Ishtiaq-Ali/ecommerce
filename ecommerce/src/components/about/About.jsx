import React from "react";
import girls from "../../assets/images/girls.png";
import services from "../../assets/images/services.png";
import services2 from "../../assets/images/services2.png";
import services3 from "../../assets/images/services3.png";
import services4 from "../../assets/images/services4.png";
import men1 from "../../assets/images/men1.png";
import men2 from "../../assets/images/men2.png";
import women2 from "../../assets/images/women2.png";
import { CiTwitter } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import bus from "../../assets/images/bus.png";
import handsfree from "../../assets/images/handsfree.png";
import vpn from "../../assets/images/vpn.png";

const About = () => {
  return (
    <div className="  md:flex-row flex-col justify-center items-center gap-10 mx-auto">
      <div className="md:w-[40%] p-3">
        <nav>
          <ul className="flex gap-3">
            <li>
              <button>Home</button>
            </li>
            <li>/</li>
            <li>
              <button>About</button>
            </li>
          </ul>
        </nav>
      </div>
      <div className=" md:flex gap-16 t-10  md:w-[100%] ">
        <div className="md:w-[44%] flex flex-col md:ps-20 md:p-0 p-5 justify-center items-center ">
          <div>
            <strong className="md:text-5xl text-2xl">Our Story</strong>
          </div>
          <div className="mt-5 ">
            <p className="text-justify  ">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
          </div>
        </div>
        <div className="md:w-[55%] mt-5 md:mt-0 md:p-0 p-5">
          <img src={girls} alt="" className="md:w-full md:h-[609px] object-cover" />
        </div>
      </div>
      <div className="md:w-[90%] md:flex justify-between mt-10 mx-auto md:p-0 p-5">
        <div className="flex flex-col items-center border md:w-[20%] md:p-2 p-5 md:mt-0 mt-5 ">
          <div>
            <img src={services} alt="" />
          </div>
          <div className="text-center mt-4">
            <strong className="">10.5k </strong>
            <p>Sallers active our site</p>
          </div>
        </div>
        <div className="flex flex-col items-center border bg-red-600 md:w-[20%] p-2  md:mt-0 mt-5 ">
          <div>
            <img src={services2} alt="" />
          </div>
          <div className="text-center mt-4">
            <strong className="text-white">33k </strong>
            <p className="text-white"> Mopnthly Produduct Sale</p>
          </div>
        </div>
        <div className="flex flex-col items-center border md:mt-0 mt-5 md:w-[20%] p-2">
          <div>
            <img src={services3} alt="" />
          </div>
          <div className="text-center mt-4">
            <strong className="">45.2k </strong>
            <p className="">Friendly 24/7 customer support</p>
          </div>
        </div>
        <div className="flex flex-col items-center border md:w-[20%] p-2 md:mt-0 mt-5 ">
          <div>
            <img src={services4} alt="" />
          </div>
          <div className="text-center mt-4">
            <strong className="">45.2k </strong>
            <p className="">Friendly 24/7 customer support</p>
          </div>
        </div>
      </div>
      <div className="md:w-[90%] md:flex justify-between items-start mx-auto gap-6 mt-10">
        <div className="md:w-[30%] flex flex-col items-center text-center bg-white shadow-lg p-5 rounded-lg">
          <img src={men1} alt="Tom Cruise" className="w-24 h-24 rounded-full" />
          <strong className="mt-3 text-lg">Tom Cruise</strong>
          <p className="mt-2 text-gray-600">Founder & Chairman</p>
          <div className="flex justify-center gap-4 mt-4 text-gray-700">
            <CiTwitter className="text-3xl cursor-pointer hover:text-blue-500" />
            <BsInstagram className="text-3xl cursor-pointer hover:text-pink-500" />
            <FaLinkedin className="text-3xl cursor-pointer hover:text-blue-700" />
          </div>
        </div>
        <div className="md:w-[30%] flex flex-col items-center text-center bg-white shadow-lg p-5 rounded-lg">
          <img
            src={women2}
            alt="Emma Watson"
            className="w-24 h-24 rounded-full"
          />
          <strong className="mt-3 text-lg">Emma Watson</strong>
          <p className="mt-2 text-gray-600">Managing Director</p>
          <div className="flex justify-center gap-4 mt-4 text-gray-700">
            <CiTwitter className="text-3xl cursor-pointer hover:text-blue-500" />
            <BsInstagram className="text-3xl cursor-pointer hover:text-pink-500" />
            <FaLinkedin className="text-3xl cursor-pointer hover:text-blue-700" />
          </div>
        </div>
        <div className="md:w-[30%] flex flex-col items-center text-center bg-white shadow-lg p-5 rounded-lg">
          <img src={men2} alt="Will Smith" className="w-24 h-24 rounded-full" />
          <strong className="mt-3 text-lg">Will Smith</strong>
          <p className="mt-2 text-gray-600">Product Designer</p>
          <div className="flex justify-center gap-4 mt-4 text-gray-700">
            <CiTwitter className="text-3xl cursor-pointer hover:text-blue-500" />
            <BsInstagram className="text-3xl cursor-pointer hover:text-pink-500" />
            <FaLinkedin className="text-3xl cursor-pointer hover:text-blue-700" />
          </div>
        </div>
      </div>
      <div className="md:w-[90%] mt-10 mx-auto mb-10">
        <div className="md:flex justify-center  gap-6 ">
          <div className="mt-10 flex flex-col items-center ">
            <div>
              <img src={bus} alt="" />
            </div>
            <div>
              <span>FREE AND FAST DELIVERY</span>
            </div>
            <div>
              <span className=" mt-2">Free delivery for all orders over $140</span>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center">
            <div>
              <img src={handsfree} alt="" />
            </div>
            <div>
              <span>24/7 CUSTOMER SERVICE</span>
            </div>
            <div>
              <span>Friendly 24/7 customer support</span>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center">
            <div>
              <img src={vpn} alt="" />
            </div>
            <div>
              <span>MONEY BACK GUARANTEE</span>
            </div>
            <div>
              <span>We return money within 30 days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
