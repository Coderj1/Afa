import React from 'react'
import img1 from '../img/afa3.jpg'
import { FaThumbsUp } from 'react-icons/fa6'
import Slider from '../Component/Slider'

export default function Blog() {
  return (
    <div className='bg-img1 bg-cover'>
    <div className='mx-auto max-w-5xl bg-white p-2'>
        <h1 className='text-center text-2xl font-bold text-blue-400 p-4'>Blog AFA</h1>
    <div className='min-h-screen p-3 mx-auto max-w-5xl '>
      <img src={img1} width={700} className='mx-auto p-2' />
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
  )
}
