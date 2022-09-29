import React, { useContext } from "react";
import { CreditCardContext } from "../../context/CeditCardContext";
import CardBack from "../CardBack/CardBack";
import CardFront from "../CardFront/CardFront";
import CardStyles from "./styles";

const Card = () => {
  return (
    <CardStyles.CardContiner>
      <CardStyles.Card isFront>
        <CardFront />
      </CardStyles.Card>
      <CardStyles.Card>
        <CardBack />
      </CardStyles.Card>
    </CardStyles.CardContiner>
  );
};

export default Card;
