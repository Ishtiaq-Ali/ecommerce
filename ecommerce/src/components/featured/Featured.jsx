// import React from "react";
// import speaker2 from "../../assets/images/speaker2.png";
// import women from "../../assets/images/women.png";
// import perfume from "../../assets/images/perfume.png";
// import perfume2 from "../../assets/images/perfume2.png";
// import bus from "../../assets/images/bus.png";
// import handsfree from "../../assets/images/handsfree.png";
// import vpn from "../../assets/images/vpn.png";

// const Featured = () => {
//   return (
//     <div className="p-6 mt-5 md:w-[90%] mx-auto w-full">
//       <div className="flex items-center gap-4">
//         <div className="bg-red-600 w-[20px] h-[40px] rounded-md"></div>
//         <strong className="text-red-600 text-xl">Featured</strong>
//       </div>
//       <div className="mt-5 font-semibold">
//         <h1 className="md:text-4xl text-2xl">New Arrivals</h1>
//       </div>
//       <div className="flex flex-col lg:flex-row gap-10 mt-10">
//         <div className="bg-black lg:w-1/2 w-full p-6">
//           <div>
//             <img src={speaker2} alt="PlayStation 5" className="w-full " />
//           </div>
//           <div className="md:mt-28">
//             <span className="text-3xl text-white">PlayStation 5</span>
//           </div>
//           <div className="lg:w-[45%] w-full">
//             <span className="text-[14px] text-white">
//               Black and White version of the PS5 coming out on sale.
//             </span>
//           </div>
//           <div>
//             <button className="text-white border p-1 px-3 mt-3">
//               Shop Now
//             </button>
//           </div>
//         </div>
//         <div className="lg:w-1/2 w-full">
//           <div className="bg-black p-6 relative w-full">
//             <div className="absolute md:top-80  md:w-[330px] md:p-0 p-5 ">
//               <div>
//                 <strong className="text-white text-lg md:text-2xl">
//                   Women’s Collections
//                 </strong>
//               </div>
//               <div>
//                 <span className="text-white">
//                   Featured woman collections that give you another vibe.
//                 </span>
//               </div>
//               <div>
//                 <button className="text-white border p-1 px-3 mt-3">
//                   Shop Now
//                 </button>
//               </div>
//             </div>
//             <div className="flex justify-end ">
//               <img src={women} alt="Women Collection" className="w-full" />
//             </div>
//           </div>

//           <div className="flex flex-col md:flex-row gap-6 items-center mt-10">
//             <div className="bg-black w-full md:w-[400px] md:h-[580px]">
//               <div className="p-6 ">
//                 <div>
//                   <img
//                     src={perfume}
//                     alt="Perfume 1"
//                     className="w-full h-full object-fit"
//                   />
//                 </div>
//                 <div>
//                   <strong className="text-white text-2xl">Speakers</strong>
//                 </div>
//                 <div className="mt-2">
//                   <p className="text-white md:text-xl">Amazon wireless speakers</p>
//                 </div>
//                 <div className="mt-2">
//                   <button className="text-white border p-1 px-3 ">
//                     Shop Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-black w-full md:w-[400px] md:h-[580px] p-6">
//               <div>
//                 <div>
//                   <img
//                     src={perfume2}
//                     alt="Perfume 2"
//                     className="w-full h-full object-fit"
//                   />
//                 </div>
//                 <div className="mt-[50px]">
//                   <div>
//                     <strong className="text-white text-2xl">Perfume</strong>
//                   </div>
//                   <div className="mt-2">
//                     <p className="text-white md:text-xl">GUCCI INTENSE OUD EDP</p>
//                   </div>
//                   <div className="mt-2">
//                     <button className="text-white border p-1 px-3 ">
//                       Shop Now
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="md:flex justify-center gap-24 ">
//         <div className="mt-10 flex flex-col items-center">
//           <div>
//             <img src={bus} alt="" />
//           </div>
//           <div>
//             <span>FREE AND FAST DELIVERY</span>
//           </div>
//           <div>
//             <span>Free delivery for all orders over $140</span>
//           </div>
//         </div>
//         <div className="mt-10 flex flex-col items-center">
//           <div>
//             <img src={handsfree} alt="" />
//           </div>
//           <div>
//             <span>24/7 CUSTOMER SERVICE</span>
//           </div>
//           <div>
//             <span>Friendly 24/7 customer support</span>
//           </div>
//         </div>
//         <div className="mt-10 flex flex-col items-center">
//           <div>
//             <img src={vpn} alt="" />
//           </div>
//           <div>
//             <span>MONEY BACK GUARANTEE</span>
//           </div>
//           <div>
//             <span>We reurn money within 30 days</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Featured;
import React from "react";
import speaker2 from "../../assets/images/speaker2.png";
import women from "../../assets/images/women.png";
import perfume from "../../assets/images/perfume.png";
import perfume2 from "../../assets/images/perfume2.png";
import bus from "../../assets/images/bus.png";
import handsfree from "../../assets/images/handsfree.png";
import vpn from "../../assets/images/vpn.png";

