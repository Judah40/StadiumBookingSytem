"use client";

import Navigation from "@/components/Navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { loadScript } from "@paypal/paypal-js";
import {PayPalButton} from "react-paypal-button-v2"
import QRCode from "qrcode"
import { supabase } from "@/app/Auth/supabase";
function Booking({
  searchParams,
}: {
  searchParams: {
    team1: string;
    team2: string;
    date: string;
    time: string;
  };
}) {
  console.log(searchParams.team1);

  const getUsername = async () => {
    const data = await supabase.auth.getSession();
    return data;
  };  
  const generateQRCode = ()=>{
    const data =[searchParams.team1,searchParams.team2, ticketNumber, selectedOption,email ]
   QRCode.toDataURL(JSON.stringify(data)).then(setQRcode)
  }

  //state
  const [scriptLoaded, setScriptLoaded]= useState(false)

  //lpaypal

  const addPayment=()=>{
if(window.paypal){
    setScriptLoaded(true)
    return
}

    const script = document.createElement("script")
    script.src ="https://www.paypal.com/sdk/js?client-id=AYdQd0uldBlNQuOEpB56FDbYAIKi_AT0lUWMP9V7M3KCgJGwvB0iBJaxXRBvRothSu6K3i3-Qv3s-2SJ"

    script.type="text/javascript";
    script.async=true
    script.onload=()=>setScriptLoaded(true)
    document.body.appendChild(script)
  }

//   loadScript({"clientId":process.env.PAYPAL_CLIENT_ID}).then((paypal)=>{
// console.log(paypal)
//   }).catch((err)=>{
//     console.log(err)
//   })

const [amount, setAmount]= useState(0)
  const [selectedOption, setSelectedOption] = useState("");
  const [ticketNumber, setTicketNumber] = useState<any | null>(null);
  const [email, setEmail] = useState<any | null>(null);
  const [qrcode, setQRcode] = useState<any | null>(null);

  const handleSelectChange = (e: any) => {
    setSelectedOption(e.target.value);
  };
  const PricePerTicket: number = 150;

  const SubmitValue = () => {
    if (selectedOption === "VIP") {
      const total = PricePerTicket + 100;
      const Price = total * ticketNumber;
      console.log(Price);
      setAmount(Price);
    } else {
      console.log(PricePerTicket * ticketNumber);
      setAmount(PricePerTicket * ticketNumber);
    }
  };




  useEffect(()=>{



    getUsername().then((value)=>{
      setEmail(value.data.session?.user.id)
    })
addPayment()
  },[])
  return (
    <div className="w-full ">
      {/* Navigation */}
      <Navigation />

      {/**rest of the body  */}
      <div className="flex flex-1 flex-col h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 flex-1   place-items-center ">
          <div className=" w-full h-full flex flex-col justify-center items-center">
            <div className=" p-4 md:p-0 md:h-[500px] mt-4 mb-4 md:m-0 w-10/12  space-y-2 bg-gray-200 border border-gray-300 flex flex-col place-items-center justify-center ">
              <div className="bg-gray-300 p-6 flex flex-col items-center space-y-6 ">
                {/* header */}
                <div>Sierra Leone Premiership</div>

                {/*flag  */}
                <div className="flex items-center justify-center gap-4">
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src="/countries/portugal.png"
                      className="max-w-[340px]"
                    />
                    {searchParams.team1}
                  </div>
                  vs
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src="/countries/portugal.png"
                      className="max-w-[340px]"
                    />
                    {searchParams.team2}
                  </div>
                </div>
              </div>

              {/* time and date */}
              <div className="w-10/12 flex space-x-4 justify-center">
                <h1>
                  <span className="font-bold">Time:</span> {searchParams.time}
                </h1>
                <h1>
                  <span className="font-bold">Date:</span> {searchParams.date}
                </h1>
              </div>
              {/* note */}
              <div className="w-10/12 ">
                <h1 className="text-sm font-light text-gray-600">
                  <span className="font-bold ">Note:</span> After tickets are
                  purchased money are non-refundable(when paid no gurantee you
                  are getting your money back)
                </h1>
              </div>
            </div>
          </div>

          {/* Payment section */}

          <div className=" w-full h-full flex flex-col justify-center items-center">
            <div className="  w-10/12  bg-gray-200 flex flex-col items-center justify-center space-y-4 p-2">
              <div className="w-9/12 flex">
                <h1 className="font-semibold">Price for VIP Ticket:</h1>
                <div className="flex-1  flex justify-end">
                  Le{PricePerTicket}
                </div>
              </div>
              <div className="w-9/12 flex">
                <h1 className="font-semibold">Price for Normal Ticket:</h1>
                <div className="flex-1  flex justify-end">
                  Le{PricePerTicket + 100}
                </div>
              </div>

              <div className="w-9/12 flex flex-col md:flex-row ">
                <h1 className="font-semibold">Ticket type:</h1>
                <div className="flex-1 flex justify-end">
                  <select
                    className="p-2 border rounded border-gray-400 w-full md:w-[160px]"
                    value={selectedOption}
                    onChange={handleSelectChange}
                  >
                    <option value="">Select an option</option>
                    <option value="VIP">VIP</option>
                    <option value="Normal">Normal</option>
                  </select>
                </div>
              </div>

              <div className="w-9/12 flex flex-col md:flex-row ">
                <h1 className="font-semibold">Number Of Ticket:</h1>
                <div className="flex flex-1 justify-end ">
                  <input
                    type="number"
                    className="w-full md:md:w-[160px] p-2 border rounded border-gray-400"
                    onChange={(val) => {
                      val.preventDefault();
                      setTicketNumber(val.target.value);

                            const value:any = val.target.value

                      if (selectedOption === "VIP") {
                        const total = PricePerTicket + 100;
                        const Price = total * value;
                        console.log(Price);
                        setAmount(Price);
                      } else {
                        console.log(PricePerTicket * ticketNumber);
                        setAmount(PricePerTicket * ticketNumber);
                      }
                    }}
                  />
                </div>
              </div>

              <div className="w-9/12 flex">
                    <div>
                        <p>Total:</p>
                    </div>

                    <div>
                        <p>{amount}</p>
                    </div>
              </div>

              {/* button */}
              <div className="w-9/12">

                {/* {scriptLoaded && amount?<PayPalButton
                
                amount={amount}
                />:<h1>Please Choose field...</h1>} */}

                <button
                className="w-20 h-12 rounded bg-blue-500"
                onClick={()=>{
                  if(selectedOption && ticketNumber ){

                    generateQRCode()
                  }else{
                    alert("please select ticket type or ticket number")
                  }
                }}>
                  press
                </button>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={qrcode}/>
    </div>
  );
}

export default Booking;
