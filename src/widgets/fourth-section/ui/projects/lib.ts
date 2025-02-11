import { useEffect, useRef, useState } from 'react';

import { useMediaQuery } from '@shared/hooks';

export const useLogic = () => {
  const isBreakpoint = useMediaQuery(900);

  const absoluteRef = useRef<HTMLDivElement | null>(null);
  const vtbRef = useRef<HTMLDivElement | null>(null);
  const linkifyRef = useRef<HTMLDivElement | null>(null);
  const musiconRef = useRef<HTMLDivElement | null>(null);
  const [overlappingType, setOverlappingType] = useState<FourthSection.OverlappingType>('linkify');

  useEffect(() => {
    const checkOverlap = () => {
      if (absoluteRef.current && vtbRef.current && linkifyRef.current && musiconRef.current) {
        const absoluteRect = absoluteRef.current.getBoundingClientRect();
        const targetVtbRef = vtbRef.current.getBoundingClientRect();
        const targetLinkifyRef = linkifyRef.current.getBoundingClientRect();
        const targetMusiconRef = musiconRef.current.getBoundingClientRect();

        const overlappingTypeSetter = (type: typeof overlappingType) => {
          const targetRef = {
            vtb: targetVtbRef,
            linkify: targetLinkifyRef,
            musicon: targetMusiconRef,
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
        ['vtb', 'musicon', 'linkify'].forEach((type) =>
          overlappingTypeSetter(type as typeof overlappingType),
        );
      }
    };

    window.addEventListener('scroll', checkOverlap);

    return () => {
      window.removeEventListener('scroll', checkOverlap);
    };
  }, []);

  return { overlappingType, absoluteRef, vtbRef, linkifyRef, musiconRef, isBreakpoint };
};
