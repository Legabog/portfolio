import { useEffect, useRef, useState } from 'react';

export const useLogic = () => {
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

  return { overlappingType, absoluteRef, vtbRef, linkifyRef, amusicRef };
};
