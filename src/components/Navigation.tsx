"use client";

import { supabase } from "@/app/Auth/supabase";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

function Navigation() {
  const getUsername = async () => {
    const data = await supabase.auth.getSession();
    return data;
  };



  // states
  const [Navbar, setNavbar] = useState(false);

  const [usename, setUsername] = useState<any | null>(null);
  const menu = [
    { name: "Home", url: "/" },
    { name: "About", url: "/User/About" },
    { name: "Matches", url: "/User/Matches" },
    { name: "Contact", url: "/User/Contact" },
  ];

  useEffect(() => {
    getUsername().then((session) => {
      setUsername(session.data.session?.user.email);
    });
  }, []);

  return (
    <div className={` w-full bg-gray-800 shadow ${Navbar ? "fixed" : ""}  `}>
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            {/* logo */}
            <a href="#" className="">
              <div>
                <img
                  src={"/logo.png"}
                  alt="logo"
                  style={{ width: 140, height: 66 }} // Add this line
                />{" "}
              </div>
            </a>

            {/* menu button */}
            <div className="md:hidden">
              <button
                onClick={() => {
                  setNavbar(!Navbar);
                }}
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              >
                {Navbar ? (
                  <RxCross1 className="text-white text-2xl" />
                ) : (
                  <AiOutlineMenu className="text-white text-2xl" />
                )}{" "}
              </button>
            </div>
          </div>
        </div>

        {/* menu li */}
        <div>
          <div
            className={` flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              Navbar ? "black" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {menu.map((values, index) => {
                return (
                  <li key={index} className="text-white">
                    <Link href={values.url}>{values.name}</Link>
                  </li>
                );
              })}

              <li className="text-blue-500 flex gap-4 items-center">
                {usename}
                {/* <img
              onClick={()=>{

              }}
              src={supabase.auth.getSession.||''} className="rounded-full w-12 h-12 border"/> */}
              </li>
              <li>
                <Button
                  onClick={() => {
                    supabase.auth.signOut()
                }}
                  variant="outlined" color="primary" size="small">SignOut </Button>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
