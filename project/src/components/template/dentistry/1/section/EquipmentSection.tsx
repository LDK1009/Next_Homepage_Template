import CommonImage from "@/components/common/display/image/CommonImage";
import CommonCreativeEffectAccentSwiper from "@/components/common/display/swiper/CommonCreativeEffectAccentSwiper";
import { useDeviceType } from "@/hooks/useDeviceType";
import { mixinFlex } from "@/styles/mixins";
import { alpha, Stack, styled, Typography } from "@mui/material";
import React from "react";
import { SwiperSlide } from "swiper/react";
import { shouldForwardProp } from "@/utils/mui";

export type EquipmentSectionPropsType = {
  equipments: {
    imgSrc: string;
    equipmentName: string;
    equipmentDescription: string;
  }[];
};

const EquipmentSection = ({ equipments }: EquipmentSectionPropsType) => {
  const { isMobile } = useDeviceType();

  return (
    <Container>
      <SectionName
        sx={{
          fontSize: isMobile ? "32px" : "64px",
        }}
      >
        장비 및 시설
      </SectionName>
      <BodyContainer $isMobile={isMobile}>
        <CommonCreativeEffectAccentSwiper autoplay={true}>
          {equipments.map((equipment, index) => (
            <StyledSwiperSlide key={`equipment-${index}`}>
              <ImageContainer>
                <CommonImage src={equipment.imgSrc} alt="equipment" width="100%" height="100%" />
              </ImageContainer>
              <EquipmentInfoContainer>
                <EquipmentName $isMobile={isMobile}>{equipment.equipmentName}</EquipmentName>
                <EquipmentDescription $isMobile={isMobile}>{equipment.equipmentDescription}</EquipmentDescription>
              </EquipmentInfoContainer>
            </StyledSwiperSlide>
          ))}
        </CommonCreativeEffectAccentSwiper>
      </BodyContainer>
    </Container>
  );
};

export default EquipmentSection;

type CommonStyleProps = {
  $isMobile: boolean;
};

const Container = styled(Stack)`
  width: 100%;
  ${mixinFlex("column", "center", "center")}
  row-gap: 40px;
  padding: 0px 24px;
`;

const SectionName = styled(Typography)`
  font-weight: bold;
`;

const BodyContainer = styled(Stack, { shouldForwardProp })<CommonStyleProps>`
  width: ${({ $isMobile }) => ($isMobile ? "100%" : "50%")};
  ${mixinFlex("row", "start", "start")}
  box-shadow: 0px 0px 48px 0px ${({ theme }) => alpha(theme.palette.secondary.main, 0.3)};
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  ${mixinFlex("column", "center", "center")}
  width: 100%;
`;

const ImageContainer = styled(Stack)`
  flex: 1;
`;

const EquipmentInfoContainer = styled(Stack)`
  flex: 1;
  width: 100%;
  padding: 16px;
`;

const EquipmentName = styled(Typography, { shouldForwardProp })<CommonStyleProps>`
  font-weight: bold;
  font-size: ${({ $isMobile }) => ($isMobile ? "16px" : "24px")};
`;

const EquipmentDescription = styled(Typography, { shouldForwardProp })<CommonStyleProps>`
  font-size: ${({ $isMobile }) => ($isMobile ? "12px" : "16px")};
  color: ${({ theme }) => theme.palette.text.secondary};
`;
