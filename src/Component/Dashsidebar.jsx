import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Sidebar } from 'flowbite-react'
import { BiAbacus, BiBookAlt, BiPackage, BiSolidPackage, BiStats, BiVideo, BiVideoPlus } from "react-icons/bi"
import { HiAnnotation, HiChartPie, HiCollection, HiFolderAdd, HiOutlineBell, HiOutlineUserGroup, HiPlus, HiPlusCircle, HiUser, HiUserAdd, HiViewBoards } from 'react-icons/hi'
import { FaPlaystation, FaRegPlusSquare, FaSafari } from 'react-icons/fa'
import { FaAddressCard, FaCertificate, FaChartSimple, FaEthereum, FaStackpath } from 'react-icons/fa6'
import { TbSoccerField } from 'react-icons/tb'
import { PiSoccerBallBold } from 'react-icons/pi'
import { GiTrophyCup } from 'react-icons/gi'
import { FcAddDatabase, FcGallery } from 'react-icons/fc'
import { MdAddAPhoto, MdLibraryAdd } from 'react-icons/md'

export default function DashSidebar() {

  const path = useLocation().pathname

  const navigate = useNavigate()

  return (
    /* call sidebar from flowbite*/
   <Sidebar className='w-full md:w-60 '>
    <Sidebar.Items>
        <Sidebar.ItemGroup className='flex flex-col gap-3'>
            <Link to='/dashboard'>
                <Sidebar.Item  active = { path == 'dashboard' }
                icon={ HiChartPie }
                labelColor='dark'  
                as='div'>
                   Dashboard
                </Sidebar.Item>
            </Link>
            <Link to='/users'>
                <Sidebar.Item  active ={ path === 'users' } 
                icon={ HiOutlineUserGroup } 
                as='div'>
                    Users
                </Sidebar.Item>
            </Link>
            <Link to='/addblog'>
                <Sidebar.Item 
                /* assign a tab url path for the profile page &&
                a condition for if user is an Admin label=Adlmin else label=user*/ 
                active ={ path === 'addblog' } 
                icon={ HiFolderAdd } 
                as='div'>
                    Add Blog
                </Sidebar.Item>
            </Link>
            <Link to='/blogs'>
                <Sidebar.Item 
                /* assign a tab url path for the profile page &&
                a condition for if user is an Admin label=Adlmin else label=user*/ 
                active ={ path === 'blogs' } 
                icon={ HiCollection } 
                as='div'>
                    Blogs
                </Sidebar.Item>
            </Link>
            <Link to='/addvid'>
                <Sidebar.Item  active ={ path === 'addvid' }
                icon={ BiVideoPlus } 
                as='div'>
                    Add Highlight
                </Sidebar.Item>
            </Link>
            <Link to='/videos'>
                <Sidebar.Item  active ={ path === 'videos' }
                icon={ BiVideo } 
                as='div'>
                    Highlight
                </Sidebar.Item>
            </Link>
            <Link to='/addpartners'>
                <Sidebar.Item  active ={ path === 'addpartners' }
                icon={ BiSolidPackage } 
                as='div'>
                    Add Partners
                </Sidebar.Item>
            </Link>
            <Link to='/partners'>
                <Sidebar.Item  active ={ path === 'partners' }
                icon={ BiPackage } 
                as='div'>
                    Partners
                </Sidebar.Item>
            </Link>
            <Link to='/addmatch'>
                <Sidebar.Item  active ={ path === 'addmatch' }
                icon={ FaSafari } 
                as='div'>
                    Add Matches
                </Sidebar.Item>
            </Link>
            <Link to='/matches'>
                <Sidebar.Item  active ={ path === 'matches' }
                icon={ TbSoccerField } 
                as='div'>
                    Matches
                </Sidebar.Item>
            </Link>
            <Link to='/addcat'>
                <Sidebar.Item  active ={ path === 'addcat' }
                icon={ FaAddressCard } 
                as='div'>
                    Add Category
                </Sidebar.Item>
            </Link>
            <Link to='/category'>
                <Sidebar.Item  active ={ path === 'category' }
                icon={ PiSoccerBallBold } 
                as='div'>
                    Category
                </Sidebar.Item>
            </Link>
            <Link to='/addstats'>
                <Sidebar.Item  active ={ path === 'addstats' }
                icon={ BiStats } 
                as='div'>
                    Add Stats
                </Sidebar.Item>
            </Link>
            <Link to='/pstats'>
                <Sidebar.Item  active ={ path === 'stats' }
                icon={ FaChartSimple } 
                as='div'>
                    Stats
                </Sidebar.Item>
            </Link>
            <Link to='/addtrophy'>
                <Sidebar.Item  active ={ path === 'addtrophy' }
                icon={ FcAddDatabase } 
                as='div'>
                    Add Trophy
                </Sidebar.Item>
            </Link>
            <Link to='/trophys'>
                <Sidebar.Item  active ={ path === 'trophy' }
                icon={ GiTrophyCup } 
                as='div'>
                    Trophy
                </Sidebar.Item>
            </Link>
            <Link to='/addgal'>
                <Sidebar.Item  active ={ path === 'addgal' }
                icon={ MdAddAPhoto } 
                as='div'>
                    Add Gallery
                </Sidebar.Item>
            </Link>
            <Link to='/getgallery'>
                <Sidebar.Item  active ={ path === 'gallery' }
                icon={ FcGallery } 
                as='div'>
                    Gallery
                </Sidebar.Item>
            </Link>
            <Link to='/addhero'>
                <Sidebar.Item  active ={ path === 'addhero' }
                icon={ MdLibraryAdd } 
                as='div'>
                    Add Hero
                </Sidebar.Item>
            </Link>
            <Link to='/hero'>
                <Sidebar.Item  active ={ path === 'hero' }
                icon={ FaEthereum } 
                as='div'>
                    Hero
                </Sidebar.Item>
            </Link>
            <Sidebar.Item  icon={ HiOutlineBell}
                className='cursor-pointer'>
                SignOut
            </Sidebar.Item>
        </Sidebar.ItemGroup>
    </Sidebar.Items>
   </Sidebar>
  )
}
