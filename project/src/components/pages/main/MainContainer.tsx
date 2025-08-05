"use client";

import { mixinContainer } from "@/styles/mixins";
import { Stack, styled } from "@mui/material";
import CommonHeader from "@/components/common/navigation/CommonHeader";
import { CottageOutlined, LocalHospitalOutlined } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const MainContainer = () => {
  const router = useRouter();
  return (
    <Container>
      <CommonHeader
        menuList={[
          {
            title: "홈",
            icon: <CottageOutlined />,
            onClick: () => {
              router.push("/");
            },
          },
          {
            title: "메뉴1",
            icon: <LocalHospitalOutlined />,
            onClick: () => {
              router.push("/");
            },
          },
          {
            title: "메뉴2",
            icon: <LocalHospitalOutlined />,
            onClick: () => {
              router.push("/");
            },
          },
        ]}
      />
    </Container>
  );
};

export default MainContainer;
const Container = styled(Stack)`
  ${mixinContainer}

  height:200vh;
`;

//////////////////////////////////////// Styles ////////////////////////////////////////
