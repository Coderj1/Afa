import { Navbar } from 'flowbite-react'
import React from 'react'
import logo from '../img/afa.png'
import { motion } from 'framer-motion'
export default function Header() {
  return (
    <>
      <motion.div
       initial={{ y: -100 }}
       animate={{ y: 0 }}
       transition={{ type: 'spring', stiffness: 120 }}
       >
         <Navbar className='border-b-2 font-bold border-blue-300 '>
            <Navbar.Brand>
                <img src={logo} alt="logo" width={40} className='rounded-full' />
            </Navbar.Brand>
            <div>
                <Navbar.Toggle />
            </div>
                <Navbar.Collapse>
                 <Navbar.Link href="/">Home</Navbar.Link>
                 <Navbar.Link href="/gallery">Gallery</Navbar.Link>
                 <Navbar.Link href="/blog">Blog</Navbar.Link>
                 <Navbar.Link href="/about">About</Navbar.Link>
                 <Navbar.Link href="/contact">Contact</Navbar.Link>
                </Navbar.Collapse>
         </Navbar>
      </motion.div> 
    </>
  )
}
