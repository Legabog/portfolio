'use client';

import { FC, useState } from 'react';
import { useResizeObserver } from '@shared/hooks';
import { Wrapper, Container, Row, Cell } from './background.styled';

export const Background: FC = () => {
  const calcHeight = (typeof window !== 'undefined' && window.innerHeight / 10) as number;
  const generatedArray = Array.from({
    length: Math.ceil((typeof window !== 'undefined' && window.innerWidth / calcHeight) as number),
  });
  const [cell, setCell] = useState<number>(calcHeight);
  const [cellArray, setCellArray] = useState<unknown[]>(generatedArray);
  const rowArray = Array.from({ length: 10 });

  const resizeHandler = () => {
    setCell(calcHeight);
    setCellArray(generatedArray);
  };
  const resizeRef = useResizeObserver(resizeHandler);

  return (
    <Wrapper ref={ resizeRef } data-testid='background'>
      <Container>
        {rowArray.map((_, rowIndex) => (
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
