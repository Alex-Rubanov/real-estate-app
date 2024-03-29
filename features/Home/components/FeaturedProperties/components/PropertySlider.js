import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { Box } from '@chakra-ui/react';

import PropertyCard from '@/features/common/modules/PropertyCard/PropertyCard';
import { useIdDesktop } from '@/features/common/Hooks/useIsDesktop';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PropertySlider = ({ properties }) => {
  const { isDesktop } = useIdDesktop();

  return (
    <Box padding={isDesktop ? 0 : '0 10px'}>
      <Swiper
        slidesPerView={isDesktop ? 3 : 1}
        initialSlide={isDesktop ? 1 : 0}
        spaceBetween={10}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: true, pauseOnMouseEnter: true }}
        pagination={{ dynamicBullets: true }}
        modules={[Autoplay, Pagination]}
        className="mySwiper">
        {properties.map((property) => (
          <SwiperSlide key={property.id}>
            <PropertyCard property={property} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default PropertySlider;
