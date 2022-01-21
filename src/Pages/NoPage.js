import React from "react";
import logo from "./../assets/client_logo.svg";
import logoName from "./../assets/client_logo_name.svg";
import serviceTopBg from "./../assets/service_top_bg.svg";
import serviceBottomBg from "./../assets/service_bottom_bg.svg";
import serviceMiddleBg from "./../assets/service_middle_bg.png";
import serviceBottomBgMobile from "./../assets/service_bottom_bg_mobile.svg";
import serviceTopBgMobile from "./../assets/service_top_bg_mobile.svg";

const NoPage = () => {
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
      <p className="text-lg text-sky-theme font-semibold">
        No Such page Found...
      </p>
      <img
        src={serviceBottomBg}
        alt="service page"
        className="invisible absolute bottom-0 left-0 lg:visible"
      />
      <img
        src={serviceBottomBgMobile}
        alt="service page"
        className="visible absolute bottom-0 left-0 lg:hidden"
      />
    </div>
  );
};

export default NoPage;
