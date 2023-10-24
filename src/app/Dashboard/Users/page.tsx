'use client'


import React, { useEffect, useState } from "react";
// pages/index.js
import Head from "next/head";
import DashboardLayout from "@/components/DashboardLayout";
import { Supa, supabase } from "@/app/Auth/supabase";
import { useRouter } from "next/router";
function Users() {

//router



  // Sample data
  const [users, setUsers]=useState<any[]>([])
 

  useEffect(()=>{
    Supa.auth.admin.listUsers().then((val:any)=>{
setUsers(val.data.users)
console.log(val.data.users)
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
              {users &&(users.map((item:any) => (
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
                  <button
                  
                  onClick={()=>{

                    Supa.auth.admin.deleteUser(item.id)
                    window.location.reload()                  }}
                  className="w-24 h-8 bg-red-500 text-white rounded">
                    Delete User
                  </button>
                 
                  </td>
                </tr>
              )))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Users;
