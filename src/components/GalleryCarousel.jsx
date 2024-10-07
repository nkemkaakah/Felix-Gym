import { Carousel } from "@material-tailwind/react";
import img1 from '../assets/shared7.jpg'
import img3 from '../assets/IMG_0786.JPG'
import img4 from '../assets/IMG_0144.JPG'
import img2 from '../assets/Mens Classic - Overall_102810_Original.jpg'
export function GalleryWithCarousel() {
  return (
    <Carousel loop={true} autoplay={true} className="rounded-xl">
      <img
        src={img1}
        alt="image 1"
        className="h-full w-full object-cover object-center"
      />
      <img
        src={img2}
        alt="image 2"
        className="h-full w-full object-cover object-center"
      />
      <img
        src={img3}
        alt="image 3"
        className="h-full w-full object-cover object-center"
      />
    </Carousel>
  );
}