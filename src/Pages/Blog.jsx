import React from 'react'
import { FaThumbsUp } from 'react-icons/fa6'
import Slider from '../Component/Slider'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { account, databases } from '../AppwriteConfig'
export default function Blog() {

  const { blogId } = useParams();
  const [blogdetail, setBlogdetail] = useState(null)
  const [like, setLike] = useState()
  const [isLiked, setIsLiked] = useState(true)

  useEffect(() => {
    const getBlogdetail = async () => {
      try {
        const response = await databases.getDocument(
          "67a5d22900142d063b7c", // Replace with your Database ID
          "67a5dd0f003e56bfca74", // Replace with your Collection ID
          blogId // Replace with your Document ID
        );
        setBlogdetail(response); // Returns an array of document

      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    }
    if(blogId) {
      getBlogdetail();
    }
  }, [blogId]);

  const updateLike = async () => {
    try {
      // 1️⃣ Get the current user ID
      const user = await account.get();
      const userId = user.$id;
  
      // 2️⃣ Fetch the existing blog document
      const blog = await databases.getDocument(
        "67a5d22900142d063b7c", // Database ID
        "67a5dd0f003e56bfca74", // Collection ID
        blogId // Document ID
      );
  
      // 3️⃣ Get the current likes array (or initialize if empty)
      let updatedLike = blog.like || [];
  
      // 4️⃣ Check if the user has already liked the blog
      if (updatedLike.includes(userId)) {
        // If user has liked, remove their like (unlike)
        updatedLike = updatedLike.filter(id => id !== userId);
      } else {
        // If user hasn't liked, add their like
        updatedLike.push(userId);
      }
  
      // 5️⃣ Update the document in Appwrite
      const updatedBlog = await databases.updateDocument(
        "67a5d22900142d063b7c", // Database ID
        "67a5dd0f003e56bfca74", // Collection ID
        blogId, // Document ID
        { like: updatedLike } // Updated likes array
      );
  
      console.log("Updated like:", updatedBlog.like);
      
        const fetchLikes = async () => {
          const blog = await databases.getDocument(
            "67a5d22900142d063b7c", // Database ID
            "67a5dd0f003e56bfca74", // Collection ID
            blogId // Document ID
          );
          setLike(blog.like.length);
          setIsLiked(false)
        }; 
        if (blogId) {
          fetchLikes();
        }

    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };


  return (
    <>
          <div
          style={{
                backgroundImage: `url(${blogdetail?.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }} >
      <div className='mx-auto max-w-5xl p-1 opacity-90 pt-72'>
          <div className='min-h-screen p-3 mx-auto max-w-5xl flex flex-col'>
            <div className='bg-white p-2 border-1 rounded-tl-3xl rounded-tr-3xl'>
              <span className='flex justify-between max-w-2xl mx-auto'>
                <p className='uppercase text-xl font-bold text-blue-500'>{blogdetail?.title}</p>
                <span className='flex gap-1'>
                 <FaThumbsUp onClick={updateLike} className='mt-1 cursor-pointer' size={18}/>
                 <p className='mt-1'>{like} {
                  isLiked ?  (blogdetail?.like.length) : <p></p> }</p>
                </span>
              </span>
                <p className='max-w-3xl mx-auto'>{blogdetail?.desc}</p>
            <div className='p-2'>
              <p className='uppercase text-xl font-bold p-1'>
                  Evenement Associes
              </p>
              <Slider />
              </div>
            </div>
          </div>
          </div>
      </div>
    </>
  )
}
