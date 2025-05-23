import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Cart = () => {
  const [cardNumber, setCardNumber] = useState('');

  const handleCardNumberChange = (e) => {
    const onlyNums = e.target.value.replace(/\D/g, '').slice(0, 16);
    setCardNumber(onlyNums);
  };

  return (
    <div className='w-full h-auto items-center justify-center flex flex-col py-[30px]'>
      <h1>Check Out</h1>

      <div className="w-[80%] h-auto items-center justify-center flex gap-[30px]">
        {/* Order Summary */}
        <div className="w-[calc(100%-550px)] py-[30px] items-start justify-center flex flex-col gap-[30px]">
          <h2 className='w-full text-2xl font-medium text-star'>
            Order summary
          </h2>
          <div className="w-full h-auto items-center justify-center flex flex-col rounded-[15px] border-[2px] border-gray-300 overflow-hidden">
            <div className='w-full aspect-[16/9] bg-gray-500 [border-radius:15px_15px_0_0] overflow-hidden'>
              <img className='w-full h-[100%] object-cover' src={assets.E13} alt="" />
            </div>
            <div className='w-full p-[30px] gap-[15px] flex flex-col'>
              <h2 className='w-full text-xl font-semibold text-star'>Event Name</h2>
              <p>MMA’s biggest night hits Dubai: 971FC brings elite global talent to Coca-Cola Arena.</p>
            </div>
            {/* Ticket Details */}
            <div className='w-full items-start justify-between flex gap-[30px] p-[30px]'>
              <div className="w-[45%] py-[30px] items-center justify-center flex flex-col gap-[5px] border-[1px] border-gray-300  rounded-lg flex-grow">
                <div className="w-[90%] h-auto items-center justify-between flex">
                  <p className='text-lg font-semibold'>
                    Seat Number
                  </p>
                  <p className='text-lg font-font-medium'>
                    R-14
                  </p>
                </div>
                <div className="w-[90%] h-auto items-center justify-between flex">
                  <p className='text-lg font-semibold'>
                    Date
                  </p>
                  <p className='text-lg font-font-medium'>
                    16/06/2025
                  </p>
                </div>
                <div className="w-[90%] h-auto items-center justify-between flex">
                  <p className='text-lg font-semibold'>
                    Time
                  </p>
                  <p className='text-lg font-medium'>
                    4:00 PM
                  </p>
                </div>
              </div>
              <div className="w-[45%] py-[30px] items-center justify-center flex flex-col gap-[5px] border-[1px] border-gray-300 rounded-lg flex-grow">
                <div className="w-[90%] h-auto items-center justify-between flex">
                  <p className='text-lg font-semibold'>
                    Number of tickes
                  </p>
                  <p className='text-lg font-font-medium'>
                    2
                  </p>
                </div>
                <div className="w-[90%] h-auto items-center justify-between flex">
                  <p className='text-lg font-semibold'>
                   location
                  </p>
                </div>
                 <div className="w-[60%] h-auto items-center justify-between flex">
                 
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Payment Section */}
        <div className='w-[550px] py-[50px] items-end justify-start flex flex-col gap-[15px]'>
          <h2 className='w-[90%] text-2xl font-medium text-star'>
            Card
          </h2>
          <div className="w-[90%] items-center justify-center flex flex-col gap-[30px]">
            {/* Card Number */}
            <div className="w-full items-start justify-start flex flex-col">
              <label className='text-lg font-medium'>Card Number</label>
              <input
                type="text"
                inputMode="numeric"
                value={cardNumber}
                onChange={handleCardNumberChange}
                className="w-full h-auto px-[30px] py-[5px] border-[1px] border-gray-950 outline-none"
                placeholder="Enter 16-digit number"
              />
            </div>

            <div className='w-full items-center justify-between flex gap-[30px]'>
              {/* Date */}
              <div className="w-auto items-start justify-start flex flex-col">
                <label className='text-lg font-medium'>Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full h-auto px-[30px] py-[5px] border-[1px] border-gray-950 outline-none"
                  maxLength={4}
                />
              </div>

              {/* CVV */}
              <div className="w-auto items-start justify-start flex flex-col">
                <label className='text-lg font-medium'>CVV</label>
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={3}
                  className="w-full h-auto px-[30px] py-[5px] border-[1px] border-gray-950 outline-none"
                  placeholder="3-digit CVV"
                />
              </div>
            </div>
            {/* Card Holder Name */}
            <div className="w-full items-start justify-start flex flex-col">
              <label className='text-lg font-medium'>Card Holder Name</label>
              <input
                type="text"
                className="w-full h-auto px-[30px] py-[5px] border-[1px] border-gray-950 outline-none"
                placeholder="John Doe"
              />
            </div>
            {/* Send ticket */}

            <div className="w-full  items-center justify-start flex gap-[20px] mt-[20px]">
              <input type="radio" className='w-[20px] h-[20px]' />
              <h2>
                Sent Ticket by WhatsApp
              </h2>
            </div>
            <div className="w-full  items-center justify-start flex gap-[20px]">
              <input type="radio" className='w-[20px] h-[20px]' />
              <h2>
                Sent Ticket by SMS
              </h2>
            </div>
            <div className="w-full  items-center justify-start flex gap-[20px]">
              <input type="radio" className='w-[20px] h-[20px]' />
              <h2>
                Sent Ticket by Email
              </h2>
            </div>
            {/* Ticket Price details */}
            <div className='w-full py-[30px] px-[40px] border-[1px] border-gray-300 rounded-[10px] items-center justify-center flex flex-col gap-[10px]'>
              <div className="w-full items-center justify-between flex">
                <p className='text-lg font-medium'>
                  Sub Total
                </p>
                <p className='text-lg font-medium'>
                  120.00
                </p>
              </div>
              <div className="w-full items-center justify-between flex">
                <p className='text-lg font-medium'>
                  Discounts
                </p>
                <p className='text-lg font-medium'>
                  0.00
                </p>
              </div>
              <div className="w-full items-center justify-between flex">
                <p className='text-lg font-bold text-primary'>
                  Grand Total
                </p>
                <p className='text-lg font-bold text-primary'>
                  120.00
                </p>
              </div>
              <button className='w-[80%] bg-primary py-[10px] rounded-[10px] mt-[10px] text-xl text-white font-semibold'>
                Pay 120.00
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
