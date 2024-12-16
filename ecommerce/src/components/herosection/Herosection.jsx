import React from "react";
import coller from "../../assets/images/coller.jpg";
import keyboard from "../../assets/images/keyboard.jpeg";
import lcd from "../../assets/images/lcd.jpg";
import chair from "../../assets/images/chair.jpeg";
const Herosection = () => {
  return (
    <div className="bg-white p-6 md:w-[90%] mx-auto ">
      <div className="flex items-center gap-3">
        <div className="bg-red-500 rounded-md w-5 h-10"></div>
        <div>
          <h2 className="text-red-500 text-xl font-bold">Today's</h2>
        </div>
      </div>
      <div className="md:flex md:w-[46%] justify-between items-center mb-8">
        <h1 className="text-3xl font-bold mt-2">Flash Sales</h1>
        <div className="flex space-x-4 text-center mt-4">
          <div>
            <p className="text-2xl font-bold">03</p>
            <span className="text-gray-500 text-sm">Days</span>
          </div>
          <div>
            <p className="text-2xl font-bold">23</p>
            <span className="text-gray-500 text-sm">Hours</span>
          </div>
          <div>
            <p className="text-2xl font-bold">19</p>
            <span className="text-gray-500 text-sm">Minutes</span>
          </div>
          <div>
            <p className="text-2xl font-bold">56</p>
            <span className="text-gray-500 text-sm">Seconds</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            id: 1,
            image: coller,
            name: "HAVIT HV-992 Gamepad2",
            discount: "-20%",
            price: "$120",
            originalPrice: "$160",
            rating: "88",
          },
          {
            id: 2,
            image: keyboard,
            name: "AK-900 Wired Keyboard",
            discount: "-35%",
            price: "$60",
            originalPrice: "$100",
            rating: "75",
          },
          {
            id: 3,
            image: lcd,
            name: "IPS LCD Gaming Monitor",
            discount: "-30%",
            price: "$370",
            originalPrice: "$400",
            rating: "99",
          },
          {
            id: 4,
            image: chair,
            name: "S-Series Comfort Chair",
            discount: "-25%",
            price: "$375",
            originalPrice: "$400",
            rating: "89",
          },
        ].map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 p-4 rounded-lg shadow-sm relative"
          >
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {product.discount}
            </span>
            <img
              src={product.image} // Dynamically rendering the correct image
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="mt-4 font-bold text-lg">{product.name}</h3>
            <div className="flex items-center space-x-2 mt-2">
              <p className="text-red-500 font-bold">{product.price}</p>
              <p className="text-gray-400 line-through">
                {product.originalPrice}
              </p>
            </div>
            <div className="flex items-center mt-2 text-yellow-400">
              {"★".repeat(5)}{" "}
              <span className="ml-2 text-gray-500 text-sm">
                ({product.rating})
              </span>
            </div>
            <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="bg-red-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-red-600">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Herosection;
