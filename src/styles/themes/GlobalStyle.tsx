import { GlobalStyles } from "@mui/material";

const GlobalStyle = () => {
  return (
    <GlobalStyles
      styles={{
        "*, *::before, *::after": {
          margin: 0,
          padding: 0,
          border: 0,
          boxSizing: "border-box",
        },
        body: {
          background: "#060B28",
          color: "#ffffff",
          fontFamily: "'Montserrat', sans-serif",
          height: "100%",
          minHeight: "100vh",
          width: "100%",
          "&::-webkit-scrollbar": {
            width: "1rem",
          },
          "&::-webkit-scrollbar-track": {
            background: "#060B28",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#2F5AFF",
            borderRadius: "0.5rem",
            border: "0.25rem solid #060B28",
          },
        },
        ul: {
          listStyle: "none",
        },
        a: {
          textDecoration: "none",
        },
        button: {
          fontFamily: "'Montserrat', sans-serif",
          cursor: "pointer",
        },
        img: {
          display: "block",
          maxWidth: "100%",
          height: "auto",
        },
        ".main-container": {
          maxWidth: "78rem",
          padding: "0 1rem",
          margin: "0 auto",
        },
        ".button": {
          background: "linear-gradient(180deg, #151a37 0%, rgba(21, 26, 55, 0) 100%)",
          border: "1px solid #24293f",
          borderRadius: "0.5rem",
          padding: "0.75rem 1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.5rem",
          fontSize: "1rem",
          lineHeight: "150%",
          fontWeight: 700,
          color: "#ffffff",
        },
      }}
    />
  );
};

export default GlobalStyle;
