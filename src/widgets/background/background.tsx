'use client';

import { FC } from 'react';
import { Wrapper, Container, Row, Cell } from './background.styled';
import { useLogic } from './lib';
import { ROW_ARRAY } from './constants';

export const Background: FC = () => {
  const { resizeRef, cell, cellArray } = useLogic();
  return (
    <Wrapper ref={ resizeRef } data-testid='background'>
      <Container>
        {ROW_ARRAY.map((_, rowIndex) => (
          <Row key={ rowIndex } $cell={ cell } id={ `row-${rowIndex}` }>
            {cellArray.map((_, cellIndex) => (
              <Cell key={ cellIndex } $cell={ cell } id={ `cell-${cellIndex}` } />
            ))}
          </Row>
        ))}
      </Container>
    </Wrapper>
  );
};
