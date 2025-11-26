"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useEffect, useState } from "react";

const BannerSkeleton = () => (
  <div className="relative w-full mx-auto rounded-xl overflow-hidden my-10 animate-pulse">
    <div className="w-full h-[350px] md:h-[500px] bg-gray-700"></div>
  </div>
);

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          "https://prodfy-server.vercel.app/products-recent",
          {
            cache: "no-store",
          }
        );
        const data = await res.json();

        const filtered = data.filter((item) => item.image).slice(0, 10);
        setBannerData(filtered);
      } catch (err) {
        console.error("Error fetching banner data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const shouldLoop = bannerData.length >= 3;

  if (isLoading) {
    return <BannerSkeleton />;
  }

  if (bannerData.length === 0) {
    return (
      <div className="w-full mx-auto my-10 text-center py-20 bg-gray-800 rounded-xl">
        <p className="text-xl text-gray-400">
          No recent products available for the banner.
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full mx-auto rounded-xl overflow-hidden my-10">
      {shouldLoop && (
        <>
          <div className="swiper-button-prev custom-prev"></div>
          <div className="swiper-button-next custom-next"></div>
        </>
      )}

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={
          shouldLoop ? { delay: 2000, disableOnInteraction: false } : false
        }
        navigation={
          shouldLoop
            ? { nextEl: ".custom-next", prevEl: ".custom-prev" }
            : false
        }
        pagination={{ clickable: true }}
        loop={shouldLoop}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
      >
        {bannerData.map((data) => (
          <SwiperSlide key={data._id}>
            <div className="relative w-full h-[350px] md:h-[500px]">
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-white text-2xl md:text-4xl font-bold drop-shadow-lg">
                  {data.title}
                </h2>

                <p className="text-white/80 textlg md:text-lg font-medium mt-3 drop-shadow">
                  {data.price} (BDT)
                </p>

                <p className="text-white/80 text-sm md:text-lg font-medium mt-3 drop-shadow">
                  {data.shortDescription}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
