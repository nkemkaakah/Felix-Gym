import React from 'react'
import hero_logo from '../assets/gym-hero-img.jpg'
import Banner from '../components/Banner'
import { GrUser } from "react-icons/gr";
import testimonial_logo from "../assets/customer-testimonial.svg"
import WorkoutSlider from '../components/WorkoutSlider';

const Home = () => {
  return (
    <div className=''>
      {/* hero section */}
      <Banner />

      {/* testimonial */}

      <section className='bg-slate-100'>
        <div className='section-title-group max-w-[540px] mx-auto px-4 lg:px-0'>
          <img src={testimonial_logo} alt="" className='h-[60px]' />
          <h2 className='h2 section-title'>
            Training Programs <span className='text-primary-200'>.</span>
          </h2>
        </div>
        <div>
          <WorkoutSlider  />
        </div>
      </section>

      {/* shop coming soon */}
      {/* leanr from a pro section w video */}
      {/* FAQs */}
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


      {/* shop section */}
      <section class="py-20 bg-gray-800 text-center">
        <h2 class="text-5xl font-bold text-white mb-8">Shop Our Merchandise</h2>
        <p class="text-gray-300 mb-10">Explore our range of high-quality gym gear and apparel!</p>
        <a href="/shop" class="inline-block rounded-lg bg-gray-700 px-10 py-4 text-center font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-500 transition duration-300">Shop Now</a>

        <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-8 lg:px-12">
          {/* <!-- Hoodies --> */}
          <a href="/hoodies" class="bg-gray-900 p-6 md:p-8 lg:p-10 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-800">
            <div class="h-48 w-full bg-gray-700 mb-4 rounded-lg transition duration-300"></div>
            <h3 class="text-2xl md:text-3xl font-semibold text-white">Hoodies</h3>
            <p class="text-gray-400 text-lg md:text-xl">Stay warm and stylish with our premium hoodies.</p>
          </a>

          {/* <!-- T-Shirts --> */}
          <a href="/tshirts" class="bg-gray-900 p-6 md:p-8 lg:p-10 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-800">
            <div class="h-48 w-full bg-gray-700 mb-4 rounded-lg transition duration-300"></div>
            <h3 class="text-2xl md:text-3xl font-semibold text-white">T-Shirts</h3>
            <p class="text-gray-400 text-lg md:text-xl">Comfortable and breathable t-shirts for workouts.</p>
          </a>

          {/* <!-- Shorts --> */}
          <a href="/shorts" class="bg-gray-900 p-6 md:p-8 lg:p-10 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-800">
            <div class="h-48 w-full bg-gray-700 mb-4 rounded-lg transition duration-300"></div>
            <h3 class="text-2xl md:text-3xl font-semibold text-white">Shorts</h3>
            <p class="text-gray-400 text-lg md:text-xl">Perfect fit shorts for your gym sessions.</p>
          </a>

          {/* <!-- Accessories --> */}
          <a href="/accessories" class="bg-gray-900 p-6 md:p-8 lg:p-10 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-800">
            <div class="h-48 w-full bg-gray-700 mb-4 rounded-lg transition duration-300"></div>
            <h3 class="text-2xl md:text-3xl font-semibold text-white">Accessories</h3>
            <p class="text-gray-400 text-lg md:text-xl">Explore our range of gym accessories.</p>
          </a>
        </div>

        <a href="/shop" class="mt-8 inline-block rounded-lg bg-gray-700 px-8 py-3 text-center font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-500 transition duration-300">See More</a>
      </section>


    </div>
  )
}

export default Home