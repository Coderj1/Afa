import React, { useState } from 'react'
import { Modal } from 'flowbite-react'
import { useEffect} from 'react';
import { databases } from '../AppwriteConfig'

export default function Trophy() {

     const [showModal, setshowModal] = useState(null)
     const [ trophy, setTrophy] = useState([])
     const [ trophydetails, setTrophydetails] = useState('')
     const [trophyId, setTrophyId] = useState('')

     useEffect(() => {
          const getTrophy = async () => {
            try {
              const response = await databases.listDocuments(
                "67a5d22900142d063b7c", // Replace with your Database ID
                "67a5e2820028754122b7" // Replace with your Collection ID
              );
              setTrophy(response.documents); // Returns an array of documents
            } catch (error) {
              console.error("Error fetching collection:", error);
            }
          }
          getTrophy();
        }, []);

        useEffect(() => {
          const getTrophydetails = async () => {
            try {
              const response = await databases.getDocument(
                "67a5d22900142d063b7c", // Replace with your Database ID
                "67a5e2820028754122b7", // Replace with your Collection ID
                trophyId // Replace with your Document ID
              );
              setTrophydetails(response); // Returns an array of documents
            } catch (error) {
              console.error("Error fetching collection:", error);
            }
          }
          getTrophydetails();
        }, [trophyId]);


  return (
     <div>
          <div className='p-32 bg-img1 bg-cover'>
               <h1 className='flex text-3xl text-center justify-center font-bold uppercase'>
               Trophy Room
               </h1>
         </div>
           <div className='min-h-screen flex flex-wrap justify-between md:gap-6 gap-24 m-7 max-w-5xl mx-auto'>
               {
                    trophy.map((trop) => (
                    <div key={trop.$id}  onClick={() =>{
                         setTrophyId(trop.$id)
                         setshowModal(true)
                     }} className='mx-auto hover:bg-blue-600 h-fit hover:border-2 hover:border-white rounded-2xl p-4'>
                         <img src={trop.trophy_img} width={100} className='mx-auto' />
                         <p className='text-black text-center text-xl font-bold'>{trop.title} [<span className='text-sm text-yellow-700'>{trop.num_title}</span>]</p>
                    </div>
     
                    ))
               }               
               <Modal className='sm:justify-center'
                    show={showModal}
                    onClose={()=> setshowModal(false)}
                    popup size='sm'
                    >
                    <Modal.Header />
                    <Modal.Body>
                              <div className='text-center mx-auto'>
                                   <img src={trophydetails.trophy_img} color='blue' className='w-20 mx-auto p-2'/>
                                             <p className='text-xl text-red-500'>{trophydetails.title}</p>
                                   <div>
                                        <h1 className='text-lg'>
                                             {trophydetails.year} - Winner
                                        </h1>
                                   </div>
                              </div>
                    </Modal.Body>
               </Modal>
          </div>
     </div>
  )
}
