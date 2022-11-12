import { format } from "date-fns";
import { useEffect, useState } from "react";
import AppointmentCard from "./AppointmentCard";
import BookingModal from "./BookingModal";

const AvailableAppointment = ({ selected }) => {
  const [treatment, setTreatment] = useState(null);
  const [appointmentOptions, setAppointmentOptions] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);

  return (
    <section className="my-20">
      <h2 className="text-xl text-[#19D3AE] font-bold text-center">
        Available Appointments on {format(selected, "PP")}
      </h2>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {appointmentOptions.map((treatment) => (
          <AppointmentCard
            key={treatment._id}
            appointmentOption={treatment}
            setTreatment={setTreatment}
          ></AppointmentCard>
        ))}
      </div>
      {treatment && (
        <BookingModal
          selected={selected}
          treatment={treatment}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointment;
