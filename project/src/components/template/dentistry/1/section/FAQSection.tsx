import { Stack, styled, Typography } from "@mui/material";
import { useDeviceType } from "@/hooks/useDeviceType";
import { mixinFlex } from "@/styles/mixins";
import React from "react";
import { shouldForwardProp } from "@/utils/mui";
import CommonAccordion from "@/components/common/display/accordion/CommonAccordion";

const FAQSection = () => {
  const { isMobile } = useDeviceType();

  return (
    <Container>
      <SectionName $isMobile={isMobile}>자주 묻는 질문</SectionName>
      <CommonAccordion
        items={[
          {
            title: "진료는 예약제로만 가능한가요?",
            content:
              "네, 원활한 진료 진행을 위해 사전 예약을 권장드립니다. 당일 예약 가능 여부는 전화로 문의해 주세요.",
          },
          {
            title: "주차가 가능한가요?",
            content: "네, 건물 내 주차장이 있으며, 진료 환자분께는 1시간 무료 주차를 제공합니다.",
          },
          {
            title: "건강보험이 적용되나요?",
            content: "일부 진료 항목에 대해 건강보험이 적용됩니다. 시술 전 상세 안내를 드립니다.",
          },
          {
            title: "치아미백 시술 후 주의사항이 있나요?",
            content: "시술 후 24시간 동안은 색이 강한 음식(커피, 와인 등)과 흡연을 피하시는 것이 좋습니다.",
          },
          {
            title: "임플란트 치료 기간은 얼마나 걸리나요?",
            content: "일반적으로 3~6개월이 소요되며, 환자의 구강 상태와 치료 계획에 따라 달라질 수 있습니다.",
          },
          {
            title: "진료 중 통증이 심한가요?",
            content: "최신 무통 마취 장비를 사용하여 통증과 불편감을 최소화합니다.",
          },
          {
            title: "스케일링은 얼마나 자주 받아야 하나요?",
            content: "건강보험 적용 기준은 1년에 1회이며, 구강 상태에 따라 더 자주 받으실 수 있습니다.",
          },
        ]}
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
