import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'; // Import from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation'; // Add the required CSS for navigation
import '.././workoutSlider.css'



const testimonialsData = [
    {
        name: "Alex Johnson",
        role: "Member since 2022",
        feedback: "The personal coaching here has transformed my fitness journey. I’m stronger, healthier, and more motivated every day!",
        image: "https://your-image-source-1.jpg"
    },
    {
        name: "Jamie Lee",
        role: "Satisfied Customer",
        feedback: "Amazing range of gym merchandise! I love the quality of the hoodies and t-shirts. A must-buy for any fitness enthusiast.",
        image: "https://your-image-source-2.jpg"
    },
    {
        name: "Chris Evans",
        role: "Fitness Enthusiast",
        feedback: "I've been to many gyms, but none offer the personalized attention like here. The coaches are incredibly supportive!",
        image: "https://your-image-source-3.jpg"
    },
    {
        name: "Taylor Swift",
        role: "Frequent Visitor",
        feedback: "The equipment and the environment here are top-notch. It makes coming to the gym an enjoyable experience every time.",
        image: "https://your-image-source-4.jpg"
    },
    {
        name: "Michael Jordan",
        role: "Professional Athlete",
        feedback: "I love the dedication of the coaches and the intensity of the workouts. It's the perfect place to push your limits.",
        image: "https://your-image-source-5.jpg"
    }
];



const WorkoutSlider = () => {
    return (
        <section className="bg-slate-100 dark:bg-gray-900">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={true}
                    loop={true} // Added loop prop
                    breakpoints={{
                        768:{
                            slidesPerView:2
                        },
                        1024:{
                            slidesPerView:3
                        },
                        1440:{
                            slidesPerView:4
                        },
                    }}
                    autoplay={{
                        delay: 5000,
                        
                    }}
                    modules={[Navigation,Autoplay]}
                    className='workoutSlider' 
                >
                    {testimonialsData.map((testimonial, index) => (
                        <SwiperSlide key={index} className="transition-transform duration-300 transform hover:scale-105"> {/* Added hover effect */}
                            <figure className="md:max-w-screen-md mx-auto bg-white shadow-lg rounded-lg p-6 min-h-[350px] max-w-screen-sm"> {/* Added background, shadow, and padding */}
                                <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                </svg>
                                <blockquote>
                                    <p className="text-2xl font-medium text-gray-900 dark:text-white italic">"{testimonial.feedback}"</p> {/* Added italic style */}
                                </blockquote>
                                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                                    {/* <img className="w-12 h-12 rounded-full border-2 border-gray-300 dark:border-gray-700" src={testimonial.image} alt={testimonial.name} /> Increased image size and added border */}
                                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                        <div className="pr-3 font-medium text-gray-900 dark:text-white">{testimonial.name}</div>
                                        <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default WorkoutSlider