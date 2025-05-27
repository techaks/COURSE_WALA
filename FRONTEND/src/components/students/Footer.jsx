import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="flex bg-[#1e103a] text-teal-100 justify-between px-10 py-5">
      <div className="w-1/2">
        <div className="flex gap-2 items-center">
           <p className="font-bold text-xl">Course Wala</p>
          <img className="w-14 " src={assets.mainLogo} alt="logo" />
         
        </div>
        <p className=" ">
          Empowering learners with knowledge and skills for a brighter future.
          Course Wala is a platform that connects learners with educators, offering a wide range of courses to help individuals enhance their skills and knowledge.
        </p>
      </div>

      <div className=" w-1/2 flex-">
        <p>Company</p>
        <p>Home</p>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Privacy Policy</p>
      
      </div>
    </div>
  );
};

export default Footer;
