/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {
  Button,
  IconButton,
  Rating,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { useLocation } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { Programs } from "../assets/contents";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import {
  
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 

export function DialogDefault({ handleDialogOpen, dialogOpen }) {
  return (
    <Dialog open={dialogOpen} handler={handleDialogOpen} className='p-3'>
      <DialogHeader>Write Your review.</DialogHeader>
      <Textarea variant="outlined" label="Write your review" />
      <DialogFooter>
        <Button variant="text" color="red" onClick={handleDialogOpen} className="mr-1 hover:bg-red-200 transition-colors duration-200">
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="green" className='bg-black hover:bg-green-200 transition-colors duration-200' onClick={handleDialogOpen}>
          <span>Submit Review</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};



const EachTrainingProgram = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  // Function to handle dialog open/close
  const handleDialogOpen = () => setDialogOpen(!dialogOpen);

  // Find the program by id
  const program = Programs.find((p) => p.id === id) || {};

  const { img, name, price, description } = program;


  return (
    <section className="py-16 px-8">
      <div className="mx-auto container grid place-items-center grid-cols-1 md:grid-cols-2">
        <img
          src={img}
          alt="pink blazer"
          className="h-[36rem] rounded-sm"
          
        />
        <div className='md: ml-3'>
          <Typography className="mb-4" variant="h3">
            {name}
          </Typography>
          <div className="mb-4 flex w-full items-center gap-3 ">
            <Button color="gray" className="hover:bg-gray-200 transition-colors duration-200">
              Add to Cart
            </Button>
            <Button color="green" className="hover:bg-green-200 transition-colors duration-200">
              Buy Now
            </Button>

          </div>
          <Typography variant="h5">{price}</Typography>
          <Typography className="!mt-4 text-base font-normal leading-[27px] !text-gray-500">
            {description}
          </Typography>
          <div className="my-8 flex items-center gap-2">
            <Rating value={4} className="text-amber-500" />
            <Typography className="!text-sm font-bold !text-gray-700">
              4.0/5 (100 reviews)
            </Typography>
          </div>
          <div>
            <Typography variant="h4">
              Customer Reviews
            </Typography>
            <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
              <AccordionHeader onClick={() => handleOpen(1)} className='font-bold'>Reviews</AccordionHeader>
              <AccordionBody>
                <Button
                  variant="gradient"
                  className="bg-black"
                  onClick={handleDialogOpen}
                >
                  Write a review
                </Button>
              </AccordionBody>
            </Accordion>
          </div>
          {/* <Typography color="blue-gray" variant="h6">
            Color
          </Typography>
          <div className="my-8 mt-3 flex items-center gap-2">
            <div className="h-5 w-5 rounded border border-gray-900 bg-blue-gray-600 "></div>
            <div className="h-5 w-5 rounded border border-blue-gray-100 "></div>
            <div className="h-5 w-5 rounded border border-blue-gray-100 bg-gray-900 "></div>
          </div> */}

        </div>
      </div>
      <DialogDefault handleDialogOpen={handleDialogOpen} dialogOpen={dialogOpen} />
    </section>
  )
}

export default EachTrainingProgram