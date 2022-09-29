import styled from "styled-components";

const Container = styled.div<{ front?: boolean }>`
  background: ${(props) =>
    props.front
      ? "url(src/assets/bg-card-front.png)"
      : "url(src/assets/bg-card-back.png)"};
  background-position: center;
  justify-content: ${(props) => (props.front ? "space-between" : "center")};
  ${(props) => !props.front && "align-items: flex-end;"}
  flex-direction: column;
  padding: 1rem;
  display: flex;
  width: 12.83rem;
  height: 6.6rem;
  border-radius: 0.5rem;
  color: white;
`;

const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

const CardNumber = styled.div`
  padding-right: 1rem;
  padding-bottom: 1rem;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
`;

Container.defaultProps = {
  front: true,
};

const CardFrontStyles = { Container, CardBottom, CardNumber };

export default CardFrontStyles;
