"use client";

import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import carousalData from "@/data/carouselData";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

function TestCarousal() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <div className=" items-center justify-center w-full mx-auto max-w-6xl  mb-10 mt-5 ">
      <Slider {...settings}>
        {carousalData.map((item: any, index: any) => (
          <div key={index} className="relative w-full h-[550px]">
            <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-fit"
          />
          </div>
        ))}
         </Slider>
         </div>

  );
}

export default TestCarousal;
