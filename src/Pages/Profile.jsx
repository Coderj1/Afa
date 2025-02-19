import React, { useEffect, useState } from 'react'
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa6'
import { MdEmail, MdFacebook } from 'react-icons/md'
import { motion } from 'framer-motion';
import { BsTwitterX } from 'react-icons/bs'
import img2 from '../img/afa.png'
import { databases } from '../AppwriteConfig';

export default function Profile() {

  const [profile, setProfile] = useState([])

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await databases.listDocuments(
          "67a5d22900142d063b7c", // Replace with your Database ID
          "67b581900024ea216ddb" // Replace with your Collection ID
        );
        setProfile(response.documents); // Returns an array of documents
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    }
    getProfile();
  }, []);

  return (
    <div>
        {
           profile.map((prof) => (
        <div className='flex md:flex-row flex-col  items-center justify-center p-2'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='flex-1'>
               <img src={prof.image} alt="hero" width={400} className='w-full sm:p-5 rounded-3xl ' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='flex-1'>
                <div className='flex flex-col text-center pt-3'>
                    <h1 className='text-3xl font-bold text-blue-500'>BIOGRAPHY</h1>
                    <p className='text-lg text-justify mx-auto max-w-xl'>
                    {prof.desc}
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
              <motion.div className='p-4 max-w-2xl mx-auto'>
                 <motion.h1 className='font-bold'>
                    Administration
                 </motion.h1>
              </motion.div>
              </motion.div>
        </div>    
              ))}
    </div>
  )
}
