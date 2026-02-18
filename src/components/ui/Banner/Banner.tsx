import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.scss';

export const Banner = () => {
  return (
    <div className="banner">
      <button className="banner__arrow banner__arrow--prev swiper-btn-prev">
        {'<'}
      </button>

      <div className="banner__slider">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          speed={800}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            el: '.banner__pagination',
          }}
          navigation={{
            prevEl: '.swiper-btn-prev',
            nextEl: '.swiper-btn-next',
          }}
        >
          <SwiperSlide>
            <picture>
              <source
                media="(max-width: 639px)"
                srcSet="img/image-s-logo-x2.png"
              />
              <img
                src="img/main-banner.png"
                alt="iPhone 14 Pro"
                className="banner__image"
              />
            </picture>
          </SwiperSlide>

          <SwiperSlide>
            <picture>
              <source
                media="(max-width: 639px)"
                srcSet="img/image 16.png"
              />
              <img
                src="img/banner-phones.png"
                alt="Phones"
                className="banner__image"
              />
            </picture>
          </SwiperSlide>

          <SwiperSlide>
            <picture>
              <source
                media="(max-width: 639px)"
                srcSet="img/banner-accessories.png"
              />
              <img
                src="img/banner-accessories.png"
                alt="Accessories"
                className="banner__image"
              />
            </picture>
          </SwiperSlide>
        </Swiper>
      </div>

      <button className="banner__arrow banner__arrow--next swiper-btn-next">
        {'>'}
      </button>

      <div className="banner__pagination" />
    </div>
  );
};
