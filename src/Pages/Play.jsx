import React from 'react'
import img1 from '../img/afa cham.mp4'
import img2 from '../img/afabg.png'
import Media from '../Component/Media'
import { MdFacebook } from 'react-icons/md'
import { FaXTwitter, FaYoutube } from 'react-icons/fa6'


export default function Play() {
  return (
    <div className='min-h-screen bg-img1 bg-cover mx-auto'>
      <div className='max-7xl mx-auto p-2'>
         <video controls className='p-4 mx-auto'>
            <source src={img1} width={800} />
         </video> 
         <span className='flex max-w-4xl mx-auto'>
           <p className='uppercase text-xl font-bold text-blue-500'>equipe Complete de African Football academy</p>
        </span>
        <p className='max-w-4xl mx-auto'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
            Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at 
            Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
            and going through the cites of the word in classical literature, discovered the undoubtable source.
        </p>
        <div className='flex gap-4 mt-1 p-3 justify-between mx-auto'>
            <div className='mx-auto flex rounded-full gap-1 text-blue-400 font-bold'>
            <div className='w-8'>
                <img src={img2}  />
            </div>
               <h1 className='uppercase mt-1'>African Football Academy</h1>
            </div>
            <span className='flex gap-4 m-4 mx-auto mt-1'>
                <MdFacebook size={20} color='blue' className='hover:scale-125' />
                <FaYoutube size={21} color='red'className='hover:scale-125'   />
                <FaXTwitter size={18} color='black' className='hover:scale-125'  />
            </span>
        </div>
      </div>
      <div>
         <Media />
      </div>
    </div>
  )
}
