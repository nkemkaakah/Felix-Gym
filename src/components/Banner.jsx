import Questionnaire from './Questionnaire'

const Banner = () => {
  return (
    <section id='questionnaire-section' className=' bg-transparent h-[790px] w-full'>
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full relative '>
          <div className='text-white  z-10 pl-8 lg:pl-4 text-left'>
            <h1 className='text-[70px] font-bold text-white mb-8 text-shadow' data-aos='fade-down' data-aos-delay='500'>
             <span className='uppercase text-green-400'>Guzfit </span>
            </h1>
            {/* <p className='max-w-[415px] text-body-md lg:text-body-lg mb-8 ml-8' data-aos='fade-down' data-aos-delay='600'>
              We provide serious fitness but within a fun and friendly, safe space
            </p> */}
            <Questionnaire />
          </div>
          <div className='z-10 bg-blue-300 w-full h-full bg-banner bg-cover bg-center bg-no-repeat flex-1 ml-2' data-aos='fade-right' data-aos-delay='900'>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Banner
