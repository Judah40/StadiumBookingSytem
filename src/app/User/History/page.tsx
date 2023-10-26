"use client";

import { supabase } from "@/app/Auth/supabase";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import React, { useEffect, useState } from "react";

function page() {
  //state
  const [games, setGames] = useState<any>();
  //fetch date
  const data = () => {
    return supabase.from("Matches").select("*");
  };
  useEffect(() => {
    data().then((val: any) => {
      setGames(val.data || null);
    });
  }, []);
  return (
    <div>
      <Navigation />
      {/* history */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg">
          <thead>
            <tr className="text-left border-b">
              <th className="px-4 py-2">Ticket Number</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Game Name</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {games &&
              games.map((val: any, index: any) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{val.ticket_number}</td>
                  <td className="px-4 py-2">{val.date}</td>
                  <td className="px-4 py-2">{val.game_name}</td>
                  <td className="px-4 py-2">
                    <button className="bg-blue-500 text-white text-base p-2 rounded-xl">
                      Cancel Ticket
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default page;
