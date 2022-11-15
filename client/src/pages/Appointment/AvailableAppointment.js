import { format } from "date-fns";
import { useState } from "react";
import AppointmentCard from "./AppointmentCard";
import BookingModal from "./BookingModal";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading";

const AvailableAppointment = ({ selected }) => {
  const [treatment, setTreatment] = useState(null);

  const date = format(selected, "PP");

  const {
    data: appointmentOptions = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["appointments", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appointments?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  if(isLoading){
    return <Loading/>
  }

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
          refetch={refetch}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointment;
