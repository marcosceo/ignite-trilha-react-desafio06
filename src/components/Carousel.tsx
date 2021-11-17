import { useRouter } from 'next/router'

import { Slide } from '../components/Slide'

import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Box, Container } from '@chakra-ui/layout';

interface Continent {
  id: number
  image: string
  title: string
  description: string
  countries: number
  languages: number
  cities: number
  bio: string
}

interface CarouselProps {
  continents: Continent[]
}

SwiperCore.use([Navigation, Pagination]);

export function Carousel({ continents }: CarouselProps) {
  const router = useRouter()

  return (
    <Container maxW="1200px" h={{base: "375px", xl: "450px"}} mx={{base: "0", xl: "auto"}} mb="100px">
      <Swiper
        style={{width: '100%', height: '100%'}}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="swiper-pagination-bullet swiper-pagination-bullet-active"
            style=background-color:#FFBA08></span>`
          }
        }}
      >

        <Box className="swiper-button-next" mr={{base: "12px", xl: "20px"}} color="highlight.100"></Box>
        <Box className="swiper-button-prev" ml={{base: "12px", xl: "20px"}} color="highlight.100"></Box>

        {continents.map(continent => (
          <SwiperSlide  key={continent.id} onClick={() => router.push(`/continents/${continent.id}`)}><Slide continent={continent} /></SwiperSlide>
        ))}

      </Swiper>
    </Container>
  );
};