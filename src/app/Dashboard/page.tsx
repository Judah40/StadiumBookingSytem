'use client'

// pages/dashboard.tsx

import DashboardLayout from "@/components/DashboardLayout";
import  { Graph } from "@/components/LineChart";


function DashboardPage() {
 
  
  return (
    <DashboardLayout >
        <div className="w-10/12 pt-12">

      <h1 className="text-xl font-light text-gray-500">Admin Dashboard</h1>
        </div>
      {/* Add your dashboard content here */}

        {/* header */}
      <div className="flex md:space-x-40 flex-col md:flex-row pt-4">
        {/* card1 */}
        <div className="border rounded-lg border-gray-200 shadow-lg w-80 h-60 flex flex-col p-4 space-y-4">
          <div>
            <h1 className="font-light text-gray-500">Total Number Of Tickets</h1>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-blue-500">{"12"}</h1>
          </div>
          <div>
            <h1 className=" font-light text-gray-500">Total Price Expected</h1>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-blue-500">{"$12,000"}</h1>
          </div>
        </div>

                {/* card2 */}

        <div className="border rounded-lg border-gray-200 shadow-lg w-80 h-60 flex flex-col p-4 space-y-4">
        <div>
            <h1 className="font-light text-gray-500">Total Number Of Tickets left</h1>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-blue-500">{"4"}</h1>
          </div>
          <div>
            <h1 className=" font-light text-gray-500">Total Price Expected</h1>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-blue-500">{"$2,000"}</h1>
          </div>
        </div>
                {/* card3 */}

        <div className="border rounded-lg border-gray-200 shadow-lg w-80 h-60 flex flex-col p-4 space-y-4">
        <div>
            <h1 className="font-light text-gray-500">Total Number Of Tickets Sold</h1>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-blue-500">{"8"}</h1>
          </div>
          <div>
            <h1 className=" font-light text-gray-500">Total Price</h1>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-blue-500">{"$10,000"}</h1>
          </div>
        </div>
      </div>


      {/* graph */}
      <div>
      <Graph />
    </div>
    </DashboardLayout>
  );
}

export default DashboardPage;
