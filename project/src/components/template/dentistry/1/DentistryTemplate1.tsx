"use client";

import { mixinContainer } from "@/styles/mixins";
import { Stack, styled } from "@mui/material";
import React from "react";
import HeroSection from "./section/HeroSection";
import ServiceSection from "./section/ServiceSection";
import EquipmentSection from "./section/EquipmentSection";
import AboutSection from "./section/AboutSection";
import { FavoriteBorderOutlined, PrecisionManufacturingOutlined, VerifiedOutlined } from "@mui/icons-material";
import ProfileSection from "./section/ProfileSection";

type PropsType = {
  title: string;
  subTitle: string;
};

const DentistryTemplate1 = ({ title, subTitle }: PropsType) => {
  return (
    <Container>
      {/* 히어로 섹션 */}
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

      {/* 소개 섹션 */}
      <AboutSection
        title="환자의 건강과 미소를 지키는 치과"
        description={
          "김성수 치과는 환자 한 분 한 분의 이야기에 귀 기울이며,\n<b>맞춤형 진료</b>와 <b>최신 장비</b>로 <b>최상의 치료</b>를 제공합니다.\n<b>1인 전담 진료</b>로 처음 상담부터 시술, 사후 관리까지 책임집니다.\n불필요한 치료를 권하지 않으며, <b>정직하고 투명한 진료</b>를 약속드립니다."
        }
        tags={[
          {
            icon: <VerifiedOutlined />,
            text: "정직한 진료",
          },
          {
            icon: <PrecisionManufacturingOutlined />,
            text: "첨단 장비",
          },
          {
            icon: <FavoriteBorderOutlined />,
            text: "환자 중심",
          },
        ]}
      />

      {/* 의료진 소개 섹션 */}
      <ProfileSection
        name="김성수"
        philosophy="한 치의 타협도 없는 정직한 진료"
        jobs={[
          "서울대학교 치과대학 졸업",
          "서울대치과병원 교정과 인턴·레지던트 수료",
          "한림대학교 치과병원 임플란트센터 임상교수",
          "전) 스마일케어치과 대표원장",
          "대한치과보철학회(KAP) 정회원",
          "대한구강악안면임플란트학회(KAOMI) 정회원",
          "세계치과연맹(FDI) 정회원",
          "미국치과의사협회(ADA) 국제회원",
          "Fellow of International Congress of Oral Implantologists (ICOI)",
          "2023 아시아임플란트학회 발표 연자",
        ]}
      />

      {/* 진료과목 섹션 */}
      <ServiceSection
        services={[
          {
            serviceName: "임플란트",
            serviceImage: "/img/dentistry/service/dental-implant.png",
            serviceDescription: "상실된 치아를 자연스럽게 대체하는 인공치아 시술",
          },
          {
            serviceName: "틀니",
            serviceImage: "/img/dentistry/service/dentures.png",
            serviceDescription: "여러 개 치아를 한 번에 보충하는 맞춤형 보철",
          },
          {
            serviceName: "치아성형",
            serviceImage: "/img/dentistry/service/cosmetic-dentistry.png",
            serviceDescription: "치아 모양·길이·간격을 개선해 미소를 아름답게",
          },
          {
            serviceName: "치아미백",
            serviceImage: "/img/dentistry/service/teeth-whitening.png",
            serviceDescription: "전문 장비로 안전하고 빠르게 치아를 밝게",
          },
          {
            serviceName: "신경치료",
            serviceImage: "/img/dentistry/service/root-canal-treatment.png",
            serviceDescription: "손상된 치아 내부 신경을 치료해 기능을 회복",
          },
          {
            serviceName: "보철치료",
            serviceImage: "/img/dentistry/service/dental-crown.png",
            serviceDescription: "손상된 치아를 덮어 보호하는 크라운·브릿지 시술",
          },
          {
            serviceName: "사랑니발치",
            serviceImage: "/img/dentistry/service/wisdom-tooth-extraction.png",
            serviceDescription: "잇몸 속 깊은 사랑니를 안전하게 제거",
          },
          {
            serviceName: "보톡스",
            serviceImage: "/img/dentistry/service/botox-injection.png",
            serviceDescription: "근육 이완으로 이갈이·턱관절 통증 완화",
          },
        ]}
      />

      {/* 장비 섹션 */}
      <EquipmentSection
        equipments={[
          {
            imgSrc: "/img/dentistry/equipment/ct.png",
            equipmentName: "디지털 3D CT",
            equipmentDescription: "고해상도 촬영으로 치조골·신경 위치를 정밀 파악해 안전한 치료 계획을 제공합니다.",
          },
          {
            imgSrc: "/img/dentistry/equipment/scanner.png",
            equipmentName: "구강 스캐너",
            equipmentDescription: "광학 스캔으로 빠르고 정확한 본뜨기, 맞춤형 보철물 제작에 최적화되어 있습니다.",
          },
          {
            imgSrc: "/img/dentistry/equipment/laser.png",
            equipmentName: "고출력 레이저",
            equipmentDescription: "출혈과 통증을 줄이고 회복을 앞당기는 연조직·치주 치료에 활용됩니다.",
          },
          {
            imgSrc: "/img/dentistry/equipment/injector.png",
            equipmentName: "무통 주사기",
            equipmentDescription: "마취 약물 주입 속도를 정밀 제어해 통증과 불편감을 최소화합니다.",
          },
          {
            imgSrc: "/img/dentistry/equipment/sterilizer.png",
            equipmentName: "고압증기 멸균기",
            equipmentDescription: "고온·고압 멸균으로 교차감염을 예방하며 1회용 소모품 사용 원칙을 준수합니다.",
          },
          {
            imgSrc: "/img/dentistry/equipment/xray.png",
            equipmentName: "디지털 X-ray",
            equipmentDescription: "저선량으로 선명한 영상을 제공해 진단 정확도를 높이고 방사선 노출을 최소화합니다.",
          },
        ]}
      />
    </Container>
  );
};

export default DentistryTemplate1;

const Container = styled(Stack)`
  ${mixinContainer}
  row-gap: 120px;
`;
