import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import Weather from "../components/Weather";
import FunFact1 from "../components/FunFact1";
import DailyPlan from "../components/DailyPlan";

const Homepage = () => {
  return (
    <>
      <div className="w-screen bg-lavender-mist flex flex-col justify-center items-center m-auto font-display">
        <Navbar />
        <div className="w-[1200px] flex justify-space-between items-center mt-12">
          <Welcome />
          <Weather />
        </div>
        <div className="w-[1200px] flex justify-space-between items-center mt-12">
          <FunFact1 />
          <DailyPlan />
        </div>
      </div>
    </>
  );
};

export default Homepage;
