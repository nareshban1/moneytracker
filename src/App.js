import Header from "./components/Header/Header";
import Home from "./containers/Home/Home";
import { UserContextProvider } from "./context/authContext";
import ThemeProvider from "./context/themeProvider";
import { TransactionContextProvider } from "./context/transactionContext";
import { AppContainer } from "./helpers/CommonStyles";


function App() {
  return (
    <UserContextProvider>
      <TransactionContextProvider>
        <ThemeProvider>
          <AppContainer>
            <Header />
            <Home />
          </AppContainer>
        </ThemeProvider>
      </TransactionContextProvider>
    </UserContextProvider>
  );
}

export default App;
