import { Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import DashSidebar from '../Component/Dashsidebar';
import { databases } from '../AppwriteConfig';
import { Query } from 'appwrite';
import { FaPencilAlt } from 'react-icons/fa';
import { IoReceipt } from 'react-icons/io5';

export default function GetGallery() {
    const [ gallery, setGallery] = useState([])

    useEffect(() => {
      const getGallery = async () => {
        try {
          const response = await databases.listDocuments(
            "67a5d22900142d063b7c", // Replace with your Database ID
            "67a6838b002912b358db", // Replace with your Collection ID
            [
              Query.orderDesc('createdAt')
            ]
          );
          setGallery(response.documents); // Returns an array of documents
        } catch (error) {
          console.error("Error fetching collection:", error);
        }
      }
      getGallery();
    }, []);

  return (
    <div className='min-h-screen'>
        <div className='flex flex-col md:flex-row'>
            <DashSidebar />
         <div>
                    <Table hoverable className='overflow-x-scroll scrollbar'>
                        <Table.Head>
                                <Table.HeadCell>
                                    Gallery
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Image
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Status
                                </Table.HeadCell>
                        </Table.Head>
                        <Table.Body>
            {
                gallery.map((gal) => (
                            <Table.Row>
                               <Table.Cell>
                                 <h1 className='line-clamp-1'>                            
                                   {gal?.title}
                                 </h1>
                               </Table.Cell>
                               <Table.Cell>
                                 <img src={gal?.img} width={100} />
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
