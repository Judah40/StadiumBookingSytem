'use client'

import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import SignButton from "@/components/SignButton";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
function Register() {
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 h-screen place-items-center p-4 md:w-[800px] lg:w-[1000px]">
          <div className=" bg-gradient-to-r from-purple-500 to-pink-500 w-full md:shadow-md md:shadow-white md:h-[700px] md:grid md:grid-cols-1 hidden place-items-center">
          <Image src={"/animation_ln8ac0eh_small.gif"} alt="logo" width={140} height={34} />
          </div>
    
          {/* Login Form */}
          <div className="md:border md:rounded-r bg-white w-full md:h-[700px] md:shadow-md md:border-gray-300 md:shadow-white flex flex-col place-items-center justify-center gap-4">
            {/* logo */}
    
            <div className="">
              <Image src={"/logo.png"} alt="logo" width={140} height={34} />
            </div>
    
            {/* Form */}
            <div className="w-10/12 ">
                <RegisterForm/>
            </div>
    
          
    
    
            {/* Already have an account */}
            <div>
                <h1 className="text-sm text-[#8C7E7E]">Already have an Account? <Link href={"/Auth/Login"} style={{textDecoration:"underline"}}> Sign In</Link></h1>
            </div>
          </div>
        </div>
      );
}

export default Register
