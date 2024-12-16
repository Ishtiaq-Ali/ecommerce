import React from "react";
import t1 from "../../assets/images/t1.png";
import t2 from "../../assets/images/t2.png";
import t3 from "../../assets/images/t3.png";
import t4 from "../../assets/images/t4.png";
import t5 from "../../assets/images/t5.png";
import { IoIosStar } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import delivery from "../../assets/images/delivery.png";
import icon from "../../assets/images/icon.png";
import { FaRegEye } from "react-icons/fa";
import coller from "../../assets/images/coller.jpg";
import { FaStar } from "react-icons/fa6";
import keyboard from "../../assets/images/keyboard.jpeg";
import lcd from "../../assets/images/lcd.jpg";
import speaker from "../../assets/images/speaker.png";
const Pdetail = () => {
  return (
    <div className="p-6 md:w-[90%] mx-auto ">
      <div className="md:w-[90%] mx-auto">
        <nav>
          <ul className="md:flex gap-3">
            <li>
              <button>Account</button>
            </li>
            <li>/</li>
            <li>
              <button>Gaming</button>
            </li>
            <li>/</li>
            <li>
              <button>Havic HV G-92 Gamepad</button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="md:w-[90%] mx-auto">
        <div className="md:flex items-start gap-10">
          <div className="flex flex-col justify-start items-center md:w-[20%] w-full">
            <div className="mt-5">
              <img src={t1} alt="" />
            </div>
            <div className="mt-5">
              <img src={t2} alt="" />
            </div>
            <div className="mt-5">
              <img src={t3} alt="" />
            </div>
            <div className="mt-5">
              <img src={t4} alt="" />
            </div>
          </div>

          <div className="md:w-[40%] w-full flex justify-center items-start">
            <div>
              <img src={t5} alt="" className="mt-5"/>
            </div>
          </div>

          <div className="md:w-[30%] w-full flex flex-col justify-start">
            <div>
              <p className="md:text-3xl text-xl font-bold mt-5">
                Havic HV G-92 Gamepad
              </p>
            </div>
            <div className="md:flex gap-2 items-center mt-4">
              <div className="flex text-yellow-300 text-3xl">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </div>
              <div>
                <div className="flex gap-2">
                  <p>(150 Reviews)</p>
                  <span>|</span>
                  <span>In stock</span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <strong className="text-2xl">$192.00</strong>
            </div>
            <div className="mt-4">
              <span>
                PlayStation 5 Controller Skin High quality vinyl with air
                channel adhesive for easy bubble free install & mess free
                removal Pressure sensitive.
              </span>
            </div>
            <div className="border-b-4 border-gray-500 mt-5"></div>
            <div className="mt-10">
              <div className="flex gap-3 items-center">
                <strong className="text-xl">Colors</strong>
                <label>
                  <input
                    type="radio"
                    name="color"
                    className="appearance-none border border-gray-400 rounded-full w-5 h-5 checked:bg-blue-500 checked:border-transparent"
                  />
                </label>
                <label>
                  <input
                    type="radio"
                    name="color"
                    className="appearance-none border border-gray-400 rounded-full w-5 h-5 checked:bg-green-500 checked:border-transparent"
                  />
                </label>
              </div>
            </div>
            <div className="flex items-center gap-x-4 mt-8">
              <div className="p-2 border border-black rounded-md font-semibold">
                XS
              </div>
              <div className="p-2 border border-black rounded-md font-semibold">
                XS
              </div>
              <div className="p-2 border border-black rounded-md font-semibold">
                XS
              </div>
              <div className="p-2 border border-black rounded-md font-semibold">
                XS
              </div>
              <div className="p-2 border border-black rounded-md font-semibold">
                XS
              </div>
            </div>
            <div className="md:flex items-center gap-5 mt-5">
              <div className="flex">
                <div className="p-3 px-5 border border-black rounded-md font-semibold">
                  -
                </div>
                <div className="p-5 px-10 border border-black rounded-md font-semibold"></div>
                <div className="p-3 px-5 border border-black rounded-md font-semibold">
                  +
                </div>
              </div>
              <div>
                <button className="bg-red-500 text-white p-3 px-4 md:mt-0 mt-5">
                  Buy Now
                </button>
              </div>
              <div className="text-3xl border-2 border-black rounded-lg p-2 md:mt-0 mt-5">
                <FaRegHeart />
              </div>
            </div>
            <div className="border-2 border-black md:w-[400px]  mt-5 py-10  px-1 ">
              <div className="flex gap-3 items-center">
                <img src={delivery} alt="" />
                <strong>Free Delivery</strong>
              </div>
              <div className="border-b border-black md:w-[220px] w-full"></div>
              <div className="flex items-center gap-3 ">
                <img src={icon} alt="" />
                <strong>
                  Enter your postal code for Delivery Availability
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-[95%] mx-auto">
        <div className="flex items-center gap-4 mt-10 p-6 md:ps-10">
          <div className="bg-red-600 w-[20px] h-[40px] rounded-md"></div>
          <strong className="text-red-600 text-xl">Related Item</strong>
        </div>
      </div>
      <div className="md:flex  gap-10  md:w-[90%] mx-auto">
        <div>
          <div className="md:w-[220px] w-full mt-10 mx-aut0 h-[250px] shadow-lg flex  items-center justify-center bg-[#F5F5F5] ">
            <div className="relative ">
              <img src={coller} alt="" className="w-[140px] h-[146px] " />
              <FaRegEye className="absolute top-1 -right-10" />
              <FaRegHeart className="absolute -top-5 -right-10" />
            </div>
          </div>
          <div className="mt-5">
            <div>
              <strong> HAVIT HV-G92 Gamepad</strong>
              <div className="flex gap-4">
                <span>$260</span>
                <span>$360</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </div>
              <div>
                <span>(65)</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="md:w-[220px] w-full mt-10 h-[250px] shadow-lg flex  items-center justify-center bg-[#F5F5F5] ">
            <div className="relative ">
              <img src={keyboard} alt="" className="w-[140px] h-[146px] " />
              <FaRegEye className="absolute top-1 -right-10" />
              <FaRegHeart className="absolute -top-5 -right-10" />
            </div>
          </div>
          <button className="bg-black text-white text-xl p-3 w-full">
            Add to Cart
          </button>
          <div className="mt-5">
            <div>
              <strong> AK-900 Wired Keyboard</strong>
              <div className="flex gap-4">
                <span>$260</span>
                <span>$360</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </div>
              <div>
                <span>(65)</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="md:w-[220px] w-full mt-10 h-[250px] shadow-lg flex  items-center justify-center bg-[#F5F5F5] ">
            <div className="relative ">
              <img src={lcd} alt="" className="w-[140px] h-[146px] " />
              <FaRegEye className="absolute top-1 -right-10" />
              <FaRegHeart className="absolute -top-5 -right-10" />
            </div>
          </div>
          <div className="mt-5">
            <div>
              <strong> IPS LCD Gaming Monitor</strong>
              <div className="flex gap-4">
                <span>$260</span>
                <span>$360</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </div>
              <div>
                <span>(65)</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="md:w-[220px] w-full mt-10 h-[250px] shadow-lg flex  items-center justify-center bg-[#F5F5F5] ">
            <div className="relative ">
              <img src={speaker} alt="" className="w-[140px] h-[146px] " />
              <FaRegEye className="absolute top-1 -right-10" />
              <FaRegHeart className="absolute -top-5 -right-10" />
            </div>
          </div>
          <div className="mt-5">
            <div>
              <strong> RGB liquid CPU Cooler</strong>
              <div className="flex gap-4">
                <span>$260</span>
                <span>$360</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </div>
              <div>
                <span>(65)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pdetail;
