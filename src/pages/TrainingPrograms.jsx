/* eslint-disable no-unused-vars */
import { Typography } from '@material-tailwind/react'
import React from 'react'
import ProductListSection4, { ProductListCard } from '../components/ProductList'
import { Programs } from '../assets/contents'
import FadeInSection from '../components/FadeInSection'

const TrainingPrograms = () => {
  return (

    <div className=' p-20 py-3 px-2 sm:px-10 mb-40 pt-20'>
      <FadeInSection>
        <Typography variant="h1">Training Programs</Typography>
        <Typography className='font-semibold mt-3 w-full'>
          Explore our diverse range of training programs tailored to your fitness needs.
          From strength training to cardio, find the perfect program to help you achieve
          your goals.
        </Typography>
      </FadeInSection>
      <FadeInSection>
        <div className=" ml-auto mr-[5%] container ">
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-8 md:grid-cols-3 xl:grid-cols-5 ">
            {Programs.map(({ img, name, price, id }, index) => {
              // console.log("ID:", id); // Add this line to debug
              return (
                <ProductListCard
                  key={index}
                  img={img}
                  name={name}
                  price={price}
                  id={id}
                />
              );
            })}
          </div>
        </div>
      </FadeInSection>


    </div>
  )
}

export default TrainingPrograms