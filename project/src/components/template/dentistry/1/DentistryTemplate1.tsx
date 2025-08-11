"use client";

import { mixinContainer } from "@/styles/mixins";
import { Stack, styled } from "@mui/material";
import React from "react";
import HeroSection from "./section/HeroSection";
import ServiceSection from "./section/ServiceSection";
import EquipmentSection from "./section/EquipmentSection";
import AboutSection from "./section/AboutSection";
import {
  ChatBubbleOutlineRounded,
  FavoriteBorderOutlined,
  HeadsetMicOutlined,
  HistoryEduRounded,
  ImageOutlined,
  Instagram,
  MapOutlined,
  NavigationOutlined,
  PrecisionManufacturingOutlined,
  RateReviewOutlined,
  VerifiedOutlined,
} from "@mui/icons-material";
import ProfileSection from "./section/ProfileSection";
import ReviewSection from "./section/ReviewSection";
import CommonGoToBar from "@/components/common/navigation/CommonGoToBar";
import { useDeviceType } from "@/hooks/useDeviceType";
import BusinessHoursSection from "./section/BusinessHoursSection";
import FAQSection from "./section/FAQSection";
import QuickLinkSection from "./section/QuickLinkSection";

type PropsType = {
  title: string;
  subTitle: string;
};

const DentistryTemplate1 = ({ title, subTitle }: PropsType) => {
  const { isMobile } = useDeviceType();

  return (
    <Container>
      {/* 바로가기 사이드바 */}
      <CommonGoToBar
        menus={[
          {
            type: "kakao-talk",
            onClick: () => {
              window.open("https://pf.kakao.com/_xgyIxlT", "_blank");
            },
          },

          {
            type: "instagram",
            onClick: () => {
              window.open("https://www.instagram.com/kssdentalclinic/", "_blank");
            },
          },
          {
            type: "naver-blog",
            onClick: () => {
              window.open("https://blog.naver.com/dentkim86", "_blank");
            },
          },
          {
            type: "contact",
            onClick: () => {
              if (isMobile) {
                window.open("tel:0507-1446-2081", "_blank");
              } else {
                window.open("https://naver.me/502jSHj5", "_blank");
              }
            },
          },
          {
            type: "location",
            onClick: () => {
              window.open("https://naver.me/xCtrNIDW", "_blank");
            },
          },
        ]}
      />

      {/* 히어로 섹션 */}
      <HeroSection
        title={title}
        subTitle={subTitle}
        CTAClick={{
          desktop: () => {
            window.open(`https://pf.kakao.com/_xgyIxlT`, "_blank");
          },
          mobile: () => {
            window.open(`tel:0507-1446-2081`, "_blank");
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

      {/* 리뷰 섹션 */}
      <ReviewSection
        reviews={[
          {
            type: "naver",
            nickName: "예****",
            reviewText:
              "지인 추천으로 간 치과였는데, 스케일링이랑 사랑니 발치 치료 잘 받았습니당！ 친절하게 해주셔서 다음에도 여기 방문할 것 같아요😀",
            tags: ["친절", "청결", "치료"],
            link: "https://naver.me/F4LXuSLA",
          },

          {
            type: "kakao",
            nickName: "ㄱ****",
            reviewText: "가장 제대로 하고 가장 친절한 병원.",
            tags: ["친절", "진심", "정직"],
            link: "https://place.map.kakao.com/1126433156#review",
          },
          {
            type: "naver",
            nickName: "마****",
            reviewText:
              "이제껏 다닌 병원 중 선생님 실력이 최고에요 지인들한테도 엄청 소개 많이 하는 믿고 맡길수 있는 병원입니다",
            tags: ["실력", "친절", "청결"],
            link: "https://naver.me/F4LXuSLA",
          },
          {
            type: "kakao",
            nickName: ".****",
            reviewText:
              "원장님부터 치위생사 선생님들 데스크 선생님들 전문성과 친절함이 넘 최고십니당 ㅠㅠㅠ 스케일링도 너~무 친절하고 제 치아 특성상 주의해야 하는 관리법도 이렇게 상세하게 알려주신 병원은 여기가 첨이에요 ㅠ 과잉진료도 절대 안하시구 최대한 살릴 수 있는 치아는 어떻게 살리면 되는지 알려주십니당 자발적으로 병원 리뷰 잘 안적는데 넘 감동해서 적구 갑니당 ㅎㅎ 넘 인기많아지셔서 대기 많아지는건 싫지만.. ㅋㅋ",
            tags: ["친절", "스케일링", "통증"],
            link: "https://place.map.kakao.com/1126433156#review",
          },

          {
            type: "naver",
            nickName: "그****",
            reviewText:
              "이빨 빼는데 하나도 안아프고 좋았어요 !! 간호사님 이쁘고 친절하고 착하십니다 엄청두려웠는데 이젠 후련합니다!!",
            tags: ["친절", "간호사", "후련함"],
            link: "https://naver.me/F4LXuSLA",
          },
          {
            type: "kakao",
            nickName: "S****",
            reviewText:
              "평택에서 제가 사랑니 통증 치료 및 발치때문에 왠만한데 다 돌아다녀보고 견적보고 상태 엑스레이등등으로 확인했을때는 여기 좋을까 싶었는데 직접 받아보세요, 의사선생님 스킬 g립니다... (상스럽지만 진심) 아래 사랑니 모두발치했는데 통증없고 다른데서는 많이썩었다고 잇몸절개 각오하셔야할듯 모 이렇게 말했어서 진심 쫄아있었는데 마취경과 10분도 안되서 깔끔하게 뿌리까지 양쪽 모두 뽑아주심.... 서비스로 스케일링 등 기본적인거 진행해주시고...이후 통증도 없고 치과는 이제 가족대리고 여기만 올예정... 왠만하면 리뷰안남기는데 ... 최곱니다.갑작스런 예약시간 변경도 다 이해주시고 ...(고통이 어떨지아시니 도와주신듯??) 굿입니다...주차는 길목이 협소하나 자리는 늘 있더라구요... 너무 큰차는 들어오지 마시고 근처에 대셔야할듯?",
            tags: ["친절", "발치", "통증"],
            link: "https://place.map.kakao.com/1126433156#review",
          },

          {
            type: "naver",
            nickName: "닺****",
            reviewText:
              "치과 여기저기 다 다녀봤는데 요기만큼 친절하시고 안아프게 해주시는 곳 없어용ㅋ_ㅋ 치과 너무 무서워 하는데 가본 곳 중에서는 여기가 체고에여 오느른 스켈링 하고 가는데 또 1년 후에 방문할게용 최고 최고👍🏻",
            tags: ["친절", "스케일링", "후련함"],
            link: "https://naver.me/F4LXuSLA",
          },
          {
            type: "kakao",
            nickName: "지****",
            reviewText: "최고에요!",
            tags: ["친절", "최고", "정직"],
            link: "https://place.map.kakao.com/1126433156#review",
          },
          {
            type: "naver",
            nickName: "초****",
            reviewText:
              "치과는 여기로 다닙니다. 곧 임플란트 예정이구요 치위생사분들 스케일링도 안아프고 깔끔하게 해주셔요. 오늘은 임플란트 수술전에 상담해주신 하유진선생님이 너무 친절하셔서 리뷰남겨요 궁금한게 많았는데 알아듣기 쉽게 딱 설명해주셔서 이해가 금방됬습니다. 원장님은 워낙 잘하셔서 말할 필요두없구요. 치과 잘해요 리뷰보시는분들 여기 가세요 내돈내산 찐 리뷰에용!!",
            tags: ["친절", "임플란트", "내돈내산"],
            link: "https://naver.me/F4LXuSLA",
          },
        ]}
      />

      {/* 영업시간 섹션 */}
      <BusinessHoursSection
        businessHours={[
          {
            day: "월, 수, 금",
            time: "09:00 - 19:00",
          },
          {
            day: "화, 목",
            time: "09:00 - 20:00",
          },
          {
            day: "토",
            time: "09:00 - 14:00",
          },
          {
            day: "공휴일",
            time: "09:00 - 16:00",
          },
          {
            day: "점심시간",
            time: "12:00 - 14:00",
          },
        ]}
      />

      {/* 자주 묻는 질문 */}
      <FAQSection />

      {/* 퀵링크 섹션 */}
      <QuickLinkSection
        items={[
          {
            title: "문의하기",
            icon: <HeadsetMicOutlined />,
            onClick: () => {
              if (isMobile) {
                window.open(`tel:0507-1446-2081`, "_blank");
              } else {
                window.open(`https://pf.kakao.com/_xgyIxlT`, "_blank");
              }
            },
          },
          {
            title: "카카오톡",
            icon: <ChatBubbleOutlineRounded />,
            onClick: () => {
              window.open("https://pf.kakao.com/_xgyIxlT", "_blank");
            },
          },
          {
            title: "인스타그램",
            icon: <Instagram />,
            onClick: () => {
              window.open("https://www.instagram.com/kssdentalclinic/", "_blank");
            },
          },
          {
            title: "네이버 블로그",
            icon: <HistoryEduRounded />,
            onClick: () => {
              window.open("https://blog.naver.com/dentkim86", "_blank");
            },
          },
          {
            title: "리뷰",
            icon: <RateReviewOutlined />,
            onClick: () => {
              window.open("https://naver.me/F4LXuSLA", "_blank");
            },
          },
          {
            title: "사진",
            icon: <ImageOutlined />,
            onClick: () => {
              window.open("https://naver.me/5V8TXT6L", "_blank");
            },
          },
          {
            title: "위치",
            icon: <MapOutlined />,
            onClick: () => {
              window.open("https://naver.me/xCtrNIDW", "_blank");
            },
          },
          {
            title: "길찾기",
            icon: <NavigationOutlined />,
            onClick: () => {
              window.open("https://naver.me/xCtrNIDW", "_blank");
            },
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
  padding-bottom: 120px;
`;
