import React from 'react'
import img1 from '../img/afabg.png'
import img2 from '../img/simba.png'
import img3 from '../img/canon.png'
import { FaCheckCircle } from "react-icons/fa";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { FaMinusCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

export default function Matchdetail() {
  return (
    <div className='bg-img1 bg-cover min-h-screen'>
    <div className='mx-auto max-w-5xl bg-white min-h-screen p-2'>
        <div>
            <h1 className='text-center text-2xl font-bold text-blue-400'>Upcoming Match</h1>
            <p className='text-center text-sm text-black'>26/11/2024</p>
        </div>
        <div className='flex justify-between items-center p-3 gap-4 max-w-3xl mx-auto'>
                    <span className='w-40'>
                        <img src={img1} width={200} className='rounded-full mx-auto' />
                        <p className='text-center uppercase text-sm'>AFA</p>
                    </span>
                    <span className='text-4xl'>
                        -
                    </span>
                    <span className='w-40'>
                        <img src={img3} width={200} className='rounded-full mx-auto' />
                        <p className='text-center uppercase text-sm'>Canon de Yaounde</p>
                    </span>
        </div>
        <div className='mx-auto text-center'>
                    <p></p>
                    <p className='text-black font-bold text-sm'>Stade de Japoma</p>
                    <p className='font-semibold text-gray-400'>13 Mars 2025 | 17H45</p>
        </div>
        <div>
        <h1 className='mx-auto max-w-xl font-semibold p-2 text-xl'>Recent Matches</h1>
                            <div className='flex justify-between mx-auto max-w-xl mb-2'>
                                <span className='flex gap-2'>
                                  <img src={img1} width={50} />
                                  <p className='uppercase flex items-center text-xl'>BMT</p>
                                </span>
                               <div className="flex gap-1 items-center">
                                  <FaCheckCircle color='green' size={20}/>
                                  <RxCrossCircled size={20} color='red' />
                                  <FaMinusCircle size={18} color='gray' />
                                  <FaMinusCircle size={18} color='gray' />
                                  <FaCheckCircle color='green' size={20}/>
                               </div>
                            </div>
                            <div className='flex justify-between mx-auto max-w-xl mb-2'>
                            <span className='flex gap-2'>
                                  <img src={img3} width={50} />
                                  <p className='uppercase flex items-center text-xl'>CSY</p>
                                </span>
                               <div className="flex gap-1 items-center">
                                  <FaCheckCircle color='green' size={20}/>
                                  <FaMinusCircle size={18} color='gray' />
                                  <FaCheckCircle color='green' size={20}/>
                                  <RxCrossCircled size={20} color='red' />
                                  <FaCheckCircle color='green' size={20}/>
                               </div>
                            </div>
        </div>
    </div>
    </div>
  )
}