const Featured = () => {
  return (
    <div className="p-6 mt-5 md:w-[90%] mx-auto w-full">
      <div className="flex items-center gap-4">
        <div className="bg-red-600 w-[20px] h-[40px] rounded-md"></div>
        <strong className="text-red-600 text-xl">Featured</strong>
      </div>
      <div className="mt-5 font-semibold">
        <h1 className="md:text-4xl text-2xl">New Arrivals</h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 mt-10">
        <div className="bg-black lg:w-1/2 w-full p-6">
          <div>
            <img src={speaker2} alt="PlayStation 5" className="w-full" />
          </div>
          <div className="mt-10">
            <span className="text-3xl text-white">PlayStation 5</span>
          </div>
          <div className="mt-4 lg:w-[45%] w-full">
            <span className="text-[14px] text-white">
              Black and White version of the PS5 coming out on sale.
            </span>
          </div>
          <div>
            <button className="text-white border p-1 px-3 mt-3">Shop Now</button>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="bg-black p-6 relative w-full">
            <div className="absolute top-1/2 left-5 transform -translate-y-1/2 md:w-[330px]">
              <div>
                <strong className="text-white text-lg md:text-2xl">
                  Women’s Collections
                </strong>
              </div>
              <div className="mt-2">
                <span className="text-white">
                  Featured woman collections that give you another vibe.
                </span>
              </div>
              <div className="mt-3">
                <button className="text-white border p-1 px-3">Shop Now</button>
              </div>
            </div>
            <div className="flex justify-end">
              <img src={women} alt="Women Collection" className="w-full" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center mt-10">
            <div className="bg-black w-full md:w-[400px] h-auto p-6">
              <div>
                <img
                  src={perfume}
                  alt="Perfume 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4">
                <strong className="text-white text-2xl">Speakers</strong>
              </div>
              <div className="mt-2">
                <p className="text-white md:text-xl">Amazon wireless speakers</p>
              </div>
              <div className="mt-2">
                <button className="text-white border p-1 px-3">Shop Now</button>
              </div>
            </div>
            <div className="bg-black w-full md:w-[400px] h-auto p-6">
              <div>
                <img
                  src={perfume2}
                  alt="Perfume 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4">
                <strong className="text-white text-2xl">Perfume</strong>
              </div>
              <div className="mt-2">
                <p className="text-white md:text-xl">GUCCI INTENSE OUD EDP</p>
              </div>
              <div className="mt-2">
                <button className="text-white border p-1 px-3">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex justify-center gap-10 mt-10">
        <div className="flex flex-col items-center text-center">
          <img src={bus} alt="Free Delivery" />
          <div className="font-semibold mt-2">FREE AND FAST DELIVERY</div>
          <span className="text-gray-500">Free delivery for all orders over $140</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src={handsfree} alt="Customer Service" />
          <div className="font-semibold mt-2">24/7 CUSTOMER SERVICE</div>
          <span className="text-gray-500">Friendly 24/7 customer support</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src={vpn} alt="Money Back Guarantee" />
          <div className="font-semibold mt-2">MONEY BACK GUARANTEE</div>
          <span className="text-gray-500">We return money within 30 days</span>
        </div>
      </div>
    </div>
  );
};

export default Featured;
