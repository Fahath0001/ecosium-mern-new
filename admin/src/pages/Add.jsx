import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


// 🔵 Your custom image icon (replace with your own image)
const customIcon = new L.Icon({
    iconUrl: '../vite.svg', // place image in public/ folder or import it
    iconSize: [40, 40],         // size of the icon
    iconAnchor: [20, 40],       // point of the icon which will correspond to marker's location
    popupAnchor: [0, -40]       // point from which the popup should open relative to the iconAnchor
  });
  
  const DraggableMarker = ({ position, setPosition }) => {
    const markerRef = useRef(null);
  
    const eventHandlers = {
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
        }
      },
    };
  
    return (
      <Marker
        draggable={true}
        eventHandlers={eventHandlers}
        position={position}
        icon={customIcon}
        ref={markerRef}
      >
        <Popup>
          Lat: {position.lat.toFixed(5)} <br />
          Lng: {position.lng.toFixed(5)}
        </Popup>
      </Marker>
    );
  };
function Add() {

    const [position, setPosition] = useState({ lat: 25.276987, lng: 55.296249 }); // Default Dubai
    return (
        <form className='w-[calc(100%-350px)] flex flex-col items-start pl-[80px] pt-[50px] h-auto bg-white'>
            <div className='w-auto flex flex-col justify-center items-start gap-[20px] mb-[20px]'>
                <h1 className='text-2xl font-semibold'>Add Your Event</h1>
                <div className='w-auto h-auto items-start justify-center flex flex-col'>
                    <p className='text-lg font-normal'>
                        Event Name
                    </p>
                    <input type="text" className='w-[400px] h-[35px] border-[1px] border-black pl-4' placeholder='Enter your Event Name' />

                </div>
                <div className='w-auto h-auto items-start justify-center flex flex-col gap-[10px]'>
                    <p className='text-lg font-normal'>
                        Event Date and Time
                    </p>
                    <div className='items-center justify-start flex gap-10'>
                        <div className='items-center justify-start flex gap-3'>
                            <label className='text-lg'>
                                Date:
                            </label>
                            <input type="date" className='w-auto h-[35px] border-[1px] border-black pl-4' placeholder='Enter your Event Name' />
                        </div>
                        <div className='items-center justify-start flex gap-3'>
                            <label className='text-lg'>
                                Starting Time:
                            </label>
                            <input type="time" className='w-auto h-[35px] border-[1px] border-black pl-4' placeholder='Enter your Event Name' />
                        </div>
                        <div className='items-center justify-start flex gap-3'>
                            <label className='text-lg'>
                                End Time Time:
                            </label>
                            <input type="time" className='w-auto h-[35px] border-[1px] border-black pl-4' placeholder='Enter your Event Name' />
                        </div>

                    </div>

                </div>
                <div className='w-auto h-auto items-start justify-center flex flex-col'>
                    <p className='text-lg font-normal'>
                        Event Details
                    </p>
                    <textarea
                        className="w-[760px] h-[180px] border border-black pl-4"
                        placeholder="Enter your Event Name"
                    />
                </div>
                <div className='w-auto h-auto items-start justify-center flex flex-col'>
                    <p className='text-lg font-normal'>
                        Artist's
                    </p>
                    <input type="text" className='w-[400px] h-[35px] border-[1px] border-black pl-4' placeholder='Search Artist Name' />
                </div>
                <div className='w-auto h-auto items-start justify-center flex flex-col'>
                    <p className='text-lg font-normal'>
                        Location
                    </p>
                    <input type="text" className='w-[400px] h-[35px] border-[1px] border-black pl-4' placeholder='Enter Evevn locan url' />
                </div>

                <div className='z-0'>
                    <MapContainer className='z-0' center={position} zoom={12} style={{ height: '400px', width: '800px' }}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <DraggableMarker position={position} setPosition={setPosition} />
                    </MapContainer>

                    <div style={{ marginTop: '10px' }}>
                        <strong>Latitude:</strong> {position.lat.toFixed(5)} <br />
                        <strong>Longitude:</strong> {position.lng.toFixed(5)}
                    </div>
                </div>

                {/*
                    Last
                */}
            </div>
            <div className='w-auto flex flex-col justify-center items-start gap-[20px]'>
                <p className='text-lg font-normal'>
                    Upload Images
                </p>
                <div className='w-auto flex items-start justify-start flex-wrap gap-6'>
                    <label htmlFor="image1">
                        <img className='w-[150px]' src="../assets/images/upload_area.png" alt="" />
                        <input type="file" id="image1" hidden />
                    </label>
                    <label htmlFor="image2">
                        <img className='w-[150px]' src="../assets/images/upload_area.png" alt="" />
                        <input type="file" id="image2" hidden />
                    </label>
                    <label htmlFor="image3">
                        <img className='w-[150px]' src="../assets/images/upload_area.png" alt="" />
                        <input type="file" id="image3" hidden />
                    </label>
                    <label htmlFor="image4">
                        <img className='w-[150px]' src="../assets/images/upload_area.png" alt="" />
                        <input type="file" id="image4" hidden />
                    </label>
                    <label htmlFor="image5">
                        <img className='w-[150px]' src="../assets/images/upload_area.png" alt="" />
                        <input type="file" id="image5" hidden />
                    </label>
                    <label htmlFor="image6">
                        <img className='w-[150px]' src="../assets/images/upload_area.png" alt="" />
                        <input type="file" id="image6" hidden />
                    </label>
                    <label htmlFor="image7">
                        <img className='w-[150px]' src="../assets/images/upload_area.png" alt="" />
                        <input type="file" id="image7" hidden />
                    </label>
                    <label htmlFor="image8">
                        <img className='w-[150px]' src="../assets/images/upload_area.png" alt="" />
                        <input type="file" id="image8" hidden />
                    </label>
                    <label htmlFor="image9">
                        <img className='w-[150px]' src="../assets/images/upload_area.png" alt="" />
                        <input type="file" id="image9" hidden />
                    </label>
                    <label htmlFor="image10">
                        <img className='w-[150px]' src="../assets/images/upload_area.png" alt="" />
                        <input type="file" id="image10" hidden />
                    </label>

                </div>
            </div>
        </form>
    )
}

export default Add