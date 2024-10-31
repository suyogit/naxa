import React from "react";

const Rightcontent = () => {
  return (
    <div className="flex max-w-[1380px] mx-auto px-7 my-20 flex-wrap justify-evenly ">
     <div className="max-w-[440px] my-32 align-middle ">
     <img
        src="https://admin.naxa.com.np/media/pics/Service-img-1.png"
        className=""
        alt=""
      />
     </div>
     
      <div className="content max-w-[682px]  p-4 ">
        <img className=" max-w-[70px] my-8 mx-auto lg:mx-0"
          src="https://admin.naxa.com.np/media/pics/Services-icon5.svg"
          alt=""
        />
        <div className=" text-4xl font-semibold mb-8 text-center lg:text-left">Software & Apps Development</div>
        <div className="title-content mb-8 text-center lg:text-left">
          We build digital applications to provide digital solutions that
          contribute to efficient data collection and visualization focusing
          mainly on geodata collection and visualization.
        </div>
        <div className="maincontent bg-customitem p-5 mb-12 text-center lg:text-left">
          We develop digital software solutions ensuring smooth performances and
          user experiences across all modern platforms and devices. Whether it's
          a digital application for a private organization or a set of software
          solutions for development organizations, we offer support for the full
          lifecycle of the software development process that includes system
          design, development, testing, deployment, handover, and support, these
          activities are conducted with world-class product design and
          development practices.
          <p>
          Our services include building custom Android and
          iOS applications, web applications, and tools. We are particularly
          strong in customizing open-source applications such as ODKCollect and
          KoboCollect and building advanced GIS Applications. We specialize in
          delivering large-scale projects in challenging environments on short
          timelines. We build products that allow efficient data management, aid
          in e-governance, and data analysis, visualization of both spatial and
          demographic datasets by integrating open standards, and advanced
          software development frameworks and tools. This has allowed our
          customers to make informed data-driven decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rightcontent;
