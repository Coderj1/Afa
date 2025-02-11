import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import img1 from '../img/afa dg cup.jpg'
import img2 from '../img/afa4.jpg'
import img3 from '../img/afa champion.jpg'
import img4 from '../img/afa cup dg.jpg'
import img5 from '../img/afa u12.jpg'
import img6 from '../img/afa3.jpg'
import img7 from '../img/afa2.jpg'
import { databases } from '../AppwriteConfig';
export default function Gallery() {

  const [ gallery, setGallery] = useState([])

     useEffect(() => {
          const getGallery = async () => {
            try {
              const response = await databases.listDocuments(
                "67a5d22900142d063b7c", // Replace with your Database ID
                "67a6838b002912b358db" // Replace with your Collection ID
              );
              setGallery(response.documents); // Returns an array of documents
            } catch (error) {
              console.error("Error fetching collection:", error);
            }
          }
          getGallery();
        }, []);

  return (
    <div className='bg-img1 bg-cover'>
      <div className='min-h-screen max-w-7xl mx-auto'>
        <motion.h1 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='text-center text-4xl text-blue-500 font-bold p-3'>
            Gallery
        </motion.h1>
        <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='flex justify-between gap-2 flex-wrap mx-auto p-4'
        >
        {
           gallery.map((gall) => (          
            <motion.span
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1 }}
            className='mx-auto w-72 hover:bg-white p-8 rounded-2xl '
            >
              <img src={gall.img} alt="" width={500} height={500} className='hover:scale-110 rounded-3xl border-2 border-dashed border-red-200 p-1 rotate-6' />
              <p className='rotate-6'>{gall.title}</p>
            </motion.span>
        ))}
        </motion.div>
      </div>
    </div>
  )
}
