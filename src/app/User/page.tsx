"use client";

import Navigation from "@/components/Navigation";
import SignButton from "@/components/SignButton";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Dots } from "react-activity";
import { availableMatches, getMatches, getOldMatches } from "../api/data/data";
import axios from "axios";
import Link from "next/link";
import { supabase } from "../Auth/supabase";
import { useRouter } from "next/navigation";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { get } from "http";
import Footer from "@/components/Footer";

function User() {
  //const
  const router = useRouter();
  //states
  const [data, setData] = useState([]);
  const [match, setMatch] = useState<any>();
  const [oldMatch, setOldMatch] = useState<any>();
  useEffect(() => {
    availableMatches(20).then((values) => {
      setData(values.data);
    });

    getMatches().then((values) => {
      console.log(values.data);

      setMatch(values.data);
    });

    getOldMatches().then((values) => {
      setOldMatch(values.data);
    });
  }, []);

  if (!data) {
    return (
      <div className="flex h-screen place-items-center justify-center bg-black text-white">
        <Dots color="#727981" size={32} speed={1} animating={true} />
      </div>
    );
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

      {/* Carousel */}
      <div className="w-full h-full items-center">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          interval={3000}
          showArrows={true}
          showThumbs={false}
          showIndicators={false}
          swipeable
          transitionTime={1000}
        >
          <div className="w-full h-full">
            <img src="/Carousel/SL1.webp" alt="carousel1" />
          </div>
          <div className="w-full h-full">
            <img src="/Carousel/SL2.jpeg" alt="carousel2" />
          </div>
          <div className="w-full h-full">
            <img src="/Carousel/SL3.jpeg" alt="carousel3" />
          </div>
        </Carousel>
      </div>

      {/* body */}
      <div className="w-full  grid grid-rows-2  md:grid-cols-2 gap-y-8 md:grid-rows-none pt-12">
        <div className=" space-y-4 flex flex-col items-center justify-center md:border-b p-12">
          <Link href={"/User/Matches"}>
            <h1 className="text-[50px] font-semibold  text-center md:text-left">
              BOOK NOW
            </h1>
          </Link>
          <p className=" text-center md:text-left font-thin text-xl md:text-4xl">
            Booking your stadium Tickets
            <br /> has never been this simple. <br /> Our user-friendly
            interfeace ensure <br /> a hassle-free booking experience{" "}
          </p>
          <button className=" w-[240px] border shadow-2xl h-[68px] rounded-full bg-blue-500 hover:bg-blue-400 grid grid-cols-1 items-center">
            <h1 className="text-xl font-semibold text-gray-300">
              <Link href="User/Matches">Book Ticket</Link>
            </h1>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center bg-green-500 text-white p-12">
          {/* text */}
          <h1 className=" w-[300px]">Next Match</h1>
          {/* Current date */}
          <div className=" w-[300px] justify-end flex ">24th June 2024</div>
          <div className="w-full items-center flex flex-col gap-2 p-8 md:p-0">
            {match &&
              match
                .slice(match.length - 2, match.length)
                .map((value: any, index: any) => {
                  return (
                    <div key={index} className="w-[300px] gap-2 grid">
                      {/* time */}
                      <div className="w-full flex justify-end">
                        <h1 className="">{value.time}</h1>
                      </div>

                      {/* flags */}

                      <div className="grid grid-cols-3 place-items-center">
                        <div>
                          <img
                            src={`https://qlrmkunqfmyxzbyrvhfn.supabase.co/storage/v1/object/public/images/${value.team1_image_url}`}
                            className="w-24 md:w-40 h-24"
                            alt="img"
                          />
                        </div>
                        <p className="">vs</p>
                        <div className="flex-1  justify-end flex">
                          <img
                            src={`https://qlrmkunqfmyxzbyrvhfn.supabase.co/storage/v1/object/public/images/${value.team2_image_url}`}
                            className="w-24 md:w-40 h-24"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>

      {/* upcoming matches */}
      <div className="p-4 md:p-20 grid gap-4">
        <div className="w-11/12">
          <h1 className="text-xl">Upcoming Matches</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12">
          {match
            ? match.map((value: any, index: any) => {
                return (
                  <div
                    key={index}
                    className="bg-green-500 w-full  p-4 flex flex-col items-center justify-center rounded-xl text-white"
                  >
                    {/* flag */}
                    <div className="  flex flex-row space-x-6 items-center justify-center w-9/12 md:w-full">
                      <div>
                        <img
                          src={`https://qlrmkunqfmyxzbyrvhfn.supabase.co/storage/v1/object/public/images/${value.team1_image_url}`}
                          className=" w-52 h-44 border border-white"
                          alt="img"
                        />
                        {/* team1 */}
                        <div>
                          <h1>{value.team1}</h1>
                        </div>
                      </div>
                      <p className="text-white">vs</p>
                      <div>
                        <img
                          src={`https://qlrmkunqfmyxzbyrvhfn.supabase.co/storage/v1/object/public/images/${value.team2_image_url}`}
                          className=" w-52 h-44 border border-white"
                          alt="img"
                        />
                        {/* team2 */}
                        <div>
                          <h1>{value.team2}</h1>
                        </div>
                      </div>
                    </div>

                    {/* time */}
                    <div className="w-9/12 md:w-full  flex flex-col items-end">
                      {/* time */}
                      <div>
                        <h1>Time: {value.time}</h1>
                      </div>
                      {/* date */}
                      <div>
                        <h1>date: {value.date}</h1>
                      </div>
                    </div>

                    {/* book button */}
                    <div className="w-9/12 md:w-full  flex justify-end h-12">
                      <Link
                        href={{
                          pathname: "/User/Matches/Booking",
                          query: {
                            team1: value.team1,
                            team2: value.team2,
                            date: value.date,
                            time: value.time,
                            id: value.id,
                            name: value.game_name,
                            img1: value.team1_image_url,
                            img2: value.team2_image_url,
                            NormalPrice: value.normal_price,
                            VIPprice: value.vip_price,
                            game: value.game_name,
                          },
                        }}
                        className="w-32 bg-blue-500 hover:bg-blue-400 rounded-xl items-center justify-center flex"

                      >
                        <button
                          type="button"
                          onClick={() => {}}
                          className="w-32 bg-blue-500 hover:bg-blue-400 rounded-xl"

                        >
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })
            : "Loading"}
        </div>
      </div>

      {/* About */}
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center border-4 w-full mt-12">
        {/* image */}
        <div className="grid place-items-center p-12">
          <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            interval={3000}
            showArrows={true}
            showThumbs={false}
            showIndicators={false}
            swipeable
            transitionTime={1000}
          >
            <div className="w-full h-full">
              <img src="/stadium/std1.jpeg" alt="carousel1" />
            </div>
            <div className="w-full h-full">
              <img src="/stadium/std2.jpg" alt="carousel2" />
            </div>
            <div className="w-full h-full">
              <img src="/Carousel/SL3.jpeg" alt="carousel3" />
            </div>
          </Carousel>{" "}
        </div>

        {/* about */}
        <div className="p-12">
          <span className="font-bold">About Siaka Steven Stadium</span> <br />
          The Siaka Stevens Stadium, formerly known as the National Stadium, is
          a multi-use stadium in Freetown, Sierra Leone. It is the largest
          stadium in the country and is primarily used for football matches. The
          stadium also has facilities for athletics and serves as a venue for
          various social, cultural, and religious events. <br />
          Here is a brief history of the Siaka Stevens Stadium: <br />
          <span className="font-semibold text-gray-700">
            Construction and Opening:
          </span>{" "}
          The stadium was originally constructed in 1979 with the assistance of
          the People's Republic of China. It was a symbol of the friendship
          between Sierra Leone and China at the time. <br />
          <span className="font-semibold text-gray-700">Naming:</span>
          It was named after Siaka Stevens, the first president of Sierra Leone
          after its independence, who served from 1971 to 1985. Stevens was a
          significant figure in the country's politics, leading it through the
          transition from a British colony to an independent nation. <br />
          <span className="font-semibold text-gray-700">Renovations:</span>
          Over the years, the stadium has undergone several renovations to
          maintain its facilities and expand its capacity. These renovations
          have been necessary to accommodate the growing number of spectators
          and to host international events. Major Events: Siaka Stevens Stadium
          has been a central location for numerous important events in Sierra
          Leone, including football matches of the Sierra Leone national
          football team, and it has also hosted regional and international
          sports competitions. <br />
          <span className="font-semibold text-gray-700">Capacity:</span>
          The stadium holds around 36,000 people, though the exact number has
          fluctuated with various renovations and changes in seating
          configurations. <br />
          <span className="font-semibold text-gray-700">Significance:</span>
          Beyond sports, the Siaka Stevens Stadium has been a venue for
          political rallies and national ceremonies, reflecting its importance
          as a central gathering place in the nation's capital.
        </div>
      </div>

      {/* past match */}
      <div className="w-full p-12">
        <div className="">
          <h1 className="text-xl">Past Match</h1>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-200 dark:bg-green-500">
              <tr>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Time</th>
                <th className="px-4 py-2">Match</th>
                <th className="px-4 py-2">Score</th>
              </tr>
            </thead>
            <tbody>
              {oldMatch &&
                oldMatch.map((values: any, index: any) => {
                  return (
                    <tr className="bg-white border-b  dark:border-gray-700">
                      <td className="px-4 py-2">{values.date}</td>
                      <td className="px-4 py-2">{values.time}</td>
                      <td className="px-4 py-2">{values.game_name}</td>
                      <td className="px-4 py-2">2 - 1</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      {/* videos */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-2 place-items-center   w-full gap-y-4">
        {data
          .slice(data.length - 4, data.length)
          .map((values: any, index: any) => {
            return (
              <div key={index} className=" grid grid-cols-1 place-items-center">
                <div className="text-xl">{values.title}</div>
                <div
                  className="w-80 md:w-[500px]  "
                  dangerouslySetInnerHTML={{ __html: values.embed }}
                />
              </div>
            );
          })}
      </div>



      <Footer/>
    </div>
  );
}

export default User;
