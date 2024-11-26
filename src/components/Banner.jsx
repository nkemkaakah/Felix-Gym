/* eslint-disable no-unused-vars */
import Questionnaire from './Questionnaire'
import { Carousel, Typography, Button, IconButton } from "@material-tailwind/react";
import banner1 from '../assets/IMG_2729.jpg'
import banner2 from '../assets/IMG_2136.jpg'
import banner3 from '../assets/shared7.jpg'
import banner4 from '../assets/img4.png'



const Banner = () => {

  return (
    <section id='questionnaire-section' className=' bg-transparent h-[790px] w-full'>
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full relative '>
          <div className='text-white max-w-[60%] xl:w-[70%]   z-10 pl-8 lg:pl-4 text-left'>
            <h1
              className="md:text-[70px] text-3xl xl:text-center font-bold text-white mb-8 text-shadow"
              style={{ fontFamily: "'ITC Avant Garde Gothic', sans-serif" }}
              data-aos="fade-down"
              data-aos-delay="500"
            >
              <span className="uppercase text-black text-shadow">Gutzfit</span>
            </h1>
            <p
              className="text-black text-md md:text-lg font-semibold hidden xs:block my-3"
              style={{ fontFamily: "'ITC Avant Garde Gothic', sans-serif" }}
            >
              No Gutz, No Glory
            </p>
            {/* <p className='max-w-[415px] text-body-md lg:text-body-lg mb-8 ml-8' data-aos='fade-down' data-aos-delay='600'>
              We provide serious fitness but within a fun and friendly, safe space
            </p> */}
            <Questionnaire />
          </div>

        </div>

      </div>
    </section>
  )
}



export const CarouselWithOverlay = () => {
  return (
    <div className="relative h-[1000px]">
      <Carousel loop={true}  autoplay={true} className="rounded-xl"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-0 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={` h-1 cursor-pointer rounded-2xl hidden transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute hidden top-2/4 left-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute hidden top-2/4 !right-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
      >
        <img
          src={banner1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src={banner2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src={banner3}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <img
          src={banner4}
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white max-w-[100%] sm:max-w-[60%] xl:w-[70%] mt-10 sm:mt-30 md:mt-40 z-10 pl-4 pr-4 lg:pr-0 md:pb-20 lg:pl-3 text-left">
        <div className="text-left">
          <h1
            className="md:text-[70px] text-3xl xl:text-center font-bold text-white mb-8 text-shadow"
            style={{ fontFamily: "'ITC Avant Garde Gothic', sans-serif" }}
            data-aos="fade-down"
            data-aos-delay="500"
          >
            <Typography variant="h1" className='uppercase !text-white text-shadow text-center font-bold '>Gutzfit Training Programs</Typography>
            {/* <span className="uppercase text-white text-shadow">Gutzfit Training Programs</span> */}
          </h1>
          <p
            className="text-white text-center text-md md:text-lg font-semibold hidden xs:block my-3"
            style={{ fontFamily: "'ITC Avant Garde Gothic', sans-serif" }}
          >
            Use our questionnaire below to get the best training programs for you designed specially by Gutzfit
          </p>
          {/* <p className='max-w-[415px] text-body-md lg:text-body-lg mb-8 ml-8' data-aos='fade-down' data-aos-delay='600'>
              We provide serious fitness but within a fun and friendly, safe space
          </p> */}
          <Questionnaire />
        </div>
      </div>
    </div>
  )
}


export default Banner





