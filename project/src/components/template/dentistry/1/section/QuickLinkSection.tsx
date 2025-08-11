import { mixinFlex } from "@/styles/mixins";
import { Button, Grid2, Stack, styled, Typography } from "@mui/material";
import React from "react";
import { shouldForwardProp } from "@/utils/mui";
import { useDeviceType } from "@/hooks/useDeviceType";

type PropsType = {
  items: {
    title: string;
    icon: React.ReactNode;
    onClick: () => void;
  }[];
};

const QuickLinkSection = ({ items }: PropsType) => {
  const { isMobile } = useDeviceType();

  return (
    <Container>
      <SectionName $isMobile={isMobile}>퀵링크</SectionName>
      <LinkGrid container spacing={isMobile ? 2 : 4}>
        {items.map((item, index) => (
          <LinkItem key={`${item.title}-${index}`} size={isMobile ? 6 : 3}>
            <LinkButton variant="outlined" onClick={item.onClick} startIcon={item.icon}>
              {item.title}
            </LinkButton>
          </LinkItem>
        ))}
      </LinkGrid>
    </Container>
  );
};

export default QuickLinkSection;

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

const LinkGrid = styled(Grid2)`
  width: 100%;
`;

const LinkItem = styled(Grid2)``;

const LinkButton = styled(Button)`
  width: 100%;
`;
