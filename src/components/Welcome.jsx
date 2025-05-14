

const Welcome = () => {
    return (
      <div className="w-[728px] h-60 relative">
        <div className="w-[728px] h-60 left-0 top-[-3px] absolute bg-white rounded-[19px]" />
        <img
          className="w-64 h-80 left-[470px] top-[-80px] absolute"
          src="/image/avatar.png"
        />
        <div className="w-[510px] left-[29px] top-[19px] absolute inline-flex flex-col justify-start items-start gap-4">
          <div className="self-stretch justify-start text-gray-600 text-6xl font-bold ">
            Good morning!
          </div>
          <div className="self-stretch justify-start text-gray-600 text-4xl font-bold ">
            I missed you yesterday. Shall we do your exercises today?
          </div>
        </div>
      </div>
    );
    }

export default Welcome;