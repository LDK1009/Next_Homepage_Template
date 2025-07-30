"use client";

import { mixinContainer } from "@/styles/mixins";
import { Stack, styled } from "@mui/material";
import CommonText from "@/components/common/display/text/CommonText";

const MainContainer = () => {
  return (
    <Container>
      <CommonText variant="h1" color="info" align="left">
        Hello World
      </CommonText>
    </Container>
  );
};

export default MainContainer;

const Container = styled(Stack)`
  ${mixinContainer}
`;

//////////////////////////////////////// Styles ////////////////////////////////////////
