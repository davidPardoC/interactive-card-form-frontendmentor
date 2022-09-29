import { formatCreditCardNumber } from "../utils/formatter";
import { ActionInterface, CreditCardActions, CreditCardState } from "./types";

export const initialState: CreditCardState = {
  cardNumber: "",
  lastName: "PARDO",
  firstName: "DAVID",
  cvc: "000",
  month: "00",
  year: "00",
};

export const creditCardReducer = (
  state: CreditCardState,
  { type, payload }: ActionInterface
) => {
  switch (type) {
    case CreditCardActions.CHANGE_NUMBER:
      const newState = {
        ...state,
        cardNumber: payload,
      };
      return newState;
    default:
      return state;
  }
};
