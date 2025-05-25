import React from "react";
import { assets } from "../../assets/assets";
import { SignInButton, useClerk,UserButton,useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const {openSignin} = useClerk()
  const {user} = useUser()
  const navigate = useNavigate()
 

  return (
    <div className=" flex content-between w-full  border-b-2 pb-2">
      <div className="flex gap-1 items-center w-1/2 justify-center ">
        <img onClick={()=>navigate('/')} className="w-12 h-12 cursor-pointer" src={assets.mainLogo} alt="logo" />
        <p className=" font-bold">COURSE WALA</p>
      </div>

      <div className="flex font-medium gap-1 md:gap-5 items-center w-1/2 justify-center ">
      {
         user && <> <p className="cursor-pointer">Become Educator</p>
         <p className="ursor-pointer">My Enrollments</p></>
      }
       
        <SignInButton>

        {
          user ? <UserButton/> :
       
        <button className="bg-sky-400 p-2 rounded-lg ursor-pointer hover:text-blue-900  text-white">Create Account</button>
         }
         </SignInButton>
      </div>
    </div>
  );
};

export default Navbar;
