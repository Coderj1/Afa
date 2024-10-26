import React from 'react'
import img1 from '../img/afabg.png'
import img2 from '../img/afab.jpg'
import img3 from '../img/afa champion.jpg'
import img4 from '../img/afa champion.jpg'
import img5 from '../img/afa u12.jpg'
import img6 from '../img/afa3.jpg'
import img7 from '../img/afa2.jpg'
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa6'
import { MdEmail, MdFacebook } from 'react-icons/md'
import { Button } from 'flowbite-react'
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div>
        <div className='flex md:flex-row flex-col items-center bg-img1 bg-cover justify-center p-2'>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
           className='flex-1 md:hidden inline'>
            <img src={img1} alt="hero" width={550} className='' />
        </motion.div>
          <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='flex-1'
          >
            <h1 className='text-3xl font-bold text-center text-blue-500 uppercase'>AFRICAN FOOTBALL ACADEMY</h1>
            <p className='text-justify mx-auto md:w-[490px] mb-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos
            .
            </p>
            <div className='flex gap-3 justify-center p-3'>
              <Button color='blue' className='rounded-full sm:w-32'>Gallery</Button>
              <Button color='blue' className='rounded-full sm:w-32'>Contact</Button>
            </div>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='flex-1 md:inline hidden'
          >
            <img src={img1} alt="hero" width={550} className='' />
        </motion.div>
        </div>
        <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-3xl font-bold text-gray-500 text-center mt-2'>
        PROFILE</motion.h1>
        <div className='flex md:flex-row flex-col  items-center justify-center p-2'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='flex-1'>
               <img src={img2} alt="hero" width={550} className='w-full sm:p-5' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='flex-1'>
                <div className='flex flex-col text-center'>
                    <h1 className='text-3xl font-bold text-blue-500'>BIOGRAPHY</h1>
                    <p className='text-lg text-justify mx-auto max-w-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                    ipsum dolor sit amet consectetur adipisicing elit. Quisquam, rem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                    ipsum dolor sit amet consectetur adipisicing elit. Quisquam, rem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                    ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos rem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                    ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos
                    .
                    </p>
                </div>
                <div className='flex flex-wrap max-w-xl mx-auto gap-3 justify-between m-3'>
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 5 }}
                    >
                    <FaFacebook color='blue' size={30} />
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 5 }}
                    >
                    <MdEmail color='red' size={34} />
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 5 }}
                    >
                    <FaTwitter color='skyblue' size={30} />
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 5 }}
                    >
                    <FaLinkedin color='blue' size={30} />
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 5 }}
                    >
                    <FaYoutube color='red' size={35} />
                  </motion.div>
                </div>
              </motion.div>
        </div>
        <div>
          <h1 className='uppercase text-3xl font-bold text-gray-500 text-center mt-2 mb-4'>Achievement</h1>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
              className="w-full"
            >
              <img src={img3} alt="Achievement" className="w-full h-auto md:blur-sm sm:hover:blur-0 bg-black" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="absolute bg-black md:bg-opacity-30 bg-opacity-20 top-0 right-0 w-full md:w-2/4 h-full flex items-center"
            >
              <div className="text-white mx-auto text-center p-6 m-4">
                <motion.h1 
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3 }}
                className="sm:text-3xl font-bold text-cyan-400">
                 Our Achievements
                </motion.h1>
                <motion.h1
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3 }}
                 className='sm:text-4xl font-bold mb-4'>Trophy Room Gallery</motion.h1>
                <Button className='mx-auto sm:w-52 w-32 rounded-full' color='blue'>Gallery</Button>
              </div>
            </motion.div>
          </div>
        </div>
        <div>
          <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          className='text-3xl font-bold text-gray-500 text-center mt-2 mb-4'
          >
           Category & Equipe
          </motion.h1>
          <motion.div
          className='flex sm:flex-row flex-col justify-between gap-2 p-4'
          
          >
           <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
              className="flex-1"
            >
              <img src={img5} alt="Achievement" width={650} height={600} className="sm:h-[370px]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute top-0 bg-black bg-opacity-50 w-full text-center"
            >
              <div className="text-white mx-auto text-center p-1">
                <motion.h1
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3 }}
                 className='sm:text-2xl text-center font-bold mb-4'>Category U12</motion.h1>
              </div>
            </motion.div>
            </div>
            <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
              className="flex-1"
            >
              <img src={img6} alt="Achievement" width={650} height={600} className="sm:h-[370px]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute top-0 bg-black bg-opacity-50 w-full text-center"
            >
              <div className="text-white mx-auto text-center p-1">
                <motion.h1
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3 }}
                 className='sm:text-2xl text-center font-bold mb-4'>Category U17</motion.h1>
              </div>
            </motion.div>
            </div>
          </motion.div>
        </div>
        <div>
          <div className="relative m-3">
          <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
                className="flex-1"
              >
                <img src={img7} alt="Achievement" className="w-full" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute top-0 bg-black bg-opacity-50 w-full text-center"
              >
                <div className="text-white mx-auto text-center p-1">
                  <motion.h1
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 3 }}
                  className='sm:text-2xl text-center font-bold mb-4'>Category U20</motion.h1>
                </div>
              </motion.div>
          </div>
        </div>
            </div>
    </div>
  )
}
