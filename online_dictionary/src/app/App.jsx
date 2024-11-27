import CssBaseline from "@mui/material/CssBaseline";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import Form from "../componets/Form/Form";
import "./App.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <main className="main">
        <h1
          style={{
            color: "white",
            fontFamily: "inter",
            fontWeight: "bold",
            fontSize: "3rem",
            textAlign: "center",
          }}
        >
          Online Dictionary
        </h1>
        <Form />
      </main>
    </ThemeProvider>
  );
}
