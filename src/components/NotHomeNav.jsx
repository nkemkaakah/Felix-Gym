import { useEffect, useState } from 'react'
import { RiCloseFill, RiMenu4Fill } from 'react-icons/ri'
import white_logo from '../assets/White Gutzfit logo WP.png'
import black_logo from '../assets/Gutzfit logo.png'
import { AboutDropDown, AboutMobileDropDown, FollowMeDropDown, FollowMeMobileDropDown, SignUpModal, TrainingDropDown, TrainingMobileDropDown } from './dropdowns/NavDropDowns'
import { useLocation } from 'react-router-dom'
import { Typography } from '@material-tailwind/react'
const NotHomeNav = () => {
    const location = useLocation();
    const isHomeRoute = location.pathname === '/';

    const [isActive, setIsActive] = useState(false)
    const [navmobile, setNavMobile] = useState(false)

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

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
        <header className={`border-b-2 flex flex-col`}>
            <div className='z-30 left-0 right-0 lg:mx-auto top-0 flex justify-between items-center px-[10px] lg:px-[40px] transition-all duration-300'>
                <div className='flex flex-col items-center justify-center gap-0'>

                    <a href="/" className='flex items-center flex-col gap-0 '>
                        <img src={black_logo} alt="" className=" h-[150px] hover:scale-105 transition-all duration-300" />
                        {/* <h1 className='text-white text-4xl'>Felix Gym</h1> */}
                    </a>


                </div>
                <nav className='hidden lg:flex '>
                    <ul className='flex  text-black xl:gap-x-28 gap-x-10  '>
                        <li onClick={() => setNavMobile(false)}><AboutDropDown isActive={isActive} dark={isHomeRoute} /></li>
                        <li onClick={() => setNavMobile(false)}><TrainingDropDown dark={isHomeRoute} /></li>
                        <li onClick={() => setNavMobile(false)}><FollowMeDropDown dark={isHomeRoute} /></li>
                    </ul>
                </nav>

                <div className='hidden lg:flex space-x-0 '>
                    <button className={`btn ${isHomeRoute ? 'btn-sm text-white hover:bg-gray-600' : 'btn-lg hover:text-gray-400'} rounded-sm  transition-all duration-200 font-nunito`}>Login</button>
                    <button className={`btn btn-sm  btn-primary btn-secondary bg-black text-white rounded-md hover:bg-black/70 transition-all duration-300 font-nunito`} onClick={handleOpen}>SignUp</button>
                </div>


                <SignUpModal open={open} handleOpen={handleOpen} />
                <div onClick={() => setNavMobile(!navmobile)} className='lg:hidden absolute right-4 top-6'>
                    {navmobile ? (<RiCloseFill className='text-primary-200 text-3xl cursor-pointer' />) :
                        (
                            <RiMenu4Fill className={`${isActive ? 'text-white' : "text-black"} text-3xl border s:border-none cursor-pointer  rounded`} />
                        )
                    }
                </div>
                <nav className={`${navmobile ? 'h-screen' : 'h-0'} lg:hidden w-full bg-neutral-500 fixed top-0 left-0 right-0 bottom-0 -z-10 overflow-hidden transition-all h-0`} >
                    <ul className='w-full h-full flex flex-col justify-center items-center gap-y-8 font-semibold'>
                        <li onClick={() => setNavMobile(false)}><AboutMobileDropDown isActive={isActive} dark={isHomeRoute} /></li>
                        <li onClick={() => setNavMobile(false)}><TrainingMobileDropDown dark={isHomeRoute} /></li>
                        <li onClick={() => setNavMobile(false)}><FollowMeMobileDropDown dark={isHomeRoute} /></li>


                    </ul>

                    <div className='-mt-44 flex justify-center gap-x-8'>
                        <button className='btn btn-lg  text-white font-nunito' onClick={() => setNavMobile(false)}>Log in</button>
                        <button className='btn btn-lg btn-primary text-black font-nunito' onClick={() => setNavMobile(false)}>Sign up</button>
                    </div>
                </nav>
            </div>

            <div>
                <div>
                    <Typography variant='h5' className='flex-wrap text-black mb-2 ml-3 hover:scale-105 transition-all duration-300'>
                        No Gutz No Glory
                    </Typography>
                </div>
            </div>


        </header >
    )
}

export default NotHomeNav
