import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";

const faqs = [
    {
        title: "What kind of training programs do you offer at Guzfit?",
        desc: "Guzfit offers a wide range of training programs, including strength training, HIIT, personal coaching, and group fitness classes. Whether you're a beginner or a seasoned athlete, we have something for you.",
    },
    {
        title: "Can I book personal training sessions at Guzfit?",
        desc: "Yes, at Guzfit, we offer one-on-one personal coaching tailored to your fitness goals. You can easily book sessions with our expert trainers through our website or at the gym.",
    },
    {
        title: "What equipment does Guzfit provide?",
        desc: "Our state-of-the-art gym is equipped with the latest machines and tools for cardio, weightlifting, and functional training. From treadmills to free weights, we've got everything you need for a great workout.",
    },
    {
        title: "Are there any membership plans at Guzfit?",
        desc: "Yes, Guzfit offers flexible membership plans to suit your needs. We have monthly, quarterly, and yearly plans, along with exclusive benefits for long-term members.",
    },
    {
        title: "Do you offer nutrition guidance at Guzfit?",
        desc: "At Guzfit, we believe fitness is holistic. We offer nutrition plans and guidance to complement your workout routine and help you achieve your fitness goals faster.",
    },
    {
        title: "What are Guzfit's operating hours?",
        desc: "Guzfit is open 24/7 to ensure you have access to our facilities whenever you need. Our staff is available for assistance during peak hours from 6 AM to 10 PM.",
    }
];


export function Faqs4() {
    const [openIndex, setOpenIndex] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing after the section is visible
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the section is in view
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`px-8 py-20  ${isVisible ? "fade-in visible" : "fade-in"}`}
            id="faqs"
        >

            <div className="container mx-auto">
                <div className="mb-14 text-left ml-6 md:ml-0 lg:ml-4">
                    <Typography
                        variant="h1"
                        color="white"
                        className="mb-4 !text-2xl lg:!text-[50px] font-extrabold !special-font uppercase !leading-snug"
                    >
                        FAQS
                    </Typography>
                    <Typography className="mb-3 font-normal text-[30px] !text-gray-300 lg:max-w-3xl">
                        ASK US ANYTHING?
                    </Typography>
                    <Button
                        ripple={true}
                        className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 text-[50px]  font-bold uppercase text-white transition-all !duration-300"
                        onClick={() => {
                            const section = document.querySelector("#questionnaire-section");
                            section.scrollIntoView({ behavior: "smooth" });
                        }}

                    >
                        Start Now!
                    </Button>

                </div>
                <div className="max-w-5xl mx-auto grid gap-10">
                    {faqs.map(({ title, desc }, index) => (
                        <div key={title}>
                            <div className="flex justify-between items-center pb-6">
                                <Typography
                                    color="white"
                                    className={`text-[20px] font-bold uppercase transition-shadow duration-300 ${openIndex === index ? "bg-gradient-to-r from-green-400 via-green-500 to-green-600  shadow-lg shadow-green-500/50" : ""}`}
                                >
                                    {title}
                                </Typography>
                                <button onClick={() => handleToggle(index)}>
                                    {openIndex === index ? (
                                        <ChevronUpIcon className="w-6 h-6 text-gray-300" />
                                    ) : (
                                        <ChevronDownIcon className="w-6 h-6 text-gray-300" />
                                    )}
                                </button>
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-600 pt-4 ${openIndex === index ? "max-h-[200px]" : "max-h-0"
                                    }`}
                            >
                                <Typography className="font-normal !text-gray-300">
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
