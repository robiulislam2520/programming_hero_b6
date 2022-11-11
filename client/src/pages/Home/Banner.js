import React from "react";
import chair from "../../assets/images/chair.png";
import PrimaryButton from "../../components/PrimaryButton";

const Banner = () => {
  return (
    <div className="hero hero_bg py-40">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="w-1/2 shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold text-[#3A4256]">
            Your New Smile Starts Here
          </h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
         <PrimaryButton>Get Stared</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
