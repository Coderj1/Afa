import React from 'react'
import img1 from '../img/trophy/trophy.png'
import img2 from '../img/trophy/trophy 2.png'
import img3 from '../img/trophy/trophy 3.png'
import img4 from '../img/trophy/trophy 4.png'
import img5 from '../img/trophy/trophy 5.png'

export default function Trophy() {
  return (
    <div className='min-h-screen flex flex-wrap justify-between gap-10 m-7 max-w-5xl mx-auto'>
        <div className='mx-auto hover:bg-blue-600 hover:border-2 hover:border-white rounded-2xl hover:p-5'>
             <img src={img1} width={100} className='mx-auto' />
             <p className='text-white text-center text-xl font-bold'>Champion Regional [<span className='text-sm text-yellow-400'>2</span>]</p>
             <p className='text-gray-400 text-center text-sm font-bold'>2020/2021</p>
        </div>
        <div className='mx-auto hover:bg-blue-600 hover:border-2 hover:border-white rounded-2xl hover:p-5'>
             <img src={img2} width={180} className='mx-auto'  />
             <p className='text-white text-center text-xl font-bold'>Champion Cameroon [<span className='text-sm text-yellow-400'>1</span>]</p>
             <p className='text-gray-400 text-center text-sm font-bold'>2021/2022</p>
        </div>
        <div className='mx-auto hover:bg-blue-600 hover:border-2 hover:border-white rounded-2xl hover:p-5'>
             <img src={img3} width={130} className='mx-auto'  />
             <p className='text-white text-center text-xl font-bold'>Easter Cup [<span className='text-sm text-yellow-400'>3</span>]</p>
             <p className='text-gray-400 text-center text-sm font-bold'>2021/2022</p>
        </div>
        <div className='mx-auto hover:bg-blue-600 hover:border-2 hover:border-white rounded-2xl hover:p-2'>
             <img src={img5} width={100} className='mx-auto'  />
             <p className='text-white text-center text-xl font-bold'>Caf Confederation [<span className='text-sm text-yellow-400'>1</span>]</p>
             <p className='text-gray-400 text-center text-sm font-bold'>2021/2022</p>
        </div>
        <div className='mx-auto hover:bg-blue-600 hover:border-2 hover:border-white rounded-2xl hover:p-2'>
             <img src={img4} width={190} className='mx-auto'  />
             <p className='text-white text-center text-xl font-bold'>Interpoule [<span className='text-sm text-yellow-400'>2</span>]</p>
             <p className='text-gray-400 text-center text-sm font-bold'>2021/2022</p>
        </div>
    
    </div>
  )
}
