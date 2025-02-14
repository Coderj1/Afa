import { Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import DashSidebar from '../Component/Dashsidebar';
import { databases } from '../AppwriteConfig';
import { Query } from 'appwrite';
import { FaPencilAlt } from 'react-icons/fa';
import { IoReceipt } from 'react-icons/io5';

export default function GetBlog() {

    const [ blogs, setBlog] = useState([])

    useEffect(() => {
      const getBlog = async () => {
        try {
          const response = await databases.listDocuments(
            "67a5d22900142d063b7c", // Replace with your Database ID
            "67a5dd0f003e56bfca74", // Replace with your Collection ID
            [
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
                                    Image
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Status
                                </Table.HeadCell>
                        </Table.Head>
                        <Table.Body>
            {
                blogs.map((blog) => (
                            <Table.Row>
                               <Table.Cell>
                                 <h1 className='line-clamp-1'>                            
                                   {blog?.title}
                                 </h1>
                               </Table.Cell>
                               <Table.Cell>
                               <h1 className='line-clamp-2'>                            
                                   {blog?.desc}
                                 </h1>
                               </Table.Cell>
                               <Table.Cell>
                                 <img src={blog?.img} width={100} />
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
