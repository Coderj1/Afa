import React from 'react'
import img1 from '../img/afa2.jpg'
import { FaThumbsUp } from 'react-icons/fa6'
import Slider from '../Component/Slider'

export default function Blog() {
  return (
    <div
    style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} >
    <div className='mx-auto max-w-5xl p-1 opacity-90 pt-72'>
    <div className='min-h-screen p-3 mx-auto max-w-5xl flex flex-col'>
      <div className='bg-white p-2 border-1 rounded-tl-3xl rounded-tr-3xl'>
        <span className='flex max-w-2xl mx-auto'>
           <p className='uppercase text-xl font-bold text-blue-500'>equipe Complete de African Football academy</p>
        </span>
      <p className='max-w-3xl mx-auto'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
         Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at 
         Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
         and going through the cites of the word in classical literature, discovered the undoubtable source.
      </p>
      <div className='p-2'>
        <p className='uppercase text-xl font-bold p-1'>
            Evenement Associes
        </p>
        <Slider />
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}
