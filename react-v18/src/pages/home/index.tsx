import React from "react";
import styled from "styled-components";
const Home = () => {
  const [isCheck, setIsCheck] = React.useState(false);
  const [count, setCount] = React.useState(0);

  return (
    <HomeContainer>
      <h1>React v18 톺아보기</h1>
      <p>React v18에서 새로 추가된 기능들을 이전버전과 비교하며 사용해보자!</p>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  width: 60vh;
`;
const MenuList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

const MenuItem = styled.li`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #777;
  }
`;
