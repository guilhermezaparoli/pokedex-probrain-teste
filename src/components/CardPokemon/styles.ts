import { styled, keyframes } from "@mui/material/styles";
import Popup from "reactjs-popup";

const fadeDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -32px, 0);
  }
  to {
    opacity: initial;
    transform: initial;
  }
`;

interface StyledMainContainerProps {
  modal?: boolean;
}


export const StyledMainContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "modal",
})<StyledMainContainerProps>(() => ({
  width: "24rem",
  maxHeight: "23.5rem",
  animation: `${fadeDown} 0.8s`,
  position: "relative",
  "@media (max-width: 768px)": {
    width: "20rem",
  },
  zIndex: 2

}));


export const Card = styled("div")(({ theme, color }) => ({
  border: `1px solid #24293F`,
  paddingTop: "7rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  borderRadius: "24px",
  position: "relative",
  minHeight: "250px",
  zIndex: -1,
  "&::after": {
    content: "''",
    width: "12.5rem",
    height: "12.5rem",
    backgroundColor: typeof color == "string" ? theme.palette[color].main : "transparent",
    filter: "blur(128px)",
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    transition: "0.8s",
    zIndex: -2,
  },
}));

export const PokemonImage = styled("img")(() => ({
  maxWidth: "16rem",
  maxHeight: "16rem",
  position: "absolute",
  top: "-10.5rem",
  left: "50%",
  transform: "translateX(-50%)",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateX(-50%) scale(1.2)",
  },
}));

export const PokemonId = styled("p")(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "1.25rem",
  fontWeight: 700,
  lineHeight: 1.35,
  margin: "24px 0 4px 0",
}));

export const PokemonName = styled("h1")(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "2rem",
  fontWeight: 700,
  lineHeight: 1.35,
  marginBottom: "12px",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  textAlign: "center",
  width: "100%",
  padding: "0 40px",
}));

export const Type = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const IconTextContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  "> p": {
    fontSize: "1rem",
    fontWeight: 700,
    lineHeight: 1.5,
    color: theme.palette.primary.main,
  },
}));


export const MoreDetails = styled("button")(({ theme, color }) => ({
  width: "100%",
  borderRadius: "0 0 24px 24px",
  padding: "12px 8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: typeof color == "string" ? theme.palette[color].main : "transparent",
  cursor: "pointer",
  marginTop: "40px",
  "> p": {
    color: theme.palette.primary.main,
    fontSize: "1rem",
    fontWeight: 700,
    lineHeight: 1.5,
  },
  transition: "0.3s",
  "&:hover": {
    filter: "brightness(0.7)",
  },
}));

export const Dialog = styled("div")(() => ({
  width: "100%",
  margin: "14rem 0 7rem",
  backgroundColor: "#24293F",
  borderRadius: "24px",
}));

export const StyledPopup = styled(Popup)`
  &-overlay {
    background: rgba(0, 0, 0, 0.85);

  }

  @media (max-width: 768px) {
    &-overlay {
      overflow: auto;
    }
  }
`;