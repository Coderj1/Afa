import { Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import DashSidebar from '../Component/Dashsidebar';
import { account, databases } from '../AppwriteConfig';
import { Query } from 'appwrite';
import { FaPencilAlt } from 'react-icons/fa';
import { IoReceipt } from 'react-icons/io5';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
import logo from '../img/acess denied.png'

export default function GetHighlight() {
    const [ video, setVideo] = useState([])
    const [userData, setUserData] = useState()

  useEffect(() => {
    const getData = async () => {
      const response = await account.get()
      setUserData(response)
    }
    getData()
  }, [])

    useEffect(() => {
      const getVideo = async () => {
        try {
          const response = await databases.listDocuments(
            "67a5d22900142d063b7c", // Replace with your Database ID
            "67a5ddd7001a703e0a08", // Replace with your Collection ID
            [
              Query.orderDesc('createdAt')
            ]
          );
          setVideo(response.documents); // Returns an array of documents
        } catch (error) {
          console.error("Error fetching collection:", error);
        }
      }
      getVideo();
    }, []);

  return (
    <>
      { userData?.labels[0] === 'admin' ? (
        <div className='min-h-screen'>
            <div className='flex flex-col md:flex-row'>
                <div className='md:inline hidden'>
                   <DashSidebar />
                 </div>
            <div className='overflow-x-scroll scrollbar'>
                        <Table hoverable className='overflow-x-scroll scrollbar'>
                            <Table.Head>
                                    <Table.HeadCell>
                                        Titre
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        Desc
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        Video
                                    </Table.HeadCell>
                            </Table.Head>
                            <Table.Body>
                {
                    video.map((vid) => (
                                <Table.Row>
                                  <Table.Cell>
                                    <h1 className='line-clamp-1'>                            
                                      {vid?.title}
                                    </h1>
                                  </Table.Cell>
                                  <Table.Cell>
                                  <h1 className='line-clamp-2'>                            
                                      {vid?.desc}
                                    </h1>
                                  </Table.Cell>
                                  <Table.Cell>
                                    <div className='w-60'>
                                      <video src={vid?.video} width='auto' />
                                    </div>
                                  </Table.Cell>
                                  <Table.Cell>
                                    <span className='flex gap-2'>
                                      <FaPencilAlt />
                                      <IoReceipt />
                                    </span>
                                  </Table.Cell>
                                </Table.Row>
                        ))
                    }
                            </Table.Body>
                        </Table>
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
