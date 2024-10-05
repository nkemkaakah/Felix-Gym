import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import React, { useRef, useState } from "react";

const faqs = [
    {
        title: "How do I order?",
        desc: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don't appreciate the moment until it's passed.",
    },
    {
        title: "How can I make the payment?",
        desc: "It really matters and then like it really doesn't matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn't matter. Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too. We're not always in the position that we want to be at.",
    },
];

export function Faqs4() {
    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([])

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="px-8 py-20">
            <div className="container mx-auto">
                <div className="mb-14 text-left ml-6 md:ml-0 lg:ml-4">
                    <Typography
                        variant="h1"
                        color="blue-gray"
                        className="mb-4 text-4xl !leading-snug lg:text-[40px]"
                    >
                        FAQS
                    </Typography>
                    <Typography className=" mb-3 font-normal text-[30px] !text-gray-500 lg:max-w-3xl">
                        ASK US ANYTHING?
                    </Typography>
                    <Button ripple={true} className="text-[50px] font-bold uppercase">Start Now!</Button>
                </div>
                <div className="max-w-3xl mx-auto grid gap-10">
                    {faqs.map(({ title, desc }, index) => (
                        <div key={title}>
                            <div className="flex justify-between items-center pb-6">
                                <Typography color="blue-gray" className="text-[20px] font-bold">
                                    {title}
                                </Typography>
                                <button onClick={() => handleToggle(index)}>
                                    {openIndex === index ? (
                                        <ChevronUpIcon className="w-6 h-6 text-gray-500" />
                                    ) : (
                                        <ChevronDownIcon className="w-6 h-6 text-gray-500" />
                                    )}
                                </button>
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-200 pt-4 ${openIndex === index ? "max-h-[200px]" : "max-h-0"
                                    }`}
                            >
                                <Typography className="font-normal !text-gray-500">
                                    {desc}
                                </Typography>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Faqs4;
