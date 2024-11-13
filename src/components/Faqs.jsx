import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
    {
        title: "WILL MY PROGRAM BE DESIGNED BY GUTZFIT HIMSELF?",
        desc: "Yes! Every workout program is designed by Gutzfit himself, ensuring that each routine follows his proven methods and approach to fitness. While some aspects of the programs are tailored based on your personal goals and fitness level, the core structure and exercises are all directly influenced by Gutzfit’s extensive experience and expertise.",
    },
    {
        title: "WHAT IS GUTZFIT'S STYLE OF TRAINING?",
        desc: "Gutzfit's style of training is a dynamic blend of strength training, high-intensity interval training (HIIT), and functional movements (Hybrid). His approach focuses on building lean muscle, burning fat, and improving overall endurance and agility. Whether you want to get stronger, leaner, or more athletic, Gutzfit programs are designed to push your limits and help you achieve sustainable results. His workouts emphasize efficiency, using effective exercises to maximize time and effort.",
    },
    {
        title: "DO YOU HAVE MEAL PLANS?",
        desc: "Not yet! But we plan to offer them in the future. Nutrition is a key part of any fitness journey, and our meal plans will be designed to complement your training and fitness goals. Whether you're looking to lose weight, gain muscle, or simply eat healthier, our meal plans will be easy to follow and packed with nutritious, balanced meals. We will take into account your dietary preferences and nutritional needs to help fuel your body and optimize your results.",
    },
    {
        title: "ARE GUTZFIT PROGRAMS JUST FOR BODYBUILDERS?",
        desc: "Not at all! Gutzfit programs are designed for anyone who wants to improve their fitness, regardless of their goals. Whether you're aiming to lose weight, build muscle, enhance endurance, or just stay active and healthy, we have a program for you. While some programs can help with muscle building, others are focused on fat loss, functional fitness, or general health. These workouts are suitable for all fitness levels—from beginners to advanced athletes.",
    },
    {
        title: "HOW SOON CAN I EXPECT TO SEE RESULTS?",
        desc: "Results depend on several factors, including your starting point, consistency, and commitment to both your workouts and nutrition plan. That being said, many clients start noticing positive changes within the first 2–4 weeks of following the program consistently. For longer-term, more visible results, like muscle growth or significant fat loss, it typically takes around 8–12 weeks. Remember, the key to lasting success is consistency and staying committed to your goals!",
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
            className={` sm:px-8 py-20  ${isVisible ? "fade-in visible" : "fade-in"}`}
            id="faqs"
        >

            <div className="container mx-auto">
                <div className="mb-14 text-left   md:ml-0 lg:ml-4">
                    <Typography
                        variant="h1"
                        color="black"
                        className="mb-4 !text-2xl lg:!text-[50px] font-extrabold !special-font uppercase !leading-snug"
                    >
                        FAQS
                    </Typography>
                    <Typography className="mb-3 font-normal text-[30px] !text-black-300 lg:max-w-3xl">
                        ASK US ANYTHING?
                    </Typography>
                    {/* <Button
                        ripple={true}
                        className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-green-600 dark:focus:ring-green-800 shadow-lg shadow-green-600/50 dark:shadow-lg dark:shadow-green-800/80 text-2xl  md:text-4xl lg:text-[50px] xl:text-6xl  font-bold uppercase text-white transition-all !duration-300 "


                    >
                        <Link to='/'>Find Your Program Now!</Link>
                    </Button> */}

                </div>
                <div className="max-w-5xl mx-auto grid gap-10">
                    {faqs.map(({ title, desc }, index) => (
                        <div key={title}>
                            <div className="flex justify-between items-center pb-6">
                                <Typography
                                    color="black"
                                    className={`text-[20px] font-bold uppercase transition-shadow duration-300 ${openIndex === index ? "bg-gradient-to-r from-green-400 via-green-500 to-green-600  shadow-lg shadow-green-600/50" : ""}`}
                                >
                                    {title}
                                </Typography>
                                <button onClick={() => handleToggle(index)}>
                                    {openIndex === index ? (
                                        <ChevronUpIcon className="w-6 h-6 text-black-300" />
                                    ) : (
                                        <ChevronDownIcon className="w-6 h-6 text-black-300" />
                                    )}
                                </button>
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-600 pt-4 ${openIndex === index ? "max-h-[200px]" : "max-h-0"
                                    }`}
                            >
                                <Typography className="font-semibold !text-black-300">
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
