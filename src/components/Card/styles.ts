import styled from "styled-components";
import { myTheme } from "../../my-theme";

const CardContiner = styled.div``;

const Card = styled.div<{ isFront?: boolean }>`
  position: absolute;
  z-index: ${(props) => (props.isFront ? "1" : 0)};
  left: ${(props) => props.isFront && 0};
  right: ${(props) => !props.isFront && 0};
  top: ${(props) => props.isFront && "5rem"};
  padding: 3rem 3rem;
  @media (max-width: ${myTheme.breakPoints.mobileSm}) {
    padding: 1rem 3rem;
  }
`;

const CardStyles = { CardContiner, Card };

export default CardStyles;
