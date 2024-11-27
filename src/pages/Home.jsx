import {
  Button,
  Card,
  CardBody,
  Typography
} from "@material-tailwind/react";
import banner1 from '../assets/IMG_0559.JPG'

import videoBg from '../assets/Copy of GUTZFIT YOUTUBE .mp4';
import { CarouselWithOverlay } from '../components/Banner';
import TestimonialSection16 from '../components/Community';
import Faqs4 from '../components/Faqs';
import GetStarted from '../components/GetStarted';
import ProductListSection4 from "../components/ProductList";
import { useState } from "react";
import FadeInSection from "../components/FadeInSection";

// plans: [
//   {
//     name: 'Basic',
//     price: '20',
//     list: [
//       { name: 'unlimited gym access' },
//       { name: '1 training programs' },
//       { name: 'free fitness consultation' },
//     ],
//     delay: 600,
//   },
//   {
//     name: 'Premium',
//     price: '35',
//     list: [
//       { name: 'unlimited gym access' },
//       { name: '5 training programs' },
//       { name: 'free fitness consultation' },
//       { name: 'personal trainer' },
//     ],
//     delay: 800,
//   },
//   {
//     name: 'Elite',
//     price: '49',
//     list: [
//       { name: 'unlimited gym access' },
//       { name: 'all training programs' },
//       { name: 'free fitness consultation' },
//       { name: 'personal trainer' },
//       { name: '50% off drinks' },
//     ],
//   }
// ]

const Home = () => {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className=''>
      {/* hero section */}

      {/* <Banner /> */}
      <CarouselWithOverlay />
      {/* traing programs */}
      <ProductListSection4 />
      {/* testimonial */}
      {/* section-title-group max-w-[240px] px-4 lg:px-0 lg:ml-0 mx-auto */}


      {/* shop coming soon */}

      {/* leanr from a pro section w video */}
      <FadeInSection>
        <section className="relative w-full h-screen overflow-hidden">
          <div className=" px-10 sm:px-0 relative z-10 flex flex-col items-start justify-center w-full h-full" style={{ backgroundImage: `url(${banner1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Optional semi-transparent background removed */}
            <Card className="mt-6  w-full sm:w-[80%] md:w-[60%] xl:w-[40%] sm:max-h-full ">
              <CardBody className='h-full'>
                <Typography variant="h4" color="blue-gray" className="mb-10 uppercase lg:text-4xl font-extrabold xl:!mt-10 xl:text-[50px] ">
                  Train the Gutzfit Way
                </Typography>
                <Typography className="text-sm sm:text-lg mb-10 font-semibold xl:text-[25px]">
                  <span className="block sm:hidden">
                    {/* Conditionally show truncated text on screens smaller than `sm` */}
                    {isExpanded ? (
                      <>
                        Are you ready to unlock a fitness approach that goes beyond the gym?
                        With over a decade of experience, the Gutzfit Method isn’t just about workouts – it’s about developing strength, resilience, and confidence that lasts.
                        My hybrid training style is designed to push you to your limits and show you how to work smart, not just hard.
                        Join a growing community of people who have found the courage, guts, and drive to reach their best shape and stay there!
                        Transform the way you train, the way you eat, and the way you live. Your fitness journey starts now – discover the Gutzfit Method and make the change today!
                      </>
                    ) : (
                      <>
                        Are you ready to unlock a fitness approach that goes beyond the gym?
                        With over a decade of experience, the Gutzfit Method isn’t just about workouts – it’s about developing strength...
                      </>
                    )}
                    <button
                      onClick={toggleReadMore}
                      className="text-green-500 font-medium ml-1"
                    >
                      {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                  </span>

                  {/* Full text for screens `sm` and larger */}
                  <span className="hidden sm:block">
                    Are you ready to unlock a fitness approach that goes beyond the gym?
                    With over a decade of experience, the Gutzfit Method isn’t just about workouts – it’s about developing strength, resilience, and confidence that lasts.
                    My hybrid training style is designed to push you to your limits and show you how to work smart, not just hard.
                    Join a growing community of people who have found the courage, guts, and drive to reach their best shape and stay there!
                    Transform the way you train, the way you eat, and the way you live. Your fitness journey starts now – discover the Gutzfit Method and make the change today!
                  </span>
                </Typography>
                <Button
                  ripple={true}
                  className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-600/50 dark:shadow-lg dark:shadow-green-800/80 text-lg md:text-2xl lg:text-4xl  font-bold uppercase text-white transition-all !duration-300"
                  onClick={() => {
                    const section = document.querySelector("#questionnaire-section");
                    section.scrollIntoView({ behavior: "smooth" });
                  }}

                >
                  Find Your Program Now!
                </Button>
              </CardBody>
            </Card>
          </div>
        </section>
      </FadeInSection>


      <TestimonialSection16 />
      {/* FAQs */}
      {/* <Faqs4 /> */}

      <section className="relative w-full h-screen overflow-hidden">
        <div className="w-full h-full aspect-[16/9]">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            src={videoBg}
            type="video/mp4"
          />
        </div>
      </section>
      {/**get started */}
      {/* <GetStarted /> */}


    </div>
  )
}

export default Home
