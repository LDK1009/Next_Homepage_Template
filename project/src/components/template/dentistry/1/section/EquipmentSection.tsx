import CommonImage from "@/components/common/display/image/CommonImage";
import { useDeviceType } from "@/hooks/useDeviceType";
import { mixinFlex } from "@/styles/mixins";
import { Stack, styled, Typography } from "@mui/material";
import React from "react";

const EquipmentSection = () => {
  const { isMobile } = useDeviceType();

  return (
    <Container>
      <SectionName
        sx={{
          fontSize: isMobile ? "32px" : "64px",
        }}
      >
        진료장비
      </SectionName>
      <BodyContainer>
<ImageContainer>
    <CommonImage src={"/img/dentistry/.png"} alt="equipment" width="100%" height="100%" />
</ImageContainer>

      </BodyContainer>
    </Container>
  );
};

export default EquipmentSection;

const Container = styled(Stack)`
  ${mixinFlex("column", "center", "center")}
  row-gap: 40px;
  padding: 0px 24px;
`;

const SectionName = styled(Typography)`
  font-weight: bold;
`;

const BodyContainer = styled(Stack)`
  ${mixinFlex("row", "start", "start")}
`;

const ImageContainer = styled(Stack)`
  flex: 2;
`;
