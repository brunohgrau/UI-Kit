import { ThemeProvider } from "styled-components";
import { theme } from "./components/Config/Theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}></ThemeProvider>
    </>
  );
}
