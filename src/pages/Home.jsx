import {
  Button,
  Card,
  CardBody,
  Typography
} from "@material-tailwind/react";

import videoBg from '../assets/Copy of GUTZFIT YOUTUBE .mp4';
import pricing_icon from '../assets/pricing.svg';
import Banner from '../components/Banner';
import TestimonialSection16 from '../components/Community';
import Faqs4 from '../components/Faqs';
import GetStarted from '../components/GetStarted';
import ProductListSection4 from "../components/ProductList";

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

  return (
    <div className=''>
      {/* hero section */}
      <Banner />
      {/* testimonial */}
      {/* section-title-group max-w-[240px] px-4 lg:px-0 lg:ml-0 mx-auto */}
      <TestimonialSection16 />
      {/* traing programs */}
      <ProductListSection4 />
      {/* shop coming soon */}
      
      <section className="py-40 bg-gray-200"> {/* Dark background for the section */}
        <div className="max-w-screen-xl mx-auto text-center">
          <div className='section-title-group max-w-[540px] mx-auto px-4 lg:px-0'>
            <img src={pricing_icon} alt="" />
            <h2 className='h2'>Shop Coming Soon <span className='text-primary-200'>!</span></h2>
          </div>

          <div className="flex justify-center">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-green-200 rounded-lg opacity-50 animate__animated animate__pulse animate__infinite"></div>
              <button className="relative z-10 bgtransparent-    px-12 py-5 !bg-primary-200 text-blue-gray-900 shadow-lg transition-all duration-500 ease-in-out transform  hover:text-white hover:!bg-black/90 hover:scale-105">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </section>



      {/* FAQs */}
      <Faqs4 />
      {/* leanr from a pro section w video */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          src={videoBg} // Replace with your video path
          type="video/mp4"
        />
        <div className="relative z-10 flex flex-col items-start justify-center w-full h-full bg-black bg-opacity-50 p-8"> {/* Optional semi-transparent background */}
          <Card className="mt-6 w-full sm:w-[80%] md:w-[60%] xl:w-[40%] xl:h-[40%]  ">
            <CardBody className='h-full'>
              <Typography variant="h5" color="blue-gray" className="mb-10 uppercase text-4xl font-extrabold xl:!mt-10 xl:text-[50px] ">
                Learn from a Pro
              </Typography>
              <Typography className='text-lg mb-10 font-semibold xl:text-[25px] '>
                Embarking on a fitness journey is a transformative experience! With passion and dedication,
                I am here to inspire and support you in achieving your health and fitness goals. Join me
                as we unlock your potential and work towards a stronger, healthier you. Start your journey today
              </Typography>
              <Button
                ripple={true}
                className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-600/50 dark:shadow-lg dark:shadow-green-800/80 text-[50px]  font-bold uppercase text-white transition-all !duration-300"
                onClick={() => {
                  const section = document.querySelector("#questionnaire-section");
                  section.scrollIntoView({ behavior: "smooth" });
                }}

              >
                Start Now!
              </Button>
            </CardBody>
          </Card>
        </div>
      </section>
      {/**get started */}
      <GetStarted />


    </div>
  )
}

export default Home