'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import LogoCloud from '../logo-cloud'

const images = [
  "./LSS098.png",
  "./LSS013.png",
  "./LSS015.png",
  "./LSS018.png",
  "./LSS020.png",
  "./LSS021.png",
  "./LSS029.png",
  "./LSS032.png",
];

export function Cards() {
    return (
        <section id="cards">
        <LogoCloud />
        <div className="relative mx-auto max-w-6xl mt-10 sm:mt-18">
            <div className="absolute inset-0 -top-8 left-1/2 -z-20 h-56 w-full -translate-x-1/2 [background-image:linear-gradient(to_bottom,transparent_98%,theme(colors.gray.200/75%)_98%),linear-gradient(to_right,transparent_94%,_theme(colors.gray.200/75%)_94%)] [background-size:16px_35px] [mask:radial-gradient(black,transparent_95%)] dark:opacity-10"></div>
            <div className="absolute inset-x-0 top-12 -z-[1] mx-auto h-1/3 w-2/3 rounded-full bg-blue-300 blur-3xl dark:bg-white/20"></div>

            <Swiper
                slidesPerView={5}
                pagination={{ clickable: true }}
                loop
                autoplay={{ delay: 750 }}
                modules={[Autoplay, EffectCoverflow]}>
                {images.map((image) => (
                    <SwiperSlide key={image} className="px-2">
                            <img src={image} alt={image} className="object-cover" />
                        
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
        </section>
    );
}