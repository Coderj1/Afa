import React from 'react'
import img1 from '../img/afa cham.mp4'
import imgp from '../img/trophy/play.png'
import '../App.css'; // Make sure to import your CSS here
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { databases } from '../AppwriteConfig';

export default function Media() {

    const [ video, setVideo] = useState([])

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
    
  return (
    <div>
       <div className='flex flex-col md:flex-row gap-5 max-w-5xl mx-auto w-full p-1 flex-wrap'>
          { video.map((vid) => (
            <div className='relative hover:border-2
            border-teal-400 overflow-hidden sm:w-[500px] bg-blue-700 rounded-md'>
            <Link to={`/play/${vid.$id}`}>
                <video>
                   <source src={vid.video} type="video/mp4" />
                </video>
            <h1 className='z-1 absolute bottom-[0px] 
            left-0 right-0 border border-teal-500  hover:bg-blue-400
            text-black transition-all duration-300 bg-white text-center py-2
            rounded-md !rounded-bl-none !rounded-br-none m-2 italic uppercase'>
                {vid.title}
            </h1>
            </Link>
           </div>
          ))}
      </div>
    </div>
  )
}
