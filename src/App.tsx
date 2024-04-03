import GlobalStyles from "./assets/styles/global-styles";
import { ThemeProvider } from "styled-components";
import light from "./assets/styles/theme";
import Router from "./routes";
import { UserContextProvider } from "./context/user";

function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <UserContextProvider>
          <Router />
        </UserContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
