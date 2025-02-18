import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { account, databases } from '../AppwriteConfig'
import { Button, FileInput, Textarea, TextInput } from 'flowbite-react'
import { toast, ToastContainer } from 'react-toastify'
import logo from '../img/acess denied.png'

export default function UpdateMatch() {

    const {matchId} = useParams()

    const [homeimage, sethomeImg] = useState(null);  // Selected image state
    const [awayimage, setawayImg] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);  // Loading state
    const [userData, setUserData] = useState()
    const [matchdetail, setMatchdetail] = useState({})

  useEffect(() => {
    const getData = async () => {
      const response = await account.get()
      setUserData(response)
    }
    getData()
  }, [])

    useEffect(() => {
        const getMatchdetail = async () => {
            try {
              const response = await databases.getDocument(
                "67a5d22900142d063b7c", // Replace with your Database ID
                "67a5e0ea000aeb4ab1b6", // Replace with your Collection ID
                matchId // Replace with your Document ID
              );
              setMatchdetail(response); // Returns an array of document
      
            } catch (error) {
              console.error("Error fetching collection:", error);
            }
          }
          if(matchId) {
            getMatchdetail();
          }
        }, [matchId]);

        const CLOUD_NAME = 'drzoiigek';
        const UPLOAD_PRESET = 'afa-test';
      
        const handlehomeImageChange = async (e) => {
            const file = e.target.files[0];
            if (file) {
                try {
                    setLoading(true);
                    const imageUrl = await uploadhomeImage(file);
                    sethomeImg(imageUrl);
                    setError(null);
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            }
        };
      
        const handleawayImageChange = async (e) => {
          const file = e.target.files[0];
          if (file) {
              try {
                  setLoading(true);
                  const imageUrl = await uploadawayImage(file);
                  setawayImg(imageUrl);
                  setError(null);
              } catch (err) {
                  setError(err.message);
              } finally {
                  setLoading(false);
              }
          }
      };
      
        
        const uploadhomeImage = async (file) => {
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
      
      const uploadawayImage = async (file) => {
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

const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const updatedData = {
        stade: matchdetail.stade,
        time: matchdetail.time,
        date: matchdetail.date,
        arbitre: matchdetail.arbitre,
        category: matchdetail.category,
        ticket: matchdetail.ticket,
        home_name: matchdetail.home_name,
        away_name: matchdetail.away_name,
        home_team: homeimage || matchdetail.homeimage,
        away_team: awayimage || matchdetail.awayimage,
        home_coach: matchdetail.home_coach,
        away_coach: matchdetail.away_coach,
    };

    try {
        // Update blog post document in Appwrite
        const match = await databases.updateDocument(
            '67a5d22900142d063b7c',
            '67a5e0ea000aeb4ab1b6',
            matchId,
            updatedData
        );

        toast.success('Match Updated successfully!!!');
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
                Update Match
                </h1>
                <div className='p-4 flex flex-wrap gap-4 justify-between'>
                    <div className='flex gap-6'>
                        <span>
                            <h1 className='text-2xl font-bold'>Home Team</h1>
                            <img src={matchdetail?.home_team} alt="" width={100} />
                        </span>
                        <span>
                            <h1 className='text-2xl font-bold'>Name</h1>
                            <p className='line-clamp-2'>{matchdetail?.home_name}</p>
                        </span>
                    </div>
                    <div className='flex gap-6'>
                        <span>
                            <h1 className='text-2xl font-bold'>Away Team</h1>
                            <img src={matchdetail?.away_team} alt="" width={100} />
                        </span>
                        <span>
                            <h1 className='text-2xl font-bold'>Name</h1>
                            <p className='line-clamp-2'>{matchdetail?.away_name}</p>
                        </span>
                    </div>
                    <span>
                        <h1 className='text-2xl font-bold'>Date</h1>
                        <p className='line-clamp-2'>{matchdetail?.date}</p>
                    </span>
                </div>
                <form className='flex flex-col gap-4' onSubmit={handleUpdate}>
                <div>
                        <div className='border-4 border-teal-500 border-dotted p-3 mb-2'>
                         <FileInput type='file'
                            accept='image/*'
                            onChange={handlehomeImageChange} />
                        </div>
                    <TextInput type='text'
                    placeholder='Home Team'
                    className='mb-3'
                    value={matchdetail.home_name}
                    onChange={(e) => setMatchdetail({...matchdetail, home_name: e.target.value})}
                    />
                    <h1 className='text-sm text-gray-400'>Home Coach</h1>
                    <TextInput type='text'
                    placeholder='Home Coach'
                    className='mb-3'
                    value={matchdetail.home_coach}
                    onChange={(e) => setMatchdetail({...matchdetail, home_coach: e.target.value})}
                    />
                      <div className='border-4 border-teal-500 border-dotted p-3 mb-2'>
                         <FileInput type='file'
                            accept='image/*'
                            onChange={handleawayImageChange} />
                        </div>
                        
                    <TextInput type='text'
                        placeholder='Away Team'
                        className='mb-3'
                        value={matchdetail.away_name}
                        onChange={(e) => setMatchdetail({...matchdetail, away_name: e.target.value})}
                    />
                    <h1 className='text-sm text-gray-400'>Away Coach</h1>
                    <TextInput type='text'
                        placeholder='Away Coach'
                        className='mb-3'
                        value={matchdetail.away_coach}
                        onChange={(e) => setMatchdetail({...matchdetail, away_coach: e.target.value})}
                    />
                    <h1 className='text-sm text-gray-400'>Arbitre</h1>
                    <TextInput type='text'
                    placeholder='Arbitre'
                    className='mb-3'
                    value={matchdetail.arbitre}
                    onChange={(e) => setMatchdetail({...matchdetail, arbitre: e.target.value})}
                    />
                    <h1 className='text-sm text-gray-400'>stade</h1>
                    <TextInput type='text'
                    placeholder='Stade'
                    className='mb-3'
                    value={matchdetail.stade}
                    onChange={(e) => setMatchdetail({...matchdetail, stade: e.target.value})}
                    />
                    <h1 className='text-sm text-gray-400'>Date</h1>
                    <TextInput type='text'
                        placeholder='Date'
                        className='mb-3'
                        value={matchdetail.date}
                        onChange={(e) => setMatchdetail({...matchdetail, date: e.target.value})}
                    />
                    <h1 className='text-sm text-gray-400'>Ticket</h1>
                    <TextInput type='text'
                    placeholder='Ticket'
                    className='mb-3'
                    value={matchdetail.ticket}
                    onChange={(e) => setMatchdetail({...matchdetail, ticket: e.target.value})}
                    />
                    <h1 className='text-sm text-gray-400'>Category</h1>
                    <TextInput type='text'
                    placeholder='Category'
                    className='mb-3'
                    value={matchdetail.category}
                    onChange={(e) => setMatchdetail({...matchdetail, category: e.target.value})}
                    />
                    <h1 className='text-sm text-gray-400'>time</h1>
                    <TextInput type='text'
                        placeholder='Time'
                        className='mb-3'
                        value={matchdetail.time}
                        onChange={(e) => setMatchdetail({...matchdetail, time: e.target.value})}
                    />
                </div>
                        <div className='flex md:flex-row flex-col gap-2 mx-auto items-center'>
                            <span>
                                {homeimage && (
                                        <img
                                        className='items-center mx-auto'
                                            src={homeimage}
                                            width={120}
                                        />
                                    )}
                            </span>
                                <h1 className='text-3xl font-semibold flex justify-center items-center'> VS </h1>
                            <span>
                                {awayimage && (
                                        <img
                                        className='items-center mx-auto'
                                            src={awayimage}
                                            width={120}
                                        />
                                    )}
                            </span>
                        </div>
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
