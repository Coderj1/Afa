import React from 'react'
import img1 from '../img/afabg.png'
import img2 from '../img/afa2.jpg'
import { MdFacebook } from 'react-icons/md'
import { FaXTwitter, FaYoutube } from 'react-icons/fa6'

export default function Banner() {
  return (
    <div className='bg-blue-500'>
        <div className='p-2 max-w-5xl mx-auto sm:hover:scale-110 flex sm:flex-row flex-col'>
        <img src={img2} className='flex-1 w-full sm:w-[300px]' />
        <div>
            <p className='flex-1 w-full italic p-4 pt-5 text-white'>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <span className='flex gap-4 m-4 mt-[-2px]'>
                <MdFacebook size={30} color='blue' className='hover:scale-125' />
                <FaYoutube size={31} color='red'className='hover:scale-125'   />
                <FaXTwitter size={25} color='black' className='hover:scale-125'  />
            </span>
        </div>
        </div>
    </div>
  )
}
