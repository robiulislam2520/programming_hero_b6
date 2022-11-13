import React from "react";
import chair from "../../assets/images/chair.png";
import Calender from "./Calender";

const AppointmentBanner = ({selected, setSelected}) => {
  return (
    <div className="hero hero_bg py-28">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between">
        <img src={chair} className="w-1/2 shadow-2xl" alt="" />
        <Calender selected={selected} setSelected={setSelected}/>
      </div>
    </div>
  );
};

export default AppointmentBanner;
