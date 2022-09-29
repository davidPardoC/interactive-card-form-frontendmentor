import CardFrontStyles from "./styles";
import CardLogo from "../../assets/card-logo.svg";
import { useContext } from "react";
import { CreditCardContext } from "../../context/CeditCardContext";

const CardFront = () => {
  const { firstName, lastName, cardNumber, month, year } =
    useContext(CreditCardContext);
  return (
    <CardFrontStyles.Container>
      <div>
        <span>
          <img src={CardLogo} />
        </span>
        <span></span>
      </div>
      <div>
        <CardFrontStyles.CardNumber>
          {cardNumber || "0000 0000 0000 0000"}
        </CardFrontStyles.CardNumber>
        <CardFrontStyles.CardBottom>
          <span>
            {firstName} {lastName}
          </span>
          <span>
            {month}/{year}
          </span>
        </CardFrontStyles.CardBottom>
      </div>
    </CardFrontStyles.Container>
  );
};

export default CardFront;
