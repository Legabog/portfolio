import { cloneElement, FC, useState } from 'react';

import { useSoundEffectsStore } from '@widgets/header';
import { Wrapper } from './second-section-card.styled';
import { Props } from './types';

export const SecondSectionCard: FC<Props> = ({ JSXElement }) => {
  const { JSX, id } = JSXElement;
  const [flip, setFlip] = useState<boolean>(false);
  const { play } = useSoundEffectsStore();

  const clickHandler = () => {
    play('wooshing-1.wav');
    setFlip((prev) => !prev);
  };

  return (
    <Wrapper $flip={ flip } onClick={ clickHandler }>
      {cloneElement(JSX, { $flip: flip, key: id })}
    </Wrapper>
  );
};
