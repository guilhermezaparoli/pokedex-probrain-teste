import { keyframes, styled } from "@mui/material";
import { PokemonTypes } from "../../@types/PokemonTypes";


export const StyledGlobalContainer = styled("div")<PokemonTypes>(({ theme, color }) => ({
  // backgroundColor: theme.palette[color]?.main,
  // filter: "blur(128px)",
    minHeight: "100vh",

}));
  
  export const ContainerHeader = styled("div")({
    padding: "1rem 0",
    background: "linear-gradient(180deg, #EE8328 0%, #E14318 100%)",
    "@media (max-width: 768px)": {
      paddingTop: "0.5rem",
    },

  });
  
  export const Content = styled("div")({
    padding: "0 6rem"
  });


export const ContainerImage = styled("div")({
  display: "flex", 
  alignItems: "center",
  justifyContent :"center"
})

export const PokemonImage = styled("img")(({ theme }) => ({
  maxWidth: "30rem",
  maxHeight: "30rem",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.2)",
  },
padding: "3rem 0",


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

export const ContainerFeatures = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  "> p": {
    fontSize: "1.5rem"
  }
})
export const Features = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "8px",


  "> p": {
    fontSize: "1.25rem"
  }
});


export const FeaturesAttacks = styled("div")({
  display: "flex",
  flexDirection: "column",


  "> p": {
    fontSize: "1.25rem"
  }
});

