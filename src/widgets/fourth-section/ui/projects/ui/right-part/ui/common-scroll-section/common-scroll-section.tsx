import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { useHoverRandomLettersAnimation } from '@shared/hooks';
import { ChevronDownIcon } from '@shared/ui';
import { Wrapper, Text } from './common-scroll-section.styled';
import { useLogic } from './lib';

export const CommonScrollSection: FC = () => {
  const t = useTranslations(
    `FourthSection.FourthSectionProjects.FourthSectionRightPart.CommonScrollSection`,
  );
  const text = t('text');
  const { animate, clear, generatedString } = useHoverRandomLettersAnimation(text);
  const { isVisible } = useLogic();

  return (
    <Wrapper $isVisible={ isVisible } data-testid='common-scroll-section'>
      <Text title={ text } onMouseEnter={ animate } onMouseLeave={ clear }>
        {generatedString}
      </Text>
      <ChevronDownIcon />
    </Wrapper>
  );
};
