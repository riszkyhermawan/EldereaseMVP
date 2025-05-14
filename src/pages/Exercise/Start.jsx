import Navbar from "../../components/Navbar";
import { Navigate, useNavigate } from "react-router-dom";

const Start = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className="w-screen min-h-screen bg-lavender-mist flex flex-col justify-between items-center m-auto font-display pb-24">
        <div className="w-screen h-screen overflow-hidden fixed -z-10">
          <div className="w-[1477px] h-[1477px] left-[169px] top-[-342px] absolute bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_rgba(149.36,_252.55,_202.10,_0.31)_0%,_rgba(237,_235,_250,_0.31)_100%)] rounded-full" />
          <div className="w-[1477px] h-[1477px] left-[-747px] top-[512px] absolute bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_rgba(149.36,_252.55,_202.10,_0.31)_0%,_rgba(237,_235,_250,_0.31)_100%)] rounded-full" />
        </div>
        <Navbar />
        <div className="w-[1169px] inline-flex flex-col justify-center items-center gap-16">
          <div className="self-stretch flex flex-col justify-center items-center gap-12">
            <div className="w-[510px] flex flex-col justify-center items-start gap-4">
              <div className="self-stretch justify-center text-forest-green text-6xl font-bold">
                Let’s get Started
              </div>
              <div className="self-stretch text-center justify-center text-forest-green text-4xl font-bold">
                We will do a simple movements today
              </div>
            </div>
            <div className="self-stretch inline-flex justify-between items-center m-auto">
              <div className="w-96 p-6 bg-white rounded-xl inline-flex flex-col justify-center items-start gap-6">
                <div className="p-2 bg-light-green rounded-lg inline-flex justify-start items-center gap-24">
                  <img className="w-9 h-9" src="/Icon/ExerciseNow.svg" />
                </div>
                <img
                  className="self-stretch h-96 rounded-lg"
                  src="/image/exercise.png"
                />
                <div className="self-stretch inline-flex justify-between items-center">
                  <div className="justify-start text-forest-green text-4xl font-bold">
                    Arm Stretch
                  </div>
                  <img className="w-12 h-12" src="/Icon/mainArrow.svg" />
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => navigate("/exercise/arm-stretch")}
            className="h-20 px-6 py-4 bg-forest-green rounded-lg inline-flex justify-center items-center gap-6"
          >
            <div className="justify-start text-violet-100 text-4xl font-bold">
              Start Exercising Now
            </div>
            <img className="w-12 h-12" src="/Icon/ArrowWhite.svg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Start;
