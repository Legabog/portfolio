import { useTranslations } from 'next-intl';

import { useHoverRandomLettersAnimation } from '@shared/hooks';
import { Title } from './types';

export const useLogic = ({ id }: Title) => {
  const t = useTranslations('FirstSection.FirstSectionTypedText.Navigator');
  const isFirstTitle = id === '1';
  const text = `${isFirstTitle ? '///' : ''}  ${t(`title-${id}`)}`;

  const { animate: animateHandler, clear, generatedString } = useHoverRandomLettersAnimation(text);

  const animate = isFirstTitle ? animateHandler : undefined;

  return { animate, clear, text, isFirstTitle, generatedString, id };
};
