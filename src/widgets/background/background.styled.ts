import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: -1;
  top: 0;
  left: 0;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  width: 100%;
`;
export const Row = styled.div<{ $cell: number }>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  width: 100%;
  height: ${(p) => p.$cell}px;
`;
export const Cell = styled.div<{ $cell: number }>`
  width: ${(p) => p.$cell}px;
  height: ${(p) => p.$cell}px;
  border: 1px solid rgba(232, 176, 89, 0.1);
  background-color: transparent;
  transition: background-color 1.5s ease-in-out;
`;
