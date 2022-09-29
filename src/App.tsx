import "./App.css";
import { ThemeProvider } from "styled-components";
import { myTheme } from "./my-theme";
import Form from "./components/Form/Form";
import Card from "./components/Card/Card";
import BackgroundStyles from "./components/BackGround/styles";
import { CreditCardProvider } from "./context/CeditCardContext";
import { initialState } from "./reducers/creditCardReducer";

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <CreditCardProvider>
        <BackgroundStyles.Container>
          <BackgroundStyles.CardContainer>
            <Card />
          </BackgroundStyles.CardContainer>
          <Form />
        </BackgroundStyles.Container>
      </CreditCardProvider>
    </ThemeProvider>
  );
}

export default App;
