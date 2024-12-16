import React from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import cat from "../../assets/images/cat.png";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import canon from "../../assets/images/canon.png";
import laptop from "../../assets/images/laptop.png";
import car from "../../assets/images/car.png";
import shoes from "../../assets/images/shoes.png";
import trigger from "../../assets/images/trigger.png";
import jacket from "../../assets/images/jacket.png";
import cream from "../../assets/images/cream.png";
const Products = () => {
  return (
    <div className="p-6 md:w-[90%] mx-auto w-full">
      <div className="flex items-center gap-4">
        <div className="bg-red-600 w-[20px] h-[40px] rounded-md"></div>
        <strong className="text-red-600 text-xl">Our Products</strong>
      </div>
      <div className="flex justify-between items-center md:w-[100%] w-full">
        <div className="mt-5">
          <strong className="text-2xl md:text-4xl">Explore Our Products</strong>
        </div>
        <div className="flex gap-4">
          <div>
            <div>
              <FaArrowLeft className="text-4xl" />
            </div>
          </div>
          <div>
            <div>
              <FaArrowRight className="text-4xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 md:w-[100%] w-full  ">
        <div className="md:p-0 ">
          <div className="md:w-[270px] w-[250px]  mt-10 h-[250px] shadow-lg flex  items-center justify-center bg-[#F5F5F5] ">
            <div className="relative ">
              <img src={cat} alt="" className="w-[140px] h-[146px] " />
              <FaRegEye className="absolute top-1 -right-10" />
              <FaRegHeart className="absolute -top-5 -right-10" />
            </div>
          </div>
          <div className="mt-5">
            <div>
              <strong>CANON EOS DSLR Camera</strong>
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

        <div className="md:flex gap-6 ">
          <div>
            <div className="md:w-[270px]   w-[250px] mt-10 h-[250px] shadow-lg flex  items-center justify-center bg-[#F5F5F5] ">
              <div className="relative ">
                <img src={canon} alt="" className="w-[140px] h-[146px] " />
                <FaRegEye className="absolute top-1 -right-10" />
                <FaRegHeart className="absolute -top-5 -right-10" />
              </div>
            </div>
            <div className="mt-5">
              <div>
                <strong>CANON EOS DSLR Camera</strong>
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
            <div className="md:w-[270px]  w-[250px]  mt-10 h-[250px] shadow-lg flex  items-center justify-center bg-[#F5F5F5] ">
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
            <div className="md:w-[270px]  w-[250px]  mt-10 h-[250px] shadow-lg flex  items-center justify-center bg-[#F5F5F5] ">
              <div className="relative ">
                <img src={cream} alt="" className="w-[140px] h-[146px] " />
                <FaRegEye className="absolute top-1 -right-10" />
                <FaRegHeart className="absolute -top-5 -right-10" />
              </div>
            </div>
            <div className="mt-5">
              <div>
                <strong>Curology Product Set</strong>
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
      <div className="flex flex-wrap gap-6">
        <div>
          <div className="md:w-[270px]  w-[250px] mt-10 h-[250px] shadow-lg flex  items-center justify-center bg-[#F5F5F5] ">
            <div className="relative ">
              <img src={cat} alt="" className="w-[140px] h-[146px] " />
              <FaRegEye className="absolute top-1 -right-10" />
              <FaRegHeart className="absolute -top-5 -right-10" />
            </div>
          </div>
          <div className="mt-5">
            <div>
              <strong>CANON EOS DSLR Camera</strong>
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

        <div className="md:flex gap-6 ">
          <div>
            <div className="md:w-[270px] w-[250px]   mt-10 h-[250px] shadow-lg flex  items-center justify-center bg-[#F5F5F5] ">
              <div className="relative ">
                <img src={canon} alt="" className="w-[140px] h-[146px] " />
                <FaRegEye className="absolute top-1 -right-10" />
                <FaRegHeart className="absolute -top-5 -right-10" />
              </div>
            </div>
            <div className="mt-5">
              <div>
                <strong>CANON EOS DSLR Camera</strong>
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
            <div className="md:w-[270px] w-[250px]   mt-10 h-[250px] shadow-lg flex  items-center justify-center bg-[#F5F5F5] ">
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
            <div className="md:w-[270px] w-[250px] mt-10 h-[250px] shadow-lg flex  items-center justify-center bg-[#F5F5F5] ">
              <div className="relative ">
                <img src={cream} alt="" className="w-[140px] h-[146px] " />
                <FaRegEye className="absolute top-1 -right-10" />
                <FaRegHeart className="absolute -top-5 -right-10" />
              </div>
            </div>
            <div className="mt-5">
              <div>
                <strong>Curology Product Set</strong>
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
      <div className="flex flex-wrap gap-6">
        <div>
          <div className="md:w-[270px]  w-[250px]  mt-10 h-[250px] shadow-lg flex  items-center justify-center bg-[#F5F5F5] ">
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
        <div className="md:flex gap-6 ">
          <div>
            <div className="md:w-[270px]  w-[250px]  mt-10 h-[250px] shadow-lg flex  items-center justify-center bg-[#F5F5F5] ">
              <div className="relative ">
                <img src={shoes} alt="" className="w-[140px] h-[146px] " />
                <FaRegEye className="absolute top-1 -right-10" />
                <FaRegHeart className="absolute -top-5 -right-10" />
              </div>
            </div>
            <div className="mt-5">
              <div>
                <strong>Jr. Zoom Soccer Cleats</strong>
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
            <div className="md:w-[270px]  w-[250px]  mt-10 h-[250px] shadow-lg flex  items-center justify-center bg-[#F5F5F5] ">
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
          <div>
            <div className="md:w-[270px]  w-[250px]  mt-10 h-[250px] shadow-lg flex  items-center justify-center bg-[#F5F5F5] ">
              <div className="relative ">
                <img src={car} alt="" className="w-[140px] h-[146px] " />
                <FaRegEye className="absolute top-1 -right-10" />
                <FaRegHeart className="absolute -top-5 -right-10" />
              </div>
            </div>
            <div className="mt-5">
              <div>
                <strong>Kids Electric Car</strong>
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
      <div className="flex justify-center mt-5">
            <button className="bg-[#EF4444] p-2 px-3 rounded-sm mt-5 text-white">
             View All Products
            </button>
          </div>
    </div>
  );
};

export default Products;
