import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";

export const Appcontext = createContext();

export const AppcontextProvider = (props) => {

const [allCourses , setAllCourses] = useState([]);

//fetch aal courses
const fetchAllCourses = async()=>{
  setAllCourses(dummyCourses)
}
//cal avg rating of course
const calRating=(course)=>{
  if(course.courseRatings.length === 0){
    return 0;
  }
  let tRating = 0 ;
  course.courseRatings.forEach(rating => {
    tRating += rating.rating;
  });

  return tRating / course.courseRatings.length


}

useEffect(()=>{
fetchAllCourses();
},[])

  

const value = {
allCourses,
calRating
    
}

  return( 

    <Appcontext.Provider value={value}>
    {props.children}
    </Appcontext.Provider>

)


};
