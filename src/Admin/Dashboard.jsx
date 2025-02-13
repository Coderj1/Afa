import React, { useEffect, useState } from 'react'
import DashSidebar from '../Component/Dashsidebar'
import { account, databases } from '../AppwriteConfig'
import { BiVideo } from "react-icons/bi"
import {HiCollection} from 'react-icons/hi'
import { FaChartSimple } from 'react-icons/fa6'
import { PiSoccerBallBold } from 'react-icons/pi'
import { GiTrophyCup } from 'react-icons/gi'
import { FcGallery } from 'react-icons/fc'
import logo from '../img/acess denied.png'

export default function Dashboard() {

  const [ partenaire, setPartenaire] = useState([])
  const [ category, setCategory ] = useState([])
  const [ blogs, setBlog] = useState([])
  const [ trophy, setTrophy] = useState([])
  const [ video, setVideo] = useState([])
  const [ gallery, setGallery] = useState([])
  const [ stats, setStat] = useState([])
  const [userData, setUserData] = useState()

  useEffect(() => {
    const getData = async () => {
      const response = await account.get()
      setUserData(response)
    }
    getData()
  }, [])

  useEffect(() => {
    const getStat = async () => {
      try {
        const response = await databases.listDocuments(
          "67a5d22900142d063b7c", // Replace with your Database ID
          "67a6735f00074645fd5d" // Replace with your Collection ID
        );
        setStat(response.documents); // Returns an array of documents
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    }
    getStat();
  }, []);

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

  useEffect(() => {
    const getVideo = async () => {
      try {
        const response = await databases.listDocuments(
          "67a5d22900142d063b7c", // Replace with your Database ID
          "67a5ddd7001a703e0a08" // Replace with your Collection ID
        );
        setVideo(response.documents); // Returns an array of documents
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    }
    getVideo();
  }, []);

  useEffect(() => {
        const getTrophy = async () => {
          try {
            const response = await databases.listDocuments(
                "67a5d22900142d063b7c", // Replace with your Database ID
                "67a5e2820028754122b7" // Replace with your Collection ID
            );
              setTrophy(response.documents); // Returns an array of documents
          } catch (error) {
              console.error("Error fetching collection:", error);
          }
        }
      getTrophy();
  }, []);

  useEffect(() => {
    const getBlog = async () => {
      try {
        const response = await databases.listDocuments(
          "67a5d22900142d063b7c", // Replace with your Database ID
          "67a5dd0f003e56bfca74" // Replace with your Collection ID
        );
        setBlog(response.documents); // Returns an array of documents
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    }
    getBlog();
  }, []);

  useEffect(() => {
    const getPartenaire = async () => {
      try {
        const response = await databases.listDocuments(
          "67a5d22900142d063b7c", // Replace with your Database ID
          "67a5decd001aa259503b" // Replace with your Collection ID
        );
        setPartenaire(response.documents); // Returns an array of documents
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    }
    getPartenaire();
  }, []);

  
  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await databases.listDocuments(
          "67a5d22900142d063b7c", // Replace with your Database ID
          "67a5e400002225ac64f4" // Replace with your Collection ID
        );
        setCategory(response.documents); // Returns an array of documents
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    }
    getCategory();
  }, []);
  

  return (
    <>
    { userData?.labels[0] === 'admin' ? (
      <div className='flex flex-col sm:flex-row'>
        <div className=''>
         <DashSidebar />
        </div>
       <div className='m-3'>
        <div className='flex flex-col sm:flex-row justify-between gap-2 mb-4'>  
        <div className='bg-slate-200 p-3 gap-4 md:w-72
          rounded-md shadow-sm h-fit'>
          <div className='flex justify-between'>
              <div>
                  <h3 className='text-gray-500 text-md uppercase font-semibold'>Total Blog</h3>
                  <p className='text-2xl'>{blogs.length}</p>
              </div>
              <HiCollection  className=' text-white
                  rounded-full text-5xl p-3 shadow-lg' />
          </div>
          </div>
          <div className='bg-slate-200 p-3 gap-4 md:w-72
          rounded-md shadow-sm h-fit'>
          <div className='flex justify-between'>
              <div>
                  <h3 className='text-gray-500 text-md uppercase font-semibold'>Total Video</h3>
                  <p className='text-2xl'>{video.length}</p>
              </div>
              <BiVideo  className='text-white
                  rounded-full text-5xl p-3 shadow-lg' />
          </div>
          </div>
          <div className='bg-slate-200 p-3 gap-4 md:w-72
          rounded-md shadow-sm h-fit'>
          <div className='flex justify-between'>
              <div>
                  <h3 className='text-gray-500 text-md uppercase font-semibold'>Gallery</h3>
                  <p className='text-2xl'>{gallery.length}</p>
              </div>
              <FcGallery  className=' text-white
                  rounded-full text-5xl p-3 shadow-lg' />
          </div>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row justify-between gap-2'>   
          <div className='bg-slate-200 p-3 gap-4 md:w-72
          rounded-md shadow-sm h-fit'>
          <div className='flex justify-between'>
              <div>
                  <h3 className='text-gray-500 text-md uppercase font-semibold'>Total Trophy</h3>
                  <p className='text-2xl'>{trophy.length}</p>
              </div>
              <GiTrophyCup  className='bg-teal-600 text-white
                  rounded-full text-5xl p-3 shadow-lg' />
          </div>
          </div>
          <div className='bg-slate-200 p-3 gap-4 md:w-72
          rounded-md shadow-sm h-fit'>
          <div className='flex justify-between'>
              <div>
                  <h3 className='text-gray-500 text-md uppercase font-semibold'>Total Category</h3>
                  <p className='text-2xl'>{category.length}</p>
              </div>
              <PiSoccerBallBold  className='bg-teal-600 text-white
                  rounded-full text-5xl p-3 shadow-lg' />
          </div>
          </div>
          <div className='bg-slate-200 p-3 gap-4 md:w-72
          rounded-md shadow-sm h-fit'>
          <div className='flex justify-between'>
              <div>
                  <h3 className='text-gray-500 text-md uppercase font-semibold'>Total Stats</h3>
                  <p className='text-2xl'>{stats.length}</p>
              </div>
              <FaChartSimple  className='bg-teal-500 text-white
                  rounded-full text-5xl p-3 shadow-lg' />
          </div>
          </div>
        </div>
       </div>
      </div>  
                  ) : (
          <div className='flex flex-col sm:flex-row gap-3 justify-center items-center min-h-screen'>
            <img src={logo} alt="" className='w-80'/>
            <h1 className='text-2xl font-bold'>Access Denied</h1>
          </div>
                 )}
    </>
  )
}
