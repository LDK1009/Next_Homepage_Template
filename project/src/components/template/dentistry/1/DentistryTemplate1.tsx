"use client";

import { mixinContainer } from "@/styles/mixins";
import { Stack, styled } from "@mui/material";
import React from "react";
import HeroSection, { HeroSectionPropsType } from "./section/HeroSection";
import ServiceSection, { ServiceSectionPropsType } from "./section/ServiceSection";
import EquipmentSection, { EquipmentSectionPropsType } from "./section/EquipmentSection";
import AboutSection, { AboutSectionPropsType } from "./section/AboutSection";
import ProfileSection, { ProfileSectionPropsType } from "./section/ProfileSection";
import ReviewSection, { ReviewSectionPropsType } from "./section/ReviewSection";
import CommonGoToBar, { CommonGoToBarPropsType } from "@/components/common/navigation/CommonGoToBar";
import BusinessHoursSection, { BusinessHoursSectionPropsType } from "./section/BusinessHoursSection";
import FAQSection, { FAQSectionPropsType } from "./section/FAQSection";
import QuickLinkSection, { QuickLinkSectionPropsType } from "./section/QuickLinkSection";

export type DentistryTemplate1PropsType = {
  sideBar: CommonGoToBarPropsType;
  hero: HeroSectionPropsType;
  about: AboutSectionPropsType;
  profile: ProfileSectionPropsType;
  service: ServiceSectionPropsType;
  equipment: EquipmentSectionPropsType;
  review: ReviewSectionPropsType;
  businessHours: BusinessHoursSectionPropsType;
  FAQ: FAQSectionPropsType;
  quickLink: QuickLinkSectionPropsType;
};

const DentistryTemplate1 = ({
  sideBar,
  hero,
  about,
  profile,
  service,
  equipment,
  review,
  businessHours,
  FAQ,
  quickLink,
}: DentistryTemplate1PropsType) => {
  return (
    <Container>
      {/* 바로가기 사이드바 */}
      <CommonGoToBar
        menus={sideBar.menus}
      />

      {/* 히어로 섹션 */}
      <HeroSection
        title={hero.title}
        subTitle={hero.subTitle}
        CTAClick={hero.CTAClick}
      />

      {/* 소개 섹션 */}
      <AboutSection
        title={about.title}
        description={about.description}
        tags={about.tags}
      />

      {/* 의료진 소개 섹션 */}
      <ProfileSection
        name={profile.name}
        philosophy={profile.philosophy}
        jobs={profile.jobs}
      />

      {/* 진료과목 섹션 */}
      <ServiceSection
        services={service.services}
      />

      {/* 장비 섹션 */}
      <EquipmentSection
        equipments={equipment.equipments}
      />

      {/* 리뷰 섹션 */}
      <ReviewSection
        reviews={review.reviews}
      />

      {/* 영업시간 섹션 */}
      <BusinessHoursSection
        businessHours={businessHours.businessHours}
      />

      {/* 자주 묻는 질문 */}
      <FAQSection
        FAQItems={FAQ.FAQItems}
      />

      {/* 퀵링크 섹션 */}
      <QuickLinkSection
        items={quickLink.items}
      />
    </Container>
  );
};

export default DentistryTemplate1;

const Container = styled(Stack)`
  ${mixinContainer}
  row-gap: 120px;
  padding-bottom: 120px;
`;
