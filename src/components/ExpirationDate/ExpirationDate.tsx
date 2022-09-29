import React from "react";
import InputStyles from "../Input/styles";
import ExpireDateStyles from "./styles";

const ExpirationDate = () => {
  return (
    <ExpireDateStyles.Container>
      <InputStyles.Label>EXP. DATE (MM/YY)</InputStyles.Label>
      <ExpireDateStyles.InputsContainer>
        <ExpireDateStyles.Input type="text" placeholder="MM" />
        <ExpireDateStyles.Input type="text" placeholder="YY" />
      </ExpireDateStyles.InputsContainer>
    </ExpireDateStyles.Container>
  );
};

export default ExpirationDate;
