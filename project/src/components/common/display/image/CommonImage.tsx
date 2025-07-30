import { styled } from "@mui/material";
import React from "react";

type ImageType =
  | "presentation"
  | "cardNews"
  | "webPosterX"
  | "webPosterY"
  | "socialSquare"
  | "detailPage"
  | "infoGraphicX"
  | "infoGraphicY"
  | "webBannerX"
  | "webBannerY"
  | "logo"
  | "businessCardX"
  | "businessCardY"
  | "fancyBannerRectangle"
  | "fancyBannerSquare"
  | "bookCover"
  | "eventPopup";

type PropsType = {
  type: ImageType;
  src: string;
  alt: string;
};

const CommonImage = ({ type, src, alt }: PropsType) => {
  const aspectRatioMap = {
    presentation: "1920/1080",
    cardNews: "1080/1080",
    webPosterX: "1260/891",
    webPosterY: "891/1260",
    socialSquare: "1080/1080",
    detailPage: "860/1100",
    infoGraphicX: "1920/1080",
    infoGraphicY: "800/2000",
    webBannerX: "2000/360",
    webBannerY: "400/1200",
    logo: "500/500",
    businessCardX: "940/540",
    businessCardY: "540/940",
    fancyBannerRectangle: "900/550",
    fancyBannerSquare: "800/800",
    bookCover: "891/1260",
    eventPopup: "500/700",
  };

  return <Container src={src} alt={alt} style={{ aspectRatio: aspectRatioMap[type] }} />;
};

export default CommonImage;

const Container = styled("img")`
  width: 100%;
  max-width: 100%;
`;
