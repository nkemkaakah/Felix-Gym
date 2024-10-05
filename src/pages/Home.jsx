import React, { useState } from 'react'
import hero_logo from '../assets/gym-hero-img.jpg'
import Banner from '../components/Banner'
import { GrUser } from "react-icons/gr";
import testimonial_logo from "../assets/customer-testimonial.svg"
import WorkoutSlider from '../components/WorkoutSlider';
import pricing_icon from '../assets/pricing.svg'
import community_logo from '../assets/community.svg'
import TestimonialSection16 from '../components/Community';
import ComingSoon1 from '../components/ComingSoon';
import Faqs4 from '../components/Faqs';

plans: [
  {
    name: 'Basic',
    price: '20',
    list: [
      { name: 'unlimited gym access' },
      { name: '1 training programs' },
      { name: 'free fitness consultation' },
    ],
    delay: 600,
  },
  {
    name: 'Premium',
    price: '35',
    list: [
      { name: 'unlimited gym access' },
      { name: '5 training programs' },
      { name: 'free fitness consultation' },
      { name: 'personal trainer' },
    ],
    delay: 800,
  },
  {
    name: 'Elite',
    price: '49',
    list: [
      { name: 'unlimited gym access' },
      { name: 'all training programs' },
      { name: 'free fitness consultation' },
      { name: 'personal trainer' },
      { name: '50% off drinks' },
    ],
  }
]

const Home = () => {

  return (
    <div className=''>
      {/* hero section */}
      <Banner />





      {/* shop coming soon */}
      {/* <ComingSoon1/> */}
      <section className="py-40 bg-white/70"> {/* Dark background for the section */}
        <div className="max-w-screen-xl mx-auto text-center">
          <div className='section-title-group max-w-[540px] mx-auto px-4 lg:px-0'>
            <img src={pricing_icon} alt="" />
            <h2 className='h2'>Shop Coming Soon <span className='text-primary-200'>!</span></h2>
          </div>
          {/* <div className='flex flex-col lg:flex-row items-center justify-center max-w-[1280px] mx-auto gap-y-4'>
            <div className='flex flex-col hover:bg-neutral-500 hover:text-white bg-neutral-400/10 text-neutral-500 hover:scale-105 transition-all duration-300 w-full md:max-w-[620px] lg:max-w-[405px] rounded-sm px-4 lg:min-h-[450px]'>

             
              <div className='h-32 w-full bg-gray-300 rounded-t-sm mb-4 mt-4 flex items-center justify-center'> 
                <img src="path/to/your/image.jpg" alt="Hoodies" className='h-full w-auto object-cover rounded-t-sm' /> 
              </div>

              
              <div className='flex flex-col justify-between h-full'>
                <div className='mb-4'>
                  <div className='lg:text-[50px] sm:text-[35px]  font-bold'>Hoodies</div>
                  <div className='text-[30px] font-bold'>
                    <span>£</span>
                    <span>20</span>
                  </div>
                </div>
                <div className='mt-auto'>
                  <button className='hover:bg-white bg-black/70 text-white hover:text-neutral-500 hover:border-none border border-neutral-500 btn btn-lg rounded-[1px] lg:mx-auto duration-300 transition-all'>Shop Now!</button>
                </div>
              </div>

            </div>


            <div className='w-full md:max-w-[620px] lg:max-w-[405px] rounded-sm  px-4 lg:min-h-[450px]'>
              <div className=' hover:bg-neutral-500 hover:text-white bg-neutral-400/10 text-neutral-500 hover:scale-105 transition-all duration-300'>
                <div>
                  Gear
                </div>
                <div>
                  <div>
                    <span>£</span>
                    <span>20</span>

                  </div>
                </div>
              </div>
            </div>
            <div className='w-full md:max-w-[620px] lg:max-w-[405px] rounded-sm  px-4 lg:min-h-[450px]'>
              <div className=' hover:bg-neutral-500 hover:text-white bg-neutral-400/10 text-neutral-500 hover:scale-105 transition-all duration-300'>
                <div>
                  Straps
                </div>
                <div>
                  <div>
                    <span>£</span>
                    <span>20</span>

                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="flex justify-center">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-green-200 rounded-lg opacity-50 animate__animated animate__pulse animate__infinite"></div>
              <button className="relative z-10 bg-transparent    px-12 py-5 bg-green-300 text-white shadow-lg transition duration-300 ease-in-out transform hover:bg-green-400 hover:text-white hover:scale-105">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* testimonial */}
      {/* section-title-group max-w-[240px] px-4 lg:px-0 lg:ml-0 mx-auto */}
     <TestimonialSection16/>




      {/* leanr from a pro section w video */}
      {/* FAQs */}
      <Faqs4 />
      {/**get started */}



      {/* <section class="relative bg-cover bg-center py-8 antialiased dark:bg-gray-900 md:py-12 flex items-center justify-center"
        style={{ backgroundImage: `url(${hero_logo})` }}
      >
        <div class="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>

        <div class="relative mx-auto  max-w-screen-xl px-4 pb-6  lg:gap-8 lg:pb-16 xl:gap-0 text-center">
          <div class="content-center justify-self-start md:text-start max-w-3xl mx-auto">
            <h1 class="mb-6 text-6xl font-extrabold leading-tight tracking-tight text-white md:max-w-3xl xl:text-7xl">Achieve Your Fitness Goals!<br />Personal Coaching & Gear Available!</h1>
            <p class="max-w-3xl text-gray-300 md:mb-12 md:text-lg mb-4 lg:mb-6 lg:text-xl">Get expert coaching and shop for top-quality gym merchandise today!</p>
            <a href="/coaching" class="inline-block rounded-lg bg-gray-800 px-6 py-3.5 text-center font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-800">Get Coaching</a>
            <a href="/shop" class="inline-block ml-4 rounded-lg bg-gray-800 px-6 py-3.5 text-center font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-secondary-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-800">Shop Now</a>
          </div>
          { <div class="hidden md:col-span-5 md:mt-0 md:flex">
            <img class="dark:hidden" src="https://your-image-link-here.com/coaching-illustration-light.svg" alt="coaching and fitness illustration" />
            <img class="hidden dark:block" src="https://your-image-link-here.com/coaching-illustration-dark.svg" alt="coaching and fitness illustration" />
          </div> }
        </div>
      </section> */}





    </div>
  )
}

export default Home