import React from "react";

const Page404 = () => {
  return (
    <div className="p-6">
      <div className="md:w-[80%]">
        <nav>
          <ul className="flex gap-3">
            <li>
              <button>Home</button>
            </li>
            <li>/</li>
            <li>
              <button>404</button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="md:w-[80%] ">
        <div className="md:flex flex-col md:h-screen justify-center items-center md:w-[80%] md:ms-36 ">
          <h1 className="md:text-9xl text-3xl mt-10">404 Not Found</h1>
          <p className="mt-16 font-semibold">
            Your visited page not found. You may go home page.
          </p>
          <button className="bg-red-600 text-white p-3 text-xl mt-10 border">
            Back to home page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page404;
