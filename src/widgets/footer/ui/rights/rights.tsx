import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { useMediaQuery } from '@shared/hooks';
import { Wrapper, Text, MobileTextWrapper } from './rights.styled';

export const Rights: FC = () => {
  const isBreakpoint = useMediaQuery(600);
  const t = useTranslations('Footer');
  const rights = isBreakpoint ? t('rights') : ` ${t('rights')}`;
  const text = `@ 2025${isBreakpoint ? '' : rights}`;

  return (
    <Wrapper data-testid='footer-rights'>
      <Text title={ text }>{text}</Text>
      {isBreakpoint && (
        <MobileTextWrapper>
          <Text title={ rights }>{rights}</Text>
        </MobileTextWrapper>
      )}
    </Wrapper>
  );
};
