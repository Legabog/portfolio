'use client';

import { FC } from 'react';

import { ItemWrapper, A, Text } from './item.styled';
import { Props } from './types';
import { useLogic } from './lib';

export const Item: FC<Props> = (props) => {
  const { tooltip, isActive, animate, clear, generatedString, handleChange, id, text } =
    useLogic(props);

  return (
    <ItemWrapper
      key={ id }
      data-testid={ `switcher-item-${id}` }
      onClick={ () => handleChange(text) }
      onMouseEnter={ animate }
      onMouseLeave={ clear }
    >
      <A $isActvie={ isActive } data-testid={ `switcher-item-tooltip-${id}` } title={ tooltip }>
        <Text>{generatedString}</Text>
      </A>
    </ItemWrapper>
  );
};
