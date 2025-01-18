import { createTheme, PaletteColor, PaletteColorOptions } from "@mui/material";

// Estendendo as interfaces do Material-UI para incluir todas as cores personalizadas.
declare module "@mui/material/styles" {
  interface Palette {
    Fire: PaletteColor;
    Darkness: PaletteColor;
    Dragon: PaletteColor;
    Lightning: PaletteColor;
    Grass: PaletteColor;
    Water: PaletteColor;
    Fairy: PaletteColor;
    Fighting: PaletteColor;
    Colorless: PaletteColor;
    Psychic: PaletteColor;
    Metal: PaletteColor;
  }

  interface PaletteOptions {
    Fire?: PaletteColorOptions;
    Darkness?: PaletteColorOptions;
    Dragon?: PaletteColorOptions;
    Lightning?: PaletteColorOptions;
    Grass?: PaletteColorOptions;
    Water?: PaletteColorOptions;
    Fairy?: PaletteColorOptions;
    Fighting?: PaletteColorOptions;
    Colorless?: PaletteColorOptions;
    Psychic?: PaletteColorOptions;
    Metal?: PaletteColorOptions;
  }
}

// Criando o tema MUI com as cores do antigo `defaultTheme`
export const theme = createTheme({
  palette: {
    primary: {
      main: "#fff"
    },
    Fire: {
      main: "#FF9900",
    },
    Darkness: {
      main: "#5A566A",
    },
    Dragon: {
      main: "#0076FF",
    },
    Lightning: {
      main: "#FFDE00",
    },
    Grass: {
      main: "#1CD80E",
    },
    Water: {
      main: "#14A8FF",
    },
    Fairy: {
      main: "#FF76FF",
    },
    Fighting: {
      main: "#FF215B",
    },
    Colorless: {
      main: "#9FA39D",
    },
    Psychic: {
      main: "#FF6C64",
    },
    Metal: {
      main: "#23A1BD",
    },
  },
});
