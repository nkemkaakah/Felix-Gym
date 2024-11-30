import React, { useEffect } from 'react'
import Faqs4 from '../components/Faqs'

const Faq = () => {

  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=' bg-white shadow-none rounded-lg pb-10 sm:px-10 px-5 pt-0 border-b-8'>
      {/* <h2 className='text-2xl font-bold text-gray-800 mb-8'>Frequently Asked Questions</h2> */}
      <Faqs4 />
    </div>
  )
}

export default Faq