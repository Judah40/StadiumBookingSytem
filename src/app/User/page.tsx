'use client'

import Navigation from "@/components/Navigation";
import SignButton from "@/components/SignButton";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Dots } from "react-activity";
import { availableMatches, getMatches } from "../api/data/data";
import axios from "axios";
import Link from "next/link";
import { supabase } from "../Auth/supabase";
import { useRouter } from "next/navigation";
import { get } from "http";
function User() {


  //const 
const router = useRouter()
  //states
  const [data, setData] = useState([])
  const [match, setMatch]= useState<any>()
  // matches
  const matches = [
    {
      country1: "",
      country2: "",
      time: "",
      date: "",
    },
    {
      country1: "",
      country2: "",
      time: "",
      date: "",
    },
    {
      country1: "",
      country2: "",
      time: "",
      date: "",
    },
    {
      country1: "",
      country2: "",
      time: "",
      date: "",
    },
  
  ];

  useEffect(() => {
    availableMatches(20).then((values)=>{
  setData(values.data)
    });
    
    getMatches().then((values)=>{
console.log(values.data)

setMatch(values.data)
    })
  }, [])


  if(!data){
   return <div className="flex h-screen place-items-center justify-center bg-black text-white"><Dots color="#727981" size={32} speed={1} animating={true} />
   </div>
  }
  return (
    <div className=" ">
      {/* header */}
      <div className="w-full bg-white    ">
        {/* Logo */}
        {/* <div className='p-8'>
    <Image src={"/logo.png"} width={80} height={40} alt='logo'/>
</div> */}

        <Navigation />
      </div>

      {/* body */}
      <div className="w-full  grid grid-rows-2  md:grid-cols-2 gap-y-8">
        <div className=" space-y-4 flex flex-col items-center justify-center md:border-b ">
          <h1 className="text-[50px] font-semibold  text-center md:text-left">
            BOOK NOW
          </h1>
          <p className=" text-center md:text-left font-thin text-xl md:text-4xl">
            Booking your stadium Tickets
            <br /> has never been this simple. <br /> Our user-friendly
            interfeace ensure <br /> a hassle-free booking experience{" "}
          </p>
          <button className=" w-[240px] border shadow-2xl h-[68px] rounded-full bg-blue-500 hover:bg-blue-400 grid grid-cols-1 items-center">
            <h1 className="text-xl font-semibold text-gray-300">Book Ticket</h1>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center bg-green-500 text-white">
          {/* text */}
          <h1 className=" w-[300px]">Next Match</h1>
          {/* Current date */}
          <div className=" w-[300px] justify-end flex ">
            24th June 2024
          </div>
          <div className="w-full items-center flex flex-col gap-2 p-8 md:p-0">
            {match &&(match.map((value:any, index:any) => {
              return (
                <div key={index} className="w-[300px] gap-2 grid">
                  {/* time */}
                  <div className="w-full flex justify-end">
                    <h1 className="">{value.time}</h1>
                  </div>

                  {/* flags */}

                  <div className="grid grid-cols-3 place-items-center">

                    <div>
                      <img src="/countries/portugal.png" className="w-24 md:w-40" />
                    </div>
                    <p className="">vs</p>
                    <div className="flex-1  justify-end flex">
                      <img src="/countries/spain.png" className="w-24 md:w-40" />
                    </div>
                </div>

            </div>
              );
            }))}
            <button type="button" className="bg-red-500" onClick={()=>{supabase.auth.signOut()
            router.push('/')
            }}>
  signout
  </button>      
          </div>
        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-2 place-items-center   w-full gap-y-[450px]">
        {data.slice(data.length-4, data.length).map((values:any, index)=>{
          return(
            <div key={index} className=" grid grid-cols-1 place-items-center">
             
              <div className="text-xl">
                {values.title}
              </div>
              <div className="flex space-x-2 flex-col md:flex-row items-center">
               <p>CLICK TO VIEW</p>  <Link href={values.url}><p className="text-blue-500 text-center md:text-left underline">{values.url}</p></Link>
              </div>
              <div className="w-80 md:w-[500px] h-40 md:h-[250px] " dangerouslySetInnerHTML={{__html:values.embed}}/>

            
            </div>
          )
        })}
        </div>
      </div>
    </div>
  );
}

export default User;
