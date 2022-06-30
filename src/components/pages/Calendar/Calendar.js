import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            <div>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
        </div>
    );
};

export default Calendar;