import React from 'react'
import img1 from '../img/shrt.jpg'
import { Modal } from 'flowbite-react'

export default function Stats() {
  return (
    <>
    <div className='min-h-screen max-w-6xl mx-auto'>
    <h1 className='text-2xl p-1 font-bold'>Team Stat</h1>
      <div className='flex flex-wrap justify-center p-4 gap-3 sm:w-fit w-full'>
        <div className='flex justify-between bg-blue-500 p-3 rounded-xl'>
            <img src={img1} className='w-32'/>
            <span className=''>
              <p className='w-40 mb-2 uppercase font-bold text-white text-xl'>Frank Talla</p>
              <p className='mt-[-10px] text-green-200 text-xs'>Cameroonian</p>
              <span className='flex justify-between mt-1'>
                  <span>
                      <h1 className='text-gray-200 font-bold text-sm'>Position</h1>
                      <h1 className='mb-1 text-xs text-white'>AMF</h1>
                  </span>
                  <span>
                      <h1 className='text-gray-200 font-bold text-sm'>League Rating</h1>
                      <h1 className='mb-1 text-xs text-white'>82</h1>
                  </span>
              </span>
              <h1 className='text-gray-200 font-bold text-sm'>Category</h1>
              <p className='text-white text-xs'>U17</p>
            </span>
        </div>
      </div>
    </div>
  </>
  )
}
