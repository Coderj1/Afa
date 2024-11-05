import React from 'react'
import { motion } from 'framer-motion';
import img1 from '../img/afa dg cup.jpg'
import img2 from '../img/afa4.jpg'
import img3 from '../img/afa champion.jpg'
import img4 from '../img/afa cup dg.jpg'
import img5 from '../img/afa u12.jpg'
import img6 from '../img/afa3.jpg'
import img7 from '../img/afa2.jpg'
export default function Gallery() {
  return (
    <div className='bg-img1 bg-cover'>
      <div className='min-h-screen max-w-7xl mx-auto'>
        <motion.h1 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='text-center text-4xl text-white font-bold p-3'>
            Gallery
        </motion.h1>
        <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='flex justify-between gap-2 flex-wrap mx-auto p-4'
        >
          <motion.span
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1 }}
          className='mx-auto w-72 hover:bg-white p-8 rounded-2xl '
          >
            <img src={img1} alt="" width={300} height={300} className='hover:scale-110 rounded-3xl border-2 border-dashed border-red-200 p-1 rotate-6' />
            <p className='rotate-6'>Lorem ipsum the reay kiwiu ray siiq yyq react vdev agiwvn becvvst khsmkd hgsjg jakak kas ksksh jshjkasgl</p>
          </motion.span>
          <motion.span
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1 }}
          className='mx-auto w-72 hover:bg-white p-8 rounded-2xl '
          >
            <img src={img3} alt="" width={300} height={300} className='hover:scale-110 rounded-3xl border-2 border-dashed border-red-200 p-1 rotate-6' />
            <p className='rotate-6'>Lorem ipsum the reay kiwiu ray siiq yyq react vdev agiwvn becvvst khsmkd hgsjg jakak kas ksksh jshjkasgl</p>
          </motion.span>
          <motion.span
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1 }}
          className='mx-auto w-72 hover:bg-white p-8 rounded-2xl '
          >
            <img src={img5} alt="" width={300} height={300} className='hover:scale-110 rounded-3xl border-2 border-dashed border-red-200 p-1 rotate-6' />
            <p className='rotate-6'>Lorem ipsum the reay kiwiu ray siiq yyq react vdev agiwvn becvvst khsmkd hgsjg jakak kas ksksh jshjkasgl</p>
          </motion.span>
          <motion.span
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1 }}
          className='mx-auto w-72 hover:bg-white p-8 rounded-2xl '
          >
            <img src={img6} alt="" width={300} height={300} className='hover:scale-110 rounded-3xl border-2 border-dashed border-red-200 p-1 rotate-6' />
            <p className='rotate-6'>Lorem ipsum the reay kiwiu ray siiq yyq react vdev agiwvn becvvst khsmkd hgsjg jakak kas ksksh jshjkasgl</p>
          </motion.span>
          <motion.span
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1 }}
          className='mx-auto w-72 hover:bg-white p-8 rounded-2xl '
          >
            <img src={img7} alt="" width={300} height={300} className='hover:scale-110 rounded-3xl border-2 border-dashed border-red-200 p-1 rotate-6' />
            <p className='rotate-6'>Lorem ipsum the reay kiwiu ray siiq yyq react vdev agiwvn becvvst khsmkd hgsjg jakak kas ksksh jshjkasgl</p>
          </motion.span>
        </motion.div>
      </div>
    </div>
  )
}
