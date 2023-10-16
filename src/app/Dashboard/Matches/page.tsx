"use client";

import DashboardLayout from "@/components/DashboardLayout";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { supabase } from "@/app/Auth/supabase";
import {ImCancelCircle} from "react-icons/im"



type values ={
  id: number,
  team1: string,
  team2: string,
  date: string,
  time: string,
}

 const  Matches:React.FC=()=> {

  const [showPopUp, setShowPopUp] = useState(false)
  //get data
  const data = async () => {
    let data = await supabase.from("Matches").select("*");

    return data;
  };

  const [value, setValue]= useState<any|null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true);
const [error, setError] = useState<string | null>(null);

  // Sample data
  const matchesval = [
    {
      id: 1,
      team1: "Team A",
      team2: "Team B",
      date: "2023-10-20",
      time: "15:00",
    },
    {
      id: 2,
      team1: "Team C",
      team2: "Team D",
      date: "2023-10-21",
      time: "18:00",
    },
    {
      id: 3,
      team1: "Team C",
      team2: "Team D",
      date: "2023-10-21",
      time: "18:00",
    },
    {
      id: 4,
      team1: "Team C",
      team2: "Team D",
      date: "2023-10-21",
      time: "18:00",
    },
    {
      id: 5,
      team1: "Team C",
      team2: "Team D",
      date: "2023-10-21",
      time: "18:00",
    },
    {
      id: 6,
      team1: "Team C",
      team2: "Team D",
      date: "2023-10-21",
      time: "18:00",
    },
    {
      id: 7,
      team1: "Team C",
      team2: "Team D",
      date: "2023-10-21",
      time: "18:00",
    },
    // ... more matches
  ];

  const formik = useFormik({
    initialValues: {
      team1: "",
      team2: "",
      date: "",
      time: "",
    },
    validationSchema: Yup.object({
      team1: Yup.string().required("Required"),
      team2: Yup.string().required("Required"),
      date: Yup.date().required("Required").nullable(),
      time: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      supabase
        .from("Matches")
        .insert([
          {
            date: values.date,
            team1: values.team1,
            team2: values.team2,
            time: values.time,
          },
        ])
        .then((values) => {
          console.log(values);
        });
      console.log(values);
      // Handle the form submission, e.g., send the data to an API or store it somewhere.
    },
  });

  useEffect(() => {
    data().then((values) => {
      setValue(values.data);
      setIsLoading(false);

    });
  }, [value]);
  return (
    <DashboardLayout>
      <h1 className="text-xl">Main Matches</h1>
      {/* Add your dashboard content here */}



      {showPopUp?  <div
      className="popup-container fixed inset-0 flex justify-center
    items-center bg-gray-900 bg-opacity-70 z-50 overflow-y-auto"
    >
      <div className="popup p-6 flex flex-col justify-center rounded-lg shadow-md bg-white w-5/6 relative">
        <div className="w-11/12  h-12  flex items-center justify-end">
          <button 
          onClick={()=>
            setShowPopUp(false)
          }
          >
          <ImCancelCircle className="text-2xl text-red-500 hover:text-red-800"/>
          </button>
        </div>






        <div className="border p-4 bg-blue-200">
        <form
          onSubmit={formik.handleSubmit}
          className="w-full max-w-lg mx-auto "
        >
          <div className="mb-4">
            <label
              htmlFor="team1"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Team 1:
            </label>
            <input
              type="text"
              id="team1"
              name="team1"
              onChange={formik.handleChange}
              value={formik.values.team1}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {formik.errors.team1 && formik.touched.team1 && (
              <div className="text-red-500 text-xs mt-2">
                {formik.errors.team1}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="team2"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Team 2:
            </label>
            <input
              type="text"
              id="team2"
              name="team2"
              onChange={formik.handleChange}
              value={formik.values.team2}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {formik.errors.team2 && formik.touched.team2 && (
              <div className="text-red-500 text-xs mt-2">
                {formik.errors.team2}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              onChange={formik.handleChange}
              value={formik.values.date}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {formik.errors.date && formik.touched.date && (
              <div className="text-red-500 text-xs mt-2">
                {formik.errors.date}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="time"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Time:
            </label>
            <input
              type="time"
              id="time"
              name="time"
              onChange={formik.handleChange}
              value={formik.values.time}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {formik.errors.time && formik.touched.time && (
              <div className="text-red-500 text-xs mt-2">
                {formik.errors.time}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
      </div>{" "}
    </div>:null}







     

      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading && <p>Loading...</p>}

          {value && (value.map((match:any) => (
            <div
              key={match.id}
              className="border rounded-lg p-4 shadow-lg bg-blue-500"
            >
              <div className="text-xl font-bold mb-2 flex space-x-4 text-white  items-center justify-center">
                <div>
                  <img src="/countries/portugal.png" />
                  {match.team1}
                </div>
                <div>vs</div>
                <div>
                  <img src="/countries/spain.png" />

                  {match.team2}
                </div>
              </div>
              <div className="text-white">
                {match.date} at {match.time}
              </div>
            </div>
          )))}
        </div>
      </div>

      <div className="w-32 h-12  ">
        <button type="button" onClick={()=>{
          setShowPopUp(true)
        }} className="w-full h-full bg-green-500 rounded-xl text-sm text-white hover:bg-green-400">
            Add Match
        </button>
  </div>
    </DashboardLayout>
  );
}

export default Matches;
