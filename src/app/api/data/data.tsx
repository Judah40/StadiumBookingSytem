import { supabase } from "@/app/Auth/supabase";
import axios from "axios";

export const availableMatches =async(amount:number)=>{

const options = {
  method: 'GET',
  url: 'https://free-football-soccer-videos.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': '5f03b481edmsh380f8c27009de90p1bc43ajsn3a658111921e',
    'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
  },
  params:{
    limit:amount
  }
 
}


	const response = await axios.request(options);
return response
}

//get Matches
export const getMatches=async()=>{
  const session = await supabase.from('Matches').select('*')
  return session
}