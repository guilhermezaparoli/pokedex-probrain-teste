import { styled } from "@mui/material";
import { PokemonTypes } from "../../@types/PokemonTypes";


interface StyledContainerProps {
  isSelected: boolean;
  statusColor: keyof PokemonTypes
}
export const StyledContainer = styled("button")<StyledContainerProps>(({ theme, isSelected, statusColor }) => ({
  backgroundColor: isSelected
    ? theme.palette[statusColor]?.main || "#060F39"
    : "#060F39",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "4px 8px",
  borderRadius: "8px",
  border: "1px solid transparent",
  transition: "0.3s",
  color:theme.palette.primary.main ,

  "& p": {
    color: theme.palette.primary.main,
    fontSize: "1rem",
    lineHeight: "1.5",
    textTransform: "capitalize",
  },

  "& svg path": {
    transition: "0.3s",
    fill: isSelected
      ? theme.palette.primary.main
      : theme.palette[statusColor]?.main || theme.palette.primary.main,
  },

  "&:hover": {
    border: `1px solid ${
      theme.palette[statusColor]?.main || theme.palette.primary.main
    }`,
  },
}));
