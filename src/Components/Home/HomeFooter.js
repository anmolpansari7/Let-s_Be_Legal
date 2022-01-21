import React from "react";

const HomeFooter = () => {
  return (
    <div className=" h-auto px-4 py-8 pb-16 bg-footer-bg text-white lg:px-24 lg:py-12 flex-col">
      <div className="flex flex-col justify-between lg:flex-row">
        <div className="text-center pb-4 border-b-[1px] border-dashed lg:text-left lg:border-none lg:pb-0">
          <p className="mb-2"> Our Team Members</p>
          <ol>
            <li>Yash Shrivastava</li>
            <li>Ashish Thawait</li>
            <li>Pragati Goyal</li>
            <li>Savi Sahu</li>
            <li>Suraj Patel</li>
          </ol>
        </div>
        <div className="text-center py-4 border-b-[1px] border-dashed lg:text-left lg:border-none lg:py-0 lg:my-0">
          <p className="mb-2">Contact Us-</p>
          <p>+91 9617257912 (Whatsapp only)</p>
          <p>+91 8839701992 (Whatsapp only)</p>
        </div>
        <div className="text-center pb-4 my-4 border-b-[1px] border-dashed lg:text-left lg:border-none lg:pb-0">
          <p className="mb-2">Email Us-</p>
          <p>letsbelegal5@gmail.com</p>
        </div>
      </div>
      <p className=" w-full text-center text-lg mt-12">
        We are happy to help you!
      </p>
      <p className="text-xs w-full text-center">
        *** we do not provide and recomment any illegal advice to our client.
      </p>
    </div>
  );
};

export default HomeFooter;
