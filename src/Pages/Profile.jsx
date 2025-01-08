import React from 'react'
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa6'
import { MdEmail, MdFacebook } from 'react-icons/md'
import { motion } from 'framer-motion';
import { BsTwitterX } from 'react-icons/bs'
import img2 from '../img/afab.jpg'

export default function Profile() {
  return (
    <div>
       <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-3xl font-bold text-gray-500 text-center mt-5'>
        PROFILE</motion.h1>
        <div className='flex md:flex-row flex-col  items-center justify-center p-2'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='flex-1'>
               <img src={img2} alt="hero" width={550} className='w-full sm:p-5 rounded-3xl ' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='flex-1'>
                <div className='flex flex-col text-center pt-3'>
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
                    <BsTwitterX color='black' size={30} />
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
    </div>
  )
}
