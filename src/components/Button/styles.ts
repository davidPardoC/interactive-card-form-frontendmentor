import styled from "styled-components";

const Container = styled.button`
  color: white;
  background-color: ${(props) => props.theme.colors.veryDarkViolet};
  width: 100%;
  border-radius: 0.5rem;
  border: none;
  padding: 1rem;
  font-size: 1rem;
`;

const ButtonStyles = { Container };
export default ButtonStyles;
