import React, { useState } from 'react';
import Calendars from 'react-calendar';
import "react-datepicker/dist/react-datepicker.css";
import 'react-calendar/dist/Calendar.css';
const Calendar = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className='flex justify-center items-center h-[70vh]'>
            <Calendars onChange={onChange} className='w-full' value={value} />
        </div>
    );
};

export default Calendar;