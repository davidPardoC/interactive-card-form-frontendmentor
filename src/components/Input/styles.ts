import styled from "styled-components";

const Label = styled.label`
  color: ${(props) => props.theme.colors.veryDarkViolet};
`;

const Input = styled.input`
  margin-top: 0.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  border: 1px solid ${(props) => props.theme.colors.lightGrayishViolet};
`;

const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;

const InputStyles = { Container, Label, Input };

export default InputStyles;
