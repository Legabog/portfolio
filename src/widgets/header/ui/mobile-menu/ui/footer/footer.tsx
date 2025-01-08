import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { useHoverRandomLettersAnimation } from '@shared/hooks';
import { Wrapper, Text } from './footer.styled';

export const Footer: FC = () => {
  const t = useTranslations('Header.MobileMenu.Footer');
  const text = `@ 2025 ${t('text')}`;
  const { animate, clear, generatedString } = useHoverRandomLettersAnimation(text);

  return (
    <Wrapper data-testid='footer'>
      <Text title={ text } onMouseEnter={ animate } onMouseLeave={ clear }>
        {generatedString}
      </Text>
    </Wrapper>
  );
};
