import React, { useEffect, useState } from 'react'
import { Alert, Button, FileInput, Textarea, TextInput } from 'flowbite-react'
import { toast, ToastContainer } from 'react-toastify';
import { account, databases } from '../AppwriteConfig';
import { ID } from 'appwrite';
import { useNavigate } from 'react-router-dom';
import logo from '../img/acess denied.png'

function AddStats() {

    const navigate = useNavigate();

  const [rating, setRating] = useState('')
  const [ name, setName ] = useState('')
  const [position, setPosition] = useState('')
  const [nationality, setNationality] = useState('')
  const [image, setImg] = useState(null);  // Selected image state
  const [category, setCategory] = useState('');
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
            '67a6735f00074645fd5d',
            ID.unique(),
            {
                rating,
                name,
                position,
                nationality,
                category,
                player: image,
            }
        );

        toast.success('Player Uploaded successfully!!!');
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
            Stats
          </h1>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className='border-4 border-teal-500 border-dotted p-3'>
              <FileInput type='file'
                accept='image/*'
                onChange={handleImageChange} />
            </div>
            <div>
              <TextInput type='text'
                placeholder='Name'
                required
                className='mb-3'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <TextInput type='text'
                placeholder='Nationality'
                required
                className='mb-3'
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              />
            </div>
            <div>
              <TextInput type='text'
                placeholder='Position'
                required
                className='mb-3'
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
            </div>
            <div>
                <TextInput type='text'
                placeholder='Category'
                className='mb-3'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                />
            </div>
            <div>
              <TextInput type='text'
                placeholder='Rating'
                required
                className='mb-3'
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            <div className='flex md:flex-row flex-col gap-2 mx-auto items-center'>
                    {image && (
                            <img
                            className='items-center mx-auto'
                                src={image}
                                width={120}
                            />
                        )}
            </div>
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

export default AddStats