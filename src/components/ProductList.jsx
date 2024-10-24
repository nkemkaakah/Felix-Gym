/* eslint-disable no-unused-vars */
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";

import outdoorimg from "../assets/shared6.jpg"
import blastimg from "../assets/IMG_1064.JPG"
import metconimg from "../assets/IMG_0997.JPG"
import shredimg from "../assets/IMG_2136.jpg"
import oneimg from "../assets/IMG_0559.JPG"


export function ProductListCard({
    img,
    name,
    price,
}) {
    return (
        <Card shadow={false} className="border-none border-gray-300 flex flex-col items-center">
            <CardBody className="pb-0">
                <img src={img} alt={img} className="max-w-[300px] max-h-[300px] w-full object-cover" />
                <div className="flex justify-between">
                    <div>
                        <Typography className="mb-2 mr-3" color="blue-gray" variant="h5">
                            {name}
                        </Typography>

                    </div>
                    <Typography
                        variant="h5"
                        className="text-gray-600"
                    >
                        {price}
                    </Typography>
                </div>
            </CardBody>
            <CardFooter className="pt-0">
                <Button className="text-lg hover:scale-105 transition-all duration-200 hover:bg-black/75">Get Plan Now</Button>
            </CardFooter>
        </Card>
    );
}
const CONTENTS = [
    {
        id: "a1b2c3",
        img: blastimg, // Use imported image
        name: "Gutzfit Muscle Blast",
        price: "£££"
    },
    {
        id: "d4e5f6",
        img: outdoorimg, // Use imported image
        name: "Gutzfit Outdoor Beast",
        price: "£££"
    },
    {
        id: "g7h8i9",
        img: metconimg, // Use imported image
        name: "Gutzfit METCON",
        price: "£££"
    },
    {
        id: "j10k11l",
        img: shredimg, // Use imported image
        name: "Gutzfit Shred",
        price: "£££"
    },
    {
        id: "m13n14o",
        img: oneimg, // Use imported image
        name: "Gutzfit Tone Up",
        price: "£££"
    },
];

export function ProductListSection4() {
    return (
        <section className="py-10 px-8 border-t-[1px]" id='training-programs'>
            <div className="mx-auto text-center mb-16">
                <Typography className="font-bold text-4xl sm:text-5xl md:text-[70px]">
                    Training Programs
                </Typography>
                <Typography variant="h1" className="my-4 text-4xl">
                    Unlock Your Fitness Goals
                </Typography>
                <Typography className="!font-semibold text-gray-900 mx-auto max-w-2xl">
                    Explore our diverse range of gym workout training programs tailored to your fitness needs.
                    From strength training to cardio, find the perfect program to help you achieve your goals.
                </Typography>
            </div>
            <div className="mx-auto container">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
                    {CONTENTS.slice(0, 3).map(({ img, name, price }, index) => (
                        <ProductListCard
                            key={index}
                            img={img}
                            name={name}
                            price={price}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProductListSection4;
