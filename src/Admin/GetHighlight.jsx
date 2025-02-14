import { Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import DashSidebar from '../Component/Dashsidebar';
import { databases } from '../AppwriteConfig';
import { Query } from 'appwrite';
import { FaPencilAlt } from 'react-icons/fa';
import { IoReceipt } from 'react-icons/io5';
import ReactPlayer from 'react-player';

export default function GetHighlight() {
    const [ video, setVideo] = useState([])

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
    <div className='min-h-screen'>
        <div className='flex flex-col md:flex-row'>
            <DashSidebar />
         <div>
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
                                <Table.HeadCell>
                                    Status
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
  )
}
