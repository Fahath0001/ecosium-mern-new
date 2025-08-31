import React, { useState, forwardRef, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';


import { ThreeDots } from 'react-loader-spinner';

import { ClipLoader } from 'react-spinners';



const CalendarIconInput = forwardRef(({ value, onClick }, ref) => (
  <button onClick={onClick} ref={ref} style={{ background: 'none', border: 'none' }}>
    <FaCalendarAlt size={24} color="#555" />
  </button>
));





const AddArtist = ({ token }) => {


  const [selectedDate, setSelectedDate] = useState(null);
  const [value, setValue] = useState('');
  console.log(value);


  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [period, setPeriod] = useState("AM");

  const minutesRef = useRef(null);

  const handleHoursChange = (e) => {
    let val = e.target.value;
    // Only allow max 2 digits and numeric only
    if (/^\d{0,2}$/.test(val)) {
      setHours(val);
      // If length is 2, move focus to minutes input
      if (val.length === 2) {
        minutesRef.current.focus();
      }
    }
  };

  const handleMinutesChange = (e) => {
    let val = e.target.value;
    // Only allow max 2 digits and numeric only and max 59
    if (/^\d{0,2}$/.test(val)) {
      if (val === "" || (parseInt(val) >= 0 && parseInt(val) <= 59)) {
        setMinutes(val);
      }
    }
  };

  const handlePeriodChange = (e) => {
    setPeriod(e.target.value);
  };


  return (
    <div className='w-full h-auto items-center justify-start flex flex-col'>

      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        className='w-[500px]'
        placeholder="Start typing here..."  // ✅ Add placeholder text
      />


      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        customInput={<CalendarIconInput />}
        dateFormat="yyyy-MM-dd"
      />

      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        visible={true}
      />


      <ClipLoader color="#36d7b7" size={50} />
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <input
          type="number"
          placeholder="HH"
          value={hours}
          onChange={handleHoursChange}
          min={1}
          max={12}
          style={{ width: "40px", textAlign: "center" }}
        />
        :
        <input
          type="number"
          placeholder="MM"
          value={minutes}
          onChange={handleMinutesChange}
          ref={minutesRef}
          min={0}
          max={59}
          style={{ width: "40px", textAlign: "center" }}
        />
        <select value={period} onChange={handlePeriodChange}>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>


    </div>



  )
}

export default AddArtist