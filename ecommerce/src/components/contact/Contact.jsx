import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="p-6 md:w-[75%] w-full  mx-auto ">
      <div className="md:w-[80%]">
        <nav>
          <ul className="flex gap-3">
            <li>
              <button>Home</button>
            </li>
            <li>/</li>
            <li>
              <button>Contact</button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="md:flex gap-10 mt-10">
      <div className="shadow-md md:w-[340px] md:h-[441px]  p-6  ">
        <div className="flex items-center gap-5">
          <div className="bg-red-500 rounded-full p-3">
            <div>
              <FaPhoneAlt className="text-4xl cursor-pointer" />
            </div>
          </div>
          <div>
            <strong>Call To Us</strong>
          </div>
        </div>
        <div className=" md:w-[300px] w-full mt-4">
          <p className="font-bold">We are available 24/7, 7 days a week.</p>
          <p className="font-semibold">Phone: +8801611112222</p>
        </div>
        <div
          style={{ borderBottom: "2px gray solid", marginTop: "20px" }}
          className="md:w-[300px]"
        ></div>
        <div>
          <div className="md:w-[300px] w-full mt-10 flex items-center gap-5">
            <div className="bg-red-500 rounded-full p-3">
              <div>
                <MdOutlineEmail className="text-4xl cursor-pointer" />
              </div>
            </div>
            <div>
              <strong>Write To US</strong>
            </div>
          </div>
          <div className=" md:w-[300px] w-full mt-4">
            <p className="font-bold">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="font-semibold">Email: support@exclusive.com</p>
          </div>
        </div>
      </div>
      <div className="md:w-[800px] w-full  h-full md:h-[440px] mx-auto p-6  shadow-md rounded-lg">
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Your Name *"
              className="md:w-[235px] w-full md:h-[50px px-4 py-2 border border-gray-300 bg-[#F5F5F5] rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="md:w-[235px] w-full md:h-[50px] px-4 py-2 border border-gray-300 bg-[#F5F5F5] rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="Your Phone *"
              className="md:w-[235px] w-full md:h-[50px px-4 py-2 border border-gray-300 bg-[#F5F5F5] rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows="4"
            className="md:w-[737px] w-full md:h-[207px] px-4 py-2 border border-gray-300 bg-[#F5F5F5] outline-none rounded  "
          ></textarea>
          <div className="text-right md:me-5  ">
            <button className="px-6 py-2 bg-red-500 text-white font-semibold rounded mt-10">
              Send Message
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Contact;
