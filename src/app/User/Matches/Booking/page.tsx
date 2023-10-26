"use client";

import Navigation from "@/components/Navigation";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { loadScript } from "@paypal/paypal-js";
import { PayPalButton } from "react-paypal-button-v2";
import { supabase } from "@/app/Auth/supabase";
import QRCode from "qrcode.react";
import dynamic from "next/dynamic";
import { ImCancelCircle } from "react-icons/im";
import { QrReader } from 'react-qr-reader';
import Footer from "@/components/Footer";

function Booking({
  searchParams,
}: {
  searchParams: {
    team1: string;
    team2: string;
    date: string;
    time: string;
    id:number;
    img1:string;
    img2:string;
    price:number;
    game:string
  };
}) {


  const getData=async()=>{

    const data =await supabase
    .from('Matches')
    .select('left, sold')
    .eq('id',searchParams.id)
    return data
    }
  console.log(searchParams);

  const getUsername = async () => {
    const data = await supabase.auth.getSession();
    return data;
  };
  const [qrValue, setQrValue] = useState<string | null>(null);
  const [data, setData] = useState('No result');



  const downloadQR = () => {
    console.log(canvasRef)
    if (canvasRef.current) {
      // create a "dummy" anchor element
      const link = document.createElement('a');
      console.log(link)
      // get the canvas as data URL
      link.href = (canvasRef.current as any).toDataURL();
      // provide the name for the file
      link.download = 'qrcode.png';
      // simulate clicking the anchor link
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleGenerateQRCode = async () => {
    // This URL is supposed to be your backend endpoint that validates the QR code
 
    setQrValue(`${email}, ${searchParams.team1}, ${searchParams.team2}, ${searchParams.date}, ${searchParams.time}  `);

    // Here, you'd typically also make a call to your backend to register
    // the unique QR code value in your database along with its validity status.
  };

  //state
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [showPopup, setShowPopup] = useState("");
  const canvasRef = useRef(null);


  //lpaypal

  const addPayment = () => {
    if (window.paypal) {
      setScriptLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AYdQd0uldBlNQuOEpB56FDbYAIKi_AT0lUWMP9V7M3KCgJGwvB0iBJaxXRBvRothSu6K3i3-Qv3s-2SJ";

    script.type = "text/javascript";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
  };

  //   loadScript({"clientId":process.env.PAYPAL_CLIENT_ID}).then((paypal)=>{
  // console.log(paypal)
  //   }).catch((err)=>{
  //     console.log(err)
  //   })

  const [amount, setAmount] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [ticketNumber, setTicketNumber] = useState<any | null>(null);
  const [email, setEmail] = useState<any | null>(null);
  const [qrcode, setQRcode] = useState<any | null>(null);


  const handleSelectChange = (e: any) => {
    setSelectedOption(e.target.value);
    const selected = e.target.value;
    if (selected === "VIP") {
      const total = Number(searchParams.price) + 100;
      const Price = total * ticketNumber;
      console.log(Price);
      setAmount(Price);
    } else {
      console.log(Number(searchParams.price) * ticketNumber);
      setAmount(Number(searchParams.price) * ticketNumber);
    }
  };
  const PricePerTicket: number = 150;

  useEffect(() => {
    getUsername().then((value) => {
      setEmail(value.data.session?.user.id);
    });
    addPayment();

    getData().then((data) => {
      console.log(data.data)
    })
  }, []);
  return (
    <div className="w-full ">
      {/* Navigation */}
      <Navigation />

      {/**rest of the body  */}
      <div className="flex flex-1 flex-col h-screen bg-gray-400 bg-contain">
        <div className="grid grid-cols-1 md:grid-cols-2 flex-1   place-items-center ">
          <div className=" w-full h-full flex flex-col justify-center items-center">
            <div className=" p-4 md:p-0 md:h-[500px] mt-4 mb-4 md:m-0 w-10/12  space-y-12 bg-gray-200 border border-gray-300 flex flex-col place-items-center justify-center ">
              <div className="bg-gray-300 p-6 flex flex-col items-center space-y-6 ">
                {/* header */}
                <div>Sierra Leone Premiership</div>

                {/*flag  */}
                <div className="flex items-center justify-center gap-4">
                  <div className="flex flex-col items-center justify-center">
                    <img
                          src={`https://qlrmkunqfmyxzbyrvhfn.supabase.co/storage/v1/object/public/images/${searchParams.img1}`}
                          className="w-32"
                    />
                    {searchParams.team1}
                  </div>
                  vs
                  <div className="flex flex-col items-center justify-center">
                    <img
                          src={`https://qlrmkunqfmyxzbyrvhfn.supabase.co/storage/v1/object/public/images/${searchParams.img2}`}
                          className="w-32"
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

          <div className=" w-full h-full flex flex-col justify-center items-center ">
            <div className="  w-10/12 md:h-[500px]   flex flex-col items-center  space-y-4 pt-12 bg-gray-200">
              <div className="w-9/12">
                <h1 className="text-xl font-thin">Payment Check Out</h1>
              </div>
              <div className="w-9/12 flex">
                <h1 className="font-semibold">Price for VIP Ticket:</h1>
                <div className="flex-1  flex justify-end">
                  Le{Number(searchParams.price)}
                </div>
              </div>
              <div className="w-9/12 flex">
                <h1 className="font-semibold">Price for Normal Ticket:</h1>
                <div className="flex-1  flex justify-end">
                  Le{Number(searchParams.price)  + 100}
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

                      const value: any = val.target.value;

                      if (selectedOption === "VIP") {
                        const total = Number(searchParams.price) + 100;
                        const Price = Number(searchParams.price) * value;
                        console.log(Price);
                        setAmount(Price);
                      } else {
                        console.log(Number(searchParams.price) * ticketNumber);
                        setAmount(Number(searchParams.price) * ticketNumber);
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
                  <p>Le {amount}</p>
                </div>
              </div>

              {/* button */}
              <div className="w-9/12">
                {/* {scriptLoaded && amount?<PayPalButton
                
                amount={amount}
                />:<h1>Please Choose field...</h1>} */}

                <button
                  className="w-24 text-white h-12 rounded bg-blue-500"
                  onClick={() => {
                    if (selectedOption && ticketNumber) {
                      setShowPopup("payment");
                    } else {
                      alert("please select ticket type or ticket number");
                    }
                  }}
                >
                  proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showPopup === "payment" ? (
        <div
          className="popup-container fixed inset-0 flex justify-center
    items-center bg-gray-900 bg-opacity-70 z-50 overflow-y-auto"
        >
          <div className="popup p-6 flex flex-col justify-center rounded-lg shadow-md bg-white w-2/6 relative space-y-4">
            <div className="w-11/12  h-12  flex items-center justify-end">
              <button onClick={() => setShowPopup("")}>
                <ImCancelCircle className="text-2xl text-red-500 hover:text-red-800" />
              </button>
            </div>

            <h1>
              <span className="font-bold">Total</span>:Le {amount}
            </h1>

            {/* Orange money */}
            <div className="w-full h-20 ">
              <button
                onClick={() => {
                  handleGenerateQRCode();
                  setShowPopup("qrcode");
                }}
                type="button"
                className="w-full h-full bg-orange-500 hover:bg-orange-400 rounded-full flex justify-center"
              >
                <img
                  src="/orange.png"
                  alt="orange money"
                  className="w-40 h-full"
                />
              </button>
            </div>
            {/* Afri money */}
            <div className="w-full h-20 ">
              <button
                type="button"
                onClick={() => {
                  handleGenerateQRCode();
                  setShowPopup("qrcode");
                }}
                className="w-full h-full bg-pink-900 hover:bg-pink-700 rounded-full flex justify-center"
              >
                <img
                  src="/afrimoney.png"
                  alt="orange money"
                  className="w-40 h-full"
                />
              </button>
            </div>
          </div>{" "}
        </div>
      ) : showPopup === "qrcode" ? (
        qrValue && 
        
        
        <div
      className="popup-container fixed inset-0 flex justify-center
    items-center bg-gray-900 bg-opacity-70 z-50 overflow-y-auto"
    >
      <div className="popup p-6 flex flex-col justify-center rounded-lg shadow-md bg-white  md:w-1/6 relative">
        <div className="w-11/12  h-12  flex items-center justify-end">
          <button 
          onClick={()=>
            setShowPopup("")
          }
          >
          <ImCancelCircle className="text-2xl text-red-500 hover:text-red-800"/>
          </button>


        </div>
        <div className="w-full flex flex-col items-center">


          <QRCode value={qrValue} ref={canvasRef} />
        <h1>
          Please Scan qrcode
          </h1>  
        <button onClick={()=>{
          supabase.from('Ticket').update({left:"", sold:""})
        }} type="button" className="w-full h-12 bg-green-500 rounded-full text-white">
download qrcode
        </button>
        </div>

      </div>{" "}
    </div>
        
      ) : null}


<Footer/>

    </div>
  );
}

export default Booking;
