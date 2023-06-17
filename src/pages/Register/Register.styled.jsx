import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const formTitleDynamicStyle = () => css`
  margin: 20px 0 0 0;
 
`;

const userTextDynamicStyle = () => css`
  margin-top: 20px;
`;

const loginLinkDynamicStyle = () => css`
  display: block;
  width: 280px;
  padding: 12px;
  transform: scale(1);
  text-align: center;
  border-radius: 8px;
  transition: transform 250ms ease-out, color 250ms ease-out,
    border 250ms ease-out;
  &:hover,
  &:focus-visible {
    transform: scale(1.1);
  }
`;

export const FormTitle = styled.h1`
  ${formTitleDynamicStyle}
`;

export const UserText = styled.p`
  ${userTextDynamicStyle}
`;

export const LoginLink = styled(Link)`
  ${loginLinkDynamicStyle}
`;