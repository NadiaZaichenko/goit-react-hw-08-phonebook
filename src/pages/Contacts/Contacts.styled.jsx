import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const SectionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  flex-grow: 1;
`;

const sectionDynamicStyle = () => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  max-width: 500px;
  min-height: 570px;
  padding: 20px;
  background-color: #baf8e4;
  border-radius: 8px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 40px;
  text-align: center;
  font-size: 32px;
  text-transform: uppercase;
`;

const sectionTitleDynamicStyle = () => css`
  margin: 0;
  text-align: center;
  font-size: 28px;
  color: #01465d;
`;

export const Section = styled.section`
  ${sectionDynamicStyle}
`;

export const SectionTitle = styled.h2`
  ${sectionTitleDynamicStyle}
`;