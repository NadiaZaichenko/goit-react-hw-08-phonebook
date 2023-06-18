import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 40px;
  padding: 5px;
  font-size: 16px;
  background-color: white;
  border-radius: 8px;
  border:2px solid red;
`;

export const StyledButton = styled.button`
  width: 70px;
  height: 40px;
  transform: scale(1);
  background-color: #defff5;
  border-radius: 8px;
  border: 2px solid red;
  font-size: 16px;
  transition: transform 250ms ease-out, background-color 250ms ease-out;
  &:hover,
  &:focus-visible {
    transform: scale(1.1);
  }
`;