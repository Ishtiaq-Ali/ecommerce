import React from "react";
import vector from "../../assets/images/vector.png";
import computer from "../../assets/images/computer.png";
import category from "../../assets/images/category.png";
import camera from "../../assets/images/camera.png";
import headphone from "../../assets/images/headphone.png";
import gamepad from "../../assets/images/gamepad.png";
const Categories = () => {
  return (
    <div className="p-6 w-full md:w-[90%] mx-auto ">
      <div className="flex items-center gap-3">
        <div className="bg-red-500 rounded-md w-5 h-10"></div>
        <div>
          <h2 className="text-red-500 text-xl font-bold">Categories</h2>
        </div>
      </div>
      <div className="mt-5">
        <span className="md:text-4xl text-2xl font-bold">Browse By Category</span>
      </div>
      <div className=" flex flex-col md:flex-row md:justify-start items-center justify-center mt-6  gap-10 w-full md:p-0 p-3">
        <div className=":w-[340px] w-full h-[170px] border-2 border-[#0000004D] flex justify-center items-center ">
          <img src={vector} alt="" className="w-[56px] h-[56px]" />
        </div>
        <div className=":w-[340px] w-full h-[170px] border-2 border-[#0000004D] flex justify-center items-center">
          <img src={computer} alt="" className=" w-[40px]" />
        </div>
        <div className=":w-[340px] w-full h-[170px] border-2 border-[#0000004D] flex justify-center items-center">
          <img src={category} alt="" className=" w-[40px]" />
        </div>
        <div className=":w-[340px] w-full h-[170px] border-2 border-[#0000004D] flex justify-center items-center">
          <img src={camera} alt="" className=" w-full" />
        </div>
        <div className=":w-[340px] w-full h-[170px] border-2 border-[#0000004D] flex justify-center items-center">
          <img src={headphone} alt="" className=" w-[56px] h-[56px]" />
        </div>
        <div className="m:w-[340px] w-full h-[170px] border-2 border-[#0000004D] flex justify-center items-center">
          <img src={gamepad} alt="" className=" w-[56px] h-[56px]" />
        </div>
      </div>
    </div>
  );
};

export default Categories;
