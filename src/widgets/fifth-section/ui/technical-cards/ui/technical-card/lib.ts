import { useTranslations } from 'next-intl';

import { Props } from './types';

export const useLogic = (id: Props['id']) => {
  const t = useTranslations(`FifthSection.FifthSectionCards.FifthSectionCard.${id}`);
  const conditionTranslate = (type: 'title' | 'description') => t(type);

  const title = conditionTranslate('title');
  const description = conditionTranslate('description');
  const splicedTitle = title.split(' ').slice(0, 1).join(' ');

  return { title, description, splicedTitle };
};
