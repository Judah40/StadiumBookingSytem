'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Footer() {
  const menu = [
    { name: "Home", url: "/" },
    { name: "About", url: "/User/About" },
    { name: "Tickets", url: "/User/History" },
    { name: "Contact", url: "/User/Contact" },
  ];
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className="w-full space-x-10 bg-slate-800 h-96 p-12 flex items-center justify-center">
      <div>
        <img src="/logoMain.png" alt="logo" />
      </div>

      <ul className="md:flex md:space-x-6 grid grid-cols-1 place-items-center gap-4">
        {menu.map((values, index) => {
          return (
            <li key={index} className="text-white hover:text-blue-500">
              <Link
                href={values.url}
                className={`${
                  values.url === pathName ? "text-blue-500" : "text-white"
                }`}
              >
                <h1>{values.name}</h1>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Footer;
