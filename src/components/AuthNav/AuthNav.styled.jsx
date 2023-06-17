import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const signInLinkDynamicStyle = () => css`
  display: block;
  padding: 12px;
  transform: scale(1.1);
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: #01465d;
  border: 2px solid #01465d;
  border-radius: 8px;
  transition: transform 250ms ease-out, color 250ms ease-out,
    border 250ms ease-out;
  &:hover,
  &:focus-visible {
    color: #ac48cd;
    border: 2px solid #ac48cd;
  }
`
export const RegisterLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`;

const registerLinkMessageDynamicStyle = () => css`
  margin: 0;
  font-size: 18px;
  color: #01465d;
`
const registerLinkDynamicStyle = () => css`
  font-size: 18px;
  font-weight: 700;
  color: #01465d;
  transition: color 250ms ease-out;
  &:hover,
  &:focus-visible {
    color: #ac48cd;
  }
`

export const SignInLink = styled(Link)`
  ${signInLinkDynamicStyle}
`

export const RegisterLinkMessage = styled.p`
  ${registerLinkMessageDynamicStyle}
`

export const RegisterLink = styled(Link)`
  ${registerLinkDynamicStyle}
`