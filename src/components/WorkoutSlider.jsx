import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CommunityImg1 from '../assets/img1.png';
import CommunityImg2 from '../assets/img2.png';
import CommunityImg3 from '../assets/img3.png';
import CommunityImg4 from '../assets/img4.png';
import 'swiper/css';
import 'swiper/css/navigation';

const WorkoutSlider = () => {


    const testimonials = [
        {
            image: CommunityImg1,
            name: 'Mark A.',
            message:
                '“Great location, great price and great, helpful people. What to want more?”',
        },
        {
            image: CommunityImg2,
            name: 'Lauren K.',
            message:
                '“Gymme changed my life. Not only physically but mentally as well. I’m a better mother, and all around better human being because of this gym.”',
        },
        {
            image: CommunityImg3,
            name: 'Jhon D.',
            message:
                '“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”',
        },
        {
            image: CommunityImg4,
            name: 'Anne R.',
            message:
                '“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”',
        }
    ]


    return (
        <Swiper
            slidesPerView={3}
            

        >
            {testimonials.map((testimonial, idx) => {
                const { image, name, message } = testimonial
                return (
                    <SwiperSlide key={idx}>
                        <div className='relative'>
                            <div>
                                <img src={image} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>)
            })}
        </Swiper>
    )
}

export default WorkoutSlider