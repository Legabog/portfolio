import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { useHoverRandomLettersAnimation } from '@shared/hooks';
import { Wrapper, Text } from './rights.styled';

export const Rights: FC = () => {
  const t = useTranslations('Footer');
  const text = `@ 2024 ${t('rights')}`;
  const { animate, clear, generatedString } = useHoverRandomLettersAnimation(text);

  return (
    <Wrapper data-testid='footer-rights'>
      <Text title={ text } onMouseEnter={ animate } onMouseLeave={ clear }>
        {generatedString}
      </Text>
    </Wrapper>
  );
};
