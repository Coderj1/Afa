import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { account } from '../AppwriteConfig'
import { toast } from 'react-toastify'
import { Button, TextInput } from 'flowbite-react'
import img1 from '../img/profile.png'

export default function Account() {

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
    <div>
    {
        userData ? (

            <div className='min-h-screen text-white flex flex-col items-center justify-center mx-auto m-2 bg-img2 bg-cover'>
                <div className='flex m-2 rounded-xl sm:gap-2 justify-between bg-blue-600 shadow-xl p-4'>
                <img src={img1} className='w-28 mx-auto' />
                <span className='flex flex-col justify-center text-xl'>
                    <h1>{userData?.name}</h1>
                    <h1>{userData?.email}</h1>
                    <h1>{userData?.phone}</h1>
                    <Button className='mt-2 bg-red-500' onClick={Signout}>Signout</Button>
                </span>
                </div>
                <form className='w-80 m-5 bg-blue-600 p-3 rounded-xl'>
                    <h1 className='text-2xl font-bold text-center mb-1'>Update Account</h1>
                    <div className='mb-2'>
                        <TextInput placeholder='Name' defaultValue={userData?.name} />
                    </div>
                    <div className='mb-2'>
                        <TextInput placeholder='Email' defaultValue={userData?.email} />
                    </div>
                    <div className='mb-2'>
                        <TextInput placeholder='Phone' defaultValue={userData?.phone} />
                    </div>
                    <Button className='mt-2 bg-blue-500 w-full' type='submit'>Update</Button>
                </form>
            </div>

        ) : (  
            <div className='min-h-screen flex flex-col items-center justify-center'>
              <p>No User Account Login...</p>
              <Link to='/login'><Button className='mt-2 bg-blue-500 text-white' gradientDuoTone='pinkToOrange'>Login</Button></Link>
            </div>
            )
    }

    </div>
  )

}
