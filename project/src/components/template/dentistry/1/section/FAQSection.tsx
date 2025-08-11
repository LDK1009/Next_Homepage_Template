import { Stack, styled, Typography } from "@mui/material";
import { useDeviceType } from "@/hooks/useDeviceType";
import { mixinFlex } from "@/styles/mixins";
import React from "react";
import { shouldForwardProp } from "@/utils/mui";
import CommonAccordion from "@/components/common/display/accordion/CommonAccordion";

export type FAQSectionPropsType = {
  FAQItems: {
    title: string;
    content: string;
  }[];
};

const FAQSection = ({ FAQItems }: FAQSectionPropsType) => {
  const { isMobile } = useDeviceType();

  return (
    <Container>
      <SectionName $isMobile={isMobile}>자주 묻는 질문</SectionName>
      <CommonAccordion
        items={FAQItems}
      />
    </Container>
  );
};

export default FAQSection;

type CommonStyleProps = {
  $isMobile: boolean;
};

const Container = styled(Stack)`
  ${mixinFlex("column", "start", "center")}
  width: 100%;
  row-gap: 40px;
`;

const SectionName = styled(Typography, { shouldForwardProp })<CommonStyleProps>`
  font-weight: bold;
  font-size: ${({ $isMobile }) => ($isMobile ? "32px" : "64px")};
`;
