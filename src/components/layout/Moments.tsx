/* eslint-disable @typescript-eslint/no-explicit-any */
import ImagesSlider from "../common/ImagesSlider";
import { images } from "../../utils/slider_images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Moments = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.75,
    slidesToScroll: 3,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <>
      <div className="w-full h-full p-4 md:p-16 flex place-content-center justify-center items-center bg-[white] flex-col gap-[20px] mb-[30px]">
        <div className="w-full h-auto p-8 md:pb-16 flex place-content-center flex-col gap-[10px] text-center text-[#02102A]">
          <h2 className="text-[32px] font-semibold lg:text-[60px] md:text-[34px]">
            @Kempinski
          </h2>
          <p className="text-[14px] font-normal lg:text-[18px] md:text-[16px]">
            Share your moments and explore Kempinski through the eyes of our
            guests
          </p>
        </div>
        <div className="h-auto gap-[20px] p-0 w-full z-10" id="moments">
          <Slider {...settings}>
            {images.map((image, index) => (
              <ImagesSlider image={image.src} id={index}/>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Moments;
