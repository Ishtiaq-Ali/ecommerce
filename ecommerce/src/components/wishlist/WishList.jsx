import React from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import purse from "../../assets/images/purse.png";
import speaker from "../../assets/images/speaker.png";
import trigger from "../../assets/images/trigger.png";
import jacket from "../../assets/images/jacket.png";
import laptop from "../../assets/images/laptop.png";
import keyboard from "../../assets/images/keyboard.jpeg";
import lcd from "../../assets/images/lcd.jpg";
import coller from '../../assets/images/coller.jpg'
const WishList = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between w-[90%] items-center mx-auto ">
        <div>
          <h1>WishList (4)</h1>
        </div>
        <div>
          <button className="border-2 px-3 py-2">Move All To Bag</button>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 w-[90%] mx-auto">
      <div>
          <div className="md:w-[270px] w-[220px] md:p-0 p-10  mt-10 md:h-[250px] shadow-lg flex  items-center justify-center bg-[#F5F5F5] ">
            <div className="relative  ">
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
          <div className="md:w-[270px] w-[220px] md:p-0 p-6 wull  mt-10 h-[250px] shadow-lg flex  items-center justify-center bg-[#F5F5F5] ">
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
          <div className="md:w-[270px] w-[220px] md:p-0 p-6 wull  mt-10 h-[250px] shadow-lg flex  items-center justify-center bg-[#F5F5F5] ">
            <div className="relative ">
              <img src={trigger} alt="" className="w-[140px] h-[146px] " />
              <FaRegEye className="absolute top-1 -right-10" />
              <FaRegHeart className="absolute -top-5 -right-10" />
            </div>
          </div>
          <div className="mt-5">
            <div>
              <strong>Gaming control-color choosing
              </strong>
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
            <div className="md:w-[270px] w-[220px] md:p-0 p-6 wull  mt-10 h-[250px] shadow-lg flex  items-center justify-center bg-[#F5F5F5] ">
              <div className="relative ">
                <img src={jacket} alt="" className="w-[140px] h-[146px] " />
                <FaRegEye className="absolute top-1 -right-10" />
                <FaRegHeart className="absolute -top-5 -right-10" />
              </div>
            </div>
            <div className="mt-5">
              <div>
                <strong>Quilted Satin Jacket</strong>
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
      <div className="flex flex-wrap gap-6 w-[90%] mx-auto">
      <div>
            <div className="md:w-[270px] w-[220px] md:p-0 p-6 wull  mt-10 h-[250px] shadow-lg flex  items-center justify-center bg-[#F5F5F5] ">
              <div className="relative ">
                <img src={laptop} alt="" className="w-[140px] h-[146px] " />
                <FaRegEye className="absolute top-1 -right-10" />
                <FaRegHeart className="absolute -top-5 -right-10" />
              </div>
            </div>
            <div className="mt-5">
              <div>
                <strong>Laptop-no discount </strong>
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
          <div className="md:w-[270px] w-[220px] md:p-0 p-6 wull  mt-10 h-[250px] shadow-lg flex  items-center justify-center bg-[#F5F5F5] ">
            <div className="relative ">
              <img
                src={keyboard}
                alt=""
                className="w-[140px] h-[146px] object-contain "
              />
              <FaRegEye className="absolute top-1 -right-10" />
              <FaRegHeart className="absolute -top-5 -right-10" />
            </div>
          </div>
          <div className="mt-5">
            <div>
              <strong>AK-900 Wired Keyboard</strong>
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
          <div className="md:w-[270px] w-[220px] md:p-0 p-6 wull  mt-10 h-[250px] shadow-lg flex  items-center justify-center bg-[#F5F5F5] ">
            <div className="relative ">
              <img src={coller} alt="" className="w-[140px] h-[146px] " />
              <FaRegEye className="absolute top-1 -right-10" />
              <FaRegHeart className="absolute -top-5 -right-10" />
            </div>
          </div>
          <div className="mt-5">
            <div>
              <strong>Gaming control-color choosing
              </strong>
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
            <div className="md:w-[270px] w-[220px] md:p-0 p-6 wull  mt-10 h-[250px] shadow-lg flex  items-center justify-center bg-[#F5F5F5] ">
              <div className="relative ">
                <img src={lcd} alt="" className="w-[140px] h-[146px] " />
                <FaRegEye className="absolute top-1 -right-10" />
                <FaRegHeart className="absolute -top-5 -right-10" />
              </div>
            </div>
            <div className="mt-5">
              <div>
                <strong>IPS LCD Gaming Monitor</strong>
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

export default WishList;
