import { styled, keyframes } from "@mui/material/styles";
import BackgroundPokeball from "../../../assets/background-pokeball.svg";

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const diagonalAnimation = keyframes`
  0% {
    transform: translate(1000px, -750px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const scaleAnimation = keyframes`
  from {
    transform: translate(-750px, 50px);
  }
  to {
    transform: translate(0);
  }
`;

const moveForever = keyframes`
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
`;

export const StyledGlobalContainer = styled("main")({
  overflow: "hidden",
  background: "linear-gradient(180deg, #EE8328 0%, #E14318 100%)",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
});

export const ContainerHeader = styled("div")({
  paddingTop: "1.5rem",
  maxWidth: "76rem",
  width: "100%",
  margin: "0 auto",
  "@media (max-width: 768px)": {
    paddingTop: "0.5rem",
  },
});

export const HeaderContent = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "@media (max-width: 768px)": {
    padding: "0 0.5rem",
  },
});

export const LinkDocumentation = styled("a")({
  color: "white",
  fontSize: "18px",
  fontWeight: "bold",
});

export const ContainerHero = styled("div")({
  position: "relative",
  marginTop: "4.5rem",
  "&::before, &::after": {
    content: "''",
    background: `url(${BackgroundPokeball}) no-repeat`,
    width: "25rem",
    height: "25rem",
    backgroundSize: "cover",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
  },
  "&::before": {
    left: "-12.5rem",
  },
  "&::after": {
    right: "-12.5rem",
  },
  "@media (max-width: 500px)": {
    "&::before, &::after": {
      display: "none",
    },
  },
});

export const Heroes = styled("div")({
  display: "flex",
  justifyContent: "center",
  "> div": {
    display: "flex",
    justifyContent: "center",
  },
  "@media (max-width: 768px)": {
    flexDirection: "column-reverse",
  },
});

export const ImgBigHero = styled("img")({
  maxWidth: "488px",
  maxHeight: "528px",
  transition: "transform 0.3s",
  zIndex: 2,
  animation: `${float} 5s 2s ease-in-out infinite, ${diagonalAnimation} 2s`,
  "@media (max-width: 768px)": {
    maxHeight: "250px",
    maxWidth: "250px",
    placeSelf: "center",
  },
});

export const ImgHero = styled("img")({
  maxHeight: "300px",
  maxWidth: "100%",
  transition: "0.3s",
  zIndex: 2,
  "@media (max-width: 768px)": {
    maxHeight: "200px",
  },
});

export const ImgSmallHero = styled("img")({
  maxHeight: "300px",
  maxWidth: "100%",
  transition: "0.3s",
  zIndex: 2,
  animation: `${scaleAnimation} 2s`,
  "@media (max-width: 768px)": {
    maxHeight: "175px",
  },
});

export const Waves = styled("div")({
  marginBottom: "8rem",
  ".waves": {
    width: "100%",
    height: "7.5rem",
    marginBottom: "-0.44rem",
    minHeight: "7.5rem",
    maxHeight: "7.5rem",
    position: "absolute",
    bottom: 0,
  },
  ".parallax > use": {
    animation: `${moveForever} 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite`,
  },
  ".parallax > use:nth-child(1)": {
    animationDelay: "-2s",
    animationDuration: "7s",
  },
  ".parallax > use:nth-child(2)": {
    animationDelay: "-3s",
    animationDuration: "10s",
  },
  ".parallax > use:nth-child(3)": {
    animationDelay: "-4s",
    animationDuration: "13s",
  },
  ".parallax > use:nth-child(4)": {
    animationDelay: "-5s",
    animationDuration: "20s",
  },
  "@media (max-width: 500px)": {
    ".waves": {
      height: "2.5rem",
      minHeight: "2.5rem",
    },
    marginBottom: "4rem",
  },
});
