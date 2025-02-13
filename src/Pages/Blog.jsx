import React from 'react'
import { FaThumbsUp } from 'react-icons/fa6'
import Slider from '../Component/Slider'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { account, databases } from '../AppwriteConfig'
import { Button, Textarea } from 'flowbite-react'
import { IoMdSend } from "react-icons/io"
import { toast, ToastContainer } from 'react-toastify'
import { ID, Query } from 'appwrite'
import moment from 'moment/moment'

export default function Blog() {

  const { blogId } = useParams();
  const [blogdetail, setBlogdetail] = useState(null)
  const [like, setLike] = useState()
  const [isLiked, setIsLiked] = useState(true)
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])
  const [ success, setSuccess ] = useState(false)

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

  useEffect(() => {
    const getComment = async () => {
      try {
        const response = await databases.listDocuments(
          "67a5d22900142d063b7c", // Replace with your Database ID
          "67ac3c10002749cffd72", // Replace with your Collection ID
          [
            Query.equal('blogId', blogId),
            Query.orderDesc('createdAt')
          ]
        );
        setComments(response.documents); // Returns an array of documents
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    }
    getComment();
  }, []);

  const handleComment = async (e) => {
    e.preventDefault();

    try {
        const user = await account.get();
        const userId = user.$id;

        if (!comment.trim()) { // ✅ Prevent empty comments
            toast.error("Comment cannot be empty!");
            return;
        }

        const response = await databases.createDocument(
            "67a5d22900142d063b7c",
            "67ac3c10002749cffd72",
            ID.unique(),
            {
                blogId: blogId,
                userId: userId,
                comment: comment, // ✅ Use correct state
                createdAt: new Date().toISOString()
            }
        );

        console.log(response);
        toast.success("Comment added........!!!");
        setComment(""); // ✅ Clear input after submission
        const getComment = async () => {
          try {
            const response = await databases.listDocuments(
              "67a5d22900142d063b7c", // Replace with your Database ID
              "67ac3c10002749cffd72", // Replace with your Collection ID
              [
                Query.equal('blogId', blogId),
              ]
            );
            setComments(response.documents); // Returns an array of documents
          } catch (error) {
            console.error("Error fetching collection:", error);
          }
        }
        getComment();
    } catch (err) {
        toast.error("Failed: " + err.message);
    }
};

  return (
    <>
      <ToastContainer />
          <div
          style={{
                backgroundImage: `url(${blogdetail?.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }} >
          <div className='min-h-screen p-3 mx-auto pt-72 opacity-90 max-w-5xl flex flex-col'>
            <div className='bg-white p-2 border-1 rounded-tl-3xl rounded-tr-3xl'>
              <img src={blogdetail?.img} className='inline sm:hidden w-fit p-2' />
              <span className='flex justify-between max-w-2xl mx-auto'>
                <p className='uppercase text-xl font-bold text-blue-500'>{blogdetail?.title}</p>
                <span className='flex gap-1'>
                 <FaThumbsUp onClick={updateLike} className='mt-1 cursor-pointer' size={18}/>
                 <p className='mt-1'>
                  {like} 
                  {
                  isLiked ?  
                     (blogdetail?.like.length) :
                     (<p></p>)
                  }
                  </p>
                </span>
              </span>
                <p className='max-w-3xl mx-auto'>{blogdetail?.desc}</p>
                <div className='max-w-xl p-2 border-2 rounded-xl mx-auto'>
                  <h1 className='text-xl font-bold'>Comment</h1>
                  <div>
                    <div className='flex'>
                      <Textarea 
                        className="m-1"
                        placeholder="Comment here..."
                        value={comment} // ✅ Use comment state
                        onChange={(e) => setComment(e.target.value)} // ✅ Update state on change
                      />
                        <IoMdSend size={40} color='blue' onClick={handleComment} className='mt-3 cursor-pointer' />
                    </div>
                     {
                      comments.map((com) =>(
                        <div className='p-2 flex justify-between'>
                           <h1 className='text-xs'>{com.comment}</h1>
                           <h1 className='text-xs'>{moment(com.createdAt).fromNow()}</h1>
                        </div>
                      ))
                     }
                  </div>
                  {blogdetail?.comment}
                </div>
            </div>
          </div>
          </div>
    </>
  )
}
