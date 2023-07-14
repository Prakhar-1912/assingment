import React from "react";

const Schedule = () => {
  return (
    <div className="bg-white rounded-2xl p-3 m-1 w-1/2">
      <span className="text-xl font-semibold">Today's Schedule</span>
      <div className="p-2">
        <div className="m-2 border border-l-[3px] border-l-green-600 border-y-white border-r-white pl-2">
          <p className="text-base font-medium">Meeting with suppliers from Kuta Bali</p>
          <p className="text-sm">14:00-15:00</p>
          <p className="text-sm">at Sunset Road, Kuta, Bali</p>
        </div>
        <div className="m-2 border border-l-[3px] border-l-purple-800 border-y-white border-r-white pl-2">
          <p className="text-base font-medium">Check operations of Giga Factory 1</p>
          <p className="text-sm">18:00</p>
          <p className="text-sm">at Central Jakarta</p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
