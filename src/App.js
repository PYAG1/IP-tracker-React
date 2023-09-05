import { useState } from "react";
import arrow from "./assets/icon-arrow.svg";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';




function App() {
  const [state1, setState1] = useState(0);
  const center = [51.505, -0.09];
  return (
    <div className=" w-full min-h-full overflow-hidden">
      <section className=' w-full   bg-[url("/src/assets/pattern-bg-mobile.png")] max-h-[40vh] bg-no-repeat bg-cover md:bg-[url("/src/assets/pattern-bg-desktop.png")] md:h-[33vh] z-[99] '>
        <div className=" w-full text-center p-4 flex flex-col justify-center items-center z-50">
          <p className=" text-3xl font-semibold text-white py-[1em]">
            IP Address Tracker
          </p>

          <div className=" w-full flex h-[3.5em] rounded-[10px] lg:w-[50vw]  ">
            <input
              type="text"
              className="  rounded-tl-[10px] p-2 rounded-bl-[10px] w-[85%] h-full"
              placeholder="Search for any IP address or domain"
            />
            <button className=" w-[19%] bg-[black] h-full rounded-tr-[10px]  rounded-br-[10px] text-white justify-center items-center flex ">
              <img src={arrow} alt="arrow" />
            </button>
          </div>

          <div className=" w-full  box-shadow mt-[2em] rounded-[15px] relative z-40 bg-white lg:flex lg:max-w-[80vw] lg:h-[6em]">
            <div className=" w-full text-center p-4  h-[5em]  lg:h-full">
              <p className=" text-sm text-black">IP ADDRESS</p>
              <p className=" text-2xl text-black font-semibold">{state1}</p>
            </div>

            <div className=" w-full text-center p-4  h-[5em] lg:h-full">
              <p className=" text-sm text-black">LOCATION</p>
              <p className=" text-2xl text-black font-semibold">{state1}</p>
            </div>

            <div className=" w-full text-center p-4  h-[5em] lg:h-full">
              <p className=" text-sm text-black">IMEZONE</p>
              <p className=" text-2xl text-black font-semibold">{state1}</p>
            </div>

            <div className=" w-full text-center p-4  h-[5em] lg:h-full">
              <p className=" text-sm text-black">ISP</p>
              <p className=" text-2xl text-black font-semibold">{state1}</p>
            </div>
          </div>
      
        </div>
   
      </section>
      
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className=" w-full min-h-[50vh] overflow-hidden">
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>

    </div>

    
  );
}

export default App;
