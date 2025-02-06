import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
`;
export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;
export const Row = styled.div<{ $cell: number }>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: ${(p) => p.$cell}px;
`;
export const Cell = styled.div<{ $cell: number }>`
  width: ${(p) => p.$cell}px;
  height: ${(p) => p.$cell}px;
  background-color: transparent;
  border: 1px solid rgb(232 176 89 / 10%);
  transition: background-color 1.5s ease-in-out;
`;
