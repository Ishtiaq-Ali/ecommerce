
import React from "react";

const ManageAccount = () => {
  return (
    <div className="p-6 md:w-[90%] mx-auto">
      <div className="md:w-[100%]">
        <nav>
          <ul className="md:flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <button>
                <li>Home</li>
              </button>
              <li>/</li>
              <button>
                <li>My Account</li>
              </button>
            </div>
            <div>
              <span>
                Welcome!{" "}
                <span className="text-red-500 text-[16px]">MD-Ishtiaq</span>
              </span>
            </div>
          </ul>
        </nav>
      </div>
      <div className="md:flex justify-between mt-10">
        <div className="md:w-[30%] w-full p-4 border rounded-lg shadow-md">
          <div>
            <strong>Manage My Account</strong>
          </div>
          <div className="mt-5">
            <span className="text-red-500">My Profile</span>
          </div>
          <div className="mt-2">
            <span className="text-red-500">Address Book</span>
          </div>
          <div className="mt-2">
            <span className="text-red-500">My Payment Options</span>
          </div>
          <div className="mt-5">
            <strong>My Orders</strong>
          </div>
          <div className="mt-2">
            <span className="text-red-500">My Returns</span>
          </div>
          <div className="mt-2">
            <span className="text-red-500">My Cancellations</span>
          </div>
          <div className="mt-5">
            <strong>My WishList</strong>
          </div>
        </div>
        <div className="md:w-[65%] w-full p-6 rounded-lg shadow-md">
          <div>
            <h3 className="text-red-500">Edit Your Profile</h3>
          </div>
          <div className="md:flex gap-10 mt-5">
            <div className="flex flex-col">
              <label>First Name</label>
              <input
                type="text"
                placeholder="MD"
                className="border-2 outline-none p-2 mt-2 w-full bg-[#F5F5F5]"
              />
            </div>
            <div className="flex flex-col">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Ishtiaq"
                className="border-2 outline-none p-2 mt-2 w-full bg-[#F5F5F5]"
              />
            </div>
          </div>
          <div className="md:flex gap-10 mt-5">
            <div className="flex flex-col">
              <label>Email</label>
              <input
                type="text"
                placeholder="Ishtiaq.ties@gmail.com"
                className="border-2 outline-none p-2 mt-2 w-full bg-[#F5F5F5]"
              />
            </div>
            <div className="flex flex-col">
              <label>Address</label>
              <input
                type="text"
                placeholder="Swabi KPK Pakistan"
                className="border-2 outline-none p-2 mt-2 w-full bg-[#F5F5F5]"
              />
            </div>
          </div>
          <div className="flex flex-col mt-5">
            <label>Password Changes</label>
            <input
              type="text"
              placeholder="Current Password"
              className="border-2 outline-none p-2 mt-2 w-full bg-[#F5F5F5]"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="New Password"
              className="border-2 outline-none p-2 w-full mt-5 bg-[#F5F5F5]"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Confirm New Password"
              className="border-2 outline-none p-2 mt-5 w-full bg-[#F5F5F5]"
            />
          </div>
          <div className="mt-5 flex justify-end gap-3">
            <button className="border border-red-500 text-red-500 px-6 py-3 rounded-lg">
              Cancel
            </button>
            <button className="bg-red-700 text-white px-6 py-3 rounded-lg">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAccount;
