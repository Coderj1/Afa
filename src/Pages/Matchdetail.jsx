import React from 'react'
import img1 from '../img/afabg.png'
import img2 from '../img/simba.png'
import img3 from '../img/canon.png'
import { FaCheckCircle } from "react-icons/fa";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { FaMinusCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { databases } from '../AppwriteConfig'

export default function Matchdetail() {

  const { matchId } = useParams();
  const [match, setMatch] = useState()

  useEffect(() => {
    const getMatch = async () => {
      try {
        const response = await databases.getDocument(
          "67a5d22900142d063b7c", // Replace with your Database ID
          "67a5e0ea000aeb4ab1b6", // Replace with your Collection ID
          matchId // Replace with your Document ID
        );
        setMatch(response); // Returns an array of document

      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    }
    if(matchId) {
      getMatch();
    }
  }, [matchId]);

  return (
    <div className='bg-img2 bg-cover md:p-20 p-5 min-h-screen'>
    <div className='mx-auto max-w-3xl bg-white p-3 border-dashed border-4 border-blue-500 shadow-xl'>
        <div>
            <h1 className='text-center text-2xl font-bold text-blue-500'>Upcoming Match</h1>
        </div>
        <div className='flex justify-between items-center p-3 gap-4 max-w-xl mx-auto'>
                    <span className='w-40'>
                        <img src={match?.home_team} width={200} className='rounded-2xl mx-auto' />
                        <p className='text-center uppercase text-sm font-bold'>{match?.home_name}</p>
                    </span>
                    <span className='text-4xl'>
                        -
                    </span>
                    <span className='w-40'>
                        <img src={match?.away_team} width={200} className='rounded-2xl mx-auto' />
                        <p className='text-center uppercase text-sm font-bold'>{match?.away_name}</p>
                    </span>
        </div>
        <div className='mx-auto text-center'>
                    <p></p>
                    <p className='text-black font-bold text-sm'>{match?.stade}</p>
                    <p className='font-semibold text-gray-400'>{match?.date} | {match?.time}</p>
        </div>
    </div>
    </div>
  )
}
