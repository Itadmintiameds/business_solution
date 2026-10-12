'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const images = [
  { id: 1, src: "/sbplteam/ppa.jpeg", alt: "The Policy Processing team gathered on the sports turf" },
  { id: 2, src: "/sbplteam/sbpl1.JPG", alt: "Sudhanand Business Solutions team celebrating together" },
  { id: 3, src: "/sbplteam/sbpl.JPG", alt: "The whole Sudhanand Business Solutions team on the sports turf" }
]

const AboutImageSection = () => {
  return (
    <div className="mt-20 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
      >
        {images.map(image => (
          <SwiperSlide key={image.id}>
            <img
              src={image.src}
              alt={image.alt}
              width={1500}
              height={600}
              loading="lazy"
              className="aspect-[3/2] sm:aspect-[5/2] w-full object-cover xl:rounded-3xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default AboutImageSection
