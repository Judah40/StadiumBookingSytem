'use client'

import DashboardLayout from "@/components/DashboardLayout";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { supabase } from "@/app/Auth/supabase";
import {ImCancelCircle} from "react-icons/im"


const SignupSchema = Yup.object().shape({
  team1: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  team2: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  numberOfTicket: Yup.number()
    .min(1, 'Too few tickets')
    .required('Required'),
  date: Yup.date()
    .required('Required'),
});
function Tickets() {

const getData=async()=>{

const data =await supabase
.from('Ticket')
.select('*')
return data
}


const [tickets, setTickets]=useState<any[]>([])
const [showPopup, setShowPopup] = useState(false);

  useEffect(()=>{
getData().then((val:any)=>{
  setTickets(val.data)
})
  },[])
  return (
    <DashboardLayout>
        <div className="flex flex-col space-y-8">

      <h1 className="text-xl">Main Tickets</h1>
      {/* Add your dashboard content here */}


{showPopup? <div
      className="popup-container fixed inset-0 flex justify-center
    items-center bg-gray-900 bg-opacity-70 z-50 overflow-y-auto"
    >
      <div className="popup p-6 flex flex-col justify-center rounded-lg shadow-md bg-white w-5/6 relative">
        <div className="w-11/12  h-12  flex items-center justify-end">
          <button 
          onClick={()=>
            setShowPopup(false)
          }
          >
          <ImCancelCircle className="text-2xl text-red-500 hover:text-red-800"/>
          </button>
        </div>

        <div className="border p-4 bg-blue-200">
<Formik
        initialValues={{
          team1: '',
          team2: '',
          numberOfTicket: '',
          date: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values)
         supabase.from('Ticket').insert([{
          ticket_number:values.numberOfTicket,
          team1:values.team1,
          team2:values.team2,
          date:values.date,
          left:values.numberOfTicket
         }]).then((val)=>{
console.log(val.status)
if(val.status ===201){
  alert('Successfully created a new Ticket')
  setShowPopup(false)
}
         })
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col space-y-4">
            <Field type="text" name="team1" placeholder="Team 1" className="border p-2" />
            <ErrorMessage name="team1" component="div" className="text-red-500" />

            <Field type="text" name="team2" placeholder="Team 2" className="border p-2" />
            <ErrorMessage name="team2" component="div" className="text-red-500" />

            <Field type="number" name="numberOfTicket" placeholder="Number of Tickets" className="border p-2" />
            <ErrorMessage name="numberOfTicket" component="div" className="text-red-500" />

            <Field type="date" name="date" className="border p-2" />
            <ErrorMessage name="date" component="div" className="text-red-500" />

            <button type="submit" disabled={isSubmitting} className="bg-blue-500 text-white p-2 rounded">
              Submit
            </button>
          </Form>
        )}
      </Formik>

</div>
      </div>{" "}
    </div>:null}






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
            {tickets && (tickets.map((item:any) => (
              <tr key={item.id}>
                <td className="px-4 py-3 border-b text-sm">{item.id}</td>
                <td className="px-4 py-3 border-b text-sm flex space-x-4 items-center">
                  <div className="grid grid-cols-1 place-items-center">
                    <img src="/countries/spain.png"/>
                    {item.team1}</div>
                  <div>vs</div>
                  <div className="grid grid-cols-1 place-items-center">
                  <img src="/countries/portugal.png"/>
                    {item.team2}</div>
                </td>
                <td className="px-4 py-3 border-b text-sm">
                  {item.ticket_number}
                </td>
                <td className="px-4 py-3 border-b text-sm">
                  {item.ticketsSold}
                </td>
                <td className="px-4 py-3 border-b text-sm">
                  {item.left}
                </td>
                <td className="px-4 py-3 border-b text-sm">{item.date}</td>
              </tr>
            )))}
          </tbody>
        </table>
      </div>
        </div>
        
        <div className="w-32 h-12 mt-6 ">
        <button type="button" onClick={()=>{
          setShowPopup(true)
        }} className="w-full h-full bg-green-500 rounded-xl text-sm text-white hover:bg-green-400">
            Add Match
        </button>
  </div>
    </DashboardLayout>
  );
}

export default Tickets;
