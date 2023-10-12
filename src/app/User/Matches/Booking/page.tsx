"use client";

import Navigation from "@/components/Navigation";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function Booking({
  searchParams,
}: {
  searchParams: {
    team1: string;
    team2: string;
    date:string;
    time:string;
  };
}) {
  console.log(searchParams.team1);

  return (
    <div>
      {/* Navigation */}
      <Navigation />

      {/**rest of the body  */}
      <div className="flex flex-1 flex-col h-screen">
        <div className="grid grid-rows-2 md:grid-cols-2  p-4 ">
          <div className="w-full flex items-center justify-center ">
            <div className="grid grid-rows-3 place-items-center w-80 h-80 bg-gray-100 border p-4">
              {/* header */}
              <h1 className="text-lg font-light text-gray-600">
                Sierra Leone Premiership
              </h1>

              {/* flag */}
              <div className="flex  items-center justify-center gap-4">
                {/* team 1 */}
                <div className="grid place-items-center">
                  <img src="/countries/portugal.png" />
                  <h1>{searchParams.team1}</h1>
                </div>
                <div className="text-lg font-light text-gray-600">vs</div>
                {/* team 2 */}
                <div className="grid place-items-center">
                  <img src="/countries/spain.png" />
                  <h1>{searchParams.team2}</h1>
                </div>
              </div>

              <div className="w-9/12">
                <h1 className="text-gray-500">{searchParams.date}</h1>
                <h1 className="text-gray-500">{searchParams.time}</h1>
                </div>
            </div>
          </div>
          
          <div className="w-full  flex items-center justify-center p-4">
            <div className="grid grid-rows-3 place-items-center w-80 h-80  bg-gray-100">

                <h1 className="text-lg font-light text-gray-600">Billing Details</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
