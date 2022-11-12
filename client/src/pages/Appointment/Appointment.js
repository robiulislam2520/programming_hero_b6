import React, { useState } from 'react';
import useTitles from '../../hooks/useTitles';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
  const [selected, setSelected] = useState(new Date());
  // page title
  useTitles('Appointment');
  return (
    <div>
        <AppointmentBanner selected={selected} setSelected={setSelected}/>
        <AvailableAppointment selected={selected}/>
    </div>
  )
}

export default Appointment