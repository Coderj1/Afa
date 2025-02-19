import React, { useEffect, useState } from 'react'
import { Alert, Button, FileInput, Textarea, TextInput } from 'flowbite-react'
import { toast, ToastContainer } from 'react-toastify';
import { account, databases } from '../AppwriteConfig';
import { ID } from 'appwrite';
import { useNavigate } from 'react-router-dom';
import logo from '../img/acess denied.png'

function AddProfile() {

    const navigate = useNavigate();

  const [desc , setDesc] = useState('')
  const [image, setImg] = useState(null);  // Selected image state
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);  // Loading state
  const [userData, setUserData] = useState()

  useEffect(() => {
    const getData = async () => {
      const response = await account.get()
      setUserData(response)
    }
    getData()
  }, [])
  
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
        console.log(data.url);
    } catch (err) {
        throw new Error('Failed to upload image: ' + err.message);
    }
};

const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
        // Create blog post document in Appwrite
        const blog = await databases.createDocument(
            '67a5d22900142d063b7c',
            '67b581900024ea216ddb',
            ID.unique(),
            {
                desc,
                image: image,
                createdAt: new Date().toISOString()
            }
        );

        toast.success('Profile added successfully!');
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
          Gallery
        </h1>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <div>
            <Textarea type='text'
              placeholder='Biography'
              required
              className='mb-3'
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
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
            {loading ? 'Publishing...' : 'Publish'}
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

export default AddProfile