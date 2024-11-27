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
        <Form />
      </main>
    </ThemeProvider>
  );
}
