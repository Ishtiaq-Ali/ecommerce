import React from "react";
import cloth from "../../assets/images/cloth.png";
import { FaRegEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import purse from "../../assets/images/purse.png";
import speaker from "../../assets/images/speaker.png";
import stand from "../../assets/images/stand.png";
import boom from "../../assets/images/boom.png";
const ThisMonth = () => {
  return (
    <div className="p-6 md:w-[90%] mx-auto">
      <div className="flex items-center gap-4">
        <div className="bg-red-600 w-[20px] h-[40px] rounded-md"></div>
        <strong className="text-red-600 text-xl">This Month</strong>
      </div>
      <div className="mt-5 md:flex justify-between items-center md:w-[90%]">
        <div>
          <h1 className="text-[36px] font-bold">Best Selling Products</h1>
        </div>
        <div>
          <button className="bg-[#DB4444] text-white p-2 px-6">Viev All</button>
        </div>
      </div>
      <div className="md:flex gap-6 md:w-[90%] w-full ">
        <div>
          <div className="md:w-[268px] mt-10 h-[250px] shadow-lg flex  items-center justify-center bg-[#F5F5F5] ">
            <div className="relative ">
              <img src={cloth} alt="" className="w-[140px] h-[146px] " />
              <FaRegEye className="absolute top-1 -right-10" />
              <FaRegHeart className="absolute -top-5 -right-10" />
            </div>
          </div>
          <div className="mt-5">
            <div>
              <strong>The North Coat</strong>
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
          <div className="md:w-[268px] mt-10 h-[250px] shadow-lg flex  items-center justify-center bg-[#F5F5F5] ">
            <div className="relative ">
              <img src={purse} alt="" className="w-[140px] h-[146px] " />
              <FaRegEye className="absolute top-1 -right-10" />
              <FaRegHeart className="absolute -top-5 -right-10" />
            </div>
          </div>
          <div className="mt-5">
            <div>
              <strong>Gucci duffle bag</strong>
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
          <div className="md:w-[268px] mt-10 h-[250px] shadow-lg flex  items-center justify-center bg-[#F5F5F5] ">
            <div className="relative ">
              <img
                src={speaker}
                alt=""
                className="w-[140px] h-[146px] object-contain "
              />
              <FaRegEye className="absolute top-1 -right-10" />
              <FaRegHeart className="absolute -top-5 -right-10" />
            </div>
          </div>
          <div className="mt-5">
            <div>
              <strong>RGB liquid CPU Cooler</strong>
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
          <div className="md:w-[268px] mt-10 h-[250px] shadow-lg flex  items-center justify-center bg-[#F5F5F5] ">
            <div className="relative ">
              <img
                src={stand}
                alt=""
                className="w-[140px] h-[146px] object-contain "
              />
              <FaRegEye className="absolute top-1 -right-10" />
              <FaRegHeart className="absolute -top-5 -right-10" />
            </div>
          </div>
          <div className="mt-5">
            <div>
              <strong>Small BookSelf</strong>
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
      <div className="bg-black md:flex justify-center gap-4 p-10 w-full  md:h-[420px] mt-10 mx-auto">
        <div>
          <div>
            <span className="text-yellow-400 ">Categories</span>
          </div>
          <div className="mt-5">
            <strong className="text-white md:text-[48px]">
              Enhance Your Music Experience
            </strong>
          </div>
          <div className="md:flex  gap-4 mt-5 md:ms-0 ms-10">
            <div>
              <div className="bg-white w-[80px] rounded-full h-[80px] flex flex-col  justify-center items-center text-center font-bold  ">
                <span>23</span> <span>hours</span>
              </div>
            </div>
            <div>
              <div className="bg-white w-[80px] rounded-full md:mt-0 mt-5 h-[80px] flex flex-col justify-center items-center text-center font-bold  ">
                <span>05</span> <span>Days</span>
              </div>
            </div>
            <div>
              <div className="bg-white w-[80px] rounded-full h-[80px] md:mt-0 mt-5 flex justify-center items-center text-center font-bold  ">
                59 Minutes
              </div>
            </div>
            <div>
              <div className="bg-white w-[80px] rounded-full h-[80px] md:mt-0 mt-5 flex justify-center items-center text-center font-bold  ">
                <span>35 seconds</span>
              </div>
            </div>
          </div>
          <div>
            <button className="bg-yellow-400 p-2 px-3 rounded-sm mt-5 md:ms-0 ms-8">
              Buy Now
            </button>
          </div>
        </div>
        <div className="">
          <div className="mt-4 w-full mx-auto">
            <img src={boom} alt="" className="w-full object-cover"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThisMonth;
