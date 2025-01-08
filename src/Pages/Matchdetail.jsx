import React from 'react'
import img1 from '../img/afabg.png'
import img2 from '../img/simba.png'
import img3 from '../img/canon.png'
import img4 from '../img/apjs.png'

export default function Matchdetail() {
  return (
    <div className='bg-img1 bg-cover min-h-screen'>
    <div className='mx-auto max-w-5xl bg-white min-h-screen p-2'>
        <div>
            <h1 className='text-center text-2xl font-bold text-blue-400'>Upcoming Match</h1>
            <p className='text-center text-sm text-black'>26/11/2024</p>
        </div>
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
                    <p className='text-xl text-black'>Stade de Japoma</p>
                    <p className='text-black text-sm'>20:00</p>
        </div>
        <div className='mx-auto text-center p-3'>
            <h1 className='text-xl'>Tickets</h1>
            <p className='text-red-500 text-sm'>1000XAF - 2000XAF(VIP)</p>
        </div>
        <div>
            <h1 className='text-center text-xl text-blue-600 font-bold'>Previous Matches</h1>
            <div className='p-3 text-green-500 max-w-xl mx-auto'>
                <h1  className=''>African Football Academy 1-2 Dynamo de Douala</h1>    
                <h1  className=''>African Football Academy 3-1 Elite Football Des Boisson Du Cameroun</h1> 
            </div>
            <div className='p-3 text-red-500 max-w-xl mx-auto'>
                <h1  className=''>Canon de Yaounde 0-1 Fauve Azur</h1>    
                <h1  className=''>As Fortuna 1-1 Canon de Yaounde</h1> 
            </div>
        </div>
    </div>
    </div>
  )
}
