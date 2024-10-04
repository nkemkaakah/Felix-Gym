import React, { useEffect, useState } from 'react'
import logo from '../assets/Gutzfit logo.png'

import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri'

const Navbar = () => {

    const [isActive, setIsActive] = useState(false)
    const [navmobile, setNavMobile] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 80 ? setIsActive(true) : setIsActive(false)
        })
    })

    return (
        <header className={`${isActive ? 'bg-black py-[16px]' : 'bg-transparent py-[20px]'} fixed max-w-[1440px] z-30 left-0 right-0 mx-auto flex justify-between items-center px-[20px] lg:px-[80px] transition-all duration-300`}>

            <a href="" className='flex items-center gap-2 '>
                <img src={logo} alt="" className=" h-[60px]" />
                <h1 className='text-white text-4xl'>Felix Gym</h1>
            </a>
            <nav className='hidden lg:flex'>
                <ul className='flex text-white gap-x-8'>
                    <li><a className='text-white text-body-md hover:text-primary-200 transition' href="/">Home</a></li>
                    <li><a className='text-white text-body-md hover:text-primary-200 transition' href="/workouts">Workouts</a></li>
                    <li><a className='text-white text-body-md hover:text-primary-200 transition' href="#community">Community</a></li>
                    <li><a className='text-white text-body-md hover:text-primary-200 transition' href="#prices">Prices</a></li>
                    <li><a className='text-white text-body-md hover:text-primary-200 transition' href="#faqs">FAQs</a></li>

                </ul>
            </nav>
            <div className='hidden lg:flex space-x-4'>
                <button className='btn btn-sm text-white hover:text-primary-200 transition'>Login</button>
                <button className='btn btn-sm btn-primary'>SignUp</button>
            </div>
            <div onClick={() => setNavMobile(!navmobile)} className='lg:hidden absolute right-4 top-0'>
                {navmobile ? (<RiCloseFill className='text-primary-200 text-3xl cursor-pointer' />) :
                    (
                        <RiMenu4Fill className='text-primary-200 text-3xl cursor-pointer' />
                    )
                }
            </div>
            <nav className={`${navmobile ? 'min-h-screen' : 'min-h-0'} lg:hidden w-full bg-neutral-500 fixed top-0 left-0 right-0 -bottom-12 -z-10 overflow-hidden transition-all h-0`} >
                <ul className='w-full h-full flex flex-col justify-center items-center gap-y-8'>
                    <li><a className='text-white text-body-md' href="/">Home</a></li>
                    <li><a className='text-white text-body-md' href="/workouts">Workouts</a></li>
                    <li><a className='text-white text-body-md' href="#community">Community</a></li>
                    <li><a className='text-white text-body-md' href="#prices">Prices</a></li>
                    <li><a className='text-white text-body-md' href="#faqs">FAQs</a></li>
                </ul>

                <div className='-mt-44 flex justify-center gap-x-8'>
                    <button className='btn btn-lg text-white'>Log in</button>
                    <button className='btn btn-lg btn-primary'>Sign up</button>
                </div>
            </nav>

        </header >
    )
}

export default Navbar