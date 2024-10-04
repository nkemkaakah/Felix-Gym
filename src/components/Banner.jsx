import React from 'react'

const Banner = () => {
  return (
    <section className='bg-black h-[790px]'> 
        <div className='container mx-auto h-full'>
            <div className='flex items-center h-full relative -space-x-48 lg:-space-x-24'>
                <div className='text-white flex-1 z-10 pl-8 lg:pl-0'>
                <h1 className='text-5xl font-bold text-white mb-8' data-aos='fade-down' data-aos-delay='500'>
                     Get the best part of your day <br />{' '} <span className='text-green-400'>- Felix Gym</span> 
                </h1>
                <p className='max-w-[415px] text-body-md lg:text-body-lg mb-8' data-aos='fade-down' data-aos-delay='600'>
                    We provide serious fitness but within a fun and friendly, safe space
                </p>
                <button className='btn btn-sm lg:btn-lg btn-secondary' data-aos='fade-down' data-aos-delay='700'>Start Coaching</button>
            </div>
            <div className='bg-blue-300 w-full h-full bg-banner bg-cover bg-right lg:bg-center bg-no-repeat flex-1'data-aos='fade-right' data-aos-delay='900'>
                
            </div> 
            </div>
           
        </div>  
    </section>
  )
}

export default Banner