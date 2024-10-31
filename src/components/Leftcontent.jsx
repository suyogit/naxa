import React from "react";

const Leftcontent = ({ description1, description2, icon, photo, title }) => {
  return (
    <div className="flex max-w-[1380px] mx-auto px-7 flex-wrap justify-evenly">
      <div className="content max-w-[682px] p-4">
        <img className="max-w-[70px] my-8 mx-auto lg:mx-0" src={photo} alt="" />
        <div className="text-4xl font-semibold mb-8 text-center lg:text-left">
          {title}
        </div>
        <div
          className="title-content mb-8 text-center lg:text-left"
          dangerouslySetInnerHTML={{ __html: description1 }}
        ></div>
        <div
          className="maincontent bg-customitem p-5 mb-12 text-center lg:text-left"
          dangerouslySetInnerHTML={{ __html: description2 }}
        ></div>
      </div>
      <div className="max-w-[440px] my-32 align-middle">
        <img src={icon} className="w-full max-w-[440px] min-w-[300px] object-contain" alt="" />
      </div>
    </div>
  );
};

export default Leftcontent;
