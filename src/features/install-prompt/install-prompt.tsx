import { FC } from 'react';

import { useLogic } from './lib';
import { Wrapper, Button, Title, P, Span } from './install-prompt.styled';

export const InstallPrompt: FC = () => {
  const { isIOS, isStandalone } = useLogic();

  if (isStandalone) return null;

  return (
    <Wrapper>
      <Title>Install App</Title>
      <Button>Add to Home Screen</Button>
      {isIOS && (
        <P>
          To install this app on your iOS device, tap the share button
          <Span aria-label='share icon' role='img'>
            {' '}
            ⎋{' '}
          </Span>
          and then "Add to Home Screen"
          <Span aria-label='plus icon' role='img'>
            {' '}
            ➕{' '}
          </Span>
          .
        </P>
      )}
    </Wrapper>
  );
};
