import Link from "next/link";
import React, { useEffect, useState } from "react";
type Props = {
  values: string;
  isActive: boolean;
  children?: React.ReactNode
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
    onClick={()=>{
        console.log(values);

    }}
      href={isDashActive}
      className={`mb-2 border w-full h-12 items-center justify-center flex hover:bg-blue-500 ${
        isActive && "bg-blue-500"
      }`}
    >
      {values}
    </Link>
  );
};

export default SidebarButton;
