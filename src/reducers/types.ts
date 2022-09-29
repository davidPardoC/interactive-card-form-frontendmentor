export interface CreditCardState {
  cardNumber: string;
  lastName: string;
  firstName: string;
  cvc: string;
  month: string;
  year: string;
}

export enum CreditCardActions {
  CHANGE_NUMBER = "change_number",
}

export interface ActionInterface {
  type: CreditCardActions;
  payload: string;
}
