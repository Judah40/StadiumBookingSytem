"use client";

// pages/dashboard.tsx

import DashboardLayout from "@/components/DashboardLayout";
import { Graph } from "@/components/LineChart";

function DashboardPage() {



  
  const matchesData = [
    { date: '2023-01-01', team1: 'Spain', team2: 'France', score: '2-1' },
    { date: '2023-01-02', team1: 'PSG', team2: 'Monaco', score: '1-1' },
    { date: '2023-01-03', team1: 'Leeds', team2: 'Manchester United', score: '0-3' },
  ];
  return (
    <DashboardLayout>
      <div className="w-10/12 pt-12 ">
        <h1 className="text-xl font-light text-gray-500">Admin Dashboard</h1>
      </div>
      {/* Add your dashboard content here */}

      {/* header */}
      <div className="flex md:space-x-40 flex-col md:flex-row pt-4 ">
        {/* card1 */}
        <div className="border rounded-lg bg-blue-400 border-gray-300 shadow-lg w-80 h-60 flex flex-col p-4 space-y-4">
          <div>
            <h1 className="font-light text-gray-700">
              Total Number Of Tickets
            </h1>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-white">{"12"}</h1>
          </div>
          <div>
            <h1 className=" font-light text-gray-700">Total Price Expected</h1>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-white">
              {"Le12,000"}
            </h1>
          </div>
        </div>

        {/* card2 */}

        <div className="border rounded-lg bg-blue-400 border-gray-300 shadow-lg w-80 h-60 flex flex-col p-4 space-y-4">
          <div>
            <h1 className="font-light text-gray-700">
              Total Number Of Tickets left
            </h1>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-white">{"4"}</h1>
          </div>
          <div>
            <h1 className=" font-light text-gray-700">Total Price Expected</h1>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-white">{"Le2,000"}</h1>
          </div>
        </div>
        {/* card3 */}

        <div className="border rounded-lg bg-blue-400 border-gray-300 shadow-lg w-80 h-60 flex flex-col p-4 space-y-4">
          <div>
            <h1 className="font-light text-gray-700">
              Total Number Of Tickets Sold
            </h1>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-white">{"8"}</h1>
          </div>
          <div>
            <h1 className=" font-light text-gray-700">Total Price</h1>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-white">
              {"Le10,000"}
            </h1>
          </div>
        </div>
      </div>

      {/* past games */}
      <div className="grid grid-cols-1 md:grid-cols-3 pt-12 gap-4">
        <div className="grid md:col-span-2 bg-[url('/bg.jpg')] w-full h-80 rounded-xl border border-gray-500">
          <div className="flex flex-1 ">
            <div className="w-2/6 h-full flex ">
              <img src="/messi.png" alt="" className="w-52" />
            </div>

            <div className="w-2/6 h-full flex flex-col items-center justify-center">
              <img src="/cl.png" alt="" className="w-28 h-20" />
              <h1 className="text-white">Champions League</h1>

              <h1 className="text-white text-xl">Manchester United Vs PSG</h1>
              <h1 className="text-white text-xl font-thin">
                Sunday, 21st June 2024
              </h1>
            </div>

            <div className="w-2/6 h-full ">
              <img src="/ronaldo.png" alt="" className="w-52 h-full" />
            </div>
          </div>
        </div>


        {/* last match */}

{/* past match */}
        <div className="bg-blue-500 border border-gray-400 p-12 flex flex-col items-center justify-center rounded-xl space-y-4">
          <h1>Last Match</h1>
          <div className="flex items-center justify-center space-x-2">
            {/* team 1 */}
            <img src="/countries/spain.png" alt="" className="w-20 h-20"/>
            {/* scores */}
            <div className="flex rounded-xl bg-white h-8 w-12 items-center justify-center">
              2 - 0
            </div>
            {/* team 2 */}
            <img src="/countries/portugal.png" alt="" className="w-20 h-20"/>
          </div>

          {/* stats */}
          <div className="flex flex-col">
            <h1 className="text-sm text-center">shots on target</h1>
            {/* SHOT */}
            <div className="flex">
              <div>1</div>
              <div className="flex flex-1  justify-end">4</div>
            </div>

            {/* percentage */}
            <div className="flex space-x-2">
              <div className="w-20 h-1 bg-gray-400 flex justify-end">
                <div className="w-1/4 h-full bg-white"></div>
              </div>
              <div className="w-20 h-1 bg-gray-400">
                <div className="w-3/4 h-full bg-white"></div>
              </div>
            </div>

            <h1 className="text-sm text-center">shots on target</h1>

            {/* SHOT */}
            <div className="flex">
              <div>2</div>
              <div className="flex flex-1  justify-end">4</div>
            </div>

            {/* percentage */}
            <div className="flex space-x-2">
              <div className="w-20 h-1 bg-gray-400 flex justify-end">
                <div className="w-2/4 h-full bg-white"></div>
              </div>
              <div className="w-20 h-1 bg-gray-400">
                <div className="w-full h-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>





      {/* past match */}


<div className="w-full h-80 ">

      <div className=" mx-auto p-6 w-full ">
      <h2 className="text-2xl font-semibold mb-5">Past Matches</h2>
      <div className="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative">
        <table className="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
          <thead>
            <tr className="text-left">
              <th className="py-2 px-3 sticky top-0 border-b border-gray-200 bg-blue-500 text-white">Date</th>
              <th className="py-2 px-3 sticky top-0 border-b border-gray-200 bg-blue-500 text-white">Team 1</th>
              <th className="py-2 px-3 sticky top-0 border-b border-gray-200 bg-blue-500 text-white">Team 2</th>
              <th className="py-2 px-3 sticky top-0 border-b border-gray-200 bg-blue-500 text-white">Score</th>
            </tr>
          </thead>
          <tbody>
            {matchesData.map((match, index) => (
              <tr key={index}>
                <td className="border-dashed border-t border-gray-200">
                  <span className="text-gray-700 px-3 py-2 flex items-center">{match.date}</span>
                </td>
                <td className="border-dashed border-t border-gray-200">
                  <span className="text-gray-700 px-3 py-2 flex items-center">{match.team1}</span>
                </td>
                <td className="border-dashed border-t border-gray-200">
                  <span className="text-gray-700 px-3 py-2 flex items-center">{match.team2}</span>
                </td>
                <td className="border-dashed border-t border-gray-200">
                  <span className="text-gray-700 px-3 py-2 flex items-center">{match.score}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
</div>
    </DashboardLayout>
  );
}

export default DashboardPage;
