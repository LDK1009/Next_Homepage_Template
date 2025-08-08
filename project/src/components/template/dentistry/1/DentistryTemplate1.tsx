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
      <ServiceSection />
    </Container>
  );
};

export default DentistryTemplate1;

const Container = styled(Stack)`
  ${mixinContainer}
`;
