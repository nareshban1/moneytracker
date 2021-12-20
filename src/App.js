import Balance from "./components/Balance/Balance";
import Header from "./components/Header/Header";
import History from "./components/History/History";
import IncomeExpense from "./components/IncomeExpense/IncomeExpense";
import TransactionForm from "./components/TransactionForm/TransactionForm";
import ThemeProvider from "./context/themeProvider";
import { AppContainer } from "./helpers/CommonStyles";


function App() {
  return (
    <ThemeProvider>
      <AppContainer>
        <Header />
        <Balance />
        <IncomeExpense />
        <History />
        <TransactionForm />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
