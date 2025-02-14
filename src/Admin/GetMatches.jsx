import { Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import DashSidebar from '../Component/Dashsidebar';
import { databases } from '../AppwriteConfig';
import { Query } from 'appwrite';
import { FaPencilAlt } from 'react-icons/fa';
import { IoReceipt } from 'react-icons/io5';

export default function GetMatches() {
    const [ matches, setMatches] = useState([])

    useEffect(() => {
      const getMatches = async () => {
        try {
          const response = await databases.listDocuments(
            "67a5d22900142d063b7c", // Replace with your Database ID
            "67a5e0ea000aeb4ab1b6", // Replace with your Collection ID
            [
              Query.orderDesc('createdAt')
            ]
          );
          setMatches(response.documents); // Returns an array of documents
        } catch (error) {
          console.error("Error fetching collection:", error);
        }
      }
      getMatches();
    }, []);

  return (
    <div className='min-h-screen'>
        <div className='flex flex-col md:flex-row'>
            <DashSidebar />
         <div>
                    <Table hoverable className='overflow-x-scroll scrollbar'>
                        <Table.Head>
                                <Table.HeadCell>
                                    Home Team
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Name
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    AWay Team
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Name
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Date
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Time
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Stade
                                </Table.HeadCell>
                                <Table.HeadCell>
                                   Category
                                </Table.HeadCell>
                        </Table.Head>
                        <Table.Body>
            {
                matches.map((match) => (
                            <Table.Row>
                               <Table.Cell>                           
                                  <img src={match?.home_team} width={100} />
                               </Table.Cell>
                               <Table.Cell>                           
                                   {match?.home_name}
                               </Table.Cell>
                               <Table.Cell>                           
                                  <img src={match?.away_team} width={100} />
                               </Table.Cell>
                               <Table.Cell>                           
                                   {match?.away_name}
                               </Table.Cell>
                               <Table.Cell>                           
                                   {match?.date}
                               </Table.Cell>
                               <Table.Cell>                           
                                   {match?.time}
                               </Table.Cell>
                               <Table.Cell>                           
                                   {match?.stade}
                               </Table.Cell>
                               <Table.Cell>                           
                                   {match?.category}
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
