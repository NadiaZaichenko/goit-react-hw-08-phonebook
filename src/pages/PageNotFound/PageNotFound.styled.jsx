import styled from '@emotion/styled';
import { css } from '@emotion/react';

const containerDynamicStyle = ({ theme }) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  max-width: 320px;
  margin: 0 auto;
  padding: 0 20px;
  ${theme.breakPoints.tablet} {
    max-width: 768px;
    padding: 0 32px;
  }
  ${theme.breakPoints.desktop} {
    max-width: 1200px;
  }
`;

export const Main = styled.main`
  flex-grow: 1;
`;

export const Image = styled.img`
  margin-top: 20px;
  width: 100%;
`;
export const Container = styled.div`
  ${containerDynamicStyle}
`;

