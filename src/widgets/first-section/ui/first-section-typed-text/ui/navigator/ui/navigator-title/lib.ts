import { useTranslations } from 'next-intl';

import { Title } from './types';

export const useLogic = ({ id }: Title) => {
  const t = useTranslations('FirstSection.FirstSectionTypedText.Navigator');
  const isFirstTitle = id === '1';
  const text = t(`title-${id}`);

  return { text, isFirstTitle, id };
};
