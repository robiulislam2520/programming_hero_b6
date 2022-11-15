import React from 'react'
import MyAppointmentTable from './MyAppointmentTable'

const MyAppointment = () => {
  return (
    <div>
      <div className="header flex justify-between items-center">
        <h1 className="text-2xl font-semibold">My Appointment</h1>
        <button className='rounded-lg px-4 py-2 border border-slate-900 hover:bg-slate-900 hover:text-white transition duration-300'>May 24, 2022</button>
      </div>
      <MyAppointmentTable/>
    </div>
  )
}

export default MyAppointment