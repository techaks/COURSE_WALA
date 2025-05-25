import React from "react";
import { assets } from "../../assets/assets";

const Companies = () => {
  return (
    <div className="flex flex-col w-full items-center mt-6">
      <p className="text-bold mt-4 mb-6 underline p-2 ">
        Our Learner Works at Top companies !
      </p>
      <div className="flex gap-7 flex-wrap items-center justify-center">
        <img
          className="max-w-20 transition-transform duration-300 transform hover:scale-95 cursor-pointer"
          src={assets.google}
          alt="img"
        />
        <img
          className="transition-transform duration-300 transform hover:scale-95 cursor-pointer"
          src={assets.paypal_logo}
          alt="img"
        />
        <img
          className=" transition-transform duration-300 transform hover:scale-95 cursor-pointer"
          src={assets.accenture_logo}
          alt="img"
        />
        <img
          className=" transition-transform duration-300 transform hover:scale-95 cursor-pointer"
          src={assets.microsoft_logo}
          alt="img"
        />
        <img
          className="max-w-20 transition-transform duration-300 transform hover:scale-95 cursor-pointer"
          src={assets.zomato}
          alt="img"
        />
        <img
          className="max-w-20 transition-transform duration-300 transform hover:scale-95 cursor-pointer"
          src={assets.lenskart}
          alt="img"
        />

        <img
          className=" transition-transform duration-300 transform hover:scale-95 cursor-pointer"
          src={assets.walmart_logo}
          alt="img"
        />
        <img
          className=" transition-transform duration-300 transform hover:scale-95 cursor-pointer"
          src={assets.adobe_logo}
          alt="img"
        />
      </div>
    </div>
  );
};

export default Companies;
