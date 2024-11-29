import { Typography } from '@material-tailwind/react'
import React from 'react'
import about_img from '../assets/IMG_0144.jpg'

const About = () => {
  return (
    <div className="xxs:px-4 xs:px-16 s:px-20 sm:px-28 md:px-36 lg:px-48 py-20">
      <Typography variant='h2' className='text-black font-nunito font-extrabold'>
        About Gutzfit
      </Typography>
      <img
      className="max-h-96 w-full rounded-lg  shadow-sm shadow-blue-gray-900/50"
      src={about_img}
      alt="nature image"
      style={{ objectFit: 'cover', objectPosition: '50% 15%' }}
    />
      <Typography variant='paragraph' className='mt-5 font-bold text-black font-nunito  xs:tracking-wider text-justify'>
        Hi, I’m Felix, founder of Gutzfit. I am a qualified fitness trainer with a passion for hybrid training that combines strength, endurance, and functional movements. 
        My fitness journey began in my teens back in Nigeria, where I developed a deep respect for both traditional strength and modern training techniques. When I moved to the UK, 
        I embraced bodybuilding, training with dedication and precision to refine my skills and help others on their fitness journeys.With a focus on building strength and honouring 
        healthy eating rooted in our cultural traditions, I believe you can achieve your goals without giving up the local meals that connect us to our heritage. My philosophy is to “attack the day while it’s still dark,” 
        meaning I start each morning with purpose, prioritizing training and personal growth to set the tone for a productive day

      </Typography>
    </div>
  )
}

export default About