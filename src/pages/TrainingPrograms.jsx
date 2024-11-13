/* eslint-disable no-unused-vars */
import { Typography } from '@material-tailwind/react'
import React from 'react'
import ProductListSection4, { ProductListCard } from '../components/ProductList'
import { Programs } from '../assets/contents'

const TrainingPrograms = () => {
  return (
    <div className='mt-[100px] sm:mt-40 md:mt-40 p-20 px-2 sm:px-10'>
      <Typography variant="h1">Training Programs</Typography>
      <Typography className='font-semibold mt-3 w-full'>
        Unlock your fitness potential with our comprehensive training programs.
        From strength training to cardio exercises, our programs are designed to
        help you achieve your goals and transform your body.
      </Typography>
      <div className=" ml-auto mr-[5%] container ">
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-8 md:grid-cols-3 xl:grid-cols-5 ">
          {Programs.map(({ img, name, price, id }, index) => {
            console.log("ID:", id); // Add this line to debug
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
    </div>
  )
}

export default TrainingPrograms