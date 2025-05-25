import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { Appcontext } from "../../context/Appcontext";

const CourseCard = ({ course }) => {
  const { calRating } = useContext(Appcontext);
  const navigate = useNavigate();
  return (
    <div>
      <img
        onClick={() => navigate("/course-list/" + course._id)}
        className="w-full rounded-md transition-transform duration-300 transform hover:scale-95 cursor-pointer"
        src={course?.courseThumbnail}
        alt="img"
      />
      <div>
        <p className="font-bold">{course.courseTitle}</p>
        <p>{course.educator?.name}</p>

        <div className="flex gap-1">

          <p className="font-bold">{calRating(course)}</p>

          {[...Array(5)].map((_, i) => (
            <img
              src={
                i < Math.floor(calRating(course))
                  ? assets.star
                  : assets.star_blank
              }
              key={i}
              alt="img"
            />
          ))}
          <p className="text-gray-600">({course?.courseRatings?.length})</p>
        </div>
      </div>
      <p>
        {(
          course.coursePrice -
          (course.discount * course.coursePrice) / 100
        ).toFixed(2)}
      </p>
    </div>
  );
};

export default CourseCard;
