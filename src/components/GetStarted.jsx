import React from "react";
import { Card, CardBody, Typography, Avatar, Button } from "@material-tailwind/react";
import img1 from '../assets/shared7.jpg'
import img3 from '../assets/IMG_0786.JPG'
import img4 from '../assets/IMG_0144.JPG'
import img2 from '../assets/Mens Classic - Overall_102810_Original.jpg'
import { GalleryWithCarousel } from "./GalleryCarousel";

export function GetStarted() {
    return (
        <section className="lg:py-28 py-10 px-8 xl:flex xl:gap-6  xl:justify-between  border-4 border-green-400  rounded-t-[30px]">
            <div className="container mx-auto mb-10 xl:mt-20 text-center lg:mb-20">
                <Typography
                    color="white"
                    className="mb-2 font-extrabold text-[40px] sm:text-[50px] md:text-[75px] lg:text-[90px] xl:text-[80px] uppercase text-white animate-zoom"
                >
                    Get started
                </Typography>


                <Button
                    ripple={true}
                    className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 text-[40px] bg-black/90 font-bold uppercase text-white transition-all !duration-300 "
                >
                    Start Your Journey
                </Button>
                <Typography
                    variant="lead"
                    className=" mt-5 mx-auto max-w-lg text-xl  !text-white font-bold"
                >
                    NO EXCUSES, NO LIMITS, ONLY SUCCESS.
                </Typography>
            </div>
            <div className="xl:flex xl:gap-4 w-3/4 mx-auto">
                <GalleryWithCarousel />
            </div>

        </section>
    );
}

export default GetStarted;