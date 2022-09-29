export const formatCreditCardNumber = (cardNumber: string) => {
  if (cardNumber.length === 4) {
    cardNumber = cardNumber + " ";
  }
  if (cardNumber.length === 9) {
    cardNumber = cardNumber + " ";
  }
  if (cardNumber.length === 14) {
    cardNumber = cardNumber + " ";
  }
  return cardNumber;
};
