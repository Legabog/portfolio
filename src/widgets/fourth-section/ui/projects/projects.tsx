import { FC, useEffect, useRef, useState } from 'react';

import { Wrapper, RightPart, VTB, LINKIFY, AMUSIC } from './projects.styled';
import { LeftPart } from './ui';

export const Projects: FC = () => {
  const absoluteRef = useRef<HTMLDivElement | null>(null);
  const vtbRef = useRef<HTMLDivElement | null>(null);
  const linkifyRef = useRef<HTMLDivElement | null>(null);
  const amusicRef = useRef<HTMLDivElement | null>(null);
  const [overlappingType, setOverlappingType] = useState<'vtb' | 'amusic' | 'linkify'>('linkify');

  const checkOverlap = () => {
    if (absoluteRef.current && vtbRef.current && linkifyRef.current && amusicRef.current) {
      const absoluteRect = absoluteRef.current.getBoundingClientRect();
      const targetVtbRef = vtbRef.current.getBoundingClientRect();
      const targetLinkifyRef = linkifyRef.current.getBoundingClientRect();
      const targetAmusicRef = amusicRef.current.getBoundingClientRect();

      const overlappingTypeSetter = (type: typeof overlappingType) => {
        const targetRef = {
          vtb: targetVtbRef,
          linkify: targetLinkifyRef,
          amusic: targetAmusicRef,
        }[type];

        return (
          !(
            absoluteRect.right < targetRef.left ||
            absoluteRect.left > targetRef.right ||
            absoluteRect.bottom < targetRef.top ||
            absoluteRect.top > targetRef.bottom
          ) && setOverlappingType(type)
        );
      };
      ['vtb', 'amusic', 'linkify'].forEach((type) =>
        overlappingTypeSetter(type as typeof overlappingType),
      );
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkOverlap);

    return () => {
      window.removeEventListener('scroll', checkOverlap);
    };
  }, []);

  return (
    <Wrapper data-testid='projects'>
      <LeftPart absoluteRef={ absoluteRef } overlappingType={ overlappingType } />
      <RightPart>
        <LINKIFY ref={ linkifyRef } />
        <AMUSIC ref={ amusicRef } />
        <VTB ref={ vtbRef } />
      </RightPart>
    </Wrapper>
  );
};
