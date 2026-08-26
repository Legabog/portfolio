import { useEffect, useRef, useState } from 'react';

import { useMediaQuery } from '@shared/hooks';

export const useLogic = () => {
  const isBreakpoint = useMediaQuery(900);

  const absoluteRef = useRef<HTMLDivElement | null>(null);
  const poolingRef = useRef<HTMLDivElement | null>(null);
  const linkifyRef = useRef<HTMLDivElement | null>(null);
  const musiconRef = useRef<HTMLDivElement | null>(null);
  const kodRef = useRef<HTMLDivElement | null>(null);
  const [overlappingType, setOverlappingType] = useState<FourthSection.OverlappingType>('linkify');

  useEffect(() => {
    const checkOverlap = () => {
      if (absoluteRef.current && poolingRef.current && linkifyRef.current && musiconRef.current && kodRef.current ) {
        const absoluteRect = absoluteRef.current.getBoundingClientRect();
        const targetPoolingRef = poolingRef.current.getBoundingClientRect();
        const targetLinkifyRef = linkifyRef.current.getBoundingClientRect();
        const targetMusiconRef = musiconRef.current.getBoundingClientRect();
        const targetKodRef = kodRef.current.getBoundingClientRect();

        const overlappingTypeSetter = (type: typeof overlappingType) => {
          const targetRef = {
            kod: targetKodRef,
            linkify: targetLinkifyRef,
            musicon: targetMusiconRef,
            pooling: targetPoolingRef
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
        ['kod', 'musicon', 'linkify', 'pooling'].forEach((type) =>
          overlappingTypeSetter(type as typeof overlappingType),
        );
      }
    };

    window.addEventListener('scroll', checkOverlap);

    return () => {
      window.removeEventListener('scroll', checkOverlap);
    };
  }, []);

  return { overlappingType, absoluteRef, poolingRef, linkifyRef, musiconRef, kodRef, isBreakpoint };
};
