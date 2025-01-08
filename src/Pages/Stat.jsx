import React from 'react'
import img1 from '../img/jesseyf.png'

export default function Stat() {
  return (
    <div className='min-h-screen bg-img1 bg-cover'>
        <div className='flex md:flex-row flex-col w-full p-5'>
        <div className='w-full flex-1'>
            <img src={img1} />
        </div>
        <div className='flex-1 p-1'>
           <h1 className='text-center text-2xl font-bold text-blue-600 uppercase'>
             African Football Academy Team squad
           </h1>
           <div className='sm:mx-auto max-w-xl flex md:flex-row flex-col justify-between p-2 text-white'>
           <div className='sm:mx-auto text-Justify p-1'>
              <h1 className='text-2xl font-bold text-black'>Joueur Principale</h1>
              <p className='text-xl bg-blue-700 p-1 w-fit m-1'>10 L.Messi (C)</p>
              <p className='text-xl bg-blue-700 p-1 w-fit m-1'>8 M.Casado</p>
              <p className='text-xl bg-blue-700 p-1 w-fit m-1'>11 C.Gavi</p>
              <p className='text-xl bg-blue-700 p-1 w-fit m-1'>1 E.Martinez</p>
              <p className='text-xl bg-blue-700 p-1 w-fit m-1'>6 F.Rodri</p>
              <p className='text-xl bg-blue-700 p-1 w-fit m-1'>23 J.Kimmich</p>
              <p className='text-xl bg-blue-700 p-1 w-fit m-1'>4 A.Laporte</p>
              <p className='text-xl bg-blue-700 p-1 w-fit m-1'>5 J.Araujo</p>
              <p className='text-xl bg-blue-700 p-1 w-fit m-1'>2 A.Hakimi</p>
              <p className='text-xl bg-blue-700 p-1 w-fit m-1'>3 A.Davies</p>
              <p className='text-xl bg-blue-700 p-1 w-fit m-1'>9 E.Halland</p>
           </div>
           <div className='sm:mx-auto text-justify p-1 text-gray-400'>
           <h1 className='text-2xl font-bold text-black'>Remplacent</h1>
              <p className='text-xl'>10 L.Messi (C)</p>
              <p className='text-xl'>10 M.Casado</p>
              <p className='text-xl'>10 C.Gavi</p>
              <p className='text-xl'>10 E.Martinez</p>
              <p className='text-xl'>10 F.Rodri</p>
              <p className='text-xl'>10 J.Kimmich</p>
              <p className='text-xl'>10 A.Laporte</p>
              <p className='text-xl'>10 J.Araujo</p>
              <p className='text-xl'>10 A.Hakimi</p>
              <p className='text-xl'>10 A.Davies</p>
              <p className='text-xl'>10 E.Halland</p>
           </div>
           <div className='sm:mx-auto text-justify p-1 text-gray-400'>
           <h1 className='text-2xl font-bold text-black'>Staff Technique</h1>
              <p className='text-xl'>10 L.Messi (C)</p>
              <p className='text-xl'>10 M.Casado</p>
              <p className='text-xl'>10 C.Gavi</p>
              <p className='text-xl'>10 E.Martinez</p>
              <p className='text-xl'>10 F.Rodri</p>
              <p className='text-xl'>10 J.Kimmich</p>
              <p className='text-xl'>10 A.Laporte</p>
              <p className='text-xl'>10 J.Araujo</p>
              <p className='text-xl'>10 A.Hakimi</p>
              <p className='text-xl'>10 A.Davies</p>
              <p className='text-xl'>10 E.Halland</p>
           </div>
           </div>
        </div>
        </div>
    </div>
  )
}
