"use client";

import { mixinContainer } from "@/styles/mixins";
import { Stack, styled } from "@mui/material";
import React from "react";
import HeroSection from "./section/HeroSection";
import ServiceSection from "./section/ServiceSection";

type PropsType = {
  title: string;
  subTitle: string;
};

const DentistryTemplate1 = ({ title, subTitle }: PropsType) => {
  return (
    <Container>
      <HeroSection
        title={title}
        subTitle={subTitle}
        CTAClick={{
          desktop: () => {
            window.open(`https://pf.kakao.com/_xgyIxlT`, "_blank");
          },
          mobile: () => {
            window.open(`https://pf.kakao.com/_xgyIxlT`, "_blank");
          },
        }}
      />
      <ServiceSection
        services={[
          {
            serviceName: "임플란트",
            serviceImage: "/img/dentistry/service/dental-implant.png",
          },
          {
            serviceName: "틀니",
            serviceImage: "/img/dentistry/service/dentures.png",
          },
          {
            serviceName: "치아성형",
            serviceImage: "/img/dentistry/service/cosmetic-dentistry.png",
          },
          {
            serviceName: "치아미백",
            serviceImage: "/img/dentistry/service/teeth-whitening.png",
          },
          {
            serviceName: "신경치료",
            serviceImage: "/img/dentistry/service/root-canal-treatment.png",
          },
          {
            serviceName: "보철치료",
            serviceImage: "/img/dentistry/service/dental-crown.png",
          },
          {
            serviceName: "사랑니발치",
            serviceImage: "/img/dentistry/service/wisdom-tooth-extraction.png",
          },
          {
            serviceName: "보톡스",
            serviceImage: "/img/dentistry/service/botox-injection.png",
          },
        ]}
      />
    </Container>
  );
};

export default DentistryTemplate1;

const Container = styled(Stack)`
  ${mixinContainer}
`;
