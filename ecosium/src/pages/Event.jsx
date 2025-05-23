import React from 'react'
import { useParams } from 'react-router-dom';
import eventsData from '../assets/eventsData';
import Hero from '../components/Hero';
import { assets } from '../assets/assets';
import FormatDate from '../components/formatDate';
import AristCart from '../components/AristCart';
import NotFound from './NotFound';

const Event = () => {
  const { slug, id } = useParams();

  let dataSet;
  if (slug === "event") {
    dataSet = eventsData;
  } else {
    return <NotFound />;
  }

  const props = dataSet.find(element => element.id === parseInt(id));
  if (!props) return <NotFound />;

  return (
    <div className='w-full h-auto items-center justify-center flex flex-col'>
      <Hero heroData={props.heroImages} />
      <div className='w-[95%] sm:w-[92%] md:w-[90%] xl:w-[87%] xxl:w-[85%] xxxl:w-[80%] max-w-[1600px] items-start justify-between flex flex-col xxl:flex-row gap-[70px]'>
        {/* Details Main */}
        {/* Details Main */}
        {/* Details Main */}
        <div className='xxl:w-[65%] items-start justify-start flex flex-col gap-[10px] py-[40px]'>
          <h1 className='text-3xl font-bold'>
            {props.name}
          </h1>
          <h2 className='text-lg'>
            {props.tagLine}
          </h2>
          <div className='items-center justify-center flex gap-[10px]'>
            <img className='w-[14px]' src={assets.location} alt="" />
            <p className='text-lg text-primary'>
              {props.location.locationShort}
            </p>
          </div>
          {props.mainDetail && props.mainDetail.length > 0 && (
            <div className='w-full h-auto items-start justify-start flex flex-col gap-[6px]'>
              {props.mainDetail.map((detail, index) => (
                <p className='text-base text-justify' key={index}>{detail}</p>
              ))}
            </div>
          )}
          {props.eventPolicies && Object.keys(props.eventPolicies).length > 0 && (
            <div className='w-full h-auto items-start justify-start flex flex-col gap-[8px]'>
              <h1 className='pt-[10px] text-xl font-bold'>Event Policies</h1>
              {Object.entries(props.eventPolicies).map(([key, value], index) => (
                <div key={index} className='flex flex-col gap-[6px] pl-[10px]'>
                  <h2 className='text-lg font-medium capitalize'>
                    {key.replace(/([A-Z])/g, ' $1')}
                  </h2>
                  {value.map((item, idx) => (
                    <li className='text-base text-justify pl-[10px]' key={idx}>
                      {item}
                    </li>
                  ))}
                </div>
              ))}
            </div>
          )}

          <h1 className='py-[10px] text-xl font-bold'>
            Location
          </h1>
          <div className="map-container" style={{ width: '100%', height: '400px' }}>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7208.253434263881!2d55.4411062!3d25.4005686!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sae!4v1747508185499!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* Price Details */}
        {/* Price Details */}
        {/* Price Details */}
        <div className="w-full xxl:w-[35%] h-auto items-center justify-center flex flex-col py-[40px] gap-[50px]">
          <div className='w-full h-auto p-[20px] items-start justify-start flex flex-col border-[2px] border-gray-300 rounded-lg gap-[20px]'>
            {/* Time, Date & Price Details */}
            {/* Time, Date & Price Details */}
            {/* Time, Date & Price Details */}
            <div className="w-full items-center justify-between flex flex-col sm:flex-row gap-[60px] ">
              <div className='w-full items-center sm:items-start justify-center sm:justify-start flex flex-col'>
                <div className="w-full items-center sm:items-start justify-center sm:justify-start flex px-[8px] py-[5px] gap-[10px]">
                  <img className='w-[18px]' src={assets.calender} alt="Calender" />
                  <p className='text-md font-medium'>
                    <FormatDate dateString={props.priceDate[0].date} />
                  </p>
                </div>
                <div className="w-full items-center sm:items-start justify-center sm:justify-start flex px-[8px] py-[5px] gap-[10px]">
                  <img className='w-[18px]' src={assets.time} alt="Calender" />
                  {
                    props.priceDate[0].door ? (
                      <p className='text-md font-medium'>
                        Door:&nbsp;{props.priceDate[0].door}
                      </p>) : ""
                  }
                  {
                    props.priceDate[0].start ? (
                      <p className='text-md font-medium'>
                        Start:&nbsp;{props.priceDate[0].start}
                      </p>) : ""
                  }
                </div>
              </div>
              <div className="w-full h-auto items-center sm:items-end justify-center sm:justify-start flex flex-col gap-[6px]">
                <div className='items-center sm:items-start justify-center sm:justify-start flex'>
                  <img className='w-[24px]' src={assets.aed} alt="" />
                  <p className='text-3xl font-medium '>
                    {props.priceDate[0].now.toFixed(2)}
                  </p>
                </div>
                <p className='text-sm font-medium text-primary'>
                  (Price Starting From)
                </p>
              </div>
            </div>
            <hr className='w-full ' />
            {
              props.isBestSeatAvailable ? (
                <div className='w-full items-center justify-center flex'>
                  <p className='text-md text-purple-800'>
                    Best Seat's Available
                  </p>
                </div>
              ) : ""
            }
            <div className='w-full items-center justify-center flex '>
              <button className='w-[70%] bg-primary py-[12px] rounded-lg font-semibold text-white text-lg tracking-[1px] hover:tracking-[2px]' >
                Select Tickets
              </button>
            </div>
          </div>
          {/* Artist Details */}
          {/* Artist Details */}
          {/* Artist Details */}
          {
            props.artist && props.artist.length > 0 && (
              <div className='w-full h-auto p-[15px] items-start justify-start flex flex-col border-[2px] border-gray-300 rounded-lg gap-[20px]'>
                {
                  props.artist.map((artist, i) => (
                    <AristCart artist={artist} />
                  ))
                }
              </div>
            )
          }

        </div>
      </div>
    </div>
  );
}

export default Event;
