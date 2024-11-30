import { Typography } from '@material-tailwind/react'
import React, { useEffect } from 'react'
import about_img from '../assets/IMG_0144.jpg'
import about2_img from '../assets/IMG_1064.JPG'
import about3_img from '../assets/IMG_2281 copy.jpg'

const About = () => {

  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="xxs:px-2 xs:px-4 s:px-20 sm:px-28 md:px-36 lg:px-48 py-20">
      <Typography variant='h1' className='text-black font-nunito font-extrabold '>
        About Gutzfit
      </Typography>
      <img
        className="h-96  lg:h-[450px] w-full rounded-lg  shadow-sm shadow-blue-gray-900/50 mt-5"
        src={about_img}
        alt="nature image"
        style={{ objectFit: 'cover', objectPosition: '50% 15%' }}
      />
      <Typography variant='paragraph' className='mt-5 font-semibold text-black font-nunito  xs:tracking-wider text-justify'>
        Hi, I’m Felix, founder of Gutzfit. I am a qualified fitness trainer with a passion for hybrid training that combines strength, endurance, and functional movements.
        My fitness journey began in my teens back in Nigeria, where I developed a deep respect for both traditional strength and modern training techniques. When I moved to the UK,
        I embraced bodybuilding, training with dedication and precision to refine my skills and help others on their fitness journeys.With a focus on building strength and honouring
        healthy eating rooted in our cultural traditions, I believe you can achieve your goals without giving up the local meals that connect us to our heritage. My philosophy is to “attack the day while it’s still dark,”
        meaning I start each morning with purpose, prioritizing training and personal growth to set the tone for a productive day

      </Typography>
      <img
        className="h-96 lg:h-[450px] w-full rounded-lg  shadow-sm shadow-blue-gray-900/50 mt-5"
        src={about2_img}
        alt="nature image"
        style={{ objectFit: 'cover', objectPosition: '50% 1%' }}
      />
      <Typography variant='paragraph' className='mt-5 font-semibold text-black font-nunito  xs:tracking-wider text-justify'>
        At Gutzfit, fitness goes beyond physical strength. It’s about cultivating mental resilience, embracing cultural pride, and fostering daily discipline. Our training programs combine traditional strength-building techniques with modern approaches to create a balanced, effective routine. By focusing on hybrid training, we ensure that every session challenges the body while developing endurance and functional skills that enhance overall performance.

      </Typography>
      <Typography variant='paragraph' className='mt-5 font-semibold text-black font-nunito  xs:tracking-wider text-justify'>
        At Gutzfit, every day begins with purpose.

      </Typography>
      <Typography variant='paragraph' className='mt-5 font-semibold text-black font-nunito  xs:tracking-wider text-justify'>
        Nutrition is equally essential to our philosophy. We prioritize healthy eating that respects cultural heritage, allowing you to maintain a strong connection to traditional meals. Our approach emphasizes balance, showing that it’s possible to achieve fitness goals without sacrificing the foods that connect us to our roots and family traditions. This fusion of nourishment and culture empowers you to sustain a lifestyle that is both fulfilling and results-driven.

      </Typography>
      <img
        className="h-[500px] lg:h-[750px] w-full rounded-lg  shadow-sm shadow-blue-gray-900/50 mt-5"
        src={about3_img}
        alt="nature image"
        style={{ objectFit: 'cover', objectPosition: '50% 1%' }}
      />
    </div>

  )
}

export default About