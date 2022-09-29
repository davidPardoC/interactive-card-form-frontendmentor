import React, { useContext } from "react";
import { CreditCardContext } from "../../context/CeditCardContext";
import CardFrontStyles from "../CardFront/styles";

const CardBack = () => {
  const { cvc } = useContext(CreditCardContext);
  return (
    <CardFrontStyles.Container front={false}>
      <span>{cvc}</span>
    </CardFrontStyles.Container>
  );
};

export default CardBack;
