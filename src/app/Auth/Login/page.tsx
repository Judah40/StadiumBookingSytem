"use client";

import LoginForm from "@/components/LoginForm";
import SignButton from "@/components/SignButton";
import { Session } from "inspector";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { supabase } from "../supabase";
function Login() {
  // const {data:session} = useSession()

  // useEffect(()=>{
  // console.log(session)
  // },[session])
  return (
    <div style={{backgroundImage:'url("/175.jpg")'}} className="md:flex md:flex-col md:place-items-center bg-green-500">

    <div className=" grid grid-cols-1 md:grid-cols-2 h-screen place-items-center p-4 md:w-[800px] lg:w-[1000px] ">
      <div className=" bg-green-800 w-full md:shadow-md md:shadow-white md:h-[700px] md:grid md:grid-cols-1 hidden place-items-center">
        <img
          src={"/pitch.gif"}
          alt="logo"
          style={{ width: 440, height: 650 }} // Add this line
        />
      </div>

      {/* Login Form */}
      <div className="md:border md:rounded-r bg-white w-full md:h-[700px] md:shadow-md md:border-gray-300 md:shadow-white flex flex-col place-items-center justify-center gap-4">
        {/* logo */}

        <div className="">
          <img
            src={"/logo.png"}
            alt="logo"
            style={{ width: 140, height: 66 }} // Add this line
          />
        </div>

        {/* Form */}
        <div className="w-10/12 ">
          <LoginForm />
        </div>

        {/* line separation -or- */}
        <div className="flex items-center space-x-4">
          <div className="w-32 h-[0.2px] bg-gray-500"></div>
          <div className="text-[#8C7E7E]">or</div>
          <div className="w-32 h-[0.2px] bg-gray-500"></div>
        </div>
        {/* google auth */}
        <div>
          <button
            type="button"
            onClick={() =>
              supabase.auth.signInWithOAuth({ provider: "google" })
            }
            className="flex items-center space-x-4 border p-4 rounded-full shadow-lg"
          >
            <FcGoogle className="text-4xl" />
            <h1 className="text-[#8C7E7E] font-semibold">
              Sign in with Google
            </h1>
          </button>
        </div>

        {/* don't have an account */}
        <div>
          <h1 className="text-sm text-[#8C7E7E]">
            Don't have an account?{" "}
            <Link
              href={"/Auth/Register"}
              style={{ textDecoration: "underline" }}
            >
              {" "}
              Create Account
            </Link>
          </h1>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
