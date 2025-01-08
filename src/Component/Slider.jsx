import React from 'react';
import Slider from 'react-slick';
import img1 from '../img/afabg.png'
import img2 from '../img/icon1.png'
import img3 from '../img/afa champion.jpg'
import img4 from '../img/afa u12.jpg'
import img5 from '../img/afa2.jpg'
import '../App.css'; // Make sure to import your CSS here
import { Link } from 'react-router-dom';

const SimpleSlider = () => {
  


  return (
    <div className='bg-white w-full'>
      <div className='flex flex-col md:flex-row gap-5 max-w-5xl mx-auto w-full p-1'>
          <div className='group relative w-full h-[330px] hover:border-2
          border-teal-400 overflow-hidden sm:w-[340px] bg-gray-300 rounded-md'>
          <Link to='/blog'>
          <img src={img5} className='h-[260px] w-full object-cover group-hover:h-[200px]
            transition-all duration-300 z-2' />
          <h1 className='z-1 group-hover:h-[100px] absolute bottom-[0px] 
          left-0 right-0 border border-teal-500  hover:bg-blue-400
          text-black transition-all duration-300 bg-white text-center py-2
          rounded-md !rounded-bl-none !rounded-br-none m-2 italic'>
              Lorem isp qiqehjoq pikjasoa pkaaksn qlshwujdqwiu qkqnasja  ajsjqkla sa skdsdhjksks aksja
          </h1>
          </Link>
          </div>
          <div className='group relative w-full h-[330px] hover:border-2
          border-teal-400 overflow-hidden sm:w-[340px] bg-gray-300 rounded-md'>
          <img src={img3} className='h-[260px] w-full object-cover group-hover:h-[200px]
            transition-all duration-300 z-2' />
          <h1 className='z-1 group-hover:h-[100px] absolute bottom-[0px] 
          left-0 right-0 border border-teal-500  hover:bg-blue-400
          text-black transition-all duration-300 bg-white text-center py-2
          rounded-md !rounded-bl-none !rounded-br-none m-2 italic'>
              Lorem isp qiqehjoq pikjasoa pkaaksn qlshwujdqwiu qkqnasja  ajsjqkla sa skdsdhjksks aksja
          </h1>
          </div>
          <div className='group relative w-full h-[330px] hover:border-2
          border-teal-400 overflow-hidden sm:w-[340px] bg-gray-300 rounded-md'>
          <img src={img4} className='h-[260px] w-full object-cover group-hover:h-[200px]
            transition-all duration-300 z-2' />
          <h1 className='z-1 group-hover:h-[100px] absolute bottom-[0px] 
          left-0 right-0 border border-teal-500  hover:bg-blue-400
          text-black transition-all duration-300 bg-white text-center py-2
          rounded-md !rounded-bl-none !rounded-br-none m-2 italic'>
              Lorem isp qiqehjoq pikjasoa pkaaksn qlshwujdqwiu qkqnasja  ajsjqkla sa skdsdhjksks aksja
          </h1>
          </div>
      </div>
    </div>
  );
};

export default SimpleSlider;
