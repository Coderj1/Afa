import React, { useEffect, useState } from 'react'
import img1 from '../img/afabg.png'
import img2 from '../img/afa2.jpg'
import { MdFacebook } from 'react-icons/md'
import { FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { databases } from '../AppwriteConfig'
import { Query } from 'appwrite'

export default function Banner() {

  const [ tblogs, setTBlog] = useState([])

  useEffect(() => {
    const getTBlog = async () => {
      try {
        const response = await databases.listDocuments(
          "67a5d22900142d063b7c", // Replace with your Database ID
          "67a5dd0f003e56bfca74", // Replace with your Collection ID
          [
            Query.limit(1),
            Query.orderDesc('createdAt')
          ]
        );
        setTBlog(response.documents); // Returns an array of documents
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    }
    getTBlog();
  }, []);

  return (
    <div className='bg-blue-500'>
      {
        tblogs.map((blog) => (
        <div className='p-2 max-w-5xl mx-auto sm:hover:scale-110 flex sm:flex-row flex-col'>
          <img src={blog.img} className='flex-1 w-full sm:w-[300px]' />
          <div className='w-full italic p-4 pt-5'>
              <h1 className='uppercase text-2xl font-bold text-blue-300'>{blog.title}</h1>
              <p className=''>
                 {blog.desc}
              </p>
              <span className='flex gap-4 m-4 mt-[-2px]'>
                  <MdFacebook size={30} color='blue' className='hover:scale-125' />
                  <FaYoutube size={31} color='red'className='hover:scale-125'   />
                  <FaXTwitter size={25} color='black' className='hover:scale-125'  />
              </span>
          </div>
        </div>
        ))
      }
    </div>
  )
}
