/* eslint-disable react/prop-types */
import {
  Card,
  Carousel,
  CardBody,
  CardHeader,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { MdOutlineMessage } from "react-icons/md";
import FadeInSection from "./FadeInSection";


function TestimonialCard({ client, title, clientInfo }) {
  return (
    <Card
      shadow={false}
      className="bg-black/90 rounded-2xl p-6 animate-float"
    >
      <CardHeader color="transparent" floated={false} shadow={false}>
        <Typography color="white" className="lg:mb-20 mb-4 text-sm sm:text-lg font-bold">
          &quot;{title}&quot;
        </Typography>
      </CardHeader>
      <CardBody className="px-4 py-0 flex flex-wrap-reverse gap-x-6 justify-between items-center">
        <div>
          <Typography variant="h6" color="white" className="!text-white">
            {client}
          </Typography>
          <Typography variant="paragraph" className="font-normal text-gray-300">
            {clientInfo}
          </Typography>
        </div>
        {/* <img src={img} className="max-w-[8rem]" alt={client} /> */}
      </CardBody>
    </Card>
  );
}


const testimonials = [
  {
    title:
      "Training with Gutzfit has been transformational! I purchased one of his programs, and from day one, I felt empowered. His hybrid style is intense but so rewarding, and he’s made it clear that I don’t have to give up the meals I love to get fit. I feel more energized and motivated to keep going each week. I’m so glad to have found a program that aligns with my lifestyle!",
    client: "Amara N",
    clientInfo: "Fitness Enthusiast",
    img: "/image/gym-user.svg",
  },
  {
    title:
      "I bought one of Gutzfit’s programs to kick-start my fitness journey, and it was the best decision I made this year. His training style pushes you beyond what you thought you could do, but it’s so rewarding. I love that he doesn’t expect you to give up everything – you get to enjoy the foods you love while making progress. I’m seeing results, feeling healthier, and I’m even enjoying my early mornings!.",
    client: "Rachel T",
    clientInfo: "Regular Gym-Goer",
    img: "https://www.material-tailwind.com/image/gym-user-2.svg",
  },
  {
    title: "I was initially sceptical about online fitness programs, but Gutzfit’s approach is something else! His guidance on combining traditional meals with effective training was exactly what I needed. I’m proud to say I’ve lost weight, gained strength, and finally feel like fitness is sustainable for me. His emphasis on building confidence and community has motivated me to reach new goals and inspire those around me",
    client: "Ben R",
    clientInfo: "Fitness Enthusiast",
    img: "/image/gym-user.svg",
  },
  {
    title:
      "I had no idea a fitness program could fit my life so seamlessly! Gutzfit’s workouts are challenging, and his philosophy around maintaining cultural foods made me feel at home in my fitness journey. His idea of ‘attacking the day’ has changed my morning routine and keeps me focused on my goals. I’m thrilled with my progress and grateful to be part of a supportive community. This has been more than just a fitness journey – it’s a lifestyle transformation!",
    client: "James L",
    clientInfo: "Regular Gym-Goer",
    img: "https://www.material-tailwind.com/image/gym-user-2.svg",
  },
];

export function TestimonialSection16() {
  return (
    <section className="px-8 py-10 lg:py-28" id="community">
      <div className="container mx-auto">
        {/* Wrap the header section */}
        <FadeInSection>
          <div className="flex items-center -space-x-0 space-y-5 mb-[50px] lg:mb-[80px] px-4 lg:px-0 lg:ml-0">
            <MdOutlineMessage color="black" size={100} />
            <Typography
              variant="h2"
              color="black"
              className="pb-8 !text-2xl lg:!text-6xl !font-black  uppercase animate-fade-slide-up"
            >
              What are clients saying
            </Typography>
          </div>
        </FadeInSection>

        {/* Wrap the description text */}
        {/* <FadeInSection>
          <Typography variant="lead" className="max-w-3xl text-black-300 mb-10 lg:mb-20 font-semibold">
            From life-enhancing gadgets to unparalleled customer support, and transformative learning opportunities.
          </Typography>
        </FadeInSection> */}
        <FadeInSection>
          <Carousel loop={true} autoplay={true} className="rounded-xl"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-0 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={` h-1 cursor-pointer rounded-2xl hidden transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                      }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handlePrev}
                className="!absolute hidden top-2/4 left-4 -translate-y-2/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handleNext}
                className="!absolute hidden top-2/4 !right-4 -translate-y-2/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </IconButton>
            )}>
            {testimonials.map((props, key) => (
              <TestimonialCard key={key} {...props} />
            ))}
          </Carousel>
        </FadeInSection>


        {/* Wrap the testimonial cards */}
        {/* <FadeInSection>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
            
          </div>
        </FadeInSection> */}

        {/* Wrap the quote card */}
        {/* <FadeInSection>
          <Card shadow={false} className="mt-8 bg-blue text-center rounded-2xl p-6">
            <CardHeader color="" floated={false} shadow={false}>
              <Typography
                color="black"
                className="mb-4 !text-md sm:!text-xl lg:!text-2xl max-w-4xl !leading-snug mx-auto font-bold"
              >
                &quot;I was initially sceptical about online fitness programs, but Gutzfit’s approach is something else! His guidance on combining traditional meals with effective training was exactly what I needed. I’m proud to say I’ve lost weight, gained strength, and finally feel like fitness is sustainable for me. His emphasis on building confidence and community has motivated me to reach new goals and inspire those around me&quot;
              </Typography>
            </CardHeader>
            <CardBody className="items-center mx-auto py-2">
              <Typography variant="h6" color="black">
                Ben R
              </Typography>
              <Typography variant="paragraph" className="font-semibold text-black-300">
                Fitness Enthusiast
              </Typography>
            </CardBody>
          </Card>
        </FadeInSection>
        <FadeInSection>
          <Card shadow={false} className="mt-8 bg-blue text-center rounded-2xl p-6">
            <CardHeader color="" floated={false} shadow={false}>
              <Typography
                color="black"
                className="mb-4 !text-md sm:!text-xl lg:!text-2xl max-w-4xl !leading-snug mx-auto font-bold"
              >
                &quot;I had no idea a fitness program could fit my life so seamlessly! Gutzfit’s workouts are challenging, and his philosophy around maintaining cultural foods made me feel at home in my fitness journey. His idea of ‘attacking the day’ has changed my morning routine and keeps me focused on my goals. I’m thrilled with my progress and grateful to be part of a supportive community. This has been more than just a fitness journey – it’s a lifestyle transformation!&quot;
              </Typography>
            </CardHeader>
            <CardBody className="items-center mx-auto py-2">
              <Typography variant="h6" color="black">
                James L
              </Typography>
              <Typography variant="paragraph" className="font-semibold text-black-300">
                Fitness Enthusiast
              </Typography>
            </CardBody>
          </Card>
        </FadeInSection> */}
      </div>
    </section>
  );
}

export default TestimonialSection16;