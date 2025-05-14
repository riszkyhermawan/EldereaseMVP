import Notch from "./Notch";


const Weather = () => {
    return (
      <div className="w-96 h-60 relative ml-12 ">
        <div className="w-96 h-60 left-[1px] top-0 right-0 absolute bg-white rounded-[19px]" />
        <Notch />
        <img
          className=" absolute w-48  left-8 top-16 rounded-[19px]"
          src="/image/Weather.png"
        />

        <div className="left-[22px] top-[10px] absolute justify-start text-gray-600 text-4xl font-bold font">
          Weather Today
        </div>
        <div className="left-[250px] top-[91px] absolute justify-start text-gray-600 text-6xl font-bold ">
          30°
        </div>
        <div className="left-[240px] top-[173px] absolute justify-start text-gray-600 text-base font-normal leading-snug">
          Sunny and Cloudy
        </div>
        <div className="w-9 h-9 left-[350px] top-0 absolute bg-forest-green rounded-full z-30" />
      </div>
    );
    }

export default Weather;