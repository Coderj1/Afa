import React from 'react'
import img1 from '../img/afabg.png'
import img2 from '../img/simba.png'
import img3 from '../img/canon.png'
import img4 from '../img/apjs.png'

export default function Matchdetail() {
  return (
    <div className='bg-img1 bg-cover min-h-screen'>
    <div className='mx-auto max-w-5xl bg-white p-2'>
        <h1 className='text-center text-2xl font-bold text-blue-400 p-4'>Upcoming Match</h1>
        <div className='flex justify-between items-center p-3 gap-4 max-w-3xl mx-auto'>
                    <span className='w-40'>
                        <img src={img1} width={200} className='rounded-full mx-auto' />
                        <p className='text-center uppercase text-sm'>AFA</p>
                    </span>
                    <span className='text-4xl'>
                        -
                    </span>
                    <span className='w-40'>
                        <img src={img3} width={200} className='rounded-full mx-auto' />
                        <p className='text-center uppercase text-sm'>Canon de Yaounde</p>
                    </span>
        </div>
        <div className='mx-auto text-center'>
                    <p className='text-black text-sm'>20:00</p>
                    <p className='text-xl text-black'>Stade de Japoma</p>
                    <p className='text-sm text-gray-400'>11/11/2024</p>
        </div>
        <div className='mx-auto text-center p-3'>
            <h1 className='text-xl'>Tickets</h1>
            <p className='text-red-500 text-sm'>1000XAF - 2000XAF(VIP)</p>
        </div>
    </div>
    </div>
  )
}
