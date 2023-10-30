"use client";

import SignButton from "@/components/SignButton";
import Image from "next/image";
import User from "./User/page";

import Login from "./Auth/Login/page";

import { useEffect, useState } from "react";
import Spinner from "react-activity/dist/Spinner";
import "react-activity/dist/Spinner";
import { Dots } from "react-activity";
import "react-activity/dist/library.css";
import { supabase } from "./Auth/supabase";
import { type } from "os";
export default function Home() {
  const [user, setUser] = useState("");
  const [sessions, setSession] = useState<any | string | null>(null);


  //get User
  const getUserSession = async () => {
    const session = await supabase.auth.getSession();
    return session;
  };


  //get Matches
  
  useEffect(() => {
    getUserSession().then((values) => {
      if (values.data.session?.access_token) {
        setSession(values.data.session || null);
        setUser(values.data.session.user.email || "");
      }
      console.log(values.data.session);
    });

    // getMatches().then((values)=>{
    //   console.log(values)
    // })
    console.log(supabase.auth.getUser);
  }, [user]);

  // if (sessions) {
  //   return (
  //     <div className="flex h-screen place-items-center justify-center bg-black text-white">
  //       <Dots color="#727981" size={32} speed={1} animating={true} />
  //     </div>
  //   );
  // }
  if (sessions) {
    return <User />;
  }

  return (
    <div style={{backgroundImage:'url("/175.jpg")'}} >
      <Login />
    </div>
  );
}
