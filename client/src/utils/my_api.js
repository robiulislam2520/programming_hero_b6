import toast from "react-hot-toast";

// base url `${url}/`
const url = 'http://localhost:5000'


export const getAppointments = async () =>{
    const res = await fetch(`${url}/appointments`);
    const data = await res.json();
    return data;
}

export const postBookings = async (bookings, refetch) =>{
    const res = await fetch(`${url}/bookings`, {
        method: 'POST',
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(bookings)
    })
    const data = await res.json();
    if(data.acknowledged){
        toast.success("Booking confirmed!!")
        refetch()
    } else{
        toast.error("Already You Booked")
    }
}