import React, { useEffect } from "react";
import doctorImage2 from "../assets/images/Animation-2.gif";
import sideRightImage1 from "../assets/images/doc.jpg";
import sideRightImage2 from "../assets/images/doc-2.avif";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { height, width } from "@mui/system";

const Login = () => {
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
    <div className="min-h-screen w-[100%] h-[100vh] flex items-center justify-center lg:justify-between bg-[#fefbfb]">
      {/* Left Information */}
      <div className="flex items-center ">
        <div className=" flex flex-col lg:px-16 items-start ">
          <div className="flex flex-col items-center ">
            <div className="w-20 h-20 2xl:w-40 2xl:h-40 rounded-full bg-[#483d8b]">
              <img
                src={doctorImage2}
                data-aos="fade-up"
                alt="Doctor Illustration"
                className="rounded-full w-16 2xl:w-36 h-16 2xl:h-36 mx-auto mt-4"
              />
            
            </div>

           
          </div>
          <div className="mt-10 md:mt-4 md:w-[70vw] lg:w-[35vw] md:ml-20 ">
            <div className="text-center mb-8">
            
              <p className="text-gray-600 font-[inter] text-md 2xl:text-2xl mt-1">
                Welcome back! Please Login according to 👇.
              </p>
            </div>
            <form action="" className="space-y-6">
            {/* Username Field */}
            <input
              className="w-full h-[55px] text-gray-900 text-xl pl-4 font-[inter] rounded-[12px] font-medium border outline-[#483d8b] "
              type="text"
              placeholder="Username"
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

            <div className="flex flex-row justify-between">
              <div className="flex items-center space-x-1">
                <input className="w-4 h-4" type="checkbox" name="" id="" />
                <label className="font-[inter] text-md text-gray-900" htmlFor="remember">
                  Remember Me
                </label>
              </div>

              
            </div>

            <button
              type="submit"
              className="w-[50%] py-3 px-4 text-white text-lg rounded-lg bg-[#483d8b] hover:bg-[rgba(72,61,139,0.9)] focus:ring-4 focus:ring-[#483d8b] focus:ring-opacity-50 font-[inter] font-semibold transition-colors duration-300"
            >
              Login
            </button>
          </form>


            {/*  */}
          </div>
        </div>
      </div>

      {/* Right Information */}
      <div className="hidden lg:block lg:h-[100vh] lg:w-[500px] xl:w-[600px]  2xl:w-[1100px] lg:overflow-hidden bg-[blue] ">
        {/* <div className="w-[100%] h-[100%] bg-[red]"></div> */}
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
    </div>
  );
};

export default Login;
