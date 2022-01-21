import React from "react";
import logo from "./../assets/client_logo.svg";
import logoName from "./../assets/client_logo_name.svg";
import serviceTopBg from "./../assets/service_top_bg.svg";
import serviceBottomBg from "./../assets/service_bottom_bg.svg";
import serviceMiddleBg from "./../assets/service_middle_bg.png";
import serviceBottomBgMobile from "./../assets/service_bottom_bg_mobile.svg";
import serviceTopBgMobile from "./../assets/service_top_bg_mobile.svg";

const LegalTeaching = () => {
  return (
    <div className=" font-mont">
      <img
        src={serviceTopBg}
        alt="Service-Page"
        className="invisible absolute top-0 left-0 lg:visible"
      />
      <img
        src={serviceTopBgMobile}
        alt="Service-Page"
        className="visible absolute top-0 left-0 lg:invisible"
      />
      <div className="w-48 h-32 flex flex-col justify-center lg:w-96 lg:h-48">
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
      <h1 className="mt-2 w-full lg:mt-0 px-4 text-2xl text-center text-sky-theme z-30 font-bold absolute top-32 lg:left-1/2 lg:-translate-x-1/2 underline lg:text-4xl lg:px-0">
        Legal Teaching and Training
      </h1>
      <div className="px-4 flex flex-col w-full lg:px-24 lg:flex-row justify-between">
        <div className="mt-16 px-4 lg:px-0 lg:py-14 lg:mt-0">
          <ul className="text-lg mt-5 lg:mt-0 lg:text-2xl flex flex-col justify-around h-full text-sky-theme lg:font-medium list-disc">
            <li>Online classes are available,</li>
            <li>
              {" "}
              Specific Law subject/specific law topic study option are also
              available,
            </li>
            <li>Individual attention,</li>
            <li>
              Doubt clearance session about any law topic with personal
              interaction and discussion
            </li>
          </ul>
        </div>
        <div>
          <img
            src={serviceMiddleBg}
            alt="Law is Law"
            className="h-[16rem] mx-auto mt-4 lg:h-[28rem]"
          />
        </div>
      </div>
      <div className=" w-full text-center text-sky-theme font-medium text-xs lg:text-lg">
        <p className="mb-2">Contact Us-</p>
        <p>+91 9617257912 (Whatsapp only)</p>
        <p>+91 8839701992 (Whatsapp only)</p>
      </div>
      <img
        src={serviceBottomBg}
        alt="service page"
        className="invisible lg:visible"
      />
      <img
        src={serviceBottomBgMobile}
        alt="service page"
        className="visible lg:hidden"
      />
    </div>
  );
};

export default LegalTeaching;
