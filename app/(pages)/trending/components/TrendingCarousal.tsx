"use client";

import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import carousalData from "@/data/carouselData";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

function TrendingCarousal() {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    waitForAnimate: false,
    arrows: false,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {carousalData.map((item: any, index: any) => (
          <div key={index} className="relative w-screen h-[500px]">
            <Image
            src={item.src}
            alt={item.alt}
            fill
            className="w-svh"
          />
          </div>
        ))}
         </Slider>
         </div>

  );
}

export default TrendingCarousal;
