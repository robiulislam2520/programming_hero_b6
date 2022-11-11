import React from "react";
import treatment from "../../assets/images/treatment.png";

const Experimental = () => {
  return (
    <div className="hero py-20">
      <div className="hero-content flex-col lg:flex-row-reverse gap-20">
        <div>
          <h2 className="text-5xl font-bold text-[#3A4256]">
            Exceptional Dental Care, on Your Terms
          </h2>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn btn-primary border-0 bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]">
            Get Started
          </button>
        </div>
        <img src={treatment} className="w-1/2 rounded-lg" />
      </div>
    </div>
  );
};

export default Experimental;
