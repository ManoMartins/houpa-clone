import { Box, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css'

export default function Banners() {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      spaceBetween={0}
      autoplay={true}
      speed={1000}
    >
      <SwiperSlide>
        <Box w="100%">
          <Image w="100%" src="https://mkt-assets.houpa.app/banners/b2c/super_banners/banner-desk_flow_novidades-da-estacao.jpg" />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box w="100%">
          <Image w="100%" src="https://mkt-assets.houpa.app/banners/b2c/super_banners/banner-desk_estilo-louzeiro_colecao-de-inverno.jpg" />
        </Box>
      </SwiperSlide>
    </Swiper>
  );
}
