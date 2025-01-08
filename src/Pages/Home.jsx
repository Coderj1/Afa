import React, { useEffect, useState } from 'react'
import img1 from '../img/afabg.png'
import img2 from '../img/icon1.png'
import img3 from '../img/afa champion.jpg'
import img5 from '../img/afa u12.jpg'
import img6 from '../img/afa3.jpg'
import img7 from '../img/afa2.jpg'
import imgj from '../img/jessey.png'
import imgl from '../img/lineup.png'
import vid1 from '../img/afa trophy.mp4'
import imgo from '../img/trophy/ola2.png'
import imgm from '../img/trophy/msi.png'
import imgn from '../img/trophy/nike.png'
import imgf from '../img/trophy/feca.png'
import { HiEllipsisHorizontalCircle, HiTrophy } from "react-icons/hi2"
import { GiWhirlpoolShuriken } from "react-icons/gi"
import { Button} from 'flowbite-react'
import { motion } from 'framer-motion';
import { FaPlaystation } from "react-icons/fa6";
import { HiAdjustments } from 'react-icons/hi'
import SimpleSlider from '../Component/Slider'
import Banner from '../Component/Banner'
import { Link } from 'react-router-dom'
import Media from '../Component/Media'
import Carousel from '../Component/Carousel'
import Matches from '../Component/Matches'

export default function Home() {

  const images = [imgj, img2, img3, img5, img6, img7]; // Array of background images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div>
        <div 
         style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
       className='flex md:flex-row flex-col items-center justify-center p-2'>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
           className='flex-1 md:hidden inline'>
            <img src={img1} alt="hero" width={550} className='' />
        </motion.div>
          <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='flex-1'
          >
            <h1 className='text-3xl font-bold text-center text-blue-500 uppercase'>AFRICAN FOOTBALL ACADEMY</h1>
            <p className='text-justify text-white mx-auto md:w-[490px] mb-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos
            .
            </p>
            <div className='flex gap-3 justify-center sm:p-3 p-1'>
            <Link to='/gallery'>
              <Button color='blue' className='rounded-full sm:w-32 w-52'>Gallery</Button>
            </Link>
              <span className='sm:inline hidden'>
               <Button color='blue' className='rounded-full sm:w-32'>Contact</Button>
              </span>
            </div>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='flex-1 md:inline hidden'
          >
            <img src={img1} alt="hero" width={550} className='' />
        </motion.div>
        </div>
        <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='flex flex-wrap gap-2 max-w-7xl w-full relative mx-auto'
        >
           <div className="flex justify-between gap-2 items-center sm:w-72 mx-auto  p-4 m-3 border-2 rounded-lg shadow-xl hover:scale-110">
           <img src={imgj} width={90} className='rounded-full'/>
             <h1 className='text-sm font-bold text-white uppercase'>
             Equipe de joueurs
             </h1>
           </div>
           <div className="flex justify-between gap-2 items-center sm:w-72 mx-auto  p-3 m-3 border-2 rounded-lg shadow-xl hover:scale-110">
             <img src={img2} width={90} className='rounded-full'/>
             <h1 className='text-md font-bold text-white uppercase'>
             meilleur joueur
             </h1>
           </div>
           <div className="flex justify-between gap-2 items-center sm:w-72 mx-auto p-4 m-3 border-2 rounded-lg shadow-xl hover:scale-110">
             <HiTrophy color='white' size={50} />
             <h1 className='text-md font-bold text-white uppercase'>
             Salle des trophées
             </h1>
           </div>
           <div className="flex justify-between gap-3 items-center sm:w-72 mx-auto  p-5 m-3 border-2 rounded-lg shadow-xl hover:scale-110">
           <img src={imgl} width={70} className='rounded-full'/>
             <h1 className='text-xs font-bold text-white uppercase'>
             Statistiques de l'équipe
             </h1>
           </div>
        </motion.div>
        <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
         className='uppercase sm:text-3xl text-xl max-w-5xl mx-auto p-3 text-white font-bold '>
           Actualite en bref
        </motion.h1>
        <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}>
          <Banner />
        </motion.div>
        <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
         className='sm:text-3xl text-xl max-w-5xl mx-auto uppercase font-bold text-white m-2 p-2'>
           Evenement de la Semaine
        </motion.div>
        <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className='flex overflow-x-scroll scrollbar'>
         <SimpleSlider />
        </motion.div>
        <div className='mx-auto uppercase text-white text-3xl font-bold max-w-5xl'>
           Prochain Matchs
        </div>
        <div className='p-2'>
             <Matches />
        </div>
        <div className='bg-blue-500 p-3 mx-auto max-w-6xl items-center flex overflow-x-scroll scrollbar flex-col sm:flex-row'>
           <video
            autoPlay
            loop
            muted 
            width={600} 
            className='mx-auto flex-1'>
              <source src={vid1} />
           </video>
           <div className='mx-auto flex-1'>
            <div className='mx-auto'>
              <p className='uppercase font-bold text-xl text-white text-center'>Champion Regional du littoral</p>
              <p className='uppercase font-bold text-sm text-yellow-200 text-center'>African Football Academy</p>
            </div>
           </div>
        </div>
          <motion.h1 className='uppercase p-2 text-xl text-white font-bold max-w-2xl mx-auto'>
             Programme partenaire
          </motion.h1>
          <div className='bg-white'>
              <div className='flex max-w-2xl mx-auto gap-6 justify-between overflow-x-scroll scrollbar p-3'>
                <span className='w-20'>
                   <img src={imgo} width={120} />
                </span>
                <span className='w-20'>
                   <img src={imgm} width={100} />
                </span>
                <span className='w-28'>
                   <img src={imgn} width={100} />
                </span>
                <span className='w-20'>
                    <img src={imgf} width={70} />
                </span>
              </div>
          </div>
        <div>
          <h1 className='uppercase text-3xl font-bold text-white text-center mt-2 mb-4 p-2'>Réalisation</h1>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
              className="w-full"
            >
              <img src={img3} alt="Achievement" className="w-full h-auto md:blur-sm sm:hover:blur-0 bg-black" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="absolute bg-black md:bg-opacity-30 bg-opacity-20 top-0 right-0 w-full md:w-2/4 h-full flex items-center"
            >
              <div className="text-white mx-auto text-center p-6 m-4">
                <motion.h1 
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3 }}
                className="sm:text-3xl font-bold text-cyan-400">
                Nos réalisations
                </motion.h1>
                <motion.h1
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3 }}
                 className='sm:text-4xl font-bold mb-4'>Galerie de la salle des trophées</motion.h1>
                <Button className='mx-auto sm:w-52 w-32 rounded-full' color='blue'>
                  <Link to='/trophy'>
                     Gallery
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
        <div className='uppercase font-bold mx-auto text-2xl max-w-4xl text-white p-2'>
           MultiMedia
        </div>
          <Media />
        <div>
          <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          className='text-3xl font-bold text-white text-center mt-2 mb-4 uppercase'
          >
           Catégorie et équipe
          </motion.h1>
          <motion.div
          className='flex sm:flex-row flex-col justify-between gap-2 p-4'
          
          >
           <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
              className="flex-1"
            >
              <img src={img5} alt="Achievement" width={650} height={600} className="sm:h-[370px]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute top-0 bg-black bg-opacity-50 w-full text-center"
            >
              <div className="text-white mx-auto text-center p-1">
                <motion.h1
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3 }}
                 className='sm:text-2xl text-center font-bold mb-4'>Category U12</motion.h1>
              </div>
            </motion.div>
            </div>
            <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
              className="flex-1"
            >
              <img src={img6} alt="Achievement" width={650} height={600} className="sm:h-[370px]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute top-0 bg-black bg-opacity-50 w-full text-center"
            >
              <div className="text-white mx-auto text-center p-1">
                <motion.h1
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3 }}
                 className='sm:text-2xl text-center font-bold mb-4'>Category U17</motion.h1>
              </div>
            </motion.div>
            </div>
          </motion.div>
        </div>
        <div>
          <div className="relative m-3">
          <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
                className="flex-1"
              >
                <img src={img7} alt="Achievement" className="w-full" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute top-0 bg-black bg-opacity-50 w-full text-center"
              >
                <div className="text-white mx-auto text-center p-1">
                  <motion.h1
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 3 }}
                  className='sm:text-2xl text-center font-bold mb-4'>Category U20</motion.h1>
                </div>
              </motion.div>
          </div>
        </div>
            </div>
    </div>
  )
}