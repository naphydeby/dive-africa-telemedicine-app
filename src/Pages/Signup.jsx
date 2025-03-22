
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import doctorImage2 from "../assets/images/Animation-2.gif";
import sideRightImage1 from "../assets/images/doc-4.jpg";
import sideRightImage2 from "../assets/images/doc-3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Signup = () => {
      useEffect(() => {
        AOS.init({
          duration: 1200,
          easing: "ease-in-out",
          once: false,
        });
      }, []);
    
      const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        TransitionEvent: "ease-in-out",
        innerHeight: '100%',
        innerWidth: '100%'
      };
  return (
     <div className="min-h-screen w-[100%] h-[100vh] flex  justify-center lg:justify-between bg-[#fefbfb]">
     <div className="hidden lg:block lg:h-[100vh] lg:w-[500px] xl:w-[600px]  2xl:w-[1100px] lg:overflow-hidden bg-[blue] ">
         {/* <div className="w-[100%] h-[100%] bg-[red]"></div> */}
           {/* Left Information */}
         <Slider {...sliderSettings}>
           <div className="w-[100%] h-[100vh] ">
             <img
               src={sideRightImage1}
               alt="hospital1"
               className="w-[100%] h-[100%] object-cover"
             />
           </div>
           <div className="w-[100%] h-[100vh] ">
             <img
               src={sideRightImage2}
               alt="hospital2"
               className="w-[100%] h-[100%] object-cover "
             />
           </div>
         </Slider>
       </div>
       {/* Right Information */}
       <div className="flex p-8 ">
         <div className=" flex flex-col lg:px-16 items-start ">
           <div className="flex flex-col items-center ">
           <div className="flex items-center">
           <div className="w-20 h-20 2xl:w-40 2xl:h-40 rounded-full bg-[#483d8b]">
               <img
                 src={doctorImage2}
                 data-aos="fade-up"
                 alt="Doctor Illustration"
                 className="rounded-full w-16 2xl:w-36 h-16 2xl:h-36 mx-auto mt-4"
               />
             </div>
             <h1 className="ml-4 text-[#483d8b] font-[inter] text-4xl">Telemedix</h1>
           </div>
           </div>
           <div className=" md:mt-4 md:w-[70vw] lg:w-[35vw] md:ml-20 ">
             <div className=" flex flex-col items-center mt-12 ">
                 
               <p className="text-gray-600 font-[inter] text-md 2xl:text-2xl mt-1 text-center">
                 Welcome! Please Signup  👇.
               </p>
               <form action="" className="space-y-6 mt-8 ">
             {/* Username Field */}
             <input
               className="w-full h-[55px] text-gray-900 text-xl pl-4  font-[inter] rounded-[12px] font-medium border outline-[#483d8b] "
               type="text"
               placeholder="Fullname"
               name=""
               id=""
             />
              <input
               className="w-full h-[55px] text-gray-900 text-xl pl-4  font-[inter] rounded-[12px] font-medium border outline-[#483d8b] "
               type="tel"
               placeholder="Phone Number"
               name=""
               id=""
             />
              <input
               className="w-full h-[55px] text-gray-900 text-xl pl-4  font-[inter] rounded-[12px] font-medium border outline-[#483d8b] "
               type="text"
               placeholder="Email"
               name=""
               id=""
             />
             <input
               className="w-full h-[55px] text-xl pl-4 font-[inter] rounded-[12px] font-medium border outline-[#483d8b] text-gray-900"
               placeholder="Password"
               type="password"
               name=""
               id=""
             />
             <select    className="w-full h-[55px] text-xl pl-4 font-[inter] rounded-[12px] font-medium border outline-none focus:ring-0 text-gray-800">
                <option value="doctor">Doctor</option>
                <option value="patient">Patient</option>
             </select>
             <input
               className="w-full h-[55px] text-xl pl-4 font-[inter] rounded-[12px] font-medium border outline-[#483d8b] text-gray-900"
               placeholder="Date Of Birth"
               type="date"
               name=""
               id=""
             />
            
                <p>Already have an account?
                <NavLink to="login" className="text-[#483d8b] ml-1">
                Login
                </NavLink>
                </p>
                <button
               type="submit"
               className="w-full py-3 px-4 text-white text-lg rounded-lg bg-[#483d8b] hover:bg-[rgba(72,61,139,0.9)] focus:ring-4 focus:ring-[#483d8b] focus:ring-opacity-50 font-[inter] font-semibold transition-colors duration-300"
             > 
              Signup  
             </button>
           </form>
             </div>
 
 
             {/*  */}
           </div>
         </div>
       </div>
 
     
       
     </div>
   );
}

export default Signup
