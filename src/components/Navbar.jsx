

const Navbar = () => {
  return (
    <div className="w-[1200px] py-6 inline-flex justify-between items-center">
      <div className="flex justify-center items-center gap-2.5">
        <div className="text-center justify-start text-forest-green text-4xl font-bold font-display">
          Elderease
        </div>
      </div>
      <div className="flex justify-start items-center gap-2">
        <div className="p-4 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-gray-600 flex justify-start items-center overflow-hidden">
          <div className="w-6 h-6 relative bg-white/0 overflow-hidden">
            <img src="/Icon/Bell.svg" alt="Bell Icon" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
