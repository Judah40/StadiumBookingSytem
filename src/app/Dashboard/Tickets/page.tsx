'use client'

import DashboardLayout from "@/components/DashboardLayout";
import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
function Tickets() {

    const formik = useFormik({
        initialValues: {
          teamA: '',
          teamAFlag: null,
          teamB: '',
          teamBFlag: null,
          numberOfTickets: 0,
        },
        validationSchema: Yup.object({
          teamA: Yup.string().required('Required'),
          teamAFlag: Yup.mixed().required('A file is required'),
          teamB: Yup.string().required('Required'),
          teamBFlag: Yup.mixed().required('A file is required'),
          numberOfTickets: Yup.number().min(1, 'At least 1 ticket is required').required('Required'),
        }),
        onSubmit: (values) => {
          console.log(values);
          // Handle form submission, e.g., upload to server.
        },
      });
  // Sample data
  const matches = [
    {
      id: 1,
      matchTeam1: "Team A",
      matchTeam2: "Team B",
      numberOfTickets: 100,
      ticketsSold: 50,
      ticketsLeft: 50,
      date: "2023-11-20",
    },
    {
      id: 2,
      matchTeam1: "Team C",
      matchTeam2: "Team B",
      numberOfTickets: 200,
      ticketsSold: 100,
      ticketsLeft: 100,
      date: "2023-11-21",
    },
    {
      id: 3,
      matchTeam1: "Team C",
      matchTeam2: "Team B",
      numberOfTickets: 200,
      ticketsSold: 100,
      ticketsLeft: 100,
      date: "2023-11-21",
    },
    {
      id: 4,
      matchTeam1: "Team C",
      matchTeam2: "Team B",
      numberOfTickets: 200,
      ticketsSold: 100,
      ticketsLeft: 100,
      date: "2023-11-21",
    },
    {
      id: 5,
      matchTeam1: "Team C",
      matchTeam2: "Team B",
      numberOfTickets: 200,
      ticketsSold: 100,
      ticketsLeft: 100,
      date: "2023-11-21",
    },
    {
      id: 6,
      matchTeam1: "Team C",
      matchTeam2: "Team B",
      numberOfTickets: 200,
      ticketsSold: 100,
      ticketsLeft: 100,
      date: "2023-11-21",
    },
    {
      id: 7,
      matchTeam1: "Team C",
      matchTeam2: "Team B",
      numberOfTickets: 200,
      ticketsSold: 100,
      ticketsLeft: 100,
      date: "2023-11-21",
    },
    {
      id: 8,
      matchTeam1: "Team C",
      matchTeam2: "Team B",
      numberOfTickets: 200,
      ticketsSold: 100,
      ticketsLeft: 100,
      date: "2023-11-21",
    },
    // ... more matches
  ];


  
  return (
    <DashboardLayout>
        <div className="flex flex-col space-y-8">

      <h1 className="text-xl">Main Tickets</h1>
      {/* Add your dashboard content here */}


<div className="border p-4 bg-blue-200">

      <form onSubmit={formik.handleSubmit} className="bg-white rounded-lg shadow-md p-8 max-w-lg mx-auto space-y-4">

        <div>
            Generate Ticket
        </div>

        
        {/* For simplicity, the validation error messages and field-related logic are omitted. 
             You should extend this for a more complete implementation. */}
             
        

        <div>
          <label htmlFor="teamA" className="block text-gray-700 text-sm font-bold mb-2">Team A:</label>
          <input 
            id="teamA"
            name="teamA"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.teamA}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="teamAFlag" className="block text-gray-700 text-sm font-bold mb-2">Team A Flag:</label>
          <input 
            id="teamAFlag"
            name="teamAFlag"
            type="file"
            onChange={(event) => {
              formik.setFieldValue("teamAFlag", event.currentTarget.files ? event.currentTarget.files[0] : null);
            }}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="teamB" className="block text-gray-700 text-sm font-bold mb-2">Team B:</label>
          <input 
            id="teamB"
            name="teamB"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.teamB}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="teamBFlag" className="block text-gray-700 text-sm font-bold mb-2">Team B Flag:</label>
          <input 
            id="teamBFlag"
            name="teamBFlag"
            type="file"
            onChange={(event) => {
              formik.setFieldValue("teamBFlag", event.currentTarget.files ? event.currentTarget.files[0] : null);
            }}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="numberOfTickets" className="block text-gray-700 text-sm font-bold mb-2">Number of Tickets:</label>
          <input 
            id="numberOfTickets"
            name="numberOfTickets"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.numberOfTickets}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="flex justify-end">
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
        </div>
      </form>

</div>





      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b bg-blue-500 text-left text-sm font-semibold text-white uppercase tracking-wider">
                ID
              </th>
              <th className="px-4 py-2 border-b bg-blue-500 text-left text-sm font-semibold text-white uppercase tracking-wider">
                Match
              </th>
              <th className="px-4 py-2 border-b bg-blue-500 text-left text-sm font-semibold text-white uppercase tracking-wider">
                Number of Tickets
              </th>
              <th className="px-4 py-2 border-b bg-blue-500 text-left text-sm font-semibold text-white uppercase tracking-wider">
                Tickets Sold
              </th>
              <th className="px-4 py-2 border-b bg-blue-500 text-left text-sm font-semibold text-white uppercase tracking-wider">
                Tickets Left
              </th>
              <th className="px-4 py-2 border-b bg-blue-500 text-left text-sm font-semibold text-white uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {matches.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-3 border-b text-sm">{item.id}</td>
                <td className="px-4 py-3 border-b text-sm flex space-x-4 items-center">
                  <div className="grid grid-cols-1 place-items-center">
                    <img src="/countries/spain.png"/>
                    {item.matchTeam1}</div>
                  <div>vs</div>
                  <div className="grid grid-cols-1 place-items-center">
                  <img src="/countries/portugal.png"/>
                    {item.matchTeam2}</div>
                </td>
                <td className="px-4 py-3 border-b text-sm">
                  {item.numberOfTickets}
                </td>
                <td className="px-4 py-3 border-b text-sm">
                  {item.ticketsSold}
                </td>
                <td className="px-4 py-3 border-b text-sm">
                  {item.ticketsLeft}
                </td>
                <td className="px-4 py-3 border-b text-sm">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    </DashboardLayout>
  );
}

export default Tickets;
