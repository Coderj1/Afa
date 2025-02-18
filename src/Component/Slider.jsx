import React from 'react';
import Slider from 'react-slick';
import img1 from '../img/afabg.png'
import img2 from '../img/icon1.png'
import img3 from '../img/afa champion.jpg'
import img4 from '../img/afa u12.jpg'
import img5 from '../img/afa2.jpg'
import '../App.css'; // Make sure to import your CSS here
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { databases } from '../AppwriteConfig';
import { Query } from 'appwrite';

const SimpleSlider = () => {
  
  const [ blogs, setBlog] = useState([])

  useEffect(() => {
    const getBlog = async () => {
      try {
        const response = await databases.listDocuments(
          "67a5d22900142d063b7c", // Replace with your Database ID
          "67a5dd0f003e56bfca74", // Replace with your Collection ID
          [
            Query.limit(3),
            Query.orderDesc('createdAt')
          ]
        );
        setBlog(response.documents); // Returns an array of documents
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    }
    getBlog();
  }, []);

  return (
    <div className='bg-white w-full'>
      <div className='flex flex-col md:flex-row gap-5 max-w-5xl mx-auto w-full p-1 flex-wrap'>
          { blogs.map((blog) => (
            <div className='relative w-full hover:border-2
            border-teal-400 overflow-hidden sm:w-[340px] bg-blue-700 rounded-md'>
            <Link to={`/blog/${blog.$id}`}>
            <img src={blog.img} className='w-full object-cover' />
            <h1 className='z-1 absolute bottom-[0px] 
            left-0 right-0 border border-teal-500  hover:bg-blue-400
            text-black transition-all duration-300 bg-white text-center py-2
            rounded-md !rounded-bl-none !rounded-br-none m-2 italic font-bold uppercase'>
                {blog.title}
            </h1>
            </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SimpleSlider;
