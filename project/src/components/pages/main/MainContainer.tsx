"use client";

import { mixinContainer } from "@/styles/mixins";
import { Stack, styled } from "@mui/material";
import { ReviewType } from "@/components/common/display/review/ReviewCard";
import ReviewCardSwiper from "@/components/common/display/review/ReviewCardSwiper";

const MainContainer = () => {
  const reviews: ReviewType[] = [
    {
      type: "kakao",
      nickName: "m****",
      reviewText: "치통으로 방문했는데 친절하고 적절하게 치료를했어요 너무감사해요 매번 찾게되네요~",
      tags: ["친절함", "치료효과", "재방문"],
      link: "https://place.map.kakao.com/1126433156#review",
    },
    {
      type: "naver",
      nickName: "a****",
      reviewText:
        "김성수 치과를 다닌지 3년이 넘은것같은데 너무잘 선택한것같아요!! 이번에는 깨진이때문에 신경치료하고 본뜨기까지 했는데 한시간이넘는 시간동안 선생님들 모두 너무 친절하시고 꼭 너무 감사하다고 말씀드리고싶었는데 리뷰를 쓰게되네요!! 갈때마다 너무 친절하시고 긴장이 너무 되는 치과치료임에도 항상 마음이 좋아요! 감사합니다!! 어려운 치료도 너무 잘해주시는것같습니다! 다음주에 또 뵈어요~ ",
      tags: ["장기고객", "신경치료", "친절함"],
      link: "https://naver.me/F4LXuSLA",
    },
    {
      type: "etc",
      nickName: "보****",
      reviewText:
        "저만 알고 싶은 치과입니다ㅎㅎ 진료도 잘 봐주시고 원장님 그리고 선생님들 다 모두 너무너무너무 친절하세요 !! 멀리 이사가더라도 저는 아마 여기로 와서 치료 받을거 같아요 ~ 감사합니다:)",
      tags: ["진료퀄리티", "친절함", "추천의료"],
    },
  ];
  
  return (
    <Container>
      <ReviewCardSwiper reviews={reviews} />
    </Container>
  );
};

export default MainContainer;
const Container = styled(Stack)`
  ${mixinContainer}

  height:200vh;
`;

//////////////////////////////////////// Styles ////////////////////////////////////////
