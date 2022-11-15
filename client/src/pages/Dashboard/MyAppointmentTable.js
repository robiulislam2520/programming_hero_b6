import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../context/AuthProvider";
import Loading from "../../components/Loading";
import toast from "react-hot-toast";

const MyAppointmentTable = () => {
  const { user } = useContext(AuthContext);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["my-appointment", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/bookings?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  //   handle delete booking
  const handleDeleteBooking = async (id) => {
    const isAgree = window.confirm("Are you agree to delete it?");

    if (isAgree) {
      const res = await fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (data.deletedCount > 0) {
        toast.success("Deleted Appointment");
        refetch();
      }
    }
  };

  // Calculate time

  return (
    <div className="overflow-x-auto mt-8">
      <table className="table w-full">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Service</th>
            <th>Time</th>
            <th>Due Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((service, index) => (
            <tr className="hover cursor-pointer" key={service._id}>
              <th>{index + 1}</th>
              <td>{user?.displayName}</td>
              <td>{service.treatment}</td>
              <td>{service.slot}</td>
              <td>
                {/* Calculate the due date
                    if(date === 0){
                        toady
                    } else if(date === 1){
                        24h
                    } else{
                        more days (2 days)
                    }
                */}
                {new Date(service.appointmentDate).getDate() -
                  new Date(service.bookingTime).getDate() ===
                0
                  ? " Today"
                  : new Date(service.appointmentDate).getDate() -
                      new Date(service.bookingTime).getDate() ===
                    1
                  ? " 24h"
                  : new Date(service.appointmentDate).getDate() -
                    new Date(service.bookingTime).getDate() +
                    " Days"}
              </td>
              <td className="flex items-center gap-3">
                <p className="text-blue-500 underline cursor-pointer text-lg font-semibold">
                  Edit
                </p>
                <button
                  className="btn btn-square btn-error btn-outline btn-sm"
                  onClick={() => handleDeleteBooking(service._id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAppointmentTable;
