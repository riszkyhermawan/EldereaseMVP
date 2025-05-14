import Notch from "./Notch";

const DailyPlan = () => {
  return (
    <div className="w-[420px] h-[482px] relative overflow-hidden ml-8">
      <div className="w-9 h-9 left-[383px] top-0 absolute bg-forest-green rounded-full z-100" />
      <div className="w-full h-[481px] left-[1px] top-[1px] absolute bg-white rounded-[19px]" />
      <Notch />
      <div className="w-96 left-[24px] top-[19px] absolute inline-flex flex-col justify-start items-start gap-8">
        <div className="self-stretch justify-start text-forest-green text-4xl font-bold ">
          Daily Plan{" "}
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-3">
          <div className="self-stretch p-6 bg-light-green rounded-lg inline-flex justify-between items-center">
            <div className="flex justify-start items-center gap-4">
              <img className="w-12 h-12" src="/Icon/Movement.svg" />
              <div className="justify-start text-forest-green text-2xl font-normal ">
                1 Movement
              </div>
            </div>
            <div className="w-9 h-9 rounded-full border-[3px] border-forest-green text-forest-green" />
          </div>
          <div className="self-stretch p-6 bg-light-green rounded-lg inline-flex justify-between items-center">
            <div className="flex justify-start items-center gap-4">
              <img className="w-12 h-12" src="/Icon/Reminder.svg" />
              <div className="justify-start text-forest-green text-2xl font-normal ">
                1 Reminder
              </div>
            </div>
            <div className="w-9 h-9 rounded-full border-[3px] border-forest-green text-forest-green" />
          </div>
          <div className="self-stretch p-6 bg-light-green rounded-lg inline-flex justify-between items-center">
            <div className="flex justify-start items-center gap-4">
              <img className="w-12 h-12" src="/Icon/CheckIn.svg" />
              <div className="justify-start text-forest-green text-2xl font-normal ">
                1 Check In
              </div>
            </div>
            <div className="w-9 h-9 rounded-full border-[3px] border-forest-green text-forest-green" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyPlan;
