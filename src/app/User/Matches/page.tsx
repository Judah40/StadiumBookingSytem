"use client";

import { getMatches } from "@/app/api/data/data";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Matches() {
  const [match, setMatch] = useState<any>();
  useEffect(() => {
    getMatches().then((values) => {
      console.log(values.data);

      setMatch(values.data);
    });
  }, []);
  return (
    <div>
      {/* Navigation */}
      <Navigation />

      <div className="grid grid-cols-1">
        {/* popular teams */}
        <div className="flex flex-col p-12">
          <div className=" ">
            <h1 className="text-lg ">Popular</h1>
          </div>
          <div className="grid grid-rows-2 md:grid-cols-2 gap-2  md:h-96">
            {match &&
              match
                .slice(match.length - 2, match.length)
                .map((values: any, index: number) => (
                  //teams
                  <div
                    key={index}
                    className="bg-gray-300 w-full h-80 items-center p-4 gap-4 grid rounded-xl"
                  >
                    {/* League type */}
                    <div className="text-center">
                      <h1>Sierra Leone Premiership</h1>
                    </div>

                    {/* teams */}
                    <div className="flex justify-center  gap-4 p-2 items-center">
                      <div className="text-center space-y-2">
                        <img
                          src={`https://qlrmkunqfmyxzbyrvhfn.supabase.co/storage/v1/object/public/images/${values.team1_image_url}`}
                          className="w-32 h-32"
                          alt="img"
                        />
                        <h1>{values.team1}</h1>
                      </div>
                      <div className="text-lg">vs</div>
                      <div className="text-center space-y-2">
                        {" "}
                        <img
                          src={`https://qlrmkunqfmyxzbyrvhfn.supabase.co/storage/v1/object/public/images/${values.team2_image_url}`}
                          className="w-32 h-32"
                          alt="img"
                        />
                        <h1>{values.team2}</h1>
                      </div>
                    </div>
                    <div className=" items-center grid place-items-center">
                      <Link
                        href={{
                          pathname: "/User/Matches/Booking",
                          query: {
                            team1: values.team1,
                            team2: values.team2,
                            date: values.date,
                            time: values.time,
                            id: values.id,
                            name: values.game_name,
                            img1: values.team1_image_url,
                            img2: values.team2_image_url,
                            NormalPrice: values.normal_price,
                            VIPprice: values.vip_price,
                            game: values.game_name,
                          },
                        }}
                      >
                        <button className="w-40 h-12 rounded-xl bg-[#9B00A5] text-white">
                          Buy Ticket
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
          </div>

          {/* Table */}
          <div className="min-w-full overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th
                    colSpan={5}
                    className="py-2  text-white uppercase bg-gray-700"
                  >
                    FIXTURES
                  </th>
                </tr>
              </thead>
              {match &&
                match.slice(0, 10).map((values: any, index: number) => (
                  <tbody key={index}>
                    {/* Example row */}
                    <tr className="border-t">
                      <td className="py-2 px-6 text-left">Monday 15:00</td>
                      <td className="py-2 px-6 text-center">
                        <img
                          src={`https://qlrmkunqfmyxzbyrvhfn.supabase.co/storage/v1/object/public/images/${values.team1_image_url}`}
                          alt="Team A"
                          className="inline w-16 h-12 mr-2"
                        />
                        <img
                          src={`https://qlrmkunqfmyxzbyrvhfn.supabase.co/storage/v1/object/public/images/${values.team2_image_url}`}
                          alt="Team B"
                          className="inline w-16 h-12 ml-2"
                        />
                      </td>
                      <td className="py-2 px-6 text-center">
                        {values.team1} vs {values.team2}
                      </td>
                      <td className="py-2 px-6 text-center">
                        <Link
                           href={{
                            pathname: "/User/Matches/Booking",
                            query: {
                              team1: values.team1,
                              team2: values.team2,
                              date: values.date,
                              time: values.time,
                              id: values.id,
                              name: values.game_name,
                              img1: values.team1_image_url,
                              img2: values.team2_image_url,
                              NormalPrice: values.normal_price,
                              VIPprice: values.vip_price,
                              game: values.game_name,
                            },
                          }}
                        >
                          <button className="px-4 py-2 bg-[#9B00A5] text-white rounded">
                            Book Now
                          </button>
                        </Link>
                      </td>
                      <td className="py-2 px-6 text-right">{values.date}</td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                ))}
            </table>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default Matches;
