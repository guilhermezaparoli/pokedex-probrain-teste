import { Input, Pagination, Select } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledContainerBody = styled("main")(() => ({
  paddingBottom: "8rem",
  ".loader": {
    width: "48px",
    height: "48px",
    border: "5px solid #fff",
    borderBottomColor: "transparent",
    borderRadius: "50%",
    display: "inline-block",
    boxSizing: "border-box",
    animation: "rotation 1s linear infinite",
  },
  "@keyframes rotation": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
}));

export const StyledLoader = styled("span")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const SearchContainer = styled("div")({
  maxWidth: "76rem",
  margin: "4rem auto 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const TypeSearch = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  "> p": {
    fontSize: "1.5rem",
    fontWeight: 700,
    lineHeight: 1.35,
  },
  "@media (max-width: 768px)": {
    maxWidth: "100%",
    padding: "1rem 2rem",
  },
});

export const Types = styled("div")({
  maxWidth: "60rem",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "18px",
  alignItems: "center",
  "@media (max-width: 768px)": {
    flexWrap: "nowrap",
    overflow: "auto",
    justifyContent: "initial",
    padding: "15px 0",
  },
});

export const InputSearchContainer = styled("div")(() => ({
  maxWidth: "350px",
  width: "100%",
  position: "relative",
  form: {
    display: "flex",
  },
  "&:focus-within button": {
    backgroundColor: '#2F5AFF',
  },
  "@media (max-width: 768px)": {
    maxWidth: "300px",
    width: "100%",
  },
}));

export const InputSearch = styled(Input)(({ theme }) => ({
  width: "100%",
  height: "56px",
  padding: "1rem",
  borderRadius: "8px",
  border: `2px solid #4e6aff`,
  backgroundColor: "transparent",
  color: theme.palette.primary.main,
  fontSize: "1rem",
  outline: "none",
  "&::placeholder": {
    fontSize: "1rem",
    lineHeight: "1.5rem",
    color: "rgba(255, 255, 255, 0.25)",
  },
  transition: "border 0.3s",
  "&:focus": {
    border: `2px solid #2F5AFF`,
  },
}));
export const SelectFilter = styled(Select)(({ theme }) => ({
  width: "300px",
  height: "56px",
  padding: "1rem",
  borderRadius: "8px",
  border: `2px solid #4e6aff`,
  outline: "none",
  color: theme.palette.primary.main,
  fontSize: "1rem",
  "&::placeholder": {
    fontSize: "1rem",
    lineHeight: "1.5rem",
    color: "rgba(255, 255, 255, 0.25)",
  },
  transition: "border 0.3s",
  "&:focus": {
    border: `2px solid #2F5AFF`,
  },
}));



export const ButtonSearch = styled("button")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  right: 0,
  width: "56px",
  height: "56px",
  borderRadius: "0 8px 8px 0",
  backgroundColor: "#4e6aff",
  transition: "background-color 0.3s",
}));

export const ContainerDivider = styled("div")({
  maxWidth: "76rem",
  margin: "4.5rem auto 12rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  svg: {
    height: "56px",
    width: "56px",
    margin: "0 1.5rem",
  },
});

const BaseDivider = styled("div")({
  height: "1px",
  width: "100%",
});

export const DividerRight = styled(BaseDivider)({
  background: "linear-gradient(200deg, rgba(255, 255, 255, 0) 0%, #fff 100%)",
});

export const DividerLeft = styled(BaseDivider)({
  background: "linear-gradient(200deg, #fff 0%, rgba(255, 255, 255, 0) 100%)",
});

export const StyledPokeballIcon = styled("img")({
  width: "36px",
  height: "36px",
  margin: "0 1.5rem",
});

export const MainContainerCards = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const ContainerCards = styled("div")({
  maxWidth: "76rem",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(22rem, 1fr))",
  gap: "13.5rem 3rem",
  justifyItems: "center",
  margin: "0 auto 8rem",
});

export const LoadMore = styled("button")(({ theme }) => ({
  width: "200px",
  padding: "12px",
  borderRadius: "8px",
  border: `1px solid #24293F`,
  color:theme.palette.primary.main,
  fontFamily: '"Montserrat", sans-serif',
  fontWeight: 700,
  lineHeight: 1.5,
  background: "linear-gradient(180deg, #151A37 0%, rgba(21, 26, 55, 0.00) 100%)",
  transition: "0.3s",
  "&:hover": {
    filter: "brightness(0.7)",
  },
}));

export const PokemonNotFound = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "30px",
});

export const ContainerGif = styled("div")({
  "> img": {
    borderRadius: "999px",
    width: "100px",
    height: "100px",
  },
});

export const TextPokemonNotFound = styled("p")(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: '"Montserrat", sans-serif',
  fontWeight: 700,
  lineHeight: 1.5,
}));




export const StyledPagination = styled(Pagination)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& .MuiPaginationItem-root": {
    color: "#ffffff", 
    border: "1px solid #ffffff", 
    fontSize: "1rem", 
    width: "40px",
    height: "40px",
    "@media (max-width: 600px)": {
      fontSize: "0.75rem",
      width: "28px", 
      height: "28px", 
    },
  },
  "& .MuiPaginationItem-root.Mui-selected": {
    backgroundColor: "#ffffff",
    color: "#000", 
  },
  "& .MuiPaginationItem-root:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "#ffffff", 
  },
}));


export const ContainerOrderBy = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "1rem",


  "> p": {
    marginBottom: "0.5rem"
  }
})