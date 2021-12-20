import Header from "./components/Header/Header";
import Home from "./containers/Home/Home";
import { UserContextProvider } from "./context/authContext";
import ThemeProvider from "./context/themeProvider";
import { AppContainer } from "./helpers/CommonStyles";


function App() {
  return (
    <UserContextProvider>
      <ThemeProvider>
        <AppContainer>
          <Header />
          <Home />
        </AppContainer>
      </ThemeProvider>
    </UserContextProvider>
  );
}

export default App;
