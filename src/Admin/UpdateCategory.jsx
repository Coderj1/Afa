import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { account, databases } from '../AppwriteConfig'
import { Button, FileInput, Textarea, TextInput } from 'flowbite-react'
import { toast, ToastContainer } from 'react-toastify'
import logo from '../img/acess denied.png'

export default function UpdateCategory() {

    const {catId} = useParams()

    const [image, setImg] = useState(null);  // Selected image state
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);  // Loading state
    const [userData, setUserData] = useState()
    const [categorydetail, setCategorydetail] = useState({})

  useEffect(() => {
    const getData = async () => {
      const response = await account.get()
      setUserData(response)
    }
    getData()
  }, [])

    useEffect(() => {
        const getCategorydetail = async () => {
            try {
              const response = await databases.getDocument(
                "67a5d22900142d063b7c", // Replace with your Database ID
                "67a5e400002225ac64f4", // Replace with your Collection ID
                catId // Replace with your Document ID
              );
              setCategorydetail(response); // Returns an array of document
      
            } catch (error) {
              console.error("Error fetching collection:", error);
            }
          }
          if(catId) {
            getCategorydetail();
          }
        }, [catId]);

        const CLOUD_NAME = 'drzoiigek';
        const UPLOAD_PRESET = 'afa-test';

  const handleImageChange = async (e) => {
      const file = e.target.files[0];
      if (file) {
          try {
              setLoading(true);
              const imageUrl = await uploadImage(file);
              setImg(imageUrl);
              setError(null);
          } catch (err) {
              setError(err.message);
          } finally {
              setLoading(false);
          }
      }
  };
  
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);

    try {
        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
            {
                method: 'POST',
                body: formData,
            }
        );

        if (!response.ok) {
            throw new Error('Image upload failed');
        }

        const data = await response.json();
        return data.secure_url;
    } catch (err) {
        throw new Error('Failed to upload image: ' + err.message);
    }
};

 const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const updatedData = {
        cat: categorydetail.cat,
        img: image || categorydetail.img
    };

    try {
          
        const category = await databases.updateDocument(
            '67a5d22900142d063b7c',
            '67a5e400002225ac64f4',
            catId,
            updatedData
        );

        toast.success('Category Updated successfully!!!');
    } catch (err) {
        toast.error('Failed: ' + err.message);
    } finally {
        setLoading(false);
    }
};

  return (
    <>
        { userData?.labels[0] === 'admin' ? (
            <div className='p-3 max-w-6xl mx-auto flex-1 w-full'>
                <ToastContainer />
                <h1 className='text-center text-3xl my-7 font-semibold'>
                Update Category
                </h1>
                <div className='p-4 flex gap-4 justify-between overflow-x-scroll scrollbar'>
                    <span>
                        <h1 className='text-2xl font-bold'>Category</h1>
                        <p className=''>{categorydetail?.cat}</p>
                    </span>
                    <span>
                        <h1 className='text-2xl font-bold'>Image</h1>
                        <img src={categorydetail?.img} alt="" width={100} />
                    </span>
                </div>
                <form className='flex flex-col gap-4' onSubmit={handleUpdate}>
                <div>
                    <TextInput type='text'
                    placeholder='Category'
                    className='mb-3'
                    value={categorydetail?.cat}
                    onChange={(e) => setCategorydetail({...categorydetail, cat: e.target.value})}
                    />
                </div>
                <div className='border-4 border-teal-500 border-dotted p-3'>
                    <FileInput type='file'
                    accept='image/*'
                    onChange={handleImageChange} />
                </div>
                {image && (
                                <img
                                className='items-center mx-auto'
                                    src={image}
                                    width={120}
                                />
                            )}
                <Button type='submit' gradientDuoTone='purpleToPink' outline disabled={loading}>
                    {loading ? 'Updating...' : 'Update'}
                </Button>
                </form>
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
