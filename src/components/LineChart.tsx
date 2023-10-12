import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


type values ={
    
    responsive: boolean,
    maintainAspectRatio: boolean,
    plugin:{
        legend:{
            position:string,

        },
        title:{
            display:boolean,
            text:string,
        }
    }
}
export const options= {
  responsive: true,
  maintainAspectRatio: false,
  
  plugins: {
    legend: {
      position: "top" ,
    },
    title: {
      display: true,
      text: 'Weekly Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Actual Income',
      data: [2000,3000,4000,3000,5000,6000],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Expected Income',
      data: [3000,4000,5000,6000,7000,8000],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function Graph() {
  return (

    <div className='w-11/12 sm:w-11/12 md:w-11/12 lg:w-full   md:h-[68vh]  lg:h-[65vh] rounded p-2 bg-white '>
    <Line options={options} data={data} />
    </div>
  )
}
