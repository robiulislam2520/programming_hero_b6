import React from "react";
import clock from '../../assets/icons/clock.svg';
import location from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Features = () => {
  return (
    <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-1 pt-20 text-white pb-20">
      <div className="feature bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] px-6 py-10 rounded-lg flex gap-6">
        <img src={clock} alt="clock" />
        <div className="features_body">
            <h2 className="text-lg font-semibold">Opening Hours</h2>
            <p className="text-base pr-2">Lorem Ipsum is simply dummy text of the pri</p>
        </div>
      </div>
      <div className="feature bg-[#3A4256] px-6 py-10 rounded-lg flex gap-6">
        <img src={location} alt="clock" />
        <div className="features_body">
            <h2 className="text-lg font-semibold">Visit our location</h2>
            <p className="text-base pr-2">Brooklyn, NY 10036, United States</p>
        </div>
      </div>
      <div className="feature bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] px-6 py-10 rounded-lg flex gap-6">
        <img src={phone} alt="clock" />
        <div className="features_body">
            <h2 className="text-lg font-semibold">Contact us now</h2>
            <p className="text-base pr-2">+000 123 456789</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
