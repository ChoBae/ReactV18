import styled from "styled-components";
import { useEffect, useState, useTransition } from "react";
const dummy = ["이게", "바로", "지옥이다"];
const UseTransition = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = useState<string[]>([...Array(5000)]);
  const [isPending, startTransition] = useTransition();
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    if (isChecked) {
      // useTransition 적용
      startTransition(() => {
        const newArray = searchResult.map(
          (_, index) => dummy[index % dummy.length] + Math.random()
        );
        setSearchResult(newArray);
      });
    } else {
      // useTransition 미적용
      const newArray = searchResult.map(
        (_, index) => dummy[index % dummy.length] + Math.random()
      );
      setSearchResult(newArray);
    }
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  return (
    <FunctionContainer>
      <h1>useTransition 테스트장</h1>
      <CheckboxContainer>
        <input onChange={handleCheckbox} type="checkbox" id="exampleCheckbox" />
        <CheckboxLabel htmlFor="exampleCheckbox">
          useTransition 적용하기
        </CheckboxLabel>
      </CheckboxContainer>
      <SearchInput onChange={handleInput} type="text" placeholder="Search..." />
      <ResultList>
        {isPending && <div>Loading...</div>}
        {searchResult.map((item) => (
          <ResultItem>{item}</ResultItem>
        ))}
      </ResultList>
    </FunctionContainer>
  );
};
export default UseTransition;

// styles
const FunctionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //   justify-content: center;
  height: 100vh;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const CheckboxLabel = styled.label`
  font-size: 18px;
  font-weight: bold;
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;

  &:focus {
    outline: none;
    border-color: #777;
  }
`;

const ResultList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ResultItem = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
`;
