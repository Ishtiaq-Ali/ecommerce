import React, { useState } from "react";
import axios from "axios";
import slideimage from "../../assets/images/slideimage.png";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [logindata, setLoginData] = useState({
    emailorphone: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrorMessage("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { emailorphone, password } = logindata;

    if (!emailorphone || !password) {
      setErrorMessage("All fields are required");
      toast.error("Please fill out all fields!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signin",
        {
          emailorphone: emailorphone,
          password,
        }
      );

      localStorage.setItem("token", response.data.token); // Save token
      console.log("Registration Successful:", response.data);

      if (response.data.success) {
        toast.success("Login successful!");
        setLoginData({
          emailorphone: "",
          password: "",
        });
        navigate("/signin");
      } else {
        toast.error(response.data.message || "Invalid email or password!");
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div className="m-10 md:flex justify-center items-center gap-10 md:w-[80%] mx-auto md:p-0 p-6">
      <div className="md:w-2/3">
        <img src={slideimage} alt="Slide" />
      </div>
      <form onSubmit={handleLogin} className="md:w-1/3 md:mt-28">
        <div>
          <h1 className="md:text-[36px] text-xl font-semibold">
            Log in to Exclusive
          </h1>
        </div>
        <div className="mt-5">
          <p className="font-semibold">Enter your details below</p>
        </div>
        <div>
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}
          <div className="mt-5">
            <input
              type="text"
              name="emailorphone"
              placeholder="Email or Phone Number"
              className="outline-none border border-gray-300 rounded p-2 w-full"
              value={logindata.emailorphone}
              onChange={handleChange}
            />
          </div>
          <div className="mt-5">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="outline-none border border-gray-300 rounded p-2 w-full"
              value={logindata.password}
              onChange={handleChange}
            />
          </div>
          <div className="md:flex gap-3 items-center mt-5">
            <div>
              <button
                type="submit"
                className="bg-red-500 p-2 px-9 text-white rounded"
              >
                Login
              </button>
            </div>
            <div>
              <button
                onClick={() => navigate("/create-account")}
                type="button"
                className="text-red-500"
              >
                Forget Password?
              </button>
            </div>
          </div>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Login;
