import React from "react";
import { assets, dummyTestimonial } from "../../assets/assets";

const Testomonial = () => {
  console.log(dummyTestimonial);
  return (
    <div className="flex flex-col items-center mx-auto mt-9 justify-center ">
      <p className="text-xl font-bold text-gray-950">What Our Students Say </p>
      <p>
        Real stories. Real results. See how our courses have impacted lives.
      </p>
      <div className="grid grid-cols-3 w-[80%] items-center mx-auto gap-5 mt-5">
        {dummyTestimonial.map((user, i) => (
          <div key={i} className="flex flex-col border-2  border-[#a5b6b6] rounded-md m-2 ">
            <div className="flex items-center gap-2  bg-[#a5b6b6] p-2">
              <img  className="w-12 " src={user.image} alt="user" />
              <div>
                <p className="font-medium">{user.name}</p>
                <p>{user.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 p-3 bg-[#9dcfc7]">
              {[...Array(5)].map((_, i) => (
                <img
                className="w-5 h-5 "
                  key={i}
                  src={
                    i < Math.floor(user.rating)
                      ? assets.star
                      : assets.star_blank
                  }
                  alt="star"
                />
              ))}
            </div>
            <div>
              <p className="text-gray-800 px-3 bg-[#9dcfc7] pb-3">{user.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testomonial;
