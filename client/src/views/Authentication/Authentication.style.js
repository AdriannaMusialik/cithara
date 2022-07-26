import styled from "styled-components";

export const StyledHeader2 = styled.h2`
  font-family: "Play", sans-serif;
  color: #2032df;
  font-size: 25px;
`;

export const StyledHeader3 = styled.h3`
  font-family: "Play", sans-serif;
  margin: 25px 0px 10px -120px;
  font-size: 14px;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 100px;
  padding: 30px;
`;

export const StyledBoxBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e7e7e7;
  opacity: 0.9;
  width: 300px;
  margin: 0px 0px 40px 50px;
  padding: 30px;
  border-radius: 20px;
`;

export const StyledInputText = styled.input`
  font-size: 12px;
  height: 30px;
  width: 200px;
  padding-left: 10px;
  border-radius: 8px;
  border: 0;
`;

export const StyledLink = styled.p`
  font-family: "Play", sans-serif;
  margin: px 0px 10px 3px;
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
`;

export const StyledButton = styled.button`
  width: 150px;
  height: 50px;
  font-size: 16px;
  background-color: #1abcf7;
  opacity: 1;
  margin: 20px 0 20px 0;
  border: 0px;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;
