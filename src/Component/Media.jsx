import React from 'react'
import Slider from 'react-slick';
import img1 from '../img/afa cham.mp4'
import imgp from '../img/trophy/play2.png'
import '../App.css'; // Make sure to import your CSS here
import { Link } from 'react-router-dom';

export default function Media() {
    
  return (
    <div>
       <div className='flex flex-col md:flex-row gap-5 max-w-5xl mx-auto p-1 w-full'>
            <div className='group relative w-full h-[330px] hover:border-2
            border-teal-400 overflow-hidden sm:w-[600px] bg-white rounded-md'>
                <Link to='/play'>
                <video className='h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-2'>
                    <source src={img1} />
                </video>
                <div className='absolute inset-0 flex items-center justify-center'>
                <p className='text-white text-4xl opacity-75 group-hover:opacity-100 transition-opacity duration-300'>
                    <img src={imgp} width={50} className='' />
                </p>
                </div>
                <h1 className='z-1 group-hover:h-[100px] absolute bottom-[0px] 
                left-0 right-0 border border-teal-500  hover:bg-blue-400
                text-black transition-all duration-300 bg-white text-center py-2
                rounded-md !rounded-bl-none !rounded-br-none m-2 italic'>
                    Lorem isp qiqehjoq pikjasoa pkaaksn qlshwujdqwiu qkqnasja  ajsjqkla sa skdsdhjksks aksja
                </h1>
                </Link>
            </div>
            <div className='group relative w-full h-[330px] hover:border-2
            border-teal-400 overflow-hidden sm:w-[600px] bg-white rounded-md'>
                <Link to='/play'>
                <video className='h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-2'>
                    <source src={img1} />
                </video>
                <div className='absolute inset-0 flex items-center justify-center'>
                <p className='text-white text-4xl opacity-75 group-hover:opacity-100 transition-opacity duration-300'>
                    <img src={imgp} width={50} className='' />
                </p>
                </div>
                <h1 className='z-1 group-hover:h-[100px] absolute bottom-[0px] 
                left-0 right-0 border border-teal-500  hover:bg-blue-400
                text-black transition-all duration-300 bg-white text-center py-2
                rounded-md !rounded-bl-none !rounded-br-none m-2 italic'>
                    Lorem isp qiqehjoq pikjasoa pkaaksn qlshwujdqwiu qkqnasja  ajsjqkla sa skdsdhjksks aksja
                </h1>
                </Link>
            </div>
        </div>
    </div>
  )
}
