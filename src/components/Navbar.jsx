import React, { useEffect, useState } from 'react'
import { RiCloseFill, RiMenu4Fill } from 'react-icons/ri'
import white_logo from '../assets/White Gutzfit logo WP.png'

const Navbar = () => {

    const [isActive, setIsActive] = useState(false)
    const [navmobile, setNavMobile] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
        });

        return () => {
            window.removeEventListener('scroll', () => { });
        };
    }, []);

    // Prevent scrolling when the mobile menu is active
    useEffect(() => {
        if (navmobile) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [navmobile]);

    return (
        <header className={`${isActive ? 'bg-black py-[16px]' : 'bg-transparent py-[20px]'} fixed w-full z-30 left-0 right-0 mx-auto flex justify-between items-center px-[20px] lg:px-[80px] transition-all duration-300`}>

            <a href="" className='flex items-center gap-2 '>
                <img src={white_logo} alt="" className=" h-[60px] hover:scale-125 transition-all duration-300" />
                {/* <h1 className='text-white text-4xl'>Felix Gym</h1> */}
            </a>
            <nav className='hidden lg:flex'>
                <ul className='flex text-white xl:gap-x-24 gap-x-10 '>
                    <li><a className='text-white text-body-md hover:text-primary-200 transition' href="/" onClick={() => setNavMobile(false)}>Home</a></li>
                    <li><a className='text-white text-body-md hover:text-primary-200 transition' href="/workouts" onClick={() => setNavMobile(false)}>Workouts</a></li>
                    <li><a className='text-white text-body-md hover:text-primary-200 transition' href="#community" onClick={() => setNavMobile(false)}>Community</a></li>
                    <li><a className='text-white text-body-md hover:text-primary-200 transition' href="#prices" onClick={() => setNavMobile(false)}>Prices</a></li>
                    <li><a className='text-white text-body-md hover:text-primary-200 transition' href="#faqs" onClick={() => setNavMobile(false)}>FAQs</a></li>

                </ul>
            </nav>
            <div className='hidden lg:flex space-x-4'>
                <button className='btn btn-sm text-white hover:text-primary-200 transition'>Login</button>
                <button className='btn btn-sm btn-primary'>SignUp</button>
            </div>
            <div onClick={() => setNavMobile(!navmobile)} className='lg:hidden absolute right-4 top-6'>
                {navmobile ? (<RiCloseFill className='text-primary-200 text-3xl cursor-pointer' />) :
                    (
                        <RiMenu4Fill className='text-primary-200 text-3xl cursor-pointer' />
                    )
                }
            </div>
            <nav className={`${navmobile ? 'h-screen' : 'h-0'} lg:hidden w-full bg-neutral-500 fixed top-0 left-0 right-0 bottom-0 -z-10 overflow-hidden transition-all h-0`} >
                <ul className='w-full h-full flex flex-col justify-center items-center gap-y-8'>
                    <li><a className='text-white text-body-md' href="/" onClick={() => setNavMobile(false)}>Home</a></li>
                    <li><a className='text-white text-body-md' href="#shop" onClick={() => setNavMobile(false)}>Shop</a></li>
                    <li><a className='text-white text-body-md' href="#community" onClick={() => setNavMobile(false)}>Community</a></li>
                    <li><a className='text-white text-body-md' href="#prices" onClick={() => setNavMobile(false)}>Prices</a></li>
                    <li><a className='text-white text-body-md' href="#faqs" onClick={() => setNavMobile(false)}>FAQs</a></li>
                </ul>

                <div className='-mt-44 flex justify-center gap-x-8'>
                    <button className='btn btn-lg text-white' onClick={() => setNavMobile(false)}>Log in</button>
                    <button className='btn btn-lg btn-primary' onClick={() => setNavMobile(false)}>Sign up</button>
                </div>
            </nav>

        </header >
    )
}

export default Navbar
