'use client'


import React, { useEffect } from "react";
// pages/index.js
import Head from "next/head";
import DashboardLayout from "@/components/DashboardLayout";
import { supabase } from "@/app/Auth/supabase";
function Users() {
  // Sample data
  const data = [
    {
      id: 1,
      email: "john@example.com",
      username: "john_doe",
      phoneNumber: "123-456-7890",
    },
    {
      id: 2,
      email: "jane@example.com",
      username: "jane_doe",
      phoneNumber: "987-654-3210",
    },
    {
      id: 3,
      email: "jane@example.com",
      username: "jane_doe",
      phoneNumber: "987-654-3210",
    },
    {
      id: 4,
      email: "jane@example.com",
      username: "jane_doe",
      phoneNumber: "987-654-3210",
    },
    {
      id: 5,
      email: "jane@example.com",
      username: "jane_doe",
      phoneNumber: "987-654-3210",
    },
    {
      id: 6,
      email: "jane@example.com",
      username: "jane_doe",
      phoneNumber: "987-654-3210",
    },
    {
      id: 7,
      email: "jane@example.com",
      username: "jane_doe",
      phoneNumber: "987-654-3210",
    },
    // ... more data
  ];

  useEffect(()=>{
    supabase.from('auth.users').select('*').then((value)=>{
console.log(value)
})
  },[])
  return (
    <DashboardLayout>
      <h1 className="text-xl">Main Users</h1>
      {/* Add your dashboard content here */}

      <div className="container mx-auto p-6 w-full flex-1">
        <div className="overflow-x-auto">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-blue-500 text-white  text-left text-xs font-semibold uppercase tracking-wider">
                  ID
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-blue-500  text-white text-left text-xs font-semibold uppercase tracking-wider">
                  Email
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-blue-500 text-white  text-left text-xs font-semibold uppercase tracking-wider">
                  Username
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-blue-500 text-white  text-left text-xs font-semibold uppercase tracking-wider">
                  Phone Number
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-blue-500 text-white  text-left text-xs font-semibold uppercase tracking-wider">
                  Actions{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {item.id}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {item.email}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {item.username}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {item.phoneNumber}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm space-x-4">
                  <button className="w-24 h-8 bg-red-500 text-white rounded">
                    Delete User
                  </button>
                  <button className="w-24 h-8 bg-green-500 text-white rounded">
                    Suspend User
                  </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Users;
