const FunFact2 = () => {
    return (
      <div className="w-80 h-72 p-4 bg-light-green rounded-xl inline-flex flex-col justify-center items-start gap-2.5">
        <img
          className="self-stretch flex-1 rounded-lg"
          src="/image/FunFact2.png"
        />
        <div className="self-stretch flex flex-col justify-start items-start">
          <div className="self-stretch justify-start text-forest-green text-4xl font-bold ">
            Fun Fact:
          </div>
          <div className="self-stretch justify-start text-forest-green text-2xl font-normal">
            Walking boosts memory in older adults! 🧠🚶‍♂️
          </div>
        </div>
      </div>
    );
    }

export default FunFact2;