import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const Text = styled.span<{ $isFirstTitle?: boolean }>`
  width: 100%;
  color: ${({ theme, $isFirstTitle }) => theme[$isFirstTitle ? 'color' : 'description']};
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0;
  white-space: break-spaces;
  user-select: none;
`;
