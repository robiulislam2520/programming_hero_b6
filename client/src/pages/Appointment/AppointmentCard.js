import React from "react";

const AppointmentCard = ({ appointmentOption, setTreatment }) => {
  const { name, slots } = appointmentOption;
  return (
    <div className="card shadow-lg p-4">
      <div className="card-body text-center">
        <h2 className="text-2xl text-[#19D3AE] text-center font-semibold">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            htmlFor="booking-modal"
            className="btn btn-primary bg-[#19D3AE] hover:bg-[#0FCFEC] border-0 mt-4"
            onClick={() => setTreatment(appointmentOption)}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
