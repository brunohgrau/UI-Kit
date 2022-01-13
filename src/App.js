import Footer1 from "./components/Footer/Footer1";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/Config/Theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Footer1 />
      </ThemeProvider>
    </>
  );
}
