import styled from "styled-components";

const InputsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Input = styled.input`
  margin-top: 0.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  border: 1px solid ${(props) => props.theme.colors.lightGrayishViolet};
  width: 2.5rem;
`;

const Container = styled.div`
  margin-top: 1rem;
  width: 48%;
`;

const ExpireDateStyles = { InputsContainer, Input, Container };

export default ExpireDateStyles;
