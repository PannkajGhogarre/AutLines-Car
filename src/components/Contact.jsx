import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Contact = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h2 className="text-2xl font-semibold mb-4">Select a Date</h2>
      <div className="border-2 border-gray-300 rounded-lg shadow-lg p-4">
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          className="text-center"
        />
      </div>
      <p className="mt-4 text-lg text-gray-700">
        Selected Date: {selectedDate.toLocaleDateString()}
      </p>
    </div>
  );
};

export default Contact;
