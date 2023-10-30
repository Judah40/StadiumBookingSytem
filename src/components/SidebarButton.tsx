import Link from "next/link";
import React, { useEffect, useState } from "react";

import { BiSolidDashboard } from "react-icons/bi";
import { FaUsers, FaTicketAlt } from "react-icons/fa";
import { GiSoccerKick } from "react-icons/gi";
type Props = {
  values: string;
  isActive: boolean;
  children?: React.ReactNode;
};

const SidebarButton: React.FC<Props> = ({ values, isActive }) => {
  const [isDashActive, setIsDashActive] = useState(`/Dashboard/${values}`);

  useEffect(() => {
    if (values === "Dashboard") {
      setIsDashActive("/Dashboard");
    }
  }, [values]);
  return (
    <Link
      onClick={() => {
        console.log(isActive);
      }}
      href={isDashActive}
      className={`mb-2  w-full h-12 items-center  flex hover: ${
        isActive && "text-[#1DE782]"
      }`}
    >
      {values === "Dashboard" ? (
        <BiSolidDashboard className="text-xl w-20" />
      ) : values === "Users" ? (
        <FaUsers className=" text-xl w-20" />
      ) : values === "Matches" ? (
        <GiSoccerKick className="text-xl w-20" />
      ) : (
        <FaTicketAlt className="text-xl w-20" />
      )}{" "}
      {values}
    </Link>
  );
};

export default SidebarButton;
