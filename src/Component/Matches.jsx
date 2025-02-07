import React from 'react';
import Slider from 'react-slick';
import img1 from '../img/afabg.png'
import img2 from '../img/simba.png'
import img3 from '../img/canon.png'
import img4 from '../img/apjs.png'
import '../App.css'; // Make sure to import your CSS here
import { Link } from 'react-router-dom';

const Matches = () => {

  return (
    <div className='flex gap-5 max-w-7xl mx-auto p-5 overflow-x-scroll scrollbar'>
            <div className='p-2 bg-gray-100 mx-auto shadow-xl'>
                <Link to='/matchdet'>
                        <div className='flex justify-between items-center p-3 mx-auto gap-4'>
                            <span className='w-20'>
                                <img src={img4} width={60} className='rounded-full mx-auto' />
                                <p className='text-center uppercase text-sm'>APJS de Fou</p>
                            </span>
                            <span>
                                VS
                            </span>
                            <span className='w-20'>
                                <img src={img1} width={60} className='rounded-full mx-auto' />
                                <p className='text-center uppercase text-sm'>AFA</p>
                            </span>
                        </div>
                        <div className='mx-auto text-center'>
                            <p className='text-sm text-black'>Stade de Japoma</p>
                            <p className='text-xs text-gray-400'>12 Mars 2024 | 12H00</p>
                        </div>
                </Link>
            </div>
            <div className='p-2 bg-gray-100 mx-auto shadow-xl'>
             <Link to='/matchdet'>
                <div className='flex justify-between items-center p-3 mx-auto gap-4'>
                    <span className='w-20'>
                        <img src={img1} width={60} className='rounded-full mx-auto' />
                        <p className='text-center uppercase text-sm'>AFA</p>
                    </span>
                    <span>
                        VS
                    </span>
                    <span className='w-20'>
                        <img src={img3} width={60} className='rounded-full mx-auto' />
                        <p className='text-center uppercase text-sm'>Canon de Yaounde</p>
                    </span>
                </div>
                <div className='mx-auto text-center'>
                    <p className='text-sm text-black'>Stade Omnisport Douala</p>
                    <p className='text-xs text-gray-400'>19 Mars 2024| 17H00</p>
                </div>
              </Link>
            </div>
            <div className='p-2 bg-gray-100 mx-auto shadow-xl'>
              <Link to='/matchdet'>
                <div className='flex justify-between items-center p-3 mx-auto gap-4'>
                    <span className='w-20'>
                        <img src={img2} width={60} className='rounded-full mx-auto' />
                        <p className='text-center uppercase text-sm'>Simba fc</p>
                    </span>
                    <span>
                        VS
                    </span>
                    <span className='w-20'>
                        <img src={img1} width={60} className='rounded-full mx-auto' />
                        <p className='text-center uppercase text-sm'>AFA</p>
                    </span>
                </div>
                <div className='mx-auto text-center'>
                    <p className='text-sm text-black'>Stade de Olembe</p>
                    <p className='text-xs text-gray-400'>30 Mars 2024| 15H45</p>
                </div>
               </Link>
            </div>
        
    </div>
  );
};

export default Matches;