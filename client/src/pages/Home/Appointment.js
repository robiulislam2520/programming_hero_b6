import React from "react";
import doctor from "../../assets/images/doctor-small.png";
import {Link} from 'react-router-dom'

const Appointment = () => {
  return (
    <div className="hero appointment_bg text-white my-20 rounded-lg">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <p className="text-2xl font-bold uppercase mb-4 text-[#19D3AE]">
            Appointment
          </p>
          <h2 className="text-5xl font-bold">Make an appointment Today</h2>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <Link to='/appointment'>
            <button className="btn btn-primary border-0 bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]">
              Get Appointment
            </button>
          </Link>
        </div>
        <img src={doctor} className="w-1/2 -mt-28 -mb-4" alt="" />
      </div>
    </div>
  );
};

export default Appointment;
