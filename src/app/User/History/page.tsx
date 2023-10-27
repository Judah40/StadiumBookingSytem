"use client";

import { supabase } from "@/app/Auth/supabase";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import QRCode from "qrcode.react";
import React, { useEffect, useState } from "react";

function page() {
  //get users
  const users = async () => {
    const user = await supabase.auth.getSession();
    return user;
  };

  const getData = async (game: any) => {
    const data = await supabase
      .from("Matches")
      .select("left, sold")
      .eq("id", game);
    return data;
  };
  //state
  const [games, setGames] = useState<any>();
  const [user, setUser] = useState<any>();

  useEffect(() => {
    users().then((val) => {
      console.log(val);
      setUser(val.data.session?.user.id);
      supabase
        .from("Ticket")
        .select("*")
        .eq("user", val.data.session?.user.id)
        .then((val: any) => {
          console.log(val);
          setGames(val.data || null);
        });
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
              <th className="px-4 py-2">QRCODE</th>
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
                    <QRCode
                    value={`Ticket Number:${val.ticket_number},User_id:${user} game_name:${val.game_name}, date:${val.date}`}
                    style={{width:100, height:100}}
                    />
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => {
                        //delete

                        supabase
                          .from("Ticket")
                          .delete()
                          .eq("game_name", val.game_name)
                          .then((val) => {
                            console.log(val);
                          });
                        getData(val.game_id).then((data: any) => {
                          console.log(data.data[0].left);
                          console.log(data.data[0].sold);

                          const ticket_left =
                            Number(data.data[0].left) +
                            Number(val.ticket_number);
                          const ticket_sold =
                            Number(data.data[0].sold) -
                            Number(val.ticket_number);
                          //update ticket  left

                          supabase
                            .from("Matches")
                            .update({ left: ticket_left })
                            .eq("id", val.game_id)
                            .select()
                            .then((val) => {
                              console.log(val);
                            });
                          //update ticket  sold

                          supabase
                            .from("Matches")
                            .update({ sold: ticket_sold })
                            .eq("id", val.game_id)
                            .select()
                            .then((val) => {
                              console.log(val);
                              alert("ticket canceled");
                              window.location.reload()
                            });
                        });
                      }}
                      className="bg-blue-500 text-white text-base p-2 rounded-xl"
                    >
                      Cancel Ticket
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default page;
