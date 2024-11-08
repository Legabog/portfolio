'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { useHoverRandomLettersAnimation } from '@shared/hooks';
import { ChevronDownIcon } from '@shared/ui';
import { Wrapper, WrapperScroll, WrapperText, Text } from './scroll-down.styled';
import { Props } from './types';

export const ScrollDown: FC<Props> = ({
  sectionText = 'Section',
  sectionNumber = '00',
  totalSections = '03',
  customStyles,
}) => {
  const t = useTranslations('ScrollDown');
  const text = t('text');
  const { animate, clear, generatedString } = useHoverRandomLettersAnimation(text);
  const {
    animate: animateText,
    clear: clearText,
    generatedString: generatedStringText,
  } = useHoverRandomLettersAnimation(sectionText);

  return (
    <Wrapper $customStyles={ customStyles } data-testid='scroll-down'>
      <WrapperScroll>
        <Text title={ text } onMouseEnter={ animate } onMouseLeave={ clear }>
          {generatedString}
        </Text>
        <ChevronDownIcon />
      </WrapperScroll>
      <WrapperText>
        <Text>
          [ {sectionNumber} / {totalSections} ]
        </Text>
        <Text title={ sectionText } onMouseEnter={ animateText } onMouseLeave={ clearText }>
          {generatedStringText}
        </Text>
      </WrapperText>
    </Wrapper>
  );
};
