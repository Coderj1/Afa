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
    <div className='bg-img3 bg-cover sm:p-10 p-3 min-h-screen items-center justify-center'>
    <div className='mx-auto max-w-5xl bg-white p-1 rounded-2xl border-2 border-blue-500 shadow-xl'>
        <div>
            <h1 className='text-center text-2xl font-bold text-blue-500'>Upcoming Match</h1>
        </div>
        <div className='flex justify-between items-center p-3 gap-4 max-w-xl mx-auto'>
                    <span className=''>
                        <img src={match?.home_team} width={200} className='rounded-2xl mx-auto w-40' />
                        <p className='text-center uppercase text-sm font-bold w-full'>{match?.home_name}</p>
                    </span>
                    <span className='text-4xl'>
                        -
                    </span>
                    <span className=''>
                        <img src={match?.away_team} width={200} className='rounded-2xl mx-auto w-40' />
                        <p className='text-center uppercase text-sm font-bold w-32'>{match?.away_name}</p>
                    </span>
        </div>
        <div className='mx-auto text-center'>
                    <h1 className='text-sm font-semibold text-blue-400'>Arbitre</h1>
                    <p className='font-bold text-gray-500'>{match?.arbitre}</p>
                    <p className='text-black font-bold text-sm'>{match?.stade}</p>
                    <p className='font-semibold text-gray-400'>{match?.date} | {match?.time}</p>
        </div>
        <div className='p-2 flex justify-between'>
          <div className='p-4'>
            <h1 className='font-semibold'>Category</h1>
            <p className='ml-3 text-gray-500'>{match?.category}</p>
          </div>
          <div className='p-4'>
            <h1 className='font-semibold'>Ticket</h1>
            <p className='ml-3 text-gray-500'>{match?.ticket}</p>
          </div>
        </div>
        <div className='flex justify-between w-80 mx-auto'>
          <div className='p-4'>
            <h1 className='font-semibold'>{match?.home_name} Coach</h1>
            <p className='text-gray-500'>{match?.home_coach}</p>
          </div>
          <div className='p-4'>
            <h1 className='font-semibold'>{match?.away_name} Coach</h1>
            <p className='text-gray-500'>{match?.away_coach}</p>
          </div>
        </div>
    </div>
    </div>
  )
}
