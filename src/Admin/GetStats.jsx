import { Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import DashSidebar from '../Component/Dashsidebar';
import { account, databases } from '../AppwriteConfig';
import { Query } from 'appwrite';
import { FaPencilAlt } from 'react-icons/fa';
import { IoReceipt } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from '../img/acess denied.png'

export default function GetStats() {
    const [ stats, setStats] = useState([])
    const [userData, setUserData] = useState()

  useEffect(() => {
    const getData = async () => {
      const response = await account.get()
      setUserData(response)
    }
    getData()
  }, [])


    useEffect(() => {
      const getStats = async () => {
        try {
          const response = await databases.listDocuments(
            "67a5d22900142d063b7c", // Replace with your Database ID
            "67a6735f00074645fd5d", // Replace with your Collection ID
            [
              Query.orderDesc('createdAt')
            ]
          );
          setStats(response.documents); // Returns an array of documents
        } catch (error) {
          console.error("Error fetching collection:", error);
        }
      }
      getStats();
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
                                            Player
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Name
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Nationality
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Position
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Rating
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                        Category
                                        </Table.HeadCell>
                                </Table.Head>
                                <Table.Body>
                    {
                        stats.map((stat) => (
                                    <Table.Row>
                                    <Table.Cell>                           
                                        <img src={stat?.player} width={100} />
                                    </Table.Cell>
                                    <Table.Cell>                           
                                        {stat?.name}
                                    </Table.Cell>
                                    <Table.Cell>                           
                                        {stat?.nationality}
                                    </Table.Cell>
                                    <Table.Cell>                           
                                        {stat.position}
                                    </Table.Cell>
                                    <Table.Cell>                           
                                        {stat.rating}
                                    </Table.Cell>
                                    <Table.Cell>                           
                                        {stat?.category}
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
