import React from "react";
import ReviewCard from "./ReviewCard";
import { Stack, styled } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

type PropsType = {
  reviews: {
    type: "kakao" | "naver" | "etc";
    nickName: string;
    reviewText: string;
    tags: string[];
    link?: string;
  }[];
};

const ReviewCardSwiper = ({ reviews }: PropsType) => {
  return (
    <Container>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.75}
      >
        {reviews.map((review, index) => (
          <StyledSwiperSlide key={`review-${index}`}>
            <ReviewCard {...review} />
          </StyledSwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default ReviewCardSwiper;

const Container = styled(Stack)`
  width: 100%;

  .swiper {
    width: 100%;
    height: 100%;
    padding: 16px 0;
  }

  .swiper-slide {
    transition: all 0.3s ease;
  }

  .swiper-slide-active {
    transform: scale(1) !important;
    z-index: 10;
  }

  .swiper-slide-prev,
  .swiper-slide-next {
    transform: scale(0.9) !important;
    opacity: 0.7;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)``;
