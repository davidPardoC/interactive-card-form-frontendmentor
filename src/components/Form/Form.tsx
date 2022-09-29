import { FormEvent, useContext } from "react";
import { CreditCardContext, useDispatch } from "../../context/CeditCardContext";
import { CreditCardActions } from "../../reducers/types";
import { formatCreditCardNumber } from "../../utils/formatter";
import Button from "../Button/Button";
import ExpirationDate from "../ExpirationDate/ExpirationDate";
import Input from "../Input/Input";
import FormStyles from "./styles";

const Form = () => {
  const { cardNumber } = useContext(CreditCardContext);
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: CreditCardActions.CHANGE_NUMBER, payload: "hola" });
  };

  const handleNumberChange = (e: string) => {
    let number = e;
    const patter = /[aA-zZ]/g;
    if (patter.test(number)) {
      return;
    }
    if (cardNumber.length <= number.length) {
      if (number.length === 4) number = number + " ";
      if (number.length === 9) number = number + " ";
      if (number.length === 14) number = number + " ";
    }
    dispatch({
      type: CreditCardActions.CHANGE_NUMBER,
      payload: number,
    });
  };

  return (
    <FormStyles.Form onSubmit={handleSubmit}>
      <Input
        label="CARDHOLDER NAME"
        placeholder="e.g. Jane Appleseed"
        type="text"
      />
      <Input
        label="CARD NUMBER"
        placeholder="e.g. 1234 5678 9123 0000"
        type="text"
        value={cardNumber}
        maxLength={19}
        onChange={handleNumberChange}
      />
      <FormStyles.ExpCvcContainer>
        <ExpirationDate />
        <FormStyles.CvcContainer>
          <Input label="cvc" placeholder="e.g. 123" type="text" />
        </FormStyles.CvcContainer>
      </FormStyles.ExpCvcContainer>
      <FormStyles.ButtonContainer>
        <Button />
      </FormStyles.ButtonContainer>
    </FormStyles.Form>
  );
};

export default Form;
