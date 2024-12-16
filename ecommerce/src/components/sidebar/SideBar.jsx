import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import frames from '../../assets/images/frame .png'

const SideBar = () => {
  return (
    <div>
        <div className="md:flex gap-10 md:w-[90%] mx-auto ">
      <div className="md:flex md:flex-col ps-5 pt-5 md:w-[35%] p-2 gap-y-2 border-r-2 border-gray-200">
        <div className="flex justify-between  ">
          <span>Women Fashion</span>
          <RiArrowDropRightLine className="text-2xl" />
        </div>
        <div className="flex justify-between ">
          <span>Men’s Fashion</span>
          <RiArrowDropRightLine className="text-2xl" />
        </div>
        <div className="flex justify-between ">
          <span>Electronics</span>
          <RiArrowDropRightLine className="text-2xl" />
        </div>
        <div className="flex justify-between ">
          <span>Home & Lifestyle</span>
          <RiArrowDropRightLine className="text-2xl" />
        </div>
        <div className="flex justify-between ">
          <span>Medicine</span>
          <RiArrowDropRightLine className="text-2xl" />
        </div>
        <div className="flex justify-between ">
          <span>Sports & Outdoor</span>
          <RiArrowDropRightLine className="text-2xl" />
        </div>
        <div className="flex justify-between ">
          <span>Baby’s & Toys</span>
          <RiArrowDropRightLine className="text-2xl" />
        </div>
        <div className="flex justify-between ">
          <span>Groceries & Pets</span>
          <RiArrowDropRightLine className="text-2xl" />
        </div>
        <div className="flex justify-between ">
          <span>Health & Beauty</span>
          <RiArrowDropRightLine className="text-2xl" />
        </div>
      </div>
      <div className="mt-7 w-full ">
       <img src={frames} className="object-cover md:w-[98%] w-full"/>
      </div>
      </div>
    </div>
  );
};

export default SideBar;
