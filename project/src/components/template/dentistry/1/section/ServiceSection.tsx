import CommonImage from "@/components/common/display/image/CommonImage";
import { useDeviceType } from "@/hooks/useDeviceType";
import { mixinFlex } from "@/styles/mixins";
import { alpha, Grid2, Stack, styled, Typography } from "@mui/material";
import { motion, useInView } from "motion/react";
import React, { useRef } from "react";

type PropsType = {
  services: {
    serviceName: string;
    serviceImage: string;
    serviceDescription: string;
  }[];
};
const ServiceSection = ({ services }: PropsType) => {
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef);

  const { isMobile } = useDeviceType();
  return (
    <Container>
      <SectionName
        sx={{
          fontSize: isMobile ? "32px" : "64px",
        }}
      >
        진료과목
      </SectionName>

      <ServiceCards ref={inViewRef} container spacing={isMobile ? 2 : 4}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            serviceName={service.serviceName}
            serviceImage={service.serviceImage}
            serviceDescription={service.serviceDescription}
            index={index}
            isInView={isInView}
          />
        ))}
      </ServiceCards>
    </Container>
  );
};

export default ServiceSection;

const Container = styled(Stack)`
  ${mixinFlex("column", "center", "center")}
  row-gap: 40px;
  padding: 0px 24px;
`;

const SectionName = styled(Typography)`
  font-weight: bold;
  color: ${({ theme }) => theme.palette.text.primary};
`;

const ServiceCards = styled(Grid2)``;

type ServiceCardPropsType = {
  serviceName: string;
  serviceImage: string;
  serviceDescription: string;
  index: number;
  isInView: boolean;
};

const ServiceCard = ({ serviceName, serviceImage, serviceDescription, index, isInView }: ServiceCardPropsType) => {
  const { isMobile } = useDeviceType();

  return (
    <ServiceCardContainer
      size={isMobile ? 6 : 3}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView && { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <CommonImage src={serviceImage} alt={serviceName} width="100%" height="100%" />
      <ServiceTextContainer>
        <ServiceName sx={{ fontSize: isMobile ? "16px" : "24px" }}>{serviceName}</ServiceName>
        <ServiceDescription sx={{ fontSize: isMobile ? "12px" : "16px" }}>{serviceDescription}</ServiceDescription>
      </ServiceTextContainer>
    </ServiceCardContainer>
  );
};

const ServiceCardContainer = styled(motion(Grid2))`
  ${mixinFlex("column", "center", "center")}
  box-shadow: 0px 0px 16px 0px ${({ theme }) => alpha(theme.palette.secondary.main, 0.6)};
  border-radius: 16px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.background.paper};
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 16px 0px ${({ theme }) => alpha(theme.palette.secondary.main, 0.8)};
    background-color: ${({ theme }) => theme.palette.secondary.light};
    transform: scale(1.05) !important;
    transition: all 0.3s ease;
  }
`;

const ServiceTextContainer = styled(Stack)`
  width: 100%;
  ${mixinFlex("column", "start", "start")}
  padding: 16px;
  border-top: 2px solid ${({ theme }) => theme.palette.secondary.light};
`;

const ServiceName = styled(Typography)`
  width: 100%;
  text-align: left;
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: bold;
`;

const ServiceDescription = styled(Typography)`
  width: 100%;
  ${mixinFlex("column", "center", "center")}
  color: ${({ theme }) => theme.palette.text.secondary};
  font-weight: bold;
`;
