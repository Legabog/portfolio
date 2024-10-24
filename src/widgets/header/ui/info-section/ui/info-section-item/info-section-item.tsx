import { FC, useRef, useState } from 'react';

import { useTranslations } from 'next-intl';
import { Item } from './types';
import { Wrapper, Text, StyledLink } from './info-section-item.styled';
import { RANDOM_LETTERS } from './constants';

export const InfoSectionItem: FC<Item> = ({ url, id }) => {
  const t = useTranslations('Header.info-section');
  const text = t(`section-${id}`);
  const linkText = `</A> ${text}`;
  const ref = useRef<number>();
  const [frame, setFrame] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>(linkText);
  console.log('currentText', currentText);

  const condtitionalString = frame !== 0 ? currentText : linkText;

  const clear = () => {
    setCurrentText(linkText);
    setFrame(0);
    cancelAnimationFrame(ref.current as number);
  };
  const animate = () => {
    setFrame((prev) => ++prev);
    ref.current = requestAnimationFrame(animate);
    const newStr = currentText.split('');
    newStr.forEach((_, index) => {
      newStr[index] = RANDOM_LETTERS[Math.floor(Math.random() * RANDOM_LETTERS.length)];
    });
    setCurrentText(newStr.join(''));

    setTimeout(() => clear(), 300);
  };

  return (
    <StyledLink href={ url } target='_blank' title={ text } onMouseEnter={ animate } onMouseLeave={ clear }>
      <Wrapper>
        <Text>{condtitionalString}</Text>
      </Wrapper>
    </StyledLink>
  );
};
