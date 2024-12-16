import React, { useState } from "react";
import slideimage from "../../assets/images/slideimage.png";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    username: "",
    emailorphone: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );
      setFormData({
        username: "",
        emailorphone: "",
        password: "",
      });
      localStorage.setItem("token", response.data.token); // Save token
      console.log("Registration Successful:", response.data.token);
      console.log("Response:", response.data); 
      console.log("Form Submitted", formData);
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  return (
    <>
      <div className="md:p-0 p-6 md:flex justify-center items-center md:w-[1305px] m-16 gap-10 mx-auto">
        <div className="md:w-2/3">
          <img src={slideimage} alt="Create Account Slide" />
        </div>
        <div className="md:w-1/3 md:mt-28">
          <div>
            <h1 className="md:text-[36px] text-xl font-semibold">
              Create an account
            </h1>
          </div>
          <div>
            <p className="font-semibold mt-4">Enter your details below</p>
          </div>
          <form onSubmit={handleForm}>
            <div className="mt-5">
              <input
                type="text"
                name="username"
                placeholder="Name"
                className="inputt outline-none"
                value={formData.username}
                onChange={handleInput}
              />
            </div>
            <div className="mt-5">
              <input
                type="text"
                name="emailorphone"
                placeholder="Email or Phone Number"
                className="inputt outline-none"
                value={formData.emailorphone}
                onChange={handleInput}
              />
            </div>
            <div className="mt-5">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="inputt outline-none"
                value={formData.password}
                onChange={handleInput}
              />
            </div>
            <div className="md:w-[70%] w-full">
              <button
                type="submit"
                className="bg-red-500 p-2 px-9 text-white mt-5 w-full"
              >
                Create Account
              </button>
            </div>
            <div>
              <div className="flex items-center gap-3 border md:w-[70%] w-full mt-5 p-2">
                <span className="ps-2">
                  <FcGoogle />
                </span>
                <button
                  type="button"
                  className="md:p-2"
                  onClick={() => console.log("Google Signup Clicked")}
                >
                  Sign up with Google
                </button>
              </div>  
            </div>
            <div className="flex gap-3 items-center mt-5">
              <button onClick={()=> navigate('/login')} type="button">Already have an account?</button>
              <button onClick={()=> navigate('/login')} type="button">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
