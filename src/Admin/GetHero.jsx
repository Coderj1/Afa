import { Button, Modal, Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import DashSidebar from '../Component/Dashsidebar';
import { account, databases } from '../AppwriteConfig';
import { Query } from 'appwrite';
import { FaPencilAlt } from 'react-icons/fa';
import { IoReceipt } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../img/acess denied.png'
import { HiOutlineExclamationCircle } from 'react-icons/hi';

export default function GetHero() {
    const [ hero, setHero] = useState([])
    const [userData, setUserData] = useState()
    const [showDelete, setShowDelete] = useState(false)
    const [deleteHeroId, setDeleteHeroId] = useState()

  useEffect(() => {
    const getData = async () => {
      const response = await account.get()
      setUserData(response)
    }
    getData()
  }, [])

    useEffect(() => {
      const getHero = async () => {
        try {
          const response = await databases.listDocuments(
            "67a5d22900142d063b7c", // Replace with your Database ID
            "67a672de002469830598", // Replace with your Collection ID
            [
              Query.orderDesc('createdAt')
            ]
          );
          setHero(response.documents); // Returns an array of documents
        } catch (error) {
          console.error("Error fetching collection:", error);
        }
      }
      getHero();
    }, []);

    const handleDelete = async () => {
      setShowDelete(false)
      try {
        await databases.deleteDocument(
          "67a5d22900142d063b7c", // Replace with your Database ID
          "67a672de002469830598", // Replace with your Collection ID
          deleteHeroId // The document ID to delete
        );
        setHero((recent) =>
          recent.filter((hero) => hero.$id !== deleteHeroId))
      } catch (error) {
        toast.error("Error deleting document:", error);
      }
    }

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
                                        Image
                                    </Table.HeadCell>
                            </Table.Head>
                            <Table.Body>
                {
                    hero.map((hero) => (
                                <Table.Row>
                                  <Table.Cell>
                                    <h1 className='line-clamp-1'>                            
                                      {hero?.hero_title}
                                    </h1>
                                  </Table.Cell>
                                  <Table.Cell>
                                  <h1 className='line-clamp-2'>                            
                                      {hero?.hero_desc}
                                    </h1>
                                  </Table.Cell>
                                  <Table.Cell>
                                    <img src={hero?.logo} width={100} />
                                  </Table.Cell>
                                  <Table.Cell>
                                  <span className='flex gap-2'>
                                        <Link to={`/updatehero/${hero?.$id}`}>
                                          <FaPencilAlt />
                                        </Link>
                                      </span>
                                  </Table.Cell>
                                </Table.Row>
                        ))
                    }
                            </Table.Body>
                        </Table>
            </div>
                 <Modal
                    show={showDelete}
                    onClose={()=> setShowDelete(false)}
                    popup size='sm'
                    >
                        <Modal.Header />
                        <Modal.Body>
                        <div className='text-center mx-auto'>
                           <HiOutlineExclamationCircle className='h-14 w-14 mx-auto'/>
                            <h1 className='mb-2'>
                                 Do you want to delete this hero
                            </h1>
                             <div className='flex gap-3 justify-center mb-2'>
                                <Button 
                                onClick={handleDelete} color='success'>
                                    Yes, I'm Sure
                                </Button>
                                <Button color='failure'
                                onClick={()=> setShowDelete(false)}
                                >
                                    No, Abort
                                </Button>
                             </div>
                        </div>
                        </Modal.Body>
                    </Modal>
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
