import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { useHoverRandomLettersAnimation } from '@shared/hooks';
import { useThemeStore } from '@widgets/header';
import {
  Wrapper,
  StyledTypeAnimation,
  DescriptionWrapper,
  FirstPart,
  SecondPart,
} from './third-section-title.styled';

export const ThirdSectionTitle: FC = () => {
  const t = useTranslations(`ThirdSection.ThirdSectionTitle`);
  const { themeType } = useThemeStore();

  const text = t('text');
  const firstDescription = t('description-1');
  const secondDescription = t('description-2');
  const { animate, clear, generatedString } = useHoverRandomLettersAnimation(secondDescription);

  return (
    <Wrapper data-testid='third-section-title' title={ text }>
      <StyledTypeAnimation
        key={ themeType }
        repeat={ Infinity }
        sequence={ [text, 1000, '', 1000] }
        speed={ 50 }
      />
      <DescriptionWrapper>
        <FirstPart title={ firstDescription }>{firstDescription}</FirstPart>
        <SecondPart title={ secondDescription } onMouseEnter={ animate } onMouseLeave={ clear }>
          {generatedString}
        </SecondPart>
      </DescriptionWrapper>
    </Wrapper>
  );
};
