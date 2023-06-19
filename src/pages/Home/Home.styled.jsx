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

const welcomeMessageDynamicStyle = ({ theme }) => css`
  margin: 20px 0;
  padding-top: 10px;
  font-size: ${theme.fontStyles.size};
  font-weight: ${theme.fontStyles.weight};
  color: ${theme.colors.mainColor};
  text-transform: uppercase;
  text-align: center;
`;

export const Image = styled.img`
  width: 300px;
`;

export const Container = styled.div`
  ${containerDynamicStyle}
`;

export const WelcomeMessage = styled.p`
  ${welcomeMessageDynamicStyle}
`;