import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import Weather from "../components/Weather";
import FunFact1 from "../components/FunFact1";
import DailyPlan from "../components/DailyPlan";
import ExerciseHome from "../components/ExerciseHome";
import MoodCheckIn from "../components/MoodCheckIn";
import FunFact2 from "../components/FunFact2";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-screen bg-lavender-mist flex flex-col justify-center items-center m-auto font-display pb-24 ">
        <div className="w-screen h-screen overflow-hidden fixed -z-10">
          <div className="w-[1477px] h-[1477px] left-[169px] top-[-342px] absolute bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_rgba(149.36,_252.55,_202.10,_0.31)_0%,_rgba(237,_235,_250,_0.31)_100%)] rounded-full" />
          <div className="w-[1477px] h-[1477px] left-[-747px] top-[512px] absolute bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_rgba(149.36,_252.55,_202.10,_0.31)_0%,_rgba(237,_235,_250,_0.31)_100%)] rounded-full" />
        </div>
        <Navbar />
        <div className="w-[1200px] flex justify-between items-center mt-12">
          <Welcome />
          <Weather />
        </div>
        <div className="w-[1200px] flex justify-between items-center mt-12">
          <FunFact1 />
          <DailyPlan />
        </div>
        <div className="w-[1200px] flex justify-between items-center mt-12">
          <div onClick={() => navigate("/exercise")}> 
          <ExerciseHome />
          </div>
          <MoodCheckIn />
          <FunFact2 />
        </div>
      </div>
    </>
  );
};

export default Homepage;
