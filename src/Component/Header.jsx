import { Button, Navbar } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import logo from '../img/afa.png'
import { account} from '../AppwriteConfig'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { IoCloudOffline } from "react-icons/io5"
import { FaCloud } from "react-icons/fa6"

export default function Header() {

  const navigate = useNavigate()
  const [userData, setUserData] = useState()

  useEffect(() => {
    const getData = async () => {
      const response = await account.get()
      setUserData(response)
    }
    getData()
  }, [])
  
  const Signout = async () => {
  try {
    await account.deleteSession('current');
    navigate('/login'); // Redirect to login page
  } catch (error) {
    toast.error('Logout failed:', error.message);
  }
  window.location.reload();
 };

  return (
    <>
      <motion.div
       initial={{ y: -100 }}
       animate={{ y: 0 }}
       transition={{ type: 'spring', stiffness: 120 }}
       >
         <Navbar className='border-b-2 font-bold border-blue-300'>
            <Navbar.Brand>
                <img src={logo} alt="logo" width={40} className='rounded-full' />
            </Navbar.Brand>
            <div className='flex items-center gap-2 md:order-2'>
              <h1>
                {userData?.name}
              </h1>
              { userData ? (
              <IoCloudOffline onClick={Signout} color='red' size={25} className='cursor-pointer' />
              ) : (
                <Link to='/login'>
                  <button className='w-28 border-2 border-blue-500 hover:bg-blue-500 bg-white text-blue-500 rounded-lg hover:text-white p-1'>
                     Login
                  </button>
                </Link>
              )}
            </div>
            <div>
                <Navbar.Toggle />
            </div>
                <Navbar.Collapse>
                 <Navbar.Link href="/">Home</Navbar.Link>
                 <Navbar.Link>
                 <Link to='/gallery'>
                    Gallery
                 </Link>
                 </Navbar.Link>
                 <Navbar.Link>
                  <Link to='/stat'>
                      Stats
                  </Link>
                 </Navbar.Link>
                 <Navbar.Link>
                    <Link to='/about'>
                      Profile
                    </Link>
                 </Navbar.Link>
                 <Navbar.Link>
                    { userData ? (
                      <Link to='/account'>
                       Account
                      </Link>
                    ) : (
                      <span></span>
                    )}
                 </Navbar.Link>
                 <Navbar.Link>
                 { userData?.labels[0] === 'admin' ? (
                    <Link to='/dashboard'>
                      Dashboard
                    </Link>
                  ) : (
                    <h1></h1>
                 )}
                 </Navbar.Link>
                </Navbar.Collapse>
         </Navbar>
      </motion.div> 
    </>
  )
}
