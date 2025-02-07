import React, { useState } from 'react'
import img1 from '../img/trophy/trophy.png'
import img2 from '../img/trophy/trophy 2.png'
import img3 from '../img/trophy/trophy 3.png'
import img4 from '../img/trophy/trophy 4.png'
import img5 from '../img/trophy/trophy 5.png'
import { Modal } from 'flowbite-react'
import { HiTrophy } from 'react-icons/hi2'

export default function Trophy() {

     const [showModal, setshowModal] = useState(null)

  return (
     <div>
          <div className='p-32 bg-img1 bg-cover'>
               <h1 className='flex text-3xl text-center justify-center text-2xl font-bold uppercase'>
               Trophy Room
               </h1>
         </div>
           <h1 className='text-3xl text-center p-4 font-semibold uppercase underline'></h1>
           <div className='min-h-screen flex flex-wrap justify-between md:gap-6 gap-24 m-7 max-w-5xl mx-auto'>
               <div onClick={() => {setshowModal(true)}} className='mx-auto hover:bg-blue-600 h-fit hover:border-2 hover:border-white rounded-2xl p-4'>
                    <img src={img1} width={100} className='mx-auto' />
                    <p className='text-black text-center text-xl font-bold'>Champion Regional [<span className='text-sm text-yellow-700'>2</span>]</p>
               </div>
               <div className='mx-auto hover:bg-blue-600 h-fit hover:border-2 hover:border-white rounded-2xl p-4'>
                    <img src={img2} width={180} className='mx-auto'  />
                    <p className='text-black text-center text-xl font-bold'>Champion Cameroon [<span className='text-sm text-yellow-700'>1</span>]</p>
               </div>
               <div className='mx-auto hover:bg-blue-600 h-fit hover:border-2 hover:border-white rounded-2xl p-4'>
                    <img src={img3} width={130} className='mx-auto'  />
                    <p className='text-black text-center text-xl font-bold'>Easter Cup [<span className='text-sm text-yellow-700'>3</span>]</p>
               </div>
               <div className='mx-auto hover:bg-blue-600 h-fit hover:border-2 hover:border-white rounded-2xl p-4'>
                    <img src={img5} width={100} className='mx-auto'  />
                    <p className='text-black text-center text-xl font-bold'>Caf Confederation [<span className='text-sm text-yellow-700'>1</span>]</p>
               </div>
               <div className='mx-auto hover:bg-blue-600 h-fit hover:border-2 hover:border-white rounded-2xl p-4'>
                    <img src={img4} width={190} className='mx-auto'  />
                    <p className='text-black text-center text-xl font-bold'>Interpoule [<span className='text-sm text-yellow-700'>2</span>]</p>
               </div>
               
               <Modal className='sm:justify-center'
                    show={showModal}
                    onClose={()=> setshowModal(false)}
                    popup size='sm'
                    >
                    <Modal.Header />
                    <Modal.Body>
                    <div className='text-center mx-auto'>
                         <HiTrophy color='blue' className='h-20 w-20 mx-auto p-2'/>
                         <div>
                              <h1 className='text-lg'>
                                   * 2020/2021 - Winner
                              </h1>
                                   <p>Player of the competition</p>
                                   <p className='sm text-red-500'>Abdu Talla</p>
                         </div>
                         <div>
                              <h1 className='text-lg'>
                                   * 2022/2023 - Winner
                              </h1>
                                   <p>Player of the competition</p>
                                   <p className='sm text-red-500'>Abdu Talla</p>
                         </div>
                    </div>
                    </Modal.Body>
               </Modal>
          </div>
     </div>
  )
}
