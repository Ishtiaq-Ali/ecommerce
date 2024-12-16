import React from "react";
import coller from "../../assets/images/coller.jpg";
import lcd from "../../assets/images/lcd.jpg";
import "../../components/createaccount/createaccount.css";
import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa6";

const BillingDetail = () => {
  return (
    <div className="p-6 md:w-[90%] mx-auto">
      <div>
        <nav>
          <ul className="md:flex gap-3">
            <div className="flex gap-3">
              <li>Account</li>
              <span>/</span>
            </div>
            <div className="flex gap-3">
              <li> My Account</li>
              <span>/</span>
            </div>
            <div className="flex gap-3">
              <li> Product</li>
              <span>/</span>
            </div>
            <div className="flex gap-3">
              <li> View Cart</li>
              <span>/</span>
            </div>
            <div className="flex gap-3">
              <li>Checkout</li>
              <span>/</span>
            </div>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col md:flex-row gap-10 pt-10">
        <div className="md:w-1/2">
          <div className="flex flex-col w-full">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              className="outline-none border bg-gray-50 p-2 mt-2"
            />
          </div>
          <div className="flex flex-col w-full mt-5">
            <label htmlFor="">Company Name</label>
            <input
              type="text"
              className="outline-none border bg-gray-50 p-2 mt-2"
            />
          </div>
          <div className="flex flex-col w-full mt-5">
            <label htmlFor="">Street Address*</label>
            <input
              type="text"
              className="outline-none border bg-gray-50 p-2 mt-2"
            />
          </div>
          <div className="flex flex-col w-full mt-5">
            <label htmlFor="">Apartment, floor, etc. (optional)</label>
            <input
              type="text"
              className="outline-none border bg-gray-50 p-2 mt-2"
            />
          </div>
          <div className="flex flex-col w-full mt-5">
            <label htmlFor="">Town/City*</label>
            <input
              type="text"
              className="outline-none border bg-gray-50 p-2 mt-2"
            />
          </div>
          <div className="flex flex-col w-full mt-5">
            <label htmlFor="">Phone Number*</label>
            <input
              type="text"
              className="outline-none border bg-gray-50 p-2 mt-2"
            />
          </div>
          <div className="flex flex-col w-full mt-5">
            <label htmlFor="">Email Address*</label>
            <input
              type="text"
              className="outline-none border bg-gray-50 p-2 mt-2"
            />
          </div>
          <div className="mt-5 flex gap-2">
            <input type="checkbox" className="text-red-500" />
            <span>Save this information for faster check-out next time</span>
          </div>
        </div>
        <div className="md:w-1/3  p-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <img src={coller} alt="" className="w-[10%]" />
              <span>LCD Monitor</span>
            </div>
            <div>
              <span>$650</span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-10">
            <div className="flex items-center gap-6">
              <img src={lcd} alt="" className="w-[10%]" />
              <span>LCD Monitor</span>
            </div>
            <div>
              <span>$1100</span>
            </div>
          </div>
          <div className="flex justify-between mt-5">
            <span>Subtotal:</span>
            <span>$1750</span>
          </div>
          <div className="mt-5 border-b-2 border-gray-300"></div>
          <div className="flex justify-between mt-5">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="mt-5 border-b-2 border-gray-300"></div>
          <div className="flex justify-between mt-5">
            <span>Total</span>
            <span>$1750</span>
          </div>
          <div className="mt-5 border-b-2 border-gray-300"></div>
          <div>
            <div className="flex justify-between items-center w-[80%] mt-10">
              <div className="flex gap-2">
                <input type="radio" />
                <span>Bank</span>
              </div>
              <div className="flex gap-3 text-5xl">
                <button>
                  <RiVisaLine className="text-4xl" />
                </button>
                <button>
                  <FaCcMastercard />
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center w-[80%]">
              <div className="flex gap-2">
                <input type="radio" />
                <span>Cash On Delivery</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row pt-5 gap-3 md:mt-0">
              <div>
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="border-2 text-center p-2 w-full md:w-auto"
                />
              </div>
              <div>
                <button className="bg-red-500 w-full p-2 px-6 text-white">
                  Apply Coupon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingDetail;
