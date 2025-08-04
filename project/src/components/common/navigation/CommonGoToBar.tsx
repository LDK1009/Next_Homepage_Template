import { mixinFlex, mixinMuiCircleShapeButton } from "@/styles/mixins";
import {
  ChatBubbleOutlineRounded,
  HeadsetMicOutlined,
  HistoryEduRounded,
  Instagram,
  MapOutlined,
} from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import styled from "@mui/material/styles/styled";
import { useScroll } from "motion/react";
import React, { useEffect, useState } from "react";

type PropsType = {
  menus: MenuType[];
};

type MenuType = {
  type: "contact" | "kakao-talk" | "naver-blog" | "instagram" | "location";
  link: string;
};

const CommonGoToBar = ({ menus }: PropsType) => {
  // 간단한 스크롤 감지
  const { scrollY } = useScroll();
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", () => {
      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 1000 * 1);
    });
    return unsubscribe;
  }, [scrollY]);

  return (
    <Container sx={{ opacity: isScrolling ? 0 : 1 }}>
      {menus.map((menu) => {
        return <GoToButton key={menu.type} {...menu} />;
      })}
    </Container>
  );
};

export default CommonGoToBar;

////////////////////////////////////////////////// 스타일 컴포넌트 //////////////////////////////////////////////////
const Container = styled(Stack)`
  position: fixed;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);

  ${mixinFlex("column", "center", "center")}
  row-gap: 8px;

  padding: 16px 8px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.palette.primary.light};
  backdrop-filter: blur(10px);
  box-shadow: 4px 4px 16px 0 rgba(0, 0, 0, 0.1);

  transition: opacity 0.5s ease-in-out;
`;

////////////////////////////////////////////////// 하위 컴포넌트 //////////////////////////////////////////////////
const GoToButton = ({ type, link }: MenuType) => {
  const typeMap = {
    "kakao-talk": { label: "카카오톡", icon: <ChatBubbleOutlineRounded /> },
    "naver-blog": { label: "블로그", icon: <HistoryEduRounded /> },
    instagram: { label: "인스타그램", icon: <Instagram /> },
    contact: { label: "문의하기", icon: <HeadsetMicOutlined /> },
    location: { label: "오시는길", icon: <MapOutlined /> },
  };

  return (
    <GoToButtonContainer>
      <GoToButtonIcon
        onClick={() => {
          window.open(link, "_blank");
        }}
      >
        {typeMap[type].icon}
      </GoToButtonIcon>
      <Label>{typeMap[type].label}</Label>
    </GoToButtonContainer>
  );
};

const GoToButtonContainer = styled(Stack)`
  ${mixinFlex("column", "center", "center")}
  row-gap: 4px;
`;

const GoToButtonIcon = styled(Button)`
  ${mixinMuiCircleShapeButton(40)}
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
`;

const Label = styled(Typography)`
  font-size: 12px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;
