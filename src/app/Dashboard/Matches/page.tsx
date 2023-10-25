"use client";

import DashboardLayout from "@/components/DashboardLayout";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from "yup";
import { Supa, supabase } from "@/app/Auth/supabase";
import {ImCancelCircle} from "react-icons/im"

const validationSchema = Yup.object().shape({
  time: Yup.string().required('Time is required'),
  date: Yup.date().required('Date is required').nullable(),
  team1: Yup.string().required('Team 1 is required'),
  team1Flag: Yup.mixed().required('Team 1 flag is required'),
  team2: Yup.string().required('Team 2 is required'),
  team2Flag: Yup.mixed().required('Team 2 flag is required'),
  ticketNumber: Yup.string().required('Ticket number is required'),
  gameName: Yup.string().required('Game name is required'),
});

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
    onSubmit: (values:any) => {
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
        <Formik
        initialValues={{
          time: '',
          date: null,
          team1: '',
          team1Flag: '',
          team2: '',
          team2Flag: '',
          ticketNumber: '',
          gameName: ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {


        const data= ()=>{

        return  supabase
           .from('Matches')
           .insert([
             { date: values.date, time:values.time, team1:values.team1,team2:values.team2, ticket_number:values.ticketNumber,left:values.ticketNumber, game_name:`${values.team1}vs${values.team2}`, price:values.gameName},
           ])
        }  

        data().then((data)=>{
          if(data.status===201){
            alert("Successfully created a match and ticket")
            setShowPopUp(false)
          }
console.log(data.status);
        })
          data
                  console.log(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="space-y-4">
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time:</label>
              <Field type="time" name="time" className="mt-1 p-2 w-full border rounded-md"/>
              <ErrorMessage name="time" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date:</label>
              <Field type="date" name="date" className="mt-1 p-2 w-full border rounded-md"/>
              <ErrorMessage name="date" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label htmlFor="team1" className="block text-sm font-medium text-gray-700">Team 1:</label>
              <Field type="text" name="team1" className="mt-1 p-2 w-full border rounded-md"/>
              <ErrorMessage name="team1" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label htmlFor="team1Flag" className="block text-sm font-medium text-gray-700">Team 1 Flag:</label>
              <input type="file" name="team1Flag" onChange={(event:any) => {
                setFieldValue("team1Flag", event.currentTarget.files[0]);
              }} className="mt-1 p-2 w-full border rounded-md"/>
              <ErrorMessage name="team1Flag" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label htmlFor="team2" className="block text-sm font-medium text-gray-700">Team 2:</label>
              <Field type="text" name="team2" className="mt-1 p-2 w-full border rounded-md"/>
              <ErrorMessage name="team2" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label htmlFor="team2Flag" className="block text-sm font-medium text-gray-700">Team 2 Flag:</label>
              <input type="file" name="team2Flag" onChange={(event:any) => {
                setFieldValue("team2Flag", event.currentTarget.files[0]);
              }} className="mt-1 p-2 w-full border rounded-md"/>
              <ErrorMessage name="team2Flag" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label htmlFor="ticketNumber" className="block text-sm font-medium text-gray-700">Ticket Number:</label>
              <Field type="text" name="ticketNumber" className="mt-1 p-2 w-full border rounded-md"/>
              <ErrorMessage name="ticketNumber" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label htmlFor="gameName" className="block text-sm font-medium text-gray-700">Ticekt Price:</label>
              <Field type="text" name="gameName" className="mt-1 p-2 w-full border rounded-md"/>
              <ErrorMessage name="gameName" component="div" className="text-red-500 text-sm" />
            </div>

            <button type="submit" disabled={isSubmitting} className="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
              Submit
            </button>
          </Form>
        )}
      </Formik>
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
                  <img src="/countries/portugal.png" className="w-20 h-20"/>
                  {match.team1}
                </div>
                <div>vs</div>
                <div>
                  <img src="/countries/spain.png" className="w-20 h-20" />

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
