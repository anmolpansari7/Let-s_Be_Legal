import React from "react";
import logo from "./../../assets/client_logo.svg";
import logoName from "./../../assets/client_logo_name.svg";

const HomeTop = () => {
  return (
    <div className=" h-[40rem] lg:h-[46rem] bg-cover bg-[-4rem_top] bg-statue-of-justice-mobile lg:bg-statue-of-justice font-mont lg:bg-cover lg:bg-[right]">
      <div className="w-48 h-32 flex flex-col justify-center lg:w-96 lg:h-48">
        <div className="h-48 w-56 -top-12 -left-4 rounded-[20%] bg-white -skew-x-[8deg] absolute rotate-[10deg] lg:w-96 lg:h-72 lg:-top-20 lg:-left-5" />
        <img
          src={logo}
          alt="Logo"
          className="h-14 z-10 self-center mb-2 lg:mb-4 lg:h-16"
        />
        <img
          src={logoName}
          alt="Let's Be Legal"
          className="h-12 self-center z-10 lg:h-14"
        />
      </div>
      <h1 className="text-4xl mt-16 ml-4 text-white lg:text-5xl font-medium w-[50%] lg:ml-24 lg:mt-24 leading-tight">
        Justice delayed is Justice denied.
      </h1>
      <h4 className="text-lg mt-4 ml-4 text-white lg:text-[1.70rem] font-normal lg:ml-24 lg:mt-4">
        - William Gladstone
      </h4>
      <hr className="ml-5 mt-4 w-6/12 lg:w-3/12 lg:ml-24 lg:mt-8 border-t-4 border-dotted" />
      <p className=" bg-black bg-opacity-30 px-3 py-2 mt-8 ml-4 text-lg text-white border-2 w-fit lg:bg-none lg:text-3xl lg:px-5 lg:py-2 rounded-xl lg:font-medium lg:ml-[46rem] lg:mt-12">
        100% Confidential and secure
      </p>
      <p className=" bg-black bg-opacity-30 px-3 py-2 mt-2 ml-4 text-lg text-white border-2 w-fit lg:bg-none lg:text-3xl lg:px-5 lg:py-2 rounded-xl lg:font-medium lg:ml-[46rem] lg:mt-6">
        24X7 Available
      </p>
      <p className="bg-white ml-4 mt-6 text-base text-sky-theme lg:text-xl font-semibold w-fit px-10 py-3 rounded-t-xl lg:ml-24 lg:mt-10">
        Our Services
      </p>
    </div>
  );
};

export default HomeTop;
