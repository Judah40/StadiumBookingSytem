"use client";
// components/DashboardLayout.tsx

import Link from "next/link";
import { SlLogout } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { type } from "os";
import { usePathname } from "next/navigation";
import SidebarButton from "./SidebarButton";
function DashboardLayout({ children }: any) {
  const sideBar = [
    { id: 1, name: "Dashboard" },
    { id: 2, name: "Users" },
    { id: 3, name: "Matches" },
    { id: 4, name: "Tickets" },
  ];
  const pathname = usePathname();

  const isActiveMain = (path: string) => {
    return pathname?.split("/").pop() === path;
  };

  return (
    <div className="flex h-screen  ">
      <div className="bg-blue-900 text-white md:w-64 w-40  border-r flex flex-col items-center gap-10 fixed  h-screen z-20">
        <img src="/logo.png" className="p-4" />
        <ul className="flex flex-col w-full space-y-12 p-4">
          {sideBar.map((values) => {
            return (
              <li key={values.id}>
                <SidebarButton
                  values={values.name}
                  isActive={isActiveMain(values.name)}
                >
                  {values.name}
                </SidebarButton>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-1 border-t flex-col bg-blue-500 w-full h-screen justify-end items-center space-y-12">
          {/* admin pic */}
          <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center">
            <FaUser className="text-blue-500 text-4xl" />
          </div>
          {/* logout button */}
          <Link href={"/"}>
            <button className="border h-12 w-40 flex items-center justify-center gap-4 mb-12">
              <SlLogout className="text-xl" />
              SignOut
            </button>
          </Link>
        </div>
      </div>
      <div className="flex-1 flex flex-col absolute left-44 md:ml-28  p-4 md:w-[1300px]">
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
