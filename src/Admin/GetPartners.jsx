import { Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import DashSidebar from '../Component/Dashsidebar';
import { account, databases } from '../AppwriteConfig';
import { Query } from 'appwrite';
import { FaPencilAlt } from 'react-icons/fa';
import { IoReceipt } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import logo from '../img/acess denied.png'

export default function GetPartners() {
    const [ partners, setPartners] = useState([])
    const [userData, setUserData] = useState()

  useEffect(() => {
    const getData = async () => {
      const response = await account.get()
      setUserData(response)
    }
    getData()
  }, [])

    useEffect(() => {
      const getPartners = async () => {
        try {
          const response = await databases.listDocuments(
            "67a5d22900142d063b7c", // Replace with your Database ID
            "67a5decd001aa259503b", // Replace with your Collection ID
            [
              Query.orderDesc('createdAt')
            ]
          );
          setPartners(response.documents); // Returns an array of documents
        } catch (error) {
          console.error("Error fetching collection:", error);
        }
      }
      getPartners();
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
                                        Image
                                    </Table.HeadCell>
                            </Table.Head>
                            <Table.Body>
                {
                    partners.map((part) => (
                                <Table.Row>
                                  <Table.Cell>
                                    <img src={part?.image} width={100} />
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
