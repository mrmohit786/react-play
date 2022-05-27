import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: ${(props) => props.bgColor || "palevioletred"};
`;

const StyledHeader = ({ title, bgColor }) => {
  return (
    <Wrapper bgColor={bgColor}>
      <Title title="React Playground">{title}</Title>
    </Wrapper>
  );
};

export default StyledHeader;
