import React from "react";

const OurServices = () => {
  return (
    <div className="flex flex-wrap gap-8 px-5 py-8 w-full justify-between lg:px-24 lg:py-16 lg:flex-row">
      <div className="h-36 w-40 border-4 border-sky-theme rounded-3xl flex flex-col justify-between py-5 px-3 lg:py-7 lg:px-5 hover:cursor-pointer hover:bg-sky-theme hover:text-white group lg:w-72 lg:h-56">
        <svg className="h-9 lg:h-12" viewBox="0 0 58 61">
          <path
            d="M0.00820064 55.4545H32.8105V61H0.00820064V55.4545ZM11.612 19.6032L19.3479 11.7647L58 50.9766L50.2696 58.8179L11.612 19.6032ZM30.9435 0L46.4071 15.6825L38.6712 23.5294L23.2159 7.83573L30.9435 0ZM7.73042 23.5266L23.194 39.2119L15.4636 47.0532L0 31.3679L7.73042 23.5266Z"
            fill="#35598D"
            className=" group-hover:fill-white"
          />
        </svg>
        <h3 className="text-sky-theme text-base lg:text-2xl text-center font-semibold group-hover:text-white">
          Legal Consultant & Guidance
        </h3>
      </div>
      <div className="h-36 w-40 border-4 border-sky-theme rounded-3xl flex flex-col justify-between py-5 px-3 lg:py-7 lg:px-5 hover:cursor-pointer hover:bg-sky-theme hover:text-white group lg:w-72 lg:h-56">
        <svg className="h-9 lg:h-12" viewBox="0 0 75 61">
          <path
            d="M68.1818 0H6.81818C3.06818 0 0 3.05 0 6.77778V47.4444C0 51.1722 3.06818 54.2222 6.81818 54.2222H23.8636V61H51.1364V54.2222H68.1818C71.9318 54.2222 74.9659 51.1722 74.9659 47.4444L75 6.77778C75 3.05 71.9318 0 68.1818 0ZM68.1818 47.4444H6.81818V6.77778H68.1818V47.4444ZM61.3636 16.9444H23.8636V23.7222H61.3636V16.9444ZM61.3636 30.5H23.8636V37.2778H61.3636V30.5ZM20.4545 16.9444H13.6364V23.7222H20.4545V16.9444ZM20.4545 30.5H13.6364V37.2778H20.4545V30.5Z"
            fill="#35598D"
            className="group-hover:fill-white"
          />
        </svg>
        <h3 className="text-sky-theme text-base lg:text-2xl text-center font-semibold group-hover:text-white">
          Legal Teaching & Training
        </h3>
      </div>
      <div className="h-36 w-40 border-4 border-sky-theme rounded-3xl flex flex-col justify-between py-5 px-3 lg:py-7 lg:px-5 hover:cursor-pointer hover:bg-sky-theme hover:text-white group lg:w-72 lg:h-56">
        <svg className="h-9 lg:h-12" viewBox="0 0 73 63">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.9091 49.6364L34.3636 38.4109C32.8745 38.2582 31.7673 38.1818 30.5455 38.1818C20.3509 38.1818 0 43.2982 0 53.4545V61.0909H34.3636L22.9091 49.6364ZM30.5455 30.5455C38.9836 30.5455 45.8182 23.7109 45.8182 15.2727C45.8182 6.83455 38.9836 0 30.5455 0C22.1073 0 15.2727 6.83455 15.2727 15.2727C15.2727 23.7109 22.1073 30.5455 30.5455 30.5455Z"
            fill="#35598D"
            className="group-hover:fill-white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M47.6127 63L34.3636 49.6363L39.7091 44.2527L47.6127 52.1945L67.2 32.4545L72.5455 37.8382L47.6127 63Z"
            fill="#35598D"
            className="group-hover:fill-white"
          />
        </svg>
        <h3 className="text-sky-theme text-base lg:text-2xl text-center font-semibold group-hover:text-white">
          Advocate Engagement
        </h3>
      </div>
      <div className="h-36 w-40 border-4 border-sky-theme rounded-3xl flex flex-col justify-between py-5 px-3 lg:py-7 lg:px-5 hover:cursor-pointer hover:bg-sky-theme hover:text-white group lg:w-72 lg:h-56">
        <svg className="h-9 lg:h-12" viewBox="0 0 50 61">
          <path
            d="M25 0L0 11.0909V27.7273C0 43.1159 10.6667 57.5064 25 61C39.3333 57.5064 50 43.1159 50 27.7273V11.0909L25 0ZM25 30.4723H44.4444C42.9722 41.8959 35.3333 52.0718 25 55.2605V30.5H5.55556V14.6955L25 6.07227V30.4723Z"
            fill="#35598D"
            className="group-hover:fill-white"
          />
        </svg>
        <h3 className="text-sky-theme text-base lg:text-2xl text-center font-semibold group-hover:text-white">
          Petition Filing & Others
        </h3>
      </div>
    </div>
  );
};

export default OurServices;
