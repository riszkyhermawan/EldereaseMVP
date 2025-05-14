const ArmStretch = () => {
    return (
      <div className="w-[1169px] inline-flex flex-col justify-start items-center gap-14">
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
          <div className="inline-flex justify-start items-center gap-3.5">
            <div className="p-2 bg-emerald-50 rounded-lg flex justify-start items-center gap-24">
              <img className="w-9 h-9" src="https://placehold.co/36x36" />
            </div>
            <div className="justify-start text-gray-600 text-6xl font-bold font-['Quicksand']">
              Exercise: Squat
            </div>
          </div>
          <div className="inline-flex justify-start items-center gap-12">
            <img
              className="w-[567px] h-[522px] rounded-lg"
              src="https://placehold.co/567x522"
            />
            <div
              data-property-1="Default"
              className="w-[536px] h-[522px] relative"
            >
              <div className="w-[536px] h-[522px] left-0 top-0 absolute bg-emerald-50 rounded-lg" />
              <div className="w-36 h-36 left-[197px] top-[155px] absolute bg-white/0 overflow-hidden">
                <div className="w-28 h-24 left-[17.62px] top-[23.50px] absolute outline outline-8 outline-offset-[-4px] outline-gray-600" />
              </div>
              <div className="w-96 left-[56px] top-[322px] absolute text-center justify-start text-gray-600 text-4xl font-bold font-['Quicksand']">
                Open Your Camera to Start Exercise
              </div>
            </div>
          </div>
          <div className="inline-flex justify-start items-end gap-8">
            <div className="w-[905px] h-44 p-4 bg-emerald-50 rounded-xl inline-flex flex-col justify-center items-start gap-4">
              <div className="self-stretch justify-start text-gray-600 text-4xl font-bold font-['Quicksand']">
                Video Caption:
              </div>
              <div className="self-stretch justify-start text-gray-600 text-2xl font-normal font-['Open_Sans']">
                Start with your hands open
              </div>
            </div>
            <div className="w-56 p-4 bg-emerald-50 rounded-xl inline-flex flex-col justify-center items-center gap-4">
              <div className="w-24 h-24 relative bg-white/0 overflow-hidden">
                <div className="w-20 h-16 left-[8.33px] top-[19.53px] absolute outline outline-[5px] outline-offset-[-2.50px] outline-gray-600" />
              </div>
              <div className="self-stretch text-center justify-start text-gray-600 text-2xl font-normal font-['Open_Sans']">
                Voice Guide
              </div>
            </div>
          </div>
          <div className="self-stretch inline-flex justify-start items-start gap-12">
            <div className="w-[568px] p-4 bg-emerald-50 rounded-xl inline-flex flex-col justify-center items-start gap-4">
              <div className="self-stretch justify-start text-gray-600 text-4xl font-bold font-['Quicksand']">
                Tips:
              </div>
              <div className="self-stretch justify-start text-gray-600 text-2xl font-normal font-['Open_Sans']">
                Start slow, small movements.
                <br />
                Use a chair or wall for balance.
                <br />
                Keep feet shoulder-width apart.
                <br />
                Chest up, look forward.
                <br />
                Lower like sitting in a chair (not too deep at first).
                <br />
                Knees over ankles.
              </div>
            </div>
            <div className="w-[552px] p-4 bg-emerald-50 rounded-xl inline-flex flex-col justify-center items-start gap-4">
              <div className="self-stretch justify-start text-gray-600 text-4xl font-bold font-['Quicksand']">
                Benefits:
              </div>
              <div className="self-stretch justify-start text-gray-600 text-2xl font-normal font-['Open_Sans']">
                Stronger legs for walking.
                <br />
                Better balance to prevent falls.
                <br />
                Easier to get in and out of chairs.
                <br />
                Stronger bones.
                <br />
                Better blood flow.
                <br />
                Healthier joints.
              </div>
            </div>
          </div>
        </div>
        <div className="h-20 px-6 py-4 bg-gray-600 rounded-lg inline-flex justify-center items-center gap-6">
          <div className="justify-start text-violet-100 text-4xl font-bold font-['Quicksand']">
            Next Exercise
          </div>
          <div className="p-2.5 bg-white rounded-full flex justify-start items-center gap-2.5">
            <div className="w-6 h-6 relative bg-white/0 overflow-hidden">
              <div className="w-3 h-3 left-[5.64px] top-[5.64px] absolute outline outline-2 outline-offset-[-1px] outline-gray-600" />
            </div>
          </div>
        </div>
      </div>
    );
    }
export default ArmStretch;