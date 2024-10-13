/* eslint-disable react/prop-types */
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { MdOutlineMessage } from "react-icons/md";
import FadeInSection from "./FadeInSection";

function TestimonialCard({ img, client, title, clientInfo }) {
  return (
    <Card
      shadow={false}
      className="bg-black/90 rounded-2xl p-6 animate-float"
    >
      <CardHeader color="transparent" floated={false} shadow={false}>
        <Typography color="white" className="lg:mb-20 mb-4 text-2xl font-bold">
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
      "The trainers at this gym are top-notch! They helped me reach my fitness goals in no time.",
    client: "Samantha Johnson",
    clientInfo: "Fitness Enthusiast",
    img: "/image/gym-user.svg",
  },
  {
    title:
      "This gym has the best equipment and classes. I've never felt more motivated to work out.",
    client: "Michael Brown",
    clientInfo: "Regular Gym-Goer",
    img: "https://www.material-tailwind.com/image/gym-user-2.svg",
  },
];

export function TestimonialSection16() {
  return (
    <section className="px-8 py-10 lg:py-28">
      <div className="container mx-auto">
        {/* Wrap the header section */}
        <FadeInSection>
          <div className="flex items-center -space-x-0 space-y-5 mb-[50px] lg:mb-[80px] px-4 lg:px-0 lg:ml-0">
            <MdOutlineMessage color="white" size={100} />
            <Typography
              variant="h2"
              color="white"
              className="mb-4 !text-2xl lg:!text-[50px] font-extrabold !special-font uppercase animate-fade-slide-up"
            >
              Community
            </Typography>
          </div>
        </FadeInSection>

        {/* Wrap the description text */}
        <FadeInSection>
          <Typography variant="lead" className="max-w-3xl text-gray-300 mb-10 lg:mb-20 font-semibold">
            From life-enhancing gadgets to unparalleled customer support, and transformative learning opportunities.
          </Typography>
        </FadeInSection>

        {/* Wrap the testimonial cards */}
        <FadeInSection>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
            {testimonials.map((props, key) => (
              <TestimonialCard key={key} {...props} />
            ))}
          </div>
        </FadeInSection>

        {/* Wrap the quote card */}
        <FadeInSection>
          <Card shadow={false} className="mt-8 bg-blue text-center rounded-2xl p-6">
            <CardHeader color="transparent" floated={false} shadow={false}>
              <Typography
                color="white"
                className="mb-4 !text-2xl lg:!text-3xl max-w-4xl !leading-snug mx-auto font-bold"
              >
                &quot;The gym has been a game-changer for my fitness journey. The state-of-the-art equipment and supportive community have helped me achieve my goals faster than I ever thought possible!&quot;
              </Typography>
            </CardHeader>
            <CardBody className="items-center mx-auto py-2">
              <Typography variant="h6" color="white">
                Alex Johnson
              </Typography>
              <Typography variant="paragraph" className="font-normal text-gray-300">
                Fitness Enthusiast
              </Typography>
            </CardBody>
          </Card>
        </FadeInSection>
      </div>
    </section>
  );
}

export default TestimonialSection16;