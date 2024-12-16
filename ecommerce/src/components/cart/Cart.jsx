import React from "react";
import lcd from "../../assets/images/lcd.jpg";
import coller from "../../assets/images/coller.jpg";

const Cart = () => {
  return (
    <div className="ms-5 p-6 ">
      <div>
        <div className="flex justify-between md:w-[90%] mx-auto md:p-6 shadow-xl bg-white mb-5">
          <span className="md:w-[20%]">Product</span>
          <span className="md:w-[20%]">Price</span>
          <span className="md:w-[20%]">Quantity</span>
          <span className="md:w-[20%]">Subtotal</span>
        </div>
        <div className="flex justify-between md:w-[90%] p-6 mx-auto shadow-xl bg-white">
          <div className="flex items-center gap-2 w-[20%] ">
            <img src={lcd} alt="" className="w-[17%]" />
            <span>Lcd Monitor</span>
          </div>
          <div className="w-[20%]">
            <span>$650</span>
          </div>
          <div className="w-[20%]">
            <select name="" id="" className="p-1 border-2">
              <option className="border-2 text-center p-4 px-3">1</option>
              <option className="border-2 text-center p-4 px-3">2</option>
            </select>
          </div>
          <div className="w-[20%]">
            <span>$650</span>
          </div>
        </div>
        <div className="flex justify-between md:w-[90%] mx-auto mt-10 p-6 shadow-xl bg-white">
          <div className="flex items-center gap-2 w-[20%] ">
            <img src={coller} alt="" className="w-[17%]" />
            <span>H1 Gamepad</span>
          </div>
          <div className="w-[20%]">
            <span>$550</span>
          </div>
          <div className="w-[20%]">
            <select name="" id="" className="p-1 border-2">
              <option className="border-2 text-center p-4 px-3">1</option>
              <option className="border-2 text-center p-4 px-3">2</option>
            </select>
          </div>
          <div className="w-[20%]">
            <span>$650</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between md:w-[90%] mx-auto ">
        <div>
          <button className="border-2 p-2 mt-4">Return To Shop</button>
        </div>
        <div>
          <button className="border-2 p-2 mt-4">Update Cart</button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:ms-16 ms-0 justify-between items-start mt-10 p-4 md:w-[92%]">
        <div className="flex flex-col md:flex-row gap-3 flex-1">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border-2 text-center p-2 w-full md:w-[300px] md:h-[56px]"
          />
          <button className="bg-red-500 p-2 px-6 text-white md:w-[211px] w-full md:h-[56px]">
            Apply Coupon
          </button>
        </div>

        <div className="flex-1 max-w-[470px] mt-10 md:mt-0" >
          <div className="border-2 border-black p-4 rounded-[4px]">
            <div>
              <span>Cart Total</span>
            </div>
            <div className="flex justify-between mt-4">
              <span>Subtotal</span>
              <span>$1750</span>
            </div>
            <div className="border-b border-black/75 my-2"></div>
            <div className="flex justify-between mt-4">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="border-b border-black/75 my-2"></div>
            <div className="flex justify-between mt-4">
              <span>Total:</span>
              <span>$1750</span>
            </div>
            <div className="border-b border-black/75 my-2"></div>
            <div className="mt-5">
              <button className="bg-red-500 p-2 w-full text-white">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
// border-2 border-yellow-500
