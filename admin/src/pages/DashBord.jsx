import React, { useRef, useState } from 'react';
import { useEffect } from 'react';

function DashBord({ token, partners }) {
  const today = new Date().toISOString().split('T')[0]; // "YYYY-MM-DD"
  const [selectedDate, setSelectedDate] = useState(today);
  const dateInputRef = useRef(null);
  const [showDateInput, setShowDateInput] = useState(false);


  const formatDate = (isoDate) => {
    if (!isoDate) return '';
    const [year, month, day] = isoDate.split('-');
    return `${day}/${month}/${year}`;
  };


  const handleIconClick = () => {
    setShowDateInput(true);
    dateInputRef.current?.showPicker?.(); // Modern browsers
    dateInputRef.current?.focus(); // Fallback
  };


  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    console.log('Selected Date:', e.target.value);
  };

  return (
    <>
      <div className='w-full items-center justify-start flex p-[30px]'>
        <div className="items-start justify-start flex flex-col gap-[10px]">
          <div className='w-full h-auto items-center justify-start flex gap-[10px]'>
            <h1 className='text-2xl'>
              Sales&nbsp;{formatDate(selectedDate)}
            </h1>


            <div className='relative inline-block'>
              <div className='w-[50px] h-[50px] items-center justify-center flex bg-slate-500'>
                <img
                  className='w-[20px] cursor-pointer'
                  type='button'
                  src='../.jpg'
                  alt="calendar"
                  onClick={handleIconClick}
                />
              </div>

              <input
                type="date"
                ref={dateInputRef}
                value={selectedDate}
                onChange={handleDateChange}
                style={{ display: 'none' }} // hide input from view
                className={`absolute top-full left-0 mt-2 w-[200px] bg-white p-2 border rounded shadow ${showDateInput ? 'block' : 'hidden'
                  }`}
              />

            </div>


          </div>

          <div className='w-full h-auto items-center justify-start flex gap-[10px]'>
            <div className="w-[330px] border-[1px] rounded-lg py-[15px] px-[10px] bg-[#c1fddb] items-center justify-center flex flex-col gap-[10px]">
              <p className='text-xl w-full text-start'>Event's</p>
              <p className='text-4xl w-full text-end'>
                200
              </p>
            </div>
            <div className="w-[330px] border-[1px] rounded-lg py-[15px] px-[10px] bg-[#f5e4ff] items-center justify-center flex flex-col gap-[10px]">
              <p className='text-xl w-full text-start'>Night Life</p>
              <p className='text-4xl w-full text-end'>3000</p>
            </div>
            <div className="w-[330px] border-[1px] rounded-lg py-[15px] px-[10px] bg-[#f8ffe4] items-center justify-center flex flex-col gap-[10px]">
              <p className='text-xl w-full text-start text-ellipsis text-nowrap'>Attraction</p>
              <p className='text-4xl w-full text-end'>3000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBord;
